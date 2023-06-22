import React from 'react'
import Fade from 'react-reveal/Fade'
import { CountUp } from 'use-count-up'

import { data } from './data'
import Image from '../image/image'
import SpinCircle from '../spin-circle/spin-circle'

const HeadlineAbout = () => {
  return (
    <section className='headline-about py-10 lg:py-20'>
      <div className='container flex flex-col-reverse lg:grid lg:grid-cols-12 gap-5'>
        <div className='w-full lg:col-span-6 flex flex-col justify-center gap-y-5'>
          <Fade delay={200}>
            <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{data.title}</h2>
            <p>{data.description}</p>
            <ul className='flex flex-col lg:flex-row gap-5'>
              {data.bigNumbers.map((item: any, index: any) => (
                <li className='space-y-4' key={`item-${index}`}>
                  <span className='text-4xl font-semibold text-orange'><CountUp isCounting duration={5} end={item.number} />+</span>
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
            <Image className='rounded-[1.25rem]'  {...data.image} />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default HeadlineAbout