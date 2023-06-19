import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Grid from '~/components/grid'
import mainBannerBG from '~/assets/images/main-banner.png'
import mainBannerBgMb from '~/assets/images/main-banner-mb.png'

const pics = {
  1: mainBannerBG,
  2: mainBannerBgMb,
}

const MainHero = () => {
  return (
    <section className='bg-blue-light lg:h-[44rem]'>
      <Grid className='container h-full gap-y-5 lg:gap-y-0'>
        <div className='col-span-full lg:col-span-6 flex flex-col justify-center pt-5 lg:pt-0'>
          <h1 className='text-4xl lg:heading-7xl mb-3'>Prosper with our bespoke solutions</h1>
          <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
          <div className='lg:flex lg:items-center lg:gap-5'>
            <Link href="/services" className='btn-orange'>See Our Services</Link>
            <Link href="/services" className='btn-default'>See All Services</Link>
          </div>
        </div>
        <div className='col-span-full lg:col-span-6 lg:flex lg:items-end'>
          <Image src={pics[1]} className='hidden lg:block w-full h-[530px] object-cover' width="934" height="645" alt="" />
          <Image src={pics[2]} className='lg:hidden w-full' width="934" height="645" alt="" />
        </div>
      </Grid>
    </section>
  )
}

export default MainHero