import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import Fade from 'react-reveal/Fade'
import { CountUp } from 'use-count-up'
import { onScroll } from '~/utils/scroll'
import { data } from './data'

import Image from '~/components/image'
import SpinCircle from '~/components/spin-circle'
import ArrowRight from '~/assets/icons/arrow-right.svg'

import styles from './headline-about.module.css'
import Link from 'next/link'

const HeadlineAbout = () => {
  const targetReference = useRef(null)
  const [isCountActive, setIsCountActive] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    return onScroll((scrollPosition) => {
      scrollPosition >= targetReference.current.offsetTop - targetReference.current.clientHeight
        ? setIsCountActive(true)
        : setIsCountActive(false)
    })
  }, [targetReference, isCountActive])

  return (
    <section className='headline-about pt-10 lg:py-20 space-y-10 lg:space-y-20' ref={targetReference}>
      <div className='container flex flex-col-reverse lg:grid lg:grid-cols-12 gap-5'>
        <div className='w-full lg:col-span-6 flex flex-col justify-center gap-y-5'>
          <Fade delay={200}>
            <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{data.title}</h2>
            <p>{data.description}</p>
            <ul className='flex flex-col lg:flex-row gap-5'>
              {data.bigNumbers.map((item: any, index: any) => (
                <li className='space-y-4' key={`item-${index}`}>
                  <span className='text-4xl font-semibold text-orange'><CountUp isCounting={isCountActive} duration={5} end={item.number} />+</span>
                  <h3 className='text-2xl font-semibold'>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        <div className='relative w-full lg:col-span-6'>
          <SpinCircle top />
          <Fade right distance='50px'>
            <Image className='rounded-[1.25rem]' {...data.featuredImage} />
          </Fade>
        </div>
      </div>
      <div className='relative container bg-blue-light lg:rounded-[1.25rem] px-5 py-10 lg:p-10'>
        <Image className='hidden lg:block absolute -top-4 -right-4' {...data.ribbon} />
        {data.tabs.length > 0 && (
          <>
            <Swiper
              className='overflow-visible'
              slidesPerView={'auto'}
              spaceBetween={20}
              freeMode
              modules={[FreeMode]}
            >
              {data.tabs.map((tabbtn: any, index: any) => (
                  <SwiperSlide className='w-fit' key={`button-${index}`}>
                    <button
                      className={classNames('px-6 py-2 font-semibold rounded-[30px] border border-black opacity-30 lg:hover:opacity-100 lg:hover:text-orange lg:hover:bg-white lg:hover:border-white duration-200', {
                        '!opacity-100 text-orange bg-white border-white': tabIndex == index,
                      })}
                      onClick={() => {
                        setTabIndex(index)
                      }}
                    >
                      {tabbtn.tabLabel}
                    </button>
                  </SwiperSlide>
              ))}
            </Swiper>
            <ul className='mt-6 lg:mt-20'>
              <Fade>
                {data.tabs.map((tabContent: any, index: any) => (
                  <li key={`tabcontent-${index}`} className={classNames({
                    'flex flex-col-reverse lg:flex-row lg:justify-between animate-fadeIn gap-y-5': tabIndex == index,
                    'hidden': tabIndex != index,
                  })}>
                    <div className='lg:w-[31.875rem] space-y-5 lg:space-y-6'>
                      <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{tabContent.title}</h2>
                      <div
                        className={classNames(styles.content)}
                        dangerouslySetInnerHTML={{
                          __html: tabContent.content,
                        }}
                      />
                      <Link href='/services' className='group flex items-center gap-x-2 text-orange font-medium'><span>See all services</span><ArrowRight className="group-hover:lg:translate-x-1 duration-200" /></Link>
                    </div>
                    <Fade right distance='50px'>
                      <div className='relative w-full lg:w-[29.5rem] h-[16.875rem] sm:h-[21.25rem] lg:h-[29.125rem] rounded-[1.25rem] overflow-hidden after:absolute after:top-0 after:left-0 after:w-[5rem] after:lg:w-[7.5rem] after:h-full after:bg-orange after:bg-opacity-80'>
                        <Image className='w-full h-full object-cover object-top' {...tabContent.image} />
                      </div>
                    </Fade>
                  </li>
                ))}
              </Fade>
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default HeadlineAbout