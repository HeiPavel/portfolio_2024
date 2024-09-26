import Image from 'next/image'
import { ProjectType } from '@/app/util/projectData'
import show from '@/assets/img/show.webp'
import github from '@/assets/img/github.webp'
import { SkillCarousel } from '../SkillCarousel/SkillCarousel'

export const ProjectCard = ({projectContent: {title, text, image, skills, links}}: {projectContent: ProjectType}) => {
  const linkImages = [show, github]
  return (
    <article className='w-full'>
      <div className='min-h-80 p-4 flex flex-col items-center laptop:items-stretch laptop:flex-row gap-6 laptop:gap-12 bg-white-light dark:bg-grey-default border rounded-3xl border-grey-light dark:border-grey-border'>
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
        {links.map((link, index) => (
          <a
            href={link}
            key={index}
            target='_blank'
            className='w-1/2 tablet:w-auto'
          >
            <Image
              src={linkImages[index]}
              alt='images for links'
              className='w-48 h-auto'
              priority={true}
            />
          </a>
        ))}
      </div>
    </article>
  )
}