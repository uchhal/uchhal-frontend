"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uchhhal',
  description: 'Platform that wings to you to fly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>
          <ToastContainer />
          {children}
          </body>
      </html>
    </RecoilRoot>
  )
}
