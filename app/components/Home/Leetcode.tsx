import Image from 'next/image'
import { fetchLeetcodeData } from '@/app/util/fetchLeetcodeData'
import easy from '@/assets/img/easy.png'
import medium from '@/assets/img/medium.png'
import hard from '@/assets/img/hard.png'
import leetcode from '@/assets/img/leetcode.png'

export const Leetcode = async () => {
  const data = await fetchLeetcodeData()
  const dataToRender = data.length ? data : [['--', '--'], ['--', '--'], ['--', '--']]
  const images = [easy, medium, hard]

  return (
    <div className='relative z-10 mt-64'>
      <Image
        src={leetcode}
        alt='leetcode image'
        className='tablet:w-40 laptop:w-44 desktop:w-48 h-auto'
        priority={true}
      />
      <div className='tablet:px-2 laptop:px-24 desktop:px-36 flex gap-4'>
        {dataToRender.map((stats, index) => (
          <div
            key={index}
            className='relative py-4 px-6 max-w-72 h-32 gap-6 bg-white-default dark:bg-black-light border border-grey-default dark:border-grey-light rounded-lg'
          >
            <Image
              src={images[index]}
              alt='image of the task'
              priority={true}
            />
            <p className='text-center mt-6 text-black-dark dark:text-white-default text-lg'>{stats[0]}/{stats[1]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}