import { ThemeSwitch } from './components/ThemeSwitch'
import { Home } from './components/Home/Home'
import { ProjectSection } from './components/ProjectSection/ProjectSection'

export default function Portfolio() {
  return (
    <>
      <ThemeSwitch/>
      <Home/>
      <ProjectSection/>
      <div id='contact' className='section h-96 pt-12'>Contact</div>
    </>
  )
}