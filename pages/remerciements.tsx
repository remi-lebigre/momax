import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Title from '../components/Title'

const RemerciementsPage: NextPage = () => {
  return (
    <Layout title={'Remerciements Morgane & Maxime | Remerciements'}>
      <div className='w-full h-full'>
        <Title>Remerciements</Title>
        <p>Merci à laulau la plus belle et Rémi le plus beau</p>
      </div>
    </Layout>
  )
}

export default RemerciementsPage
