import React from 'react'
import Fade from 'react-reveal/Fade'

import { data } from './data'
import Grid from '~/components/grid'
import Image from '~/components/image'
import Link from 'next/link'

const JobVacancies = () => {
  return (
    <section className='job-vacancies relative bg-orange lg:h-[32.375rem]'>
      <Image className='lg:absolute lg:top-0 lg:left-0' {...data.featuredImage} />
      <Grid className='container lg:h-full'>
        <div className='col-span-full lg:col-span-5 lg:col-start-8 flex flex-col justify-center py-10 lg:py-0 gap-y-5 lg:gap-y-10'>
          <Fade>
            <h2 className='text-2xl lg:text-4xl lg:font-semibold text-white'>{data.title}</h2>
            <Link href={data.cta.url} className='btn-white' target='_blank'>See Job Vacancies</Link>
          </Fade>
        </div>
      </Grid>
    </section>
  )
}

export default JobVacancies