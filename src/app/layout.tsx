import type { Metadata } from 'next'
import './globals.css' 
import { Toaster } from 'react-hot-toast'
import React from 'react'
import Header from '@/components/pw1/Header'
import { ThemeProvider } from "@/components/pw1/context/Contexts"
import { AuthProvider } from '@/components/pw1/context/Contexts'
import { getDataToken } from '@/lib/utils/session_actions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WorkRem',
  description: 'El sitio para encontrar un trabajo a tu medida',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const tokenData=await getDataToken() 
  const data=tokenData ?{id:tokenData.id,name:tokenData.name,role:tokenData.role} :undefined
  console.log("layout",data)
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <body className="text-base-300 bg-blue-50 min-h-svh max-w-svw relative dark:text-white dark:bg-slate-950 scroll-smooth">
      <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
        <AuthProvider value={data}>
        <Header/>
      <Toaster
      position='bottom-right'
      toastOptions={
        {duration:3000,
          success:{id:"success"},
          error:{id:"error"},
          loading:{id:"loading"},
        }
      }
      />
      <div className=" md:grid-cols-[120px_1fr] w-full  h-full" >
            {children}
        </div>

        <footer className='flex w-full h-8 justify-center items-center bg-black/10'><div>All rigths reserved</div></footer>
        </AuthProvider>
        <Link className='btn btn-info btn-circle fixed bottom-8 right-4 ' href="#">A</Link>
    
    </ThemeProvider>
    </body>
    
    </html>
  )
}
