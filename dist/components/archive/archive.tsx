import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Fade from '@successtar/react-reveal/Fade'
import Link from 'next/link'
import { data } from './data'

import ArrowRight from '~/assets/icons/arrow-right.svg'
import Grid from '~/components/grid'
import Image from '~/components/image'

const Archive = () => {
  return (
    <section className='headline-news py-10 lg:py-20 bg-blue-light'>
      <Grid className='container gap-5 lg:gap-y-10'>
        <div className='col-span-full'>
          <Fade>
            <h2 className='text-3xl lg:heading-6xl max-w-[46rem] mb-3'>{data.title}</h2>
          </Fade>
        </div>
        {data.cards.length > 0 && (
          <>
            <Swiper
              className='lg:hidden col-span-full w-full overflow-visible pb-16'
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
              {data.cards.map((item: any, index: any) => (
                <SwiperSlide key={`card-${index}`}>
                  <article className='group lg:col-span-4'>
                    <Link href={item.cta.url}>
                      <figure className='w-full h-[15.125rem] rounded-t-2xl overflow-hidden'>
                        <Image className='w-full h-full object-cover group-hover:lg:scale-110 duration-300' {...item.image} />
                      </figure>
                      <div className='p-5 lg:p-8 space-y-4 bg-white rounded-b-2xl'>
                        <h3 className='text-2xl text-ellipsis line-clamp-2'>{item.title}</h3>
                        <p className='text-ellipsis line-clamp-3'>{item.description}</p>
                        <button className='flex items-center gap-x-2 text-orange font-medium'><span>Learn More</span><ArrowRight className="group-hover:lg:translate-x-1 duration-200" /></button>
                      </div>
                    </Link>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='hidden lg:block col-span-full'>
              <Fade bottom cascade distance="100px">
                <div className='grid grid-cols-12 gap-5'>
                  {data.cards.map((item: any, index: any) => (
                    <article className='group lg:col-span-4' key={`card-${index}`}>
                      <Link href={item.cta.url}>
                        <figure className='w-full h-[15.125rem] rounded-t-2xl overflow-hidden'>
                          <Image className='w-full h-full object-cover group-hover:lg:scale-110 lg:grayscale group-hover:lg:grayscale-0 duration-300' {...item.image} />
                        </figure>
                        <div className='p-8 space-y-6 bg-white rounded-b-2xl'>
                          <h3 className='text-2xl'>{item.title}</h3>
                          <p>{item.description}</p>
                          <button className='flex items-center gap-x-2 text-orange font-medium'><span>Learn More</span><ArrowRight className="group-hover:lg:translate-x-1 duration-200" /></button>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </Fade>
            </div>
          </>
        )}
      </Grid>
    </section>
  )
}

export default Archive