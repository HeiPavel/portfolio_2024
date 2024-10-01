'use client'

import { useState, useEffect, useRef } from 'react'
import { MobileNav } from './MobileNav'
import { useResponsive } from '../hooks/useResponsive'

const linkText = ['home', 'project', 'contact']
const breakpoints = [0, 640]

export const Header = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [underlineOffset, setUnderlineOffset] = useState<[number, number]>([0,0])
  const [isLinkClicked, setIsLinkClicked] = useState(false)
  const [lastSectionShift, setLastSectionShift] = useState(-1)
  const breakpointIndex = useResponsive(breakpoints)
  const navRef = useRef<HTMLElement>(null)

  const handleClick = (index: number) => {
    setIsLinkClicked(true)
    setActiveLink(index)
  }

  useEffect(() => {
    const sections = [...document.querySelectorAll('.section')]

    const calculateLastSectionShift = () => {
      const bodyHeight = document.body.getBoundingClientRect().height
      const totalSectionsHeight = sections.reduce((sum, section) => sum += section.getBoundingClientRect().height, 0)
      const lastSectionHeight = sections[sections.length - 1].getBoundingClientRect().height
      const extraSpace = window.innerHeight - (bodyHeight - totalSectionsHeight) - lastSectionHeight
      if (lastSectionShift === 0 && extraSpace <= 0) return
      setLastSectionShift(extraSpace)
    }

    if (lastSectionShift < 0) calculateLastSectionShift()

    if (navRef.current && breakpoints[breakpointIndex] >= 640) {
      const links = navRef.current.querySelectorAll('a')
      setUnderlineOffset([links[activeLink].offsetLeft, links[activeLink].offsetWidth])
    }

    const handleScroll = () => {
      let {top, bottom} = sections[activeLink].getBoundingClientRect()
      const {innerHeight} = window
      const shift = Math.round(innerHeight * 0.5)
      if (activeLink === sections.length - 1) top -= lastSectionShift
      if (activeLink === sections.length - 2) bottom -= lastSectionShift
        
      if (top <= innerHeight - shift && bottom >= innerHeight - shift) return

      let nextIndex = activeLink
      top < 0 && bottom < innerHeight - shift ? nextIndex++ : nextIndex--

      setActiveLink(nextIndex)
    }

    if (!isLinkClicked) handleScroll()
    
    const handleScrollEnd = () => {
      if (isLinkClicked) setIsLinkClicked(false)
    }
  
    let shiftTimeoutId: NodeJS.Timeout
  
    const handleLastSectionShiftOnResize = () => {
      clearTimeout(shiftTimeoutId)
      shiftTimeoutId = setTimeout(() => {
        calculateLastSectionShift()
      }, 200)
    }
  
    if (!isLinkClicked) window.addEventListener('scroll', handleScroll)
    window.addEventListener('scrollend', handleScrollEnd)
    window.addEventListener('resize', handleLastSectionShiftOnResize)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scrollend', handleScrollEnd)
      window.removeEventListener('resize', handleLastSectionShiftOnResize)
    } 
  }, [activeLink, isLinkClicked, lastSectionShift, breakpointIndex])

  return (
    <header className='fixed z-50 top-0 h-12 w-full dark:bg-black-light bg-white-default'>
      <div className='container px-4 tablet:px-8 flex h-full justify-between items-center tablet:items-end'>
        <p className='text-sm tablet:text-lg'>{'< '}Developer<span className='text-purple'>{' />'}</span></p>
        <nav
          className='hidden relative tablet:flex gap-12 justify-between'
          ref={navRef}
        >
          {linkText.map((text, index) => (
            <a 
              className={`capitalize cursor-pointer font-bold transition-all ease-in-out duration-200 ${activeLink === index ? 'dark:text-white-default text-black-dark tablet:text-shadow-light tablet:dark:text-shadow-dark' : ''}`}
              href={`#${text !== 'home' ? text : ''}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {text}
            </a>
          ))}
          <div 
            className='absolute -bottom-px h-[3px] bg-purple transition-all duration-200 ease-linear'
            style={{
              left: `${underlineOffset[0]}px`,
              width: `${underlineOffset[1]}px`
            }}
          >
          </div>
        </nav>
        <MobileNav 
          linkText={linkText}
          activeLink={activeLink}
          handleClick={handleClick}
        />
      </div>
    </header>
  )
}