This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Cloud Run cold starts

The service is deployed on Google Cloud Run from the `Dockerfile`. The site can
feel slow after the service has been idle (a cold start) because Cloud Run
provisions a fresh instance on demand. The recommended Cloud Run settings,
which live in the Cloud Run console/`gcloud` (not in this repo), are:

```bash
gcloud run services update harvest-global \
  --min-instances 1 \
  --max-instances 10 \
  --cpu 2 \
  --memory 1Gi \
  --concurrency 80
```

- `--min-instances 1` keeps one container warm at all times, eliminating the
  idle cold start entirely. Tradeoff: a small always-on cost for that instance
  (one instance ~2 vCPU/1 GiB continuously instead of billed-per-request only).
- `--max-instances` and `--concurrency` are optional guardrails; keep them
  aligned with expected traffic so the warm instance absorbs burst loads.
- CPU is always allocated (default) so the warm instance is ready immediately.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
