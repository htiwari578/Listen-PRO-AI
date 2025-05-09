import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWithWrapper = ({
    className,
    children
}: {
    className?: string
    children:ReactNode
}) => {
  return (
    <div
    className={
        cn('h-full mx-auto w-full max-w-screen-xl px-5 md:px-20',className)
    }
    >{children}</div>
  )
}

export default MaxWithWrapper