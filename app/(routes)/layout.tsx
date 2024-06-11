import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Product/Footer'
import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode
    
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
    </>
  )
}

export default MainLayout