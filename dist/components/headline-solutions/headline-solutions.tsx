import React from 'react'
import Fade from 'react-reveal/Fade'

import Grid from '~/components/grid'
import Image from '~/components/image'
import { data } from './data'

const HeadlineSolutions = () => {
  return (
    <section className='headline-solutions py-10 lg:py-20 bg-blue-light'>
      <Grid className='container gap-5 lg:gap-y-10'>
        <div className='col-span-full'>
          <Fade cascade>
            <div className='flex flex-col lg:flex-row gap-5'>
              <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </Fade>
        </div>
        {data.cards.length > 0 &&(
          <div className='col-span-full'>
            <Fade bottom cascade distance="100px">
              <div className='grid grid-cols-12 gap-5'>
                {data.cards.map((item: any, index: any) => (
                  <article className='group col-span-full lg:col-span-4 bg-white p-5 lg:p-10 rounded-[1.25rem] space-y-4' key={`card-${index}`}>
                    <Image src={item.icon.src} {...item.icon} />
                    <h3 className='text-2xl font-semibold'>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </Fade>
          </div>
        )}
      </Grid>
    </section>
  )
}

export default HeadlineSolutions