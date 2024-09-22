'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { skillIcons } from './skillIcons'

export const SkillCarousel = ({projectSkills}: {projectSkills: string[]}) => {
  const isForProject = !!projectSkills.length
  const skillsToRender = isForProject ? projectSkills.map(skill => skillIcons[skill]) : Object.values(skillIcons)

  return (
    <div className='w-full flex justify-center'>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false
        }}
        slidesPerView={'auto'}
        preventInteractionOnTransition={true}
        speed={2500}
        spaceBetween={16}
        slidesOffsetBefore={16}
        modules={[Autoplay]}
        className='relative overflow-hidden w-64 md:w-80 rounded-full before:block before:absolute before:w-6 before:top-0 before:-left-6 before:h-full before:blur-xl before:backdrop-blur-xl 
          before:z-10 dark:before:bg-white-light before:bg-black-light after:block after:absolute after:w-6 after:top-0 after:-right-6 after:h-full 
          after:blur-xl after:backdrop-blur-xl after:z-10 dark:after:bg-white-light after:bg-black-light'
        wrapperClass='size-full relative flex transition-transform ease-linear'
      >
        {
          skillsToRender.map((Icon, index) => (
            <SwiperSlide 
              key={index}
              style={{
                backfaceVisibility: 'hidden'
              }}
            >
              <Icon className='size-12 md:size-16 text-purple contrast-150 dark:brightness-100 brightness-75 drop-shadow-swiper dark:drop-shadow-swiper-dark'/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}