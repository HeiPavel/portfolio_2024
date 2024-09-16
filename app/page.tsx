import { ThemeSwitch } from './components/ThemeSwitch'

export default function Home() {
  return (
    <>
      <ThemeSwitch/>
      <div className='section h-screen'>Home</div>
      <div id='project' className='section h-[2000px]'>Project</div>
      <div id='contact' className='section h-96'>Contact</div>
    </>
  )
}