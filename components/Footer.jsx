// import data
import { footer } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  // destructure footer data
  const { logo, copyrightText } = footer
  return (
    <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
      <div className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'>
        {/* logo */}
        <Link href='/'>
          <Image
            className='h-[30px]'
            src={'/assets/img/header/logo.svg'}
            alt='company logo'
            width={85}
            height={24}
          />
        </Link>
        {/* copyright text */}
        <p className='text-neutral-300'>{copyrightText}</p>
      </div>
    </footer>
  )
}
export default Footer
