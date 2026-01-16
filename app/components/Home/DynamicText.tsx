'use client'

import { useTextChange } from '../hooks/useTextChange'

export const DynamicText = () => {
  const text = useTextChange()

  return (
    <h1 className='pt-0 md:pt-2 pr-1 h-[52px] md:h-14 desktop:h-16 text-[2.625rem] md:text-5xl desktop:text-6xl 
      font-bold border-r-8 tablet:border-r-[12px] border-purple animate-blink'
    >
      {text}
    </h1>
  )
}