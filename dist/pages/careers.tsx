import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import Layout from '~/pages/layout'

const Careers = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Careers'
        canonical='https://fo-finsweet.vercel.app/careers'
      />
       <HeadlineNews />
    </>
  )
}

Careers.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Careers