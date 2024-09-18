import { ThemeSwitch } from './components/ThemeSwitch'

export default function Home() {
  return (
    <>
      <ThemeSwitch/>
      <div className='section h-screen pt-12'>Home</div>
      <div id='project' className='section h-[2000px] pt-12'>Project</div>
      <div id='contact' className='section h-96 pt-12'>Contact</div>
    </>
  )
}