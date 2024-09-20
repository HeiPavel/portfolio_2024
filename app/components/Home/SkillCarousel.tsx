'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { skillIcons } from './skillIcons'
import 'swiper/css'

export const SkillCarousel = ({projectSkills}: {projectSkills: string[]}) => {
  const isForProject = !!projectSkills.length
  const skillsToRender = isForProject ? projectSkills.map(skill => skillIcons[skill]) : Object.values(skillIcons)

  return (
    <div className='w-full relative mt-2 z-10 flex justify-center'>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false
        }}
        slidesPerView={4}
        preventInteractionOnTransition={true}
        speed={1000}
        modules={[Autoplay]}
        className='w-80 !m-0 rounded-full before:block before:absolute before:w-6 before:top-0 before:-left-6 before:h-full before:blur-xl before:backdrop-blur-xl 
          before:z-10 dark:before:bg-white-light before:bg-black-light after:block after:absolute after:w-6 after:top-0 after:-right-6 after:h-full 
          after:blur-xl after:backdrop-blur-xl after:z-10 dark:after:bg-white-light after:bg-black-light'
        wrapperClass='!ease-linear'
      >
        {
          skillsToRender.map((Icon, index) => (
            <SwiperSlide 
              key={index}
            >
              <Icon className='size-16 text-purple contrast-150 dark:brightness-100 brightness-75 drop-shadow-swiper dark:drop-shadow-swiper-dark'/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}