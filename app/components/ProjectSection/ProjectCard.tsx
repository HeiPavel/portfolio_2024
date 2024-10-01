'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent, Variants } from 'framer-motion'
import { ProjectType } from '@/app/util/projectData'
import { SkillCarousel } from '../SkillCarousel/SkillCarousel'
import {ReactComponent as Show} from '@/assets/icons/show.svg'
import {ReactComponent as Github} from '@/assets/icons/github.svg'

export const ProjectCard = ({projectContent: {title, text, image, skills, links}}: {projectContent: ProjectType}) => {
  const linkIcones = [Show, Github]
  const [direction, setDirection] = useState<'top' | 'bottom'>('bottom')
  const cardRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: cardRef,
    offset: ['0.5 0.1', '0.5 0.9']
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && latest < 0.9) return
    if (latest <= 0.1) setDirection('top')
    if (latest >= 0.9) setDirection('bottom')
  })

  const variants: Variants = {
    top: {
      opacity: 0,
      y: -200
    },
    bottom: {
      opacity: 0,
      y: 200
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div 
      className='w-full'
      ref={cardRef}
      initial={direction}
      whileInView='visible'
      variants={variants}
      transition={{
        duration: 0.7,
        ease: 'easeInOut'
      }}
    >
      <div 
        className='min-h-80 p-4 flex flex-col items-center laptop:items-stretch laptop:flex-row gap-6 
          laptop:gap-12 bg-white-light dark:bg-grey-default border rounded-3xl border-grey-light dark:border-grey-border'
      >
        <Image
          src={image}
          alt='project card image'
          priority={true}
          className='w-full max-w-md laptop:w-96 aspect-[16/11] laptop:max-h-72 rounded-3xl object-cover'
        />
        <div className='max-w-xl flex flex-col justify-between gap-14'>
          <div>
            <h2 className='text-2xl tablet:text-3xl font-bold text-purple contrast-150 dark:brightness-100 brightness-75'>{title}</h2>
            <p className='mt-6 tablet:mt-8 text-grey-default dark:text-grey-light'>{text}</p>
          </div>
          <div>
            <div className='flex flex-col items-center tablet:flex-row gap-5 tablet:gap-0'>
              <p className='flex items-center tablet:h-12 md:h-16 text-xl text-black-dark dark:text-white-default text-nowrap'>Built With</p>
              <SkillCarousel projectSkills={skills}/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-2'>
        {linkIcones.slice(0, links.length).map((Icon, index) => (
          <a
            href={links[index]}
            key={index}
            target='_blank'
            className='w-1/2 tablet:w-auto'
          >
            <Icon className='w-full tablet:w-48 transition-all ease-linear duration-150 will-change-[filter,transform] hover:scale-105 hover:drop-shadow-link dark:hover:drop-shadow-link-dark'/>
          </a>
        ))}
      </div>
    </motion.div>
  )
}