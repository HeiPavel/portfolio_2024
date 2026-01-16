'use client'

import { useState, useEffect } from 'react'

const text = 'HI, I`m Pavel'
const steps = text.length + 1

export const useTextChange = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const delay = index === 0 ? 1250 : index === text.length ? 2500 : 350

    const timeoutID = setTimeout(() => {
      setIndex(prev => (prev + 1) % steps)
    }, delay)

    return () => clearTimeout(timeoutID)
  }, [index])

  return text.slice(0, index)
}