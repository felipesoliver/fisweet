import React from 'react'
import Fade from '@successtar/react-reveal/Fade'
import Flip from '@successtar/react-reveal/Flip'

import Image from '~/components/image'
import SpinCircle from '~/components/spin-circle'
import Link from 'next/link'

interface Properties {
  data: any
  circlePosition: {
    top?: boolean
    bottom?: boolean
    quarter?: boolean
  }
}

const SecondaryHero = ({ data, circlePosition } :Properties) => {
  return (
    <section className='py-10 lg:py-20'>
      <div className='container flex flex-col-reverse lg:grid lg:grid-cols-12 gap-5'>
        <div className='w-full lg:col-span-5 flex flex-col justify-center gap-y-5'>
          <Fade delay={200}>
            <h2 className='text-4xl lg:text-6xl lg:leading-[4.5rem] lg:font-semibold'>
            <Flip left cascade>{data.title}</Flip></h2>
            <p>{data.description}</p>
            <Link href={data.cta.url} className='btn-orange'>{data.cta.label}</Link>
          </Fade>
        </div>
        <Fade>
          <div className='relative w-full lg:col-span-6 lg:col-start-7 after:rounded-l-[1.25rem] after:absolute after:top-0 after:left-0 after:w-[5rem] after:lg:w-[11.25rem] after:h-full after:bg-orange after:bg-opacity-80'>
            <SpinCircle circlePosition={ circlePosition } />
            <Image className='w-full h-full object-cover rounded-[1.25rem]' {...data.featuredImage} />
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default SecondaryHero