import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Block Preview | Tailark',
  description: 'Preview of Tailark UI blocks',
}

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="preview-layout">
      {children}
    </div>
  )
}
