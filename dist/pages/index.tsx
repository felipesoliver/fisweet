import type { ReactElement } from 'react'
import MainHero from '~/components/main-hero'
import Layout from '~/pages/layout'

const Homepage = () => {
  return (
    <MainHero />
  )
}

Homepage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Homepage