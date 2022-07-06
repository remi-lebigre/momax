import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime'}>
      <h1 className='bottom-20 text-center text-8xl text-oldstylecaps my-16'>
        Morgane <span className='text-andrea px-8 inline-block'>et</span> Maxime
      </h1>
      <div className='relative aspect-square max-w-lg ml-auto mr-auto'>
        <Image
          src='/photos/morgane_maxime_in_da_woods.png'
          alt="Morgane et Maxime qui s'embrassent sous les sapins"
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='flex justify-center pt-12'>
        <figure className='w-3/4'>
          <figcaption>MDN editors</figcaption>
          <blockquote className='text-4xl text-oldstylecaps'>
          &quot;Make up to me is a form of expression that enhances who I already am. Wearing La Bouche
            Rouge gives me more confidence and helps me embrace my boldness within. Whether It&apos;s
            what I choose to wear or how I live my life&quot;
          </blockquote>
        </figure>
      </div>
      <div className='p-8 py-48'>
        <div className='flex columns-2'>
          <div className='w-full flex justify-end pr-48'>
            <div className='max-w-[200px]'>
              <h3 className='text-xl text-lightblack mb-4'>La date</h3>
              <p className='text-4xl leading-[48px]'>
                Mardi
                <br />
                16 Août
                <br />
                2022
              </p>
            </div>
          </div>
          <div className='w-full'>
            <div className='max-w-[400px] pt-12'>
              <h3 className='text-xl text-lightblack mb-4 mt-24'>Lieux</h3>
              <p className='text-lightblack text-2xl'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,.
              </p>
              <h3 className='text-xl text-lightblack mb-4 mt-24'>Lodge</h3>
              <p className='text-lightblack text-2xl'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,.
              </p>
              <h3 className='text-xl text-lightblack mb-4 mt-24'>Contact</h3>
              <p className='text-lightblack text-2xl'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-8'>
        <h2 className='text-[150px] uppercase text-center relative z-10 -mb-24'>Ecosse</h2>
        <div className='columns-3'>
          <div>
            <div className='relative aspect-square mb-4'>
              <Image
                src='/photos/ecosse_1.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_4.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div>
            <div className='relative overflow-hidden aspect-3/4 mb-4'>
              <Image
                src='/photos/ecosse_2.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_5.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div>
            <div className='relative aspect-square mb-4'>
              <Image
                src='/photos/ecosse_3.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='relative aspect-square'>
              <Image
                src='/photos/ecosse_6.png'
                alt="Photo d'Écosse"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
        <h2 className='text-[150px] uppercase text-center relative z-10 -mt-20'>Glencoe</h2>
      </div>
      <div className='flex justify-center py-36 overflow-hidden'>
        <p className='text-[150px] text-andrea whitespace-nowrap'>
          Mariage - Voyage - Remerciements
        </p>
      </div>
    </Layout>
  )
}

export default Home
