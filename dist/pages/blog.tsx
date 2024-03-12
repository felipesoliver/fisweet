import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import Archive from '~/components/archive'
import Layout from '~/pages/layout'

const Blog = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Blog'
        canonical='https://fo-finsweet.vercel.app/blog'
      />
      <Archive/>
    </>
  )
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Blog