'use client'
import { useState, useEffect, useRef, SyntheticEvent } from 'react'

export const DesktopNav = ({linkText, breakpoint}: {linkText: string[], breakpoint: number}) => {
  const [isLinkClicked, setIsLinkClicked] = useState(false)
  const [lastSectionShift, setLastSectionShift] = useState(-1)
  const navRef = useRef<HTMLElement>(null)
  const underlineRef = useRef<HTMLDivElement>(null)

  const setUnderline = (link: HTMLAnchorElement) => {
    if (!underlineRef.current) return
    
    underlineRef.current.style.left = `${link.offsetLeft}px`
    underlineRef.current.style.width = `${link.offsetWidth}px`
  }

  const handleClick = (event: SyntheticEvent) => {
    setIsLinkClicked(true)
    const links = [...event.currentTarget.querySelectorAll('a')]
    
    if (document.activeElement instanceof HTMLAnchorElement) {
      links.forEach(link => {
        if (link === document.activeElement) {
          link.classList.add('active')
          setUnderline(link)
        } else link.classList.remove('active')
      })
    }
  }
  
  useEffect(() => {
    if (!navRef.current || breakpoint < 640) return
    
    const links = [...navRef.current.querySelectorAll('a')]
    const sections = [...document.querySelectorAll('.section')]

    const calculateLastSectionShift = () => {
      const bodyHeight = document.body.getBoundingClientRect().height
      const totalSectionsHeight = sections.reduce((sum, section) => sum += section.getBoundingClientRect().height, 0)
      const lastSectionHeight = sections[sections.length - 1].getBoundingClientRect().height
      const extraSpace = window.innerHeight - (bodyHeight - totalSectionsHeight) - lastSectionHeight
      if (lastSectionShift === 0 && extraSpace <= 0) return
      setLastSectionShift(extraSpace)
    }

    if (lastSectionShift < 0) {
      for (const link of links) {
        if (link.classList.contains('active')) setUnderline(link)
      }
      calculateLastSectionShift()
    }
    
    const handleScroll = () => {
      const activeLinkIndex = links.findIndex(link => link.classList.contains('active'))
      let {top, bottom} = sections[activeLinkIndex].getBoundingClientRect()
      const {innerHeight} = window
      const shift = Math.round(innerHeight * 0.5)
      if (activeLinkIndex === sections.length - 1) top -= lastSectionShift
      if (activeLinkIndex === sections.length - 2) bottom -= lastSectionShift
        
      if (top <= innerHeight - shift && bottom >= innerHeight - shift) return

      let nextIndex = activeLinkIndex
      top < 0 && bottom < innerHeight - shift ? nextIndex++ : nextIndex--

      links[activeLinkIndex].classList.remove('active')
      links[nextIndex].classList.add('active')
      setUnderline(links[nextIndex])
    }

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
  }, [isLinkClicked, lastSectionShift, breakpoint])

  return (
    <nav 
      className='hidden relative tablet:flex gap-12 justify-between'
      ref={navRef}
      onClick={handleClick}
    >
      {linkText.map((text, index) => (
        <a 
          className={`${text === 'home' ? 'active' : ''} capitalize cursor-pointer font-bold transition-all ease-in-out duration-200`}
          href={`#${text !== 'home' ? text : ''}`}
          key={index}
        >
          {text}
        </a>
      ))}
      <div 
        ref={underlineRef}
        className='absolute -bottom-px h-[3px] bg-purple transition-all duration-200 ease-linear'
      >
      </div>
    </nav>
  )
}