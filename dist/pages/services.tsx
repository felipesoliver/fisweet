import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import Layout from '~/pages/layout'

const Services = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Services'
        canonical='https://fo-finsweet.vercel.app/services'
      />
      <Manifest />
      <HeadlineNews />
    </>
  )
}

Services.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Services