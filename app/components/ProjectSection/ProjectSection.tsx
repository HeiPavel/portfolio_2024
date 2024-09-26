import { projects } from '@/app/util/projectData'
import { ProjectCard } from './ProjectCard'

export const ProjectSection = () => {
  return (
    <section className='pt-36 section relative flex flex-col items-center gap-12'>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectContent={project}
        />
      ))}
    </section>
  )
}