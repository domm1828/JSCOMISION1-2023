'use client';
import NavBar from '@/components/nav-bar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import { ThemeContextProvider, useThemeContext } from './context/theme';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {color}= useThemeContext();

  return (
    <html lang="en">
      <body className={inter.className}>

        <header className="bg-gray-900 w-full overflow-hidden">
          <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <NavBar />
            </div>
          </div>
        </header>
     <ThemeContextProvider>
      <section className={color}>
        <p>{color}</p>
        {children} 
      </section>
      </ThemeContextProvider>  
        
        <Footer/>
        </body>
    </html>
  )
}