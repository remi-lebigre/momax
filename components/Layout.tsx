import React, { FC, ReactNode } from 'react'
import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'

export interface LayoutProps {
  title: string
}
const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className='bg-beige p-4 md:p-12'>
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

export default Layout
