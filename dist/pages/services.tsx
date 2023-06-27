import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import SecondaryHero from '~/components/secondary-hero'
import { dataThree } from '~/components/secondary-hero/data'
import Layout from '~/pages/layout'

const Services = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Services'
        canonical='https://fo-finsweet.vercel.app/services'
      />
      <SecondaryHero data={dataThree} circlePosition={{top: true}} />
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