import React, { useEffect, useRef, useState } from 'react'
import Fade from '@successtar/react-reveal/Fade'
import { CountUp } from 'use-count-up'
import { onScroll } from '~/utils/scroll'
import { data } from './data'
import Grid from '~/components/grid'

const BigNumbers = () => {
  const targetReference = useRef(null)
  const [isCountActive, setIsCountActive] = useState(false)

  useEffect(() => {
    return onScroll((scrollPosition) => {
      scrollPosition >= targetReference.current.offsetTop - targetReference.current.clientHeight
        ? setIsCountActive(true)
        : setIsCountActive(false)
    })
  }, [targetReference, isCountActive])

  return (
    <section className='big-numbers pb-10' ref={targetReference}>
      <Grid className='container gap-y-10 lg:gap-y-20'>
        <div className='col-span-full lg:col-span-6 lg:col-start-7'>
          <Fade>
            <p>{data.description}</p>
          </Fade>
        </div>
        <ul className='col-span-full flex flex-col lg:flex-row gap-5'>
          {data.numbers.map((item: any, index: any) => (
            <li className='space-y-4' key={`item-${index}`}>
              <span className='text-4xl font-semibold text-orange'><CountUp isCounting={isCountActive} duration={5} end={item.number} />+</span>
              <h3 className='text-2xl font-semibold'>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </Grid>
    </section>
  )
}

export default BigNumbers