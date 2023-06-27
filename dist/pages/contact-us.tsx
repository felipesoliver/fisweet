import { NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import HeadlineNews from '~/components/headline-news'
import Manifest from '~/components/manifest'
import Layout from '~/pages/layout'

const ContactUs = () => {
  return (
    <>
      <NextSeo
        title='Finsweet | Contact Us'
        canonical='https://fo-finsweet.vercel.app/contact-us'
      />
    </>
  )
}

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default ContactUs