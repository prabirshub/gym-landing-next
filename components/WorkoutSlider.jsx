'use client'

// import data
import { workouts } from '@/constants'

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './workoutSlider.css'

// import required modules
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

const WorkoutSlider = () => {
  // destructure workout data
  const { programs } = workouts
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className='workoutSlider'
    >
      {programs.map((program, idx) => {
        // destructure program
        const { image, name } = program
        return (
          <SwiperSlide
            className='max-w-[320px] max-h-[320px] relative'
            key={idx}
          >
            <Image
              className='w-full h-full object-cover'
              src={image}
              alt={name}
            />
            <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]'>
              <div className='font-primary font-semibold text-sm text-neutral-500'>
                {name}
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default WorkoutSlider
