'use client'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const linkText = ['home', 'project', 'contact']

export const Header = () => {
  return (
    <header className='fixed z-50 top-0 h-10 tablet:h-12 w-full dark:bg-black-light bg-white'>
      <div className='container flex h-full justify-between items-end dark:text-white text-black-dark'>
        <p className='text-sm tablet:text-lg'>{'< '}Developer<span className='text-purple'>{' />'}</span></p>
        <DesktopNav linkText={linkText}/>
      </div>
    </header>
  )
}