"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"      // ✅ Ensures .dark / .light classes are applied to <html>
      defaultTheme="system"  // ✅ Optional: respects system theme
      enableSystem           // ✅ Optional: allows system theme to take effect
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
