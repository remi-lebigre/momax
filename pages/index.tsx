import type { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime'}>
      <h1 className={styles.title}>Mariage de Morgane et Maxime 🎉</h1>
    </Layout>
  )
}

export default Home
