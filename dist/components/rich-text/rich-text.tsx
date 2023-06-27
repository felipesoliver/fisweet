import classNames from 'classnames'
import React from 'react'
import Grid from '~/components/grid'

const RichText = ({ className = '', htmlText = '' }) => {
  // Remove wrapping <p> tags around images
  const filteredHtmlText = htmlText.replace(
    /<p\b[^/<>]*>\s*(<img\b[^<>]*>)\s*<\/p>/g,
    '$1'
  )

  return (
    <Grid className='container'>
      <div
        className={classNames('col-span-full lg:col-span-8 lg:col-start-3 py-10 lg:py-20 overflow-hidden prose max-w-none', className)}
        dangerouslySetInnerHTML={{ __html: filteredHtmlText }}
      />
    </Grid>
  )
}

export default RichText
