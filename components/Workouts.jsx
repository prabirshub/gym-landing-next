'use client'

// import aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

// import data
import { workouts } from '@/constants'

// import components
import WorkoutSlider from './WorkoutSlider'
import Image from 'next/image'

const Workouts = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    })
  })
  // destructuring workouts data
  const { title, icon } = workouts

  return (
    <section className='section'>
      {/* section titile */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        <Image src={icon} alt='' />
        <h2 className='h2 section-title'>
          {title} <span className='text-primary-200'>.</span>
        </h2>
      </div>
      {/* slider */}
      <div data-aos='fade-up' data-aos-delay='300'>
        <WorkoutSlider />
      </div>
    </section>
  )
}
export default Workouts
