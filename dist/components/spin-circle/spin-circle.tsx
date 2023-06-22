import classNames from 'classnames'
import React from 'react'

import circle from '~/assets/images/circle.png'
import Image from '../image/image'

interface Properties {
  top?: boolean
  bottom?: boolean
  quarter?: boolean
}

const SpinCircle = ({
  top = false,
  bottom = false,
  quarter = false,
} :Properties) => {
  return (
    <Image src={circle} width={116} height={116} alt='circle' className={classNames('animate-spin-slow absolute -right-[1.25rem] lg:-right-[3.125rem] w-[3.75rem] lg:w-[6.25rem] h-[3.75rem] lg:h-[6.25rem] z-10', {
      '-top-[1.25rem] lg:-top-[3.125rem]': top,
      '-bottom-[1.25rem] lg:-bottom-[3.125rem]': bottom,
      'top-24': quarter,
    })} />
  )
}

export default SpinCircle