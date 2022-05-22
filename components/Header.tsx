import Link from 'next/link'

const Header = () => (
  <header className={'h-20 flex justify-between'}>
    <nav>
      <ul className='flex gap-8'>
        <li>
          <Link href='/'>
            <a>Mariage</a>
          </Link>
        </li>
        <li>
          <Link href='/voyage'>
            <a>Voyage</a>
          </Link>
        </li>
        <li>
          <Link href='/remerciements'>
            <a>Remerciements</a>
          </Link>
        </li>
      </ul>
    </nav>
    <ul className='flex gap-8 text-gray-400'>
      <li>16 août 2022</li>
      <li>Ecosse, Glenco</li>
    </ul>
  </header>
)

export default Header
