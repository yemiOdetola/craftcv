import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create your CV',
  description: '[side project for CV generator]',
}


const ubuntu: any = localFont({
  src: '../assets/fonts/Ubuntu.ttf',
  variable: "--font-ubuntu",
  display: 'swap',
})


const cfspaceship: any = localFont({
  src: '../assets/fonts/CfSpaceship.ttf',
  variable: "--font-cfspaceship",
  display: 'swap',
})


const swansea: any = localFont({
  src: '../assets/fonts/Swansea.ttf',
  variable: "--font-swansea",
  display: 'swap',
})


const clearsans: any = localFont({
  src: '../assets/fonts/ClearSans.ttf',
  variable: "--font-clearsans",
  display: 'swap',
})


const hack: any = localFont({
  src: '../assets/fonts/Hack.ttf',
  variable: "--font-hack",
  display: 'swap',
})


const cabin: any = localFont({
  src: '../assets/fonts/Cabin.ttf',
  variable: "--font-cabin",
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${cabin.variable} ${cfspaceship.variable} ${swansea.variable} ${clearsans.variable} ${hack.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
