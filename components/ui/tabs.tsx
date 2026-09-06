"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs inline-flex w-full items-center justify-center rounded-md text-white/70 group-data-horizontal/tabs:h-auto group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-md",
  {
    variants: {
      variant: {
        default: "bg-[#061C19] border border-[#2E7657]/25",
        line: "gap-1 bg-[#061C19] border border-[#2E7657]/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}
function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        `
        relative
        inline-flex
        h-[calc(100%-1px)]
        flex-1
        items-center
        justify-center
        gap-1.5
        rounded-md
        border
        border-transparent
        px-5
        py-3.5
        text-xs
        font-semibold
        whitespace-nowrap
        uppercase
        tracking-[0.16em]
        text-white/70
        transition-all
        duration-300

        hover:bg-[#123C2B]
        hover:text-white

        focus-visible:border-[#2E7657]
        focus-visible:ring-2
        focus-visible:ring-[#2E7657]/30
        focus-visible:outline-none

        disabled:pointer-events-none
        disabled:opacity-50

        group-data-vertical/tabs:w-full
        group-data-vertical/tabs:justify-start

        group-data-[variant=line]/tabs-list:data-active:shadow-none

        data-active:border-[#2E7657]/60
        data-active:bg-[#235738]
        data-active:text-white
        data-active:shadow-none

        [&_svg]:pointer-events-none
        [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4
        `,

        // Bottom active indicator
        `
        after:absolute
        after:bg-[#8CCB9B]
        after:opacity-0
        after:transition-opacity
        after:duration-300

        group-data-horizontal/tabs:after:inset-x-0
        group-data-horizontal/tabs:after:bottom-[-1px]
        group-data-horizontal/tabs:after:h-0.5

        group-data-vertical/tabs:after:inset-y-0
        group-data-vertical/tabs:after:-right-1
        group-data-vertical/tabs:after:w-0.5

        group-data-[variant=line]/tabs-list:data-active:after:opacity-100
        `,

        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
