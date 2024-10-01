import Image from 'next/image'
import { unstable_cache } from 'next/cache'
import { fetchLeetcodeData } from '@/app/util/fetchLeetcodeData'
import easy from '@/assets/img/easy.png'
import medium from '@/assets/img/medium.png'
import hard from '@/assets/img/hard.png'
import leetcode from '@/assets/img/leetcode.png'

const getCachedData = unstable_cache(
  fetchLeetcodeData,
  ['leetcodeData'],
  {
    revalidate: 86400
  }
)

export const Leetcode = async () => {
  const data = await getCachedData()
  const dataToRender = data.length ? data : [['--', '--'], ['--', '--'], ['--', '--']]
  const images = [easy, medium, hard]

  return (
    <>
      <div className='flex justify-center w-full max-w-[784px]'>
        <div className='mx-14 tablet:mx-60 basis-[480px] tablet:basis-72 aspect-[13/11]'></div>
      </div>
      <div className='relative z-10 pt-8 ss:pt-5 sm:pt-1'>
        <Image
          src={leetcode}
          alt='leetcode image'
          className='mx-auto tablet:mx-0 w-48 tablet:w-40 laptop:w-44 desktop:w-48 h-auto'
          priority={true}
        />
        <div className='tablet:px-2 laptop:px-24 desktop:px-36 flex flex-col tablet:flex-row gap-2 tablet:gap-3 md:gap-4'>
          {dataToRender.map((stats, index) => (
            <div
              key={index}
              className='relative py-4 px-6 max-w-72 h-24 md:h-32 bg-white-default dark:bg-black-light border border-grey-default dark:border-grey-light rounded-lg'
            >
              <Image
                src={images[index]}
                alt='image of the task'
                priority={true}
              />
              <p className='text-center mt-2 tablet:mt-4 md:mt-6 text-black-dark dark:text-white-default text-sm tablet:text-base md:text-lg'>{stats[0]}/{stats[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}