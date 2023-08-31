'use client'

// import aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

// import data
import { pricing } from '@/constants'

// import components
import PlanList from './PlanList'
import Image from 'next/image'

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    })
  })
  // destructuring pricining data
  const { icon, title, plans } = pricing
  return (
    <section className='section'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <Image src={icon} alt={title} />
        <h2 className='h2'>
          {title}
          <span className='text-primary-200'>.</span>{' '}
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={plans} />
    </section>
  )
}
export default Pricing
