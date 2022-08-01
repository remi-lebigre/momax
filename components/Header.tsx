import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => (
  <header className='h-20 md:flex justify-between'>
    <input type='checkbox' id='menu' className='peer hidden' />
    <label htmlFor='menu' className='md:hidden'>
      Menu
    </label>
    <div className='relative z-10 hidden peer-checked:block bg-beige py-8 px-4 shadow-lg -mx-4'>
      <nav>
        <ul className='flex flex-col gap-4 mt-4'>
          <li>
            <Link href='/'>
              <a>Mariage</a>
            </Link>
          </li>
          <li>
            <Link href='/jour-j'>
              <a>Le jour J</a>
            </Link>
          </li>
          <li>
            <Link href='/voyage'>
              <a>Voyage</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <nav className='hidden md:block'>
      <ul className='flex gap-8'>
        <li>
          <Link href='/'>
            <a>Mariage</a>
          </Link>
        </li>
        <li>
          <Link href='/jour-j'>
            <a>Le jour J</a>
          </Link>
        </li>
        <li>
          <Link href='/voyage'>
            <a>Voyage</a>
          </Link>
        </li>
      </ul>
    </nav>
    <ul className='gap-8 text-lightblack hidden md:block'>
      <li>16 août 2022</li>
      <li>Ecosse, Glencoe</li>
    </ul>
  </header>
)

export default Header
