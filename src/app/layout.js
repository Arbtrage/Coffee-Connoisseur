import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coffee Connoisseur',
  description: 'Find your coffee cafes nearby',
  icons:{
    icon:[
      '/icon/favicon.ico?v=4'
    ],
    apple:[
      '/icon/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/icon/apple-touch-icon.png'
    ]
  },
  manifest:'/icon/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
