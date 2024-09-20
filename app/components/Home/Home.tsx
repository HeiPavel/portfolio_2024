import Image from 'next/image'
import heroBackground from '@/assets/img/pavlo_hero_bg.png'
import { TypeName } from './TypeName'
import { SkillCarousel } from './SkillCarousel'

export const Home = () => {
  return (
    <section className='section relative min-h-screen flex flex-col items-center text-black-dark dark:text-white-default'>
      <div className='absolute top-24 flex justify-center'>
        <svg className='absolute z-0 w-[85%] h-full dark:text-grey-default text-white-light' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          <circle fill='currentColor' cx='50' cy='50' r='50' />
        </svg>
        <Image
          src={heroBackground}
          alt='Hero background image'
          className='relative z-1'
          priority={true}
         />
      </div>
      <TypeName/>
      <SkillCarousel projectSkills={[]} />
    </section>
  )
}