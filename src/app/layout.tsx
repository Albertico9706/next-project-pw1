import type { Metadata } from 'next'
import './globals.css' 
import { Toaster } from 'react-hot-toast'
import React from 'react'
import Header from '@/components/pw1/Header'
import { ThemeProvider } from "@/components/pw1/context/Contexts"
import { AuthProvider } from '@/components/pw1/context/Contexts'
import { getDataToken } from '@/lib/utils/session_actions'

export const metadata: Metadata = {
  title: 'WorkRem',
  description: '',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const tokenData=await getDataToken() 
  const data=tokenData ?{id:tokenData.id,name:tokenData.name,role:tokenData.role} :undefined
  console.log("layout",data)
  return (
    <html lang="en">
    <body className=" bg-blue-50 min-h-svh max-w-svw relative dark:text-white dark:bg-slate-950">
      <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
        <AuthProvider value={data}>
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

        <footer className='flex w-full h-8 justify-center items-center bg-black/10'><div>All rigths reserved</div></footer>
        </AuthProvider>
    
    </ThemeProvider>
    </body>
    
    </html>
  )
}
