import type { ReactElement } from 'react'
import HeadlineAbout from '~/components/headline-about/headline-about'
import HeadlineServices from '~/components/headline-services'
import HeadlineSolutions from '~/components/headline-solutions'
import MainHero from '~/components/main-hero'
import Layout from '~/pages/layout'

const Homepage = () => {
  return (
    <>
      <MainHero />
      <HeadlineServices />
      <HeadlineSolutions />
      <HeadlineAbout />
    </>
  )
}

Homepage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Homepage