"use client"

import type React from "react"

interface MainContentWrapperProps {
  children: React.ReactNode
}

export default function MainContentWrapper({ children }: MainContentWrapperProps) {
  return <div className="pt-24">{children}</div>
}
