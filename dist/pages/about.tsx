import type { ReactElement } from 'react'
import Layout from '~/pages/layout'

const About = () => {
  return <p>teste</p>
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default About