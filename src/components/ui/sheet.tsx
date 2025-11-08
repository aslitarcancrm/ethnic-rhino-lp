import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, children, ...props }, ref) => {
  return (
    <button ref={ref} className={className} {...props}>
      {children}
    </button>
  )
})
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { side?: "left" | "right" | "top" | "bottom" }
>(({ className, children, side = "right", ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  React.useEffect(() => {
    const trigger = document.querySelector('[data-sheet-trigger]')
    const handleClick = () => setIsOpen(!isOpen)
    trigger?.addEventListener('click', handleClick)
    return () => trigger?.removeEventListener('click', handleClick)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div
        ref={ref}
        className={cn(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 max-w-sm",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 max-w-sm",
          className
        )}
        {...props}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </>
  )
})
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }

