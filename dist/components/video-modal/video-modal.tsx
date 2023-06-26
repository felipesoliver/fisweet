/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames'
import React from 'react'

import Close from '~/assets/icons/close.svg'

interface Properties {
  isModalOpen: boolean
  closeModal: () => void
  reference: any
}

const VideoModal = ({
  isModalOpen,
  closeModal,
  reference,
}: Properties) => {
  return (
    <div
      className={classNames(
        'fixed top-0 right-0 w-screen h-screen flex items-center justify-center lg:bg-black lg:bg-opacity-30 duration-300 overflow-y-auto pt-16 lg:pt-20 backdrop-blur-sm',
        {
          'z-40 opacity-100': isModalOpen,
          '-z-10 opacity-0': !isModalOpen,
        }
      )}
    >
      <button
        type="button"
        className="absolute top-[86px] lg:top-28 right-2 lg:right-10 w-9 h-9"
        onClick={closeModal}
      >
        <Close className="w-full h-full text-white" />
      </button>
      <div
        className="w-full lg:w-[46.25rem] 2xl:w-[75rem] h-full lg:h-[27.5rem] 2xl:h-[43.75rem] lg:rounded-3xl overflow-hidden"
        ref={reference}
      >
        <video className="w-full h-full object-cover" controls autoPlay loop>
          <source src='/motion.mp4' type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoModal
