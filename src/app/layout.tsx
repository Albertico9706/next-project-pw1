import type { Metadata } from 'next'
import './globals.css' 
import { Toaster } from 'react-hot-toast'
import React from 'react'
import Header from '@/components/pw1/Header'
/* import SideNav from '@/components/pw1/SideNav' */

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
    <body className=" bg-blue-50 min-h-svh max-w-svw relative">
    <Header/>
      <Toaster
      position='bottom-right'
      toastOptions={
        {duration:3000,
          error:{id:"error"}
        }
      }
      />
      <div className=" duration-1000  md:grid-cols-[120px_1fr] w-full  h-full" >
            {/* <SideNav/> */}
            {children}
        </div>
      
    </body>
    
    </html>
  )
}

{/* <Script id="1" strategy='afterInteractive'>{ `if(typeof window !== "undefined"){
    try{
      window.localStorage.getItem("class")==="dark"? document.documentElement.classList.add("dark"): null
    }catch(e){
    console.warn(e.message)
    console.warn(window.localStorage.getItem("class"))
  }`}</Script > */}