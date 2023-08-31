'use client'

// import aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

// import data
import { about } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    })
  })
  // destructuring data
  const { icon, title, subtitle1, subtitle2, link } = about
  return (
    <section
      id='about'
      className=' py-[80px] md:py-[110px] lg:py-[140px] lg:pb-[180px]'
    >
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        {/* section title */}
        <div
          className='section-title-group justify-start'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <Image src={icon} alt='section image' />
          <h2 className='h2 section-title'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>
        {/* subtitle 1 */}
        <p
          className='md:text-body-md mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {subtitle1}
        </p>

        {/* subtitle 2 */}
        <p
          className='md:text-body-md mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {subtitle2}
        </p>
        {/* link */}
        <div data-aos='fade-up' data-aos-delay='400'>
          <Link
            className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'
            href='#'
          >
            {link}
            <IoIosArrowDroprightCircle className='text-2xl' />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default About
