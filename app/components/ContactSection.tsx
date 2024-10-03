'use client'

import { motion, Variants } from 'framer-motion'
import { IconType } from 'react-icons'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

type LinkType = {
  Icon: IconType
  path: string
}

export const ContactSection = () => {
  const icons: LinkType[] = [
    {Icon: FaGithubSquare, path: 'https://github.com/HeiPavel'},
    {Icon: FaLinkedin, path: 'https://www.linkedin.com/in/pavlo-trofymovych-37b3a2264/'},
    {Icon: FaSquareXTwitter, path: 'https://x.com/PavelHei'},
  ]

  const link: Variants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: i => ({
      opacity: [0, 1],
      y: [-200, 0],
      transition: {
        delay: i * 0.2,
        type: 'spring',
        
      }
    })
  }

  return (
    <section
      id='contact'
      className='section pt-32 tablet:pt-48 laptop:pt-60 pb-8 tablet:pb-12 flex justify-center border-b border-grey-border dark:border-grey-light'
    >
      <div className='flex flex-col tablet:flex-row items-center gap-8 tablet:gap-0'>
        <p className='w-auto tablet:w-72 text-black-dark dark:text-white-default text-3xl tablet:text-4xl font-bold leading-8 tablet:leading-[3.5rem] border-r-0 tablet:border-r border-grey-border'>Get in touch</p>
        <div className='w-auto tablet:w-64 flex justify-end gap-8'>
          {icons.map(({Icon, path}, index) => (
            <motion.div
              key={index}
              custom={index}
              initial='hidden'
              whileInView='visible'
              variants={link}
            >
              <a
                href={path}
                target='_blank'
              >
                <Icon 
                  className='size-12 text-black-light dark:text-grey-light transition-all ease-linear duration-150 will-change-[filter,transform] 
                    hover:drop-shadow-contact dark:hover:drop-shadow-contact-dark hover:contrast-200 dark:hover:contrast-125'
                  />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}