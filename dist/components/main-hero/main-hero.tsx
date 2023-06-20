import React from 'react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

import Image from 'next/image'
import Link from 'next/link'
import Grid from '~/components/grid'
import mainBannerBG from '~/assets/images/main-banner.png'
import mainBannerBgMb from '~/assets/images/main-banner-mb.png'
import BrandOne from '~/assets/icons/brand-1.svg'
import BrandTwo from '~/assets/icons/brand-2.svg'
import BrandThree from '~/assets/icons/brand-3.svg'

const pics = {
  1: mainBannerBG,
  2: mainBannerBgMb,
}

const MainHero = () => {
  return (
    <section className='main-hero bg-blue-light lg:h-[44rem] overflow-hidden'>
      <Grid className='container h-full gap-y-5 lg:gap-y-0'>
        <div className='col-span-full lg:col-span-6 flex flex-col justify-center pt-5 lg:pt-0'>
          <h1 className='text-4xl md:heading-7xl mb-3'><Flip left cascade>Prosper with our bespoke solutions</Flip></h1>
          <p className='mb-8 max-w-[31.875rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
          <div className='lg:flex lg:items-center lg:gap-5'>
            <Link href="/services" className='btn-orange'>See Our Services</Link>
            <Link href="/services" className='btn-default'>See All Services</Link>
          </div>
          <p className='hidden md:block text-gray-medium opacity-50 mt-16 mb-4'>Worked with 100+ Companies</p>
          <div className='hidden md:flex items-center justify-between max-w-[31.875rem] h-8'>
            <BrandOne className="h-full text-gray-light" />
            <BrandTwo className="h-full text-gray-light" />
            <BrandThree className="h-full text-gray-light" />
          </div>
        </div>
        <div className='col-span-full lg:col-span-6 lg:flex lg:items-end'>
          <Fade duration={2000}>
            <Image src={pics[1]} className='hidden lg:block w-full h-[530px] object-cover' width="934" height="645" alt="picture-1" />
          </Fade>
          <Image src={pics[2]} className='lg:hidden w-full' width="934" height="645" alt="picture-1" />
        </div>
      </Grid>
    </section>
  )
}

export default MainHero