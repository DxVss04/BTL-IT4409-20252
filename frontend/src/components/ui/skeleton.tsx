import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
<<<<<<< HEAD
      className={cn("bg-accent animate-pulse rounded-md", className)}
=======
      className={cn("bg-muted animate-pulse rounded-lg", className)}
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      {...props}
    />
  )
}

export { Skeleton }
