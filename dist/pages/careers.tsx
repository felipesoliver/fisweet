import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import SecondaryHero from '~/components/secondary-hero'
import { dataTwo } from '~/components/secondary-hero/data'
import Layout from '~/pages/layout'

const Careers = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Careers'
        canonical='https://fo-finsweet.vercel.app/careers'
      />
      <SecondaryHero data={dataTwo} circlePosition={{quarter: true}} />
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