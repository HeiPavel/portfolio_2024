import { DynamicText } from './DynamicText'

export const TypeName = () => {
  return (
    <div className='flex flex-col items-center gap-2 md:gap-3'>
      <DynamicText/>
      <p className='text-lg tablet:text-xl md:text-2xl dark:text-grey-light text-grey-dark'>I am a frontend web developer</p>
    </div>
  )
}