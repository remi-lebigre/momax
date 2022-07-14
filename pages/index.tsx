import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

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
          <figcaption>Mo</figcaption>
          <blockquote className='text-4xl text-oldstylecaps'>
            Love you to the moon and back
          </blockquote>
        </figure>
      </div><div className='flex justify-center pt-12'>
        <figure className='w-3/4'>
          <figcaption>Max</figcaption>
          <blockquote className='text-4xl text-oldstylecaps'>
            SHE SAID YES
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
              <h3 className='text-xl text-lightblack mb-4 mt-24'>Le lieu</h3>
              <a className='text-lightblack text-2xl' href="https://g.page/stmarysspace?share" target="_blank" rel="noopener noreferrer">St. Mary&apos;s, Fasnacloich, Appin PA38 48J, Royaume-Uni</a>
              <h3 className='text-xl text-lightblack mb-4 mt-24'>Le lodge</h3>
              <a className='text-lightblack text-2xl' href="https://goo.gl/maps/6wYJodqVukoyQ4dr7" target="_blank" rel="noopener noreferrer">Appin Holiday Homes, Appin, Argyll, PA38 4BQ</a>
              <h3 className='text-xl text-lightblack mb-4 mt-24'>Pratique</h3>
              <ul>
                <li>
                  <a className='text-lightblack text-2xl' href="/docs/mariage_ecosse_infos_pratiques.pdf" target="_blank" rel="noopener noreferrer">Infos pratiques</a>
                </li>
                <li>
                  <a className='text-lightblack text-2xl' href="https://docs.google.com/spreadsheets/d/1DXYP2do3QjjiHRlNDyd14_9ZLu4DatDt-_9a_C230pU/edit#gid=1579618427" target="_blank" rel="noopener noreferrer">Document d&apos;organisation véhhicules/logements</a>
                </li>
              </ul>
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
      <div className='flex justify-center py-36 overflow-hidden -ml-12 -mr-12'>
        <p className='text-[150px] text-andrea whitespace-nowrap'>
          Mariage - Voyage - Remerciements
        </p>
      </div>
    </Layout>
  )
}

export default Home
