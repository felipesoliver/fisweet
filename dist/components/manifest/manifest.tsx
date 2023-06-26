import React from 'react'
import Fade from 'react-reveal/Fade'

import Image from '~/components/image'
import { data } from './data'

const Manifest = () => {
  return (
    <section className='manifest py-10 lg:py-20'>
      <div className='container flex flex-col-reverse gap-5 lg:grid lg:grid-cols-12'>
        <div className='lg:col-span-5 space-y-6 flex flex-col justify-center'>
          <Fade>
            <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{data.title}</h2>
            <p>{data.description}</p>
            <div className='flex items-center gap-x-6'>
              <Image {...data.author.image} />
              <div>
                <span className='block text-lg lg:text-2xl font-medium'>{data.author.name}</span>
                <p className='text-orange text-sm lg:text-lg'>{data.author.charge}</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className='lg:col-span-6 lg:col-start-7'>
          <Fade right distance='50px'>
            <Image {...data.video.thumb} />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Manifest