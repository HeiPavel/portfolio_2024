'use client'

import { useState } from 'react'
import { Drawer } from '@mui/material'
import { IoMenu } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'

type Props = {
  linkText: string[]
  activeLink: number
  handleClick: (index: number) => void
}

export const MobileNav = ({linkText, activeLink, handleClick}: Props) => {
  const [open, setOpen] = useState(false)

  const handleClose = (index:number) => {
    setOpen(false)
    handleClick(index)
  }

  const navMenu = () => {
    return (
      <nav className='relative px-2.5 top-20 flex flex-col gap-2.5 dark:text-white-default text-black-light font-bold'>
        {linkText.map((text, index) => (
          <a 
            className={`${activeLink === index ? 'text-purple' : ''} capitalize cursor-pointer font-bold h-9 rounded flex justify-center items-center bg-white-light dark:bg-grey-default`}
            href={`#${text !== 'home' ? text : ''}`}
            key={index}
            onClick={() => handleClose(index)}
          >
            {text}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <div className='block tablet:hidden'>
      <IoMenu 
        className={`size-8 ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
      />
      <MdClose
        className={`size-8 text-2xl ${!open ? 'hidden' : ''}`}
        onClick={() => setOpen(false)}
      />
      <Drawer
        open={open}
        className='w-full !z-30 bg-transparent'
        anchor='right'
        children={navMenu()}
        aria-hidden={false}
        sx={{
          '.MuiBackdrop-root': {
            backgroundColor: 'transparent'
          },
          '.MuiPaper-root': {
            width: '100%',
            backgroundColor: 'rgba(12, 12, 12, 0.35)',
            backdropFilter: 'blur(1px)'
          }
        }}
      />
    </div>
  )
}