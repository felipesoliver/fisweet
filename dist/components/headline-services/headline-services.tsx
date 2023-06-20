import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

import servicesCardOne from '~/assets/images/services-card1.png'
import servicesCardTwo from '~/assets/images/services-card2.png'
import servicesCardThree from '~/assets/images/services-card3.png'
import ArrowRight from '~/assets/icons/arrow-right.svg'
import Grid from '~/components/grid'
import Image from '~/components/image'

const pics = {
  1: servicesCardOne,
  2: servicesCardTwo,
  3: servicesCardThree,
}

const cards = [
  {
    title: 'Business strategy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
    image: {
      src: pics[1],
      width: '400',
      height: '242',
      alt: 'img-1',
    },
    cta: {
      url: '/services',
    }
  },
  {
    title: 'Digitalization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
    image: {
      src: pics[2],
      width: '400',
      height: '242',
      alt: 'img-2',
    },
    cta: {
      url: '/services',
    }
  },
  {
    title: 'Risk assessment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
    image: {
      src: pics[3],
      width: '400',
      height: '242',
      alt: 'img-3',
    },
    cta: {
      url: '/services',
    }
  },
]

const HeadlineServices = () => {
  return (
    <section className='headline-services py-10 lg:py-24'>
      <Grid className='container gap-5'>
        <div className='col-span-full'>
          <h2 className='text-3xl lg:heading-6xl max-w-[46rem] mb-3'>We help more than 1500 companies from all sectors</h2>
          <p className='max-w-[46rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
        </div>
        {cards.length > 0 && (
          <Swiper
            className='col-span-full w-full overflow-visible pb-16'
            slidesPerView={1.1}
            spaceBetween={24}
            pagination={{
              clickable:true
            }}
            modules={[Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {cards.map((item: any, index: any) => (
              <SwiperSlide key={`card-${index}`}>
                <article className='group lg:col-span-4'>
                  <Link href={item.cta.url}>
                    <figure className='w-full h-[15.125rem] rounded-2xl overflow-hidden'>
                      <Image className='w-full h-full object-cover group-hover:lg:scale-110 duration-300' {...item.image} />
                    </figure>
                    <div className='pt-8 space-y-6'>
                      <h3 className='text-2xl'>{item.title}</h3>
                      <p>{item.description}</p>
                      <button className='flex items-center gap-x-2 text-orange font-medium'><span>Learn More</span><ArrowRight className="group-hover:lg:translate-x-1 duration-200" /></button>
                    </div>
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Grid>
    </section>
  )
}

export default HeadlineServices