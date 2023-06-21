import React from 'react'
import Fade from 'react-reveal/Fade'

import Grid from '~/components/grid'
import foldersIcon from '~/assets/icons/folders.png'
import wondIcon from '~/assets/icons/wond.png'
import heartIcon from '~/assets/icons/heart.png'
import Image from '~/components/image'

const icons = {
  1: foldersIcon,
  2: wondIcon,
  3: heartIcon,
}

const cards = [
  {
    title: 'Invoicing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
    icon: {
      src: icons[1],
      width: 30,
      height: 30,
      alt: 'icon-1'
    },
  },
  {
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
    icon: {
      src: icons[2],
      width: 30,
      height: 30,
      alt: 'icon-2'
    },
  },
  {
    title: 'Surveying',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
    icon: {
      src: icons[3],
      width: 30,
      height: 30,
      alt: 'icon-3'
    },
  },
]

const HeadlineSolutions = () => {
  return (
    <section className='py-10 lg:py-20 bg-blue-light'>
      <Grid className='container gap-5 lg:gap-y-10'>
        <div className='col-span-full'>
          <Fade cascade>
            <div className='flex flex-col lg:flex-row gap-5'>
              <h2 className='text-2xl lg:text-4xl lg:font-semibold'>We are building software solution that solves your business challenges</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            </div>
          </Fade>
        </div>
        {cards.length > 0 &&(
          <div className='col-span-full'>
            <Fade bottom cascade distance="100px">
              <div className='grid grid-cols-12 gap-5'>
                {cards.map((item: any, index: any) => (
                  <article className='group col-span-full lg:col-span-4 bg-white p-5 lg:p-10 rounded-[1.25rem] space-y-4' key={`card-${index}`}>
                    <Image src={item.icon.src} {...item.icon} />
                    <h3 className='text-2xl font-semibold'>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </Fade>
          </div>
        )}
      </Grid>
    </section>
  )
}

export default HeadlineSolutions