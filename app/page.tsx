import { ThemeSwitch } from './components/ThemeSwitch'
import { Home } from './components/Home/Home'
import { ProjectSection } from './components/ProjectSection/ProjectSection'
import { ContactSection } from './components/ContactSection'

export const revalidate = 120

export default function Portfolio() {
  return (
    <>
      <ThemeSwitch/>
      <Home/>
      <ProjectSection/>
      <ContactSection/>
    </>
  )
}