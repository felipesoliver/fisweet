import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import Fade from 'react-reveal/Fade'
import { CountUp } from 'use-count-up'

import { data } from './data'
import Image from '~/components/image'
import SpinCircle from '~/components/spin-circle'
import { onScroll } from '~/utils/scroll'
import classNames from 'classnames'

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
    <section className='headline-about py-10 lg:py-20 space-y-5 lg:space-y-20' ref={targetReference}>
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
      <div className='relative container bg-blue-light lg:rounded-[1.25rem] p-5 lg:p-10'>
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
            <ul className='mt-5 lg:mt-20'>
              {data.tabs.map((tabContent: any, index: any) => (
                <li key={`tabcontent-${index}`} className={classNames({
                  'block animate-fadeIn': tabIndex == index,
                  'hidden': tabIndex != index,
                })}>
                  <div className='lg:w-[31.875rem]'>
                    <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{tabContent.title}</h2>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default HeadlineAbout