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
    <Image src={circle} width={116} height={116} alt='circle' className={classNames('animate-spin-slow absolute -right-[3.125rem] w-[6.25rem] h-[6.25rem] z-10', {
      '-top-[3.125rem]': top,
      '-bottom-[3.125rem]': bottom,
      'top-24': quarter,
    })} />
  )
}

export default SpinCircle