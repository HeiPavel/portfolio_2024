import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiNextjsFill } from 'react-icons/ri'
import { IoLogoReact } from 'react-icons/io5'
import { BiLogoRedux } from 'react-icons/bi'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaSass } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa6'
import { IconType } from 'react-icons'
import { SiZod } from 'react-icons/si'
import {ReactComponent as PrimereactIcon} from '@/assets/icons/primereact.svg'
import {ReactComponent as MotionIcon} from '@/assets/icons/motion.svg'
import {ReactComponent as SanityIcon} from '@/assets/icons/sanity.svg'
import {ReactComponent as ReactHookFormIcon} from '@/assets/icons/react-hook-form.svg'
import {ReactComponent as ResendIcon} from '@/assets/icons/resend.svg'
import {ReactComponent as ReactEmailIcon} from '@/assets/icons/react-email.svg'

type SkillIconsType = {
  [key: string]: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const skillIcons: SkillIconsType = {
  'javascript': RiJavascriptFill,
  'typescript': BiLogoTypescript,
  'next': RiNextjsFill,
  'react': IoLogoReact,
  'react-hook-form': ReactHookFormIcon,
  'redux': BiLogoRedux,
  'html': FaHtml5,
  'css': FaCss3Alt,
  'sass': FaSass,
  'tailwind': RiTailwindCssFill,
  'git': FaGitAlt,
  'sanity': SanityIcon,
  'primereact': PrimereactIcon,
  'motion': MotionIcon,
  'zod': SiZod,
  'resend': ResendIcon,
  'react-email': ReactEmailIcon
}