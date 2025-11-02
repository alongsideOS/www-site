import React from "react"

export function Underline({ children, colorClass }: { children: React.ReactNode; colorClass?: string }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        className={`absolute -bottom-1 left-0 w-full h-2 ${colorClass || 'text-primary'}`}
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1 4 C 25 2, 75 6, 99 4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
