// import data
import { nav } from '@/constants'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex text-white gap-x-8'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                href={item.href}
                className='hover:text-primary-200 transition'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Nav
