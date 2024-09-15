import { ThemeSwitch } from './components/ThemeSwitch'

export default function Home() {
  return (
    <>
      <ThemeSwitch/>
      <div data-index='0' className='section h-screen'>Home</div>
      <div data-index='1' id='project' className='section h-[2000px]'>Project</div>
      <div data-index='2' id='contact' className='section h-96'>Contact</div>
    </>
  )
}