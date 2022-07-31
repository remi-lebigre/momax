import type { NextPage } from 'next'
import Image from '../components/Image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime'}>
      <h1 className='bottom-20 text-center text-4xl md:text-8xl text-oldstylecaps my-16'>
        Morgane <span className='text-andrea px-8 inline-block'>et</span> Maxime
      </h1>
      <div className='relative aspect-square max-w-lg w-full md:mx-auto'>
        <Image
          src='/photos/morgane_maxime_in_da_woods.png'
          alt="Morgane et Maxime qui s'embrassent sous les sapins"
        />
      </div>
      <div className='flex justify-center pt-12'>
        <figure className='w-full md:w-3/4'>
          <blockquote className='text-6xl text-center text-andrea'>
            We are quite ready for another adventure
          </blockquote>
        </figure>
      </div>
      <div className='md:px-8 py-12 md:py-48'>
        <div className='flex flex-col md:flex-row md:columns-2 justify-center'>
          <div className='flex md:justify-end md:pr-48'>
            <div className='md:max-w-[200px]'>
              <h3 className='text-xl text-lightblack mb-4'>La date</h3>
              <p className='text-4xl leading-[48px] hidden md:block'>
                Mardi
                <br />
                16 Août
                <br />
                2022
              </p>
              <p className='text-4xl leading-[48px] md:hidden'>Mardi 16 Août 2022</p>
            </div>
          </div>
          <div className='md:max-w-[400px] md:pt-12'>
            <h3 className='text-xl text-lightblack mb-4 mt-12 md:mt-24'>Le lieu</h3>
            <a
              className='text-2xl underline'
              href='https://g.page/stmarysspace?share'
              target='_blank'
              rel='noopener noreferrer'
            >
              St. Mary&apos;s, Fasnacloich, Appin PA38 48J, Royaume-Uni
            </a>
            <h3 className='text-xl text-lightblack mb-4 mt-12 md:mt-24'>Le lodge</h3>
            <div className='relative aspect-[2] mb-4'>
              <Image src='/photos/trois_soeurs.png' alt="Photo d'Écosse" noLoadBg />
            </div>
            <a
              className='text-2xl underline'
              href='https://goo.gl/maps/6wYJodqVukoyQ4dr7'
              target='_blank'
              rel='noopener noreferrer'
            >
              Appin Holiday Homes, Appin, Argyll, PA38 4BQ
            </a>
            <h3 className='text-xl text-lightblack mb-4 mt-12 md:mt-24'>Pratique</h3>
            <ul>
              <li>
                -{' '}
                <a
                  className='text-2xl underline'
                  href='/docs/mariage_ecosse_infos_pratiques.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Infos pratiques
                </a>
              </li>
              <li>
                -{' '}
                <a
                  className='text-2xl underline'
                  href='https://docs.google.com/spreadsheets/d/1DXYP2do3QjjiHRlNDyd14_9ZLu4DatDt-_9a_C230pU/edit#gid=1579618427'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Document d&apos;organisation véhicules/logements
                </a>
              </li>
              <li>
                -{' '}
                <a
                  className='text-2xl underline'
                  href='https://docs.google.com/document/d/1Ww7FEMrNtE34Nkh1TMIy-15Nm-rtowXE6zFOBB1NJg4/edit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Adresse logements
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pt-8 md:p-8'>
        <h2 className='text-4xl md:text-[150px] uppercase text-center relative z-10 mb-4'>
          Ecosse
        </h2>
        <div className='md:columns-3'>
          <div>
            <div className='relative aspect-square mb-4'>
              <Image src='/photos/ecosse_1.png' alt="Photo d'Écosse" />
            </div>
            <div className='relative aspect-square mb-4 md:mb-0'>
              <Image src='/photos/ecosse_4.png' alt="Photo d'Écosse" />
            </div>
          </div>
          <div>
            <div className='relative overflow-hidden aspect-3/4 mb-4'>
              <Image src='/photos/ecosse_2.png' alt="Photo d'Écosse" />
            </div>
            <div className='relative aspect-square mb-4 md:mb-0'>
              <Image src='/photos/ecosse_5.png' alt="Photo d'Écosse" />
            </div>
          </div>
          <div>
            <div className='relative aspect-square mb-4'>
              <Image src='/photos/ecosse_3.png' alt="Photo d'Écosse" />
            </div>
            <div className='relative aspect-square mb-4 md:mb-0'>
              <Image src='/photos/ecosse_6.png' alt="Photo d'Écosse" />
            </div>
          </div>
        </div>
        <h2 className='text-4xl md:text-[150px] uppercase text-center relative z-10'>Glencoe</h2>
      </div>
      <div className='flex justify-center py-36 overflow-hidden -mx-4 md:-mx-12'>
        <p className='text-4xl md:text-[150px] text-andrea whitespace-nowrap footerScroll'>
          Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage -
          Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements -
          Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage -
          Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements -
          Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage -
          Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements -
          Mariage - Voyage - Remerciements - Mariage - Voyage - Remerciements - Mariage - Voyage -
          Remerciements - Mariage - Voyage - Remerciements
        </p>
      </div>
    </Layout>
  )
}

export default Home
