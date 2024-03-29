'use client'
import { ThemeProvider } from 'next-themes'
import React, { Children } from 'react'

export default function clientNextThemes({children}) {
  return (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  )
}
