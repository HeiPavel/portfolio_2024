'use client'
import { useState, useEffect, useRef, SyntheticEvent } from 'react'

const linkText = ['home', 'project', 'contact']

export const Header = () => {
  const [isLinkClicked, setIsLinkClicked] = useState(false)
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
    if (!navRef.current || window.innerWidth < 640) return
    
    const links = navRef.current.querySelectorAll('a')

    for (const link of links) {
      if (link.classList.contains('active')) setUnderline(link)
    }

    const sections = document.querySelectorAll('.section')
    const handleScroll = () => {
      for (const section of sections) {
        const {top, height} = section.getBoundingClientRect()
        const multiplier = Math.floor((height / window.innerHeight) * 10) > 7 ? 0.5 : 0.05;
        const mid = Math.round(window.innerHeight * multiplier)

        if (window.innerHeight - top >= mid) {
          const activeIndex = Number(section.getAttribute('data-index'))

          links[activeIndex].classList.add('active')
          setUnderline(links[activeIndex])

          links.forEach((link, index) => {
            if (link.classList.contains('active') && activeIndex !== index) {
              link.classList.remove('active')
            } 
          })
        }
      }
    }

    const handleScrollEnd = () => {
      if (isLinkClicked) setIsLinkClicked(false)
    }

    if (!isLinkClicked) window.addEventListener('scroll', handleScroll)
    window.addEventListener('scrollend', handleScrollEnd)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scrollend', handleScrollEnd)
    } 
  }, [isLinkClicked])

  return (
    <header className='fixed z-50 top-0 h-10 tablet:h-12 w-full dark:bg-black-light bg-white'>
      <div className='container flex h-full justify-between items-end dark:text-white text-black-dark'>
        <p className='text-sm tablet:text-lg'>{'< '}Developer<span className='text-purple'>{' />'}</span></p>
        <nav 
          className='hidden relative tablet:flex gap-12 justify-between'
          ref={navRef}
          onClick={handleClick}
        >
          {linkText.map((text, index) => (<a 
              className={`${text === 'home' ? 'active' : ''} capitalize cursor-pointer font-bold transition-all ease-in-out duration-200`}
              href={`#${text !== 'home' ? text : ''}`}
              key={index}
            >
              {text}
            </a>))}
            <div 
              ref={underlineRef}
              className='absolute -bottom-px h-[3px] bg-purple transition-all duration-200 ease-linear'
            ></div>
        </nav>
      </div>
    </header>
  )
}