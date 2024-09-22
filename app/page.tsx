import { ThemeSwitch } from './components/ThemeSwitch'
import { Home } from './components/Home/Home'

export default function Portfolio() {
  return (
    <>
      <ThemeSwitch/>
      <Home/>
      <div id='project' className='section h-[2000px] pt-12'>Project</div>
      <div id='contact' className='section h-96 pt-12'>Contact</div>
    </>
  )
}