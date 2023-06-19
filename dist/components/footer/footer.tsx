import React from 'react'
import Grid from '~/components/grid'

import Logo from '~/assets/icons/logo.svg'
import Link from 'next/link'
import Facebook from '~/assets/icons/facebook.svg'
import Instagram from '~/assets/icons/instagram.svg'
import Twitter from '~/assets/icons/twitter.svg'
import Youtube from '~/assets/icons/youtube.svg'

const Footer = () => {
  return (
    <footer className='relative bg-blue-dark py-10 lg:py-20 lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:w-[3.375rem] lg:before:h-[9rem] lg:before:bg-orange lg:before:rounded-tr-xl lg:after:absolute lg:after:top-9 lg:after:right-0 lg:after:w-[3.375rem] lg:after:h-[18rem] lg:after:bg-orange lg:after:rounded-tl-xl lg:after:rounded-bl-xl'>
      <Grid className='container gap-y-12 lg:gap-y-0'>
        <div className='col-span-full lg:col-span-4 flex flex-col gap-y-5'>
          <Link href="/" className='block w-fit hover:opacity-70 duration-300'>
            <Logo className="text-white" />
          </Link>
          <h2 className='heading-2xl lg:heading-4xl text-white !font-semibold'>Bespoke software solutions</h2>
          <ul className='flex gap-x-4'>
            <li className='hover:opacity-70 duration-300'>
              <Link href='#'>
                <Facebook />
              </Link>
            </li>
            <li className='hover:opacity-70 duration-300'>
              <Link href='#'>
                <Instagram />
              </Link>
            </li>
            <li className='hover:opacity-70 duration-300'>
              <Link href='#'>
                <Twitter />
              </Link>
            </li>
            <li className='hover:opacity-70 duration-300'>
              <Link href='#'>
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>
        <ul className='col-span-1 md:col-span-6 lg:col-span-2 text-white space-y-6'>
          <li className='text-lg font-semibold'>Company</li>
          <li>
            <Link className='hover:opacity-70 duration-300' href='/about'>About Us</Link>
          </li>
          <li>
            <Link className='hover:opacity-70 duration-300' href='/careers'>Careers</Link>
          </li>
          <li>
            <Link className='hover:opacity-70 duration-300' href='/services'>Services</Link>
          </li>
          <li>
            <Link className='hover:opacity-70 duration-300' href='/blog'>Blog</Link>
          </li>
        </ul>
        <ul className='col-span-1 md:col-span-6 lg:col-span-2 text-white space-y-6'>
          <li className='text-lg font-semibold'>Connect</li>
          <li><Link className='hover:opacity-70 duration-300' href='mailto:hi@finsweet.com'>hi@finsweet.com</Link></li>
          <li><Link className='hover:opacity-70 duration-300' href='tel:+1234567890'>+(123) 456-7890</Link></li>
        </ul>
        <div></div>
      </Grid>
    </footer>
  )
}

export default Footer