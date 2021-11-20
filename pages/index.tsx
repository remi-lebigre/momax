import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime'}>
      <div className='absolute w-full h-screen'>
        <Image
          src='/photos/morgane_maxime_in_da_woods.jpg'
          alt="Morgane et Maxime qui s'embrassent sous les sapins"
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='relative w-full h-screen p-8 z-10 mb-40'>
        <h1 className='absolute bottom-20 text-center text-8xl text-white w-3/4 transform -translate-x-1/2 left-1/2'>
          Mariage de Morgane et Maxime 🎉
        </h1>
      </div>
      <div className='p-8'>
        <h2 className='text-4xl'>Cérémonie</h2>
      </div>
    </Layout>
  )
}

export default Home
