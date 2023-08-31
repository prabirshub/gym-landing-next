// import data
import { community } from '@/constants'

// import components
import CommunitySlider from './CommunitySlider'
import Image from 'next/image'

const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community
  return (
    <section className='bg-pink-100'>
      <div className='container mx-auto'>
        <div className='flex'>
          {/* section title */}
          <div className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'>
            <Image src={icon} alt={title} />
            <h2 className='h2 section-title'>
              {title}
              <span className='text-primary-200'>.</span>
            </h2>
          </div>
          {/* slider */}
        </div>
      </div>
    </section>
  )
}
export default Community
