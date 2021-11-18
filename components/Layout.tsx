import React, { ReactNode } from 'react'
import Footer from './Footer'
import Head from 'next/head'
import styles from './Layout.module.scss'

const Layout = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Mariage Morgane & Maxime' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
