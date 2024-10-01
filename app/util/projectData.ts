import { StaticImageData } from 'next/image'
import kovcheg from '@/assets/img/kovcheg.webp'
import wish_movie from '@/assets/img/wish_movie.webp'
import space_tourism from '@/assets/img/interplanetary-tourism.webp'
import age_calculator from '@/assets/img/age_calculator.webp'

export type ProjectType = {
  title: string
  text: string
  skills: string[]
  image: StaticImageData
  links: string[]
}

export const projects: ProjectType[] = [
  {
    title: 'Kovcheg',
    text: 'Volunteer project the "Kovcheg" shelter, which helps cats and dogs in need of care. The application allows users to view animals available for adoption, make donations, and learn more about the shelter.',
    skills: ['next', 'react', 'typescript', 'html', 'tailwind', 'sass'],
    image: kovcheg,
    links: ['https://www.kovcheg-shelter.com']
  },
  {
    title: 'Wish Movie',
    text: 'If you can\'t remember the title of the movie, but remember the names of the actors or the genre of the movie Wish Movie is exactly what you need to help you find the film. Search movies with your preference and sort results by necessary order to find the best match for your wish.',
    skills: ['react', 'redux', 'javascript', 'html', 'sass'],
    image: wish_movie,
    links: ['https://wishmovie.netlify.app/', 'https://github.com/HeiPavel/movie-finder']
  },
  {
    title: 'Space tourism',
    text: 'Space tourism it\'s multi-page website with responsive layout that will guide you into the future world of tourism. The app is made with NextJs, React, TypeScript, Material UI and SASS which was used to make style code more readable and avoid repetition in CSS rules.',
    skills: ['next', 'react', 'typescript', 'html', 'sass'],
    image: space_tourism,
    links: ['https://interplanetary-tourism.vercel.app/', 'https://github.com/HeiPavel/space-tourism-nextjs']
  },
  {
    title: 'Age Calculator',
    text: 'Simple web app created with React to calculate exact age including the amount of months and days to the current date.',
    skills: ['javascript', 'react', 'html', 'css'],
    image: age_calculator,
    links: ['https://hityourage.netlify.app/', 'https://github.com/HeiPavel/age-calculator']
  }
]