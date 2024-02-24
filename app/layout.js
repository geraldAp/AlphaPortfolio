import Navigation from '../components/Navigation';
import Resume from '../components/Resume';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Essandoh Prince Takyi',
  description: "Essandoh Prince Takyi's portfolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white relative`}>
        <Navigation/>
        {children}
        <Resume/>
      </body>
    </html>
  )
}
