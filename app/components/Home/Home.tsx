import Image from 'next/image'
import heroBackground from '@/assets/img/pavlo_hero_bg.png'
import { TypeName } from './TypeName'
import { SkillCarousel } from '../SkillCarousel/SkillCarousel'
import { Leetcode } from './Leetcode'
import { About } from './About'

export const Home = () => {
  return (
    <section className='section relative min-h-screen flex flex-col items-center text-black-dark dark:text-white-default'>
      <div className='absolute top-64 tablet:top-24 flex justify-center'>
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
      <div className='relative mt-16 tablet:mt-36 pt-1 laptop:pt-5 z-10 h-52 flex flex-col items-center gap-6 tablet:gap-2'>
        <TypeName/>
        <SkillCarousel projectSkills={[]} />
      </div>
      <Leetcode/>
      <About/>
    </section>
  )
}