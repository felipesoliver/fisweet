import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Logo from '~/assets/icons/logo.svg'

const Header = () => {
  const router = useRouter()
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
  }, [])

  function handleClick() {
    setActive(!active)
  }

  useEffect(() => {
    setActive(false)
  }, [router.asPath])

  return (
    <header className='fixed top-0 left-0 bg-white w-full h-fit'>
      <div className='container h-16 lg:h-[5.25rem] flex items-center justify-between'>
        <Link className='block w-fit hover:opacity-70 duration-300' href="/">
          <Logo />
        </Link>
        <button
          onClick={handleClick}
          className={classNames(
            'hamburger hamburger--spin w-[60px] lg:hidden !bg-orange h-full z-50 rounded-b-xl',
            {
              'is-active': active,
            }
          )}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav className={classNames('fixed lg:static left-0 w-screen lg:w-fit h-screen lg:h-fit bg-white lg:bg-transparent gap-8 flex flex-col lg:flex-row lg:items-center p-10 duration-200', {
          'bottom-0': active,
          '-bottom-[100vh]': !active,
        })}>
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