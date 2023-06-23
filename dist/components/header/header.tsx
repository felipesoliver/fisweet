import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Jump from 'react-reveal/Jump'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Logo from '~/assets/icons/logo.svg'

const headerMenu = [
  {
    title: 'About Us',
    url: '/about',
  },
  {
    title: 'Careers',
    url: '/careers',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
  },
]

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
    <header className='fixed top-0 left-0 bg-white w-full h-fit z-[9999]'>
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
        <nav className='desktop-nav-menu hidden w-fit h-fit gap-x-8 lg:flex lg:items-center'>
          {headerMenu.length > 0 &&
            headerMenu.map((link: any, index: any) => (
              <Link key={`link-${index}`} className={classNames('font-semibold btn-nav', {
                'active': router.asPath.includes(link.url)
              })} href={link.url}>{link.title}</Link>
          ))}
          <Link className='font-semibold btn-orange-light' href="/clone-project">Clone project</Link>
        </nav>
        <Jump left cascade when={active} appear>
          <nav className={classNames('mobile-nav-menu fixed left-0 w-screen h-screen bg-white gap-y-8 flex flex-col p-10 md:p-16 duration-300', {
            'bottom-0': active,
            '-bottom-[100vh]': !active,
          })}>
              <Link className='font-semibold text-3xl md:text-5xl btn-nav' href="/about">About Us</Link>
              <Link className='font-semibold text-3xl md:text-5xl btn-nav' href="/careers">Careers</Link>
              <Link className='font-semibold text-3xl md:text-5xl btn-nav' href="/services">Services</Link>
              <Link className='font-semibold text-3xl md:text-5xl btn-nav' href="/blog">Blog</Link>
              <Link className='font-semibold text-3xl md:text-5xl btn-nav' href="/contact-us">Contact us</Link>
              <Link className='font-semibold btn-orange-light' href="/clone-project">Clone project</Link>
          </nav>
        </Jump>
      </div>
    </header>
  )
}

export default Header