# syntax=docker/dockerfile:1

# ------------------------------------------------------------------------------
# 1. Dependencies Stage
# Install dependencies deterministically using Bun and the repository lockfile
# ------------------------------------------------------------------------------
FROM oven/bun:1-alpine AS deps
WORKDIR /app

# Install libc6-compat for compatibility with native packages on Alpine
RUN apk add --no-cache libc6-compat

# Copy dependency definition files
COPY package.json bun.lock ./

# Deterministic install using frozen lockfile
RUN bun install --frozen-lockfile

# ------------------------------------------------------------------------------
# 2. Builder Stage
# Build the Next.js application with standalone output
# ------------------------------------------------------------------------------
FROM oven/bun:1-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

# Copy installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry and set production mode during build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Execute Next.js build
RUN bun run build

# ------------------------------------------------------------------------------
# 3. Production Runner Stage
# Minimal Node.js LTS (22) Alpine container for Google Cloud Run execution
# ------------------------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat

# Cloud Run and Next.js production environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Cloud Run defaults to port 8080
EXPOSE 8080

# Run container as non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Create Next.js cache directory with appropriate ownership
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone build output and static assets from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Run Next.js standalone server directly
CMD ["node", "server.js"]
