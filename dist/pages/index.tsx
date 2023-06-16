import type { ReactElement } from 'react'
import Layout from '~/pages/layout'

const Homepage = () => {
  return <p>hello world</p>
}

Homepage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Homepage