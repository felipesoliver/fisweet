import Link from 'next/link'
import React from 'react'

import Logo from '~/assets/icons/logo.svg'

const Header = () => {
  return (
    <header className='bg-white w-full h-fit'>
      <div className='container h-[5.25rem] flex items-center justify-between'>
        <Link className='block w-fit hover:opacity-70 duration-300' href="/">
          <Logo />
        </Link>
        <nav className='lg:space-x-8 flex items-center'>
          <Link className='font-semibold btn-nav' href="/about">About Us</Link>
          <Link className='font-semibold btn-nav' href="/careers">Careers</Link>
          <Link className='font-semibold btn-nav' href="/services">Services</Link>
          <Link className='font-semibold btn-nav' href="/blog">Blog</Link>
          <Link className='font-semibold btn-nav' href="/contact-us">Contact us</Link>
          <Link className='font-semibold btn-orange-light' href="/clone-project">Clone project</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header