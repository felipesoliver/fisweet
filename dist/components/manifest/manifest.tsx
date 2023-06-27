import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import Fade from '@successtar/react-reveal/Fade'

import Image from '~/components/image'
import useOutsideClick from '~/helpers/use-click-outside'
import VideoModal from '~/components/video-modal'
import Play from '~/assets/icons/play.svg'
import { data } from './data'

const Manifest = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isModalOpen, setIsModalActive] = useState(false)

  const closeModal = useCallback(() => {
    setIsModalActive(false)
    setIsClicked(false)
  }, [])

  const reference = useOutsideClick(() => {
    setIsModalActive(false)
    setIsClicked(false)
  })

  const handleOpenVideo = useCallback(() => {
    setIsClicked(true)
  }, [isClicked])

  return (
    <>
      <section className='manifest py-10 lg:py-20'>
        <div className='container flex flex-col-reverse gap-5 lg:grid lg:grid-cols-12'>
          <div className='lg:col-span-5 space-y-6 flex flex-col justify-center'>
            <Fade>
              <h2 className='text-2xl lg:text-4xl lg:font-semibold'>{data.title}</h2>
              <p>{data.description}</p>
              <div className='flex items-center gap-x-6'>
                <Image {...data.author.image} />
                <div>
                  <span className='block text-lg lg:text-2xl font-medium'>{data.author.name}</span>
                  <p className='text-orange text-sm lg:text-lg'>{data.author.charge}</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className='w-full lg:w-auto lg:col-span-6 lg:col-start-7 block relative h-fit rounded-[1.25rem] overflow-hidden'>
            <Fade right distance='50px'>
              <Image
                {...data.video.thumb}
                className="w-full h-auto lg:object-cover lg:object-center"
              />
              <button
                type="button"
                className={classNames(
                  'group absolute top-0 left-0 w-full h-full transition-all duration-200 flex items-center justify-center',
                  {
                    'opacity-0 invisible pointer-events-none': isClicked,
                  }
                )}
                aria-label="Play video"
                onClick={() => {
                  setIsModalActive(true)
                  handleOpenVideo()
                }}
              >
                <Play
                  name="play"
                  className="block w-[3.25rem] h-[3.25rem] transition-all duration-200 ease-in-out lg:group-hover:scale-110"
                />
              </button>
            </Fade>
          </div>
        </div>
      </section>
      <VideoModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        reference={reference}
      />
    </>
  )
}

export default Manifest