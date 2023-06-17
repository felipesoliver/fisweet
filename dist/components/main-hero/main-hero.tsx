import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Grid from '~/components/grid'

const MainHero = () => {
  return (
    <section className='bg-blue-light lg:h-[44rem]'>
      <Grid className='container h-full'>
        <div className='col-span-full lg:col-span-6 flex flex-col justify-center'>
          <h1 className='text-4xl lg:heading-7xl mb-3'>Prosper with our bespoke solutions</h1>
          <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
          <Link href="#" className='btn-orange'>See Our Services</Link>
        </div>
        <div className='col-span-full lg:col-span-6 lg:flex lg:items-end'>
          <Image src="/main-banner.png" className='w-full lg:h-[530px] object-cover' width="934" height="645" alt="" />
        </div>
      </Grid>
    </section>
  )
}

export default MainHero