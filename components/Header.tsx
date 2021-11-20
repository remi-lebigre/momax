import Image from 'next/image'
import Link from 'next/link'

const Header = () => (
  <header className={'h-20 flex items-center p-10'}>
    <nav>
      <ul className='flex gap-10'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/mariage'>
            <a>Mariage</a>
          </Link>
        </li>
        <li>
          <Link href='/voyage'>
            <a>Voyage</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
