import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "dark" | "gradient"
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "glass", children, ...props }, ref) => {
  const variants = {
    glass: "glass",
    dark: "glass-dark",
    gradient: "gradient-bg",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = "Card"

export { Card }
