'use client'

import { useResponsive } from '../hooks/useResponsive'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const linkText = ['home', 'project', 'contact']
const breakpoints = [0, 640]

export const Header = () => {
  const index = useResponsive(breakpoints)

  return (
    <header className='fixed z-50 top-0 h-10 tablet:h-12 w-full dark:bg-black-light bg-white'>
      <div className='container flex h-full justify-between items-end dark:text-white text-black-dark'>
        <p className='text-sm tablet:text-lg'>{'< '}Developer<span className='text-purple'>{' />'}</span></p>
        <DesktopNav 
          linkText={linkText}
          breakpoint={breakpoints[index]}
        />
      </div>
    </header>
  )
}