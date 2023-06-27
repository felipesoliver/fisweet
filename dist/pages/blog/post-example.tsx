import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import Layout from '~/pages/layout'

const PostExample = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Post Example'
        canonical='https://fo-finsweet.vercel.app/blog'
      />
    </>
  )
}

PostExample.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default PostExample