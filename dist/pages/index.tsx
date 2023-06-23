import type { ReactElement } from 'react'
import HeadlineAbout from '~/components/headline-about'
import HeadlineServices from '~/components/headline-services'
import HeadlineSolutions from '~/components/headline-solutions'
import JobVacancies from '~/components/job-vacancies'
import MainHero from '~/components/main-hero'
import Layout from '~/pages/layout'

const Homepage = () => {
  return (
    <>
      <MainHero />
      <HeadlineServices />
      <HeadlineSolutions />
      <HeadlineAbout />
      <JobVacancies />
    </>
  )
}

Homepage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Homepage