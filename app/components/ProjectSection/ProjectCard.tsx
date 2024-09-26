import Image from 'next/image'
import { ProjectType } from '@/app/util/projectData'
import show from '@/assets/img/show.webp'
import github from '@/assets/img/github.webp'
import { SkillCarousel } from '../SkillCarousel/SkillCarousel'

export const ProjectCard = ({projectContent: {title, text, image, skills, links}}: {projectContent: ProjectType}) => {
  const linkImages = [show, github]
  return (
    <article className='w-full'>
      <div className='min-h-80 p-4 flex gap-12 bg-white-light dark:bg-grey-default border rounded-3xl border-grey-light dark:border-grey-border'>
        <Image
          src={image}
          alt='project card image'
          priority={true}
          className='w-96 h-auto rounded-3xl object-cover'
          style={{
            transform: 'translate3d(0, 0, 1px)'
          }}
        />
        <div className='w-[600px]'>
          <h2 className='text-3xl font-bold text-purple contrast-150 dark:brightness-100 brightness-75'>{title}</h2>
          <p className='mt-8 text-grey-default dark:text-grey-light'>{text}</p>
          <div className='mt-14'>
            <div className='flex'>
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