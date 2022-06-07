import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime'}>
      <h1 className='bottom-20 text-center text-8xl text-oldstylecaps mt-16'>
        Morgane <span className='text-andrea px-8 inline-block'>et</span> Maxime
      </h1>
      <div className='relative aspect-square max-w-lg ml-auto mr-auto'>
        <Image
          src='/photos/morgane_maxime_in_da_woods.jpg'
          alt="Morgane et Maxime qui s'embrassent sous les sapins"
          layout='fill'
          objectFit='contain'
        />
      </div>
      <figure>
        <figcaption>MDN editors</figcaption>
        <blockquote className='text-4xl text-oldstylecaps'>
          "Make up to me is a form of expression that enhances who I already am. Wearing La Bouche
          Rouge gives me more confidence and helps me embrace my boldness within. Whether It's what
          I choose to wear or how I live my life"
        </blockquote>
      </figure>
      <div className='p-8'>
        <h2 className='text-4xl'>La date</h2>
      </div>
      <div className='p-8'>
        <h2 className='text-[150px] uppercase text-center relative z-10 -mb-24'>Ecosse</h2>
        <div className='columns-3'>
          <div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_1.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_4.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
          <div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_2.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_5.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
          <div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_3.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_6.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <h2 className='text-[150px] uppercase text-center relative z-10 -mt-24'>Glencoe</h2>
      </div>
      <div className='flex justify-center py-36'>
        <p className='text-[150px] text-andrea whitespace-nowrap'>
          Mariage - Voyage - Remerciements
        </p>
      </div>
    </Layout>
  )
}

export default Home
