import './globals.css'
import './helpers/common.css'
import './summary/summary.css'
import './skill/skill.css'
import './experience/experience.css'
import './project-campusEats/campusEats.css'
import { Inter } from 'next/font/google'
import React from "react";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steven\'s Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
