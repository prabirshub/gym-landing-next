'use client'

// import swiper react componenets
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper slide
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={'auto'}
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonial, idx) => {
        // destructure testimonial
        const { image, name, message } = testimonial
        return (
          <SwiperSlide key={idx}>
            <div className='relative'>
              {/* image */}
              <Image src={image} alt={name} />
            </div>
            {/* message & name */}
            <div className='absolute bottom-[30px] text-white p-[20px] text-center'>
              <div className='mb-8 italic text-lg font-light'>{message}</div>
              <div className='flex items-center justify-center gap-x-[3px]'>
                <span className='text-[30px] text-primary-200 font-bold'>
                  ~
                </span>
                <div className='text-[20px] font-bold'>{name}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default CommunitySlider
