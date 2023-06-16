import '~/styles/globals.css'

import classNames from 'classnames'
import { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import Footer from '~/components/footer'
import Header from '~/components/header'

const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-ExtraLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          site_name: 'Finsweet',
        }}
        title="Finsweet"
      />
        <div
          className={classNames(
            `${poppins.variable} font-poppins overflow-hidden min-h-screen`
          )}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
    </>
  )
}

export default MyApp
