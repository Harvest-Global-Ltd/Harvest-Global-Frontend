"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-3.5 sm:size-4" />
        ),
        info: (
          <InfoIcon className="size-3.5 sm:size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-3.5 sm:size-4" />
        ),
        error: (
          <OctagonXIcon className="size-3.5 sm:size-4" />
        ),
        loading: (
          <Loader2Icon className="size-3.5 sm:size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          "--width": "var(--toast-width, 356px)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "cn-toast !px-3 !py-2.5 !gap-1.5 !text-xs !min-h-0 sm:!px-4 sm:!py-3.5 sm:!gap-2 sm:!text-sm sm:!min-h-[unset]",
          title: "!text-xs !leading-snug sm:!text-sm",
          description: "!text-[11px] !leading-snug sm:!text-xs",
          actionButton: "!text-xs !px-2 !py-1 sm:!text-sm sm:!px-3 sm:!py-1.5",
          cancelButton: "!text-xs !px-2 !py-1 sm:!text-sm sm:!px-3 sm:!py-1.5",
          icon: "!mr-0",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
