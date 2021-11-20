import React, { ReactNode } from 'react'
import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className='bg-beige'>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Mariage Morgane & Maxime' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={'min-h-screen'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
