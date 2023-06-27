import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import Layout from '~/pages/layout'

const About = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | About'
        canonical='https://fo-finsweet.vercel.app/about'
      />
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