import { Inter } from 'next/font/google'
import './globals.css'
import Wireframe from '@/components/Wireframe'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Wireframe/>
      <head>
        <title>My Custom Components</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}