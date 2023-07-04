import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import SecondaryHero from '~/components/secondary-hero'
import Layout from '~/pages/layout'
import { dataOne } from '~/components/secondary-hero/data'
import BigNumbers from '~/components/big-numbers'

const About = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | About'
        canonical='https://fo-finsweet.vercel.app/about'
      />
      <SecondaryHero data={dataOne} circlePosition={{bottom: true}} />
      <BigNumbers />
      <Manifest />
      <HeadlineNews />
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default About