'use client'
import { useState, useEffect } from "react"

export const TypeName = () => {
  const fullName = 'HI, I`m Pavel'
  const [name, setName] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (index !== fullName.length) {
        setIndex(index + 1)
        setName(name + fullName[index])
      } else {
        setIndex(1)
        setTimeout(() => {
          setName(fullName[0])
        }, 3000)
      }
    }, 300)
  }, [name])

  return (
    <div className='mt-40 pt-1 z-10 flex flex-col items-center gap-4'>
      <h1 className='pt-2 pr-1 text-4xl tablet:text-5xl desktop:text-6xl font-bold border-r-[12px] border-purple animate-blink'>{name}</h1>
      <p className='text-2xl dark:text-grey-light text-grey-dark'>I am a frontend web developer</p>
    </div>
  )
}