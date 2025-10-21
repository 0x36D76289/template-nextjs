'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Dialog({ className, children, ...props }: DialogProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type DialogContentProps = React.HTMLAttributes<HTMLDivElement>

export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps) {
  return (
    <div
      className={cn(
        'relative rounded-lg border bg-white p-6 shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className
      )}
      {...props}
    />
  )
}

export type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <h3
      className={cn(
        'text-lg leading-none font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  )
}

export type DialogCloseProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function DialogClose({ className, ...props }: DialogCloseProps) {
  return (
    <button
      className={cn(
        'absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none',
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  )
}
