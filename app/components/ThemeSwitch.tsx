'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import sun from '@/assets/icons/sun.png'
import moon from '@/assets/icons/moon.png'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  
  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <div className='absolute top-12 left-8 tablet:top-20 tablet:left-12 flex tablet:flex-col gap-3 tablet:gap-5 z-50'>
      <Image
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUfSURBVHgB1ZpJTxRBFMffLIGQDDA4XODieFBOuB9cDg4XNdEY45KYeBA/gfgJaD6B+AlAE+NBY4zx4HJgPBAv7HjBC+MFLyADTEIgLL5/UzXp6eme7q6uhplf0ullqiv1n/fqvVo6RprZ2NjI8elMLBY7u7+/jyPN11lrGX5W4GcFvizykedjtrW1NU8aiZEGIIYb+oQbfJdv06RGkev4yHW80iFSWRgsUSqVBvjyGamLcURY00ilUq9IESVhEMTCBkmzIDthBAYStrm5md3Z2RnhyxwdIhCYSCT6WlpaCn7fifstCCuxqGk6ZFGAvQN/6PTa2tqA33d8WYyDg8GnQaoPhji4GF6FPIWtr6+PIuJRHcHtGeV+97RmmVo/1qMoiZc41z4G96tXUYD7Xb/oIo44WkyE8xfUAOzt7T1vb28ftj+vEiZCOqJfpDlKI8VkMnnOngqqXHF3d3eMIhK1tbVFEZAWubWCCmEcLPqRMygCJicm6PXICK2srFAE5Ow5rkJYPB6PLFdxRzfP29FYzWz76upq2dPKwqK01iGR5r72TN6UhYWxFtxLlyVgWWldBcruGBeV5VSttbS0RB/evaPPnz7VFNd7+jSd7OkhHg65lsEf9OH9e/NQJC0mugfCwiTizkyGMnygUbXEoUyur49SLsKs7/f29pIqUouZx1jlKoUI8WgMGoXGnb94kS7wYW/0yvKyed3U1ESZzs4qy8HqKId3z9veD0iR6+6ICdONUUggbn5+nnrY3aRVfvH9/NwclRz6TFd3N11jC0qBhcVF2t7eplP8vgb6IAyRZJg0gkT8I5+nP9xYLzRYyIkB9LEcacavKIDEDcvqBCtkEKZ1+PR7YcG3KAnE6UzcWPaL607KaGRQIEqn1bCCFrcvZoZhmSNfSTG5wtK6gKYkKQCrWEcHSL7IUyX1EUNFfbDeskgPIJvNUvbECQpCYGFowJTN3Zo5N12+etUM12GASzY1N1f1uX+c3yIXhrxz686dimcYfQAk3zBAFLj/4AGtWywo6w9CUmwQZIO81M3JNchzP3RZ3kWCT9UYU3oBTQgeRdIE/vEuRXGaRhwmWDmGsBnSiMooAu6tUxhTRB7TKgzueOnKFd/lIeq2rc9qII/gMUuaQfgHU5OTNUcUSBHXb94M1Z9cmNEybQGYcnz/8sV0RelWyGsI3ZiyyEWcZu6Hx1gQyljd7+f4uFnm+o0b5eioiDltMcO92EnsJ0XcJpmwBKYmEpmn3Or4y7Nx1APXVBXHOj7iHBc3yjuHSNhS1AWLtZyo1VhYSs7Ev339SqpgTR9nU5jY81UO+xh5eM2rMOF8++aN67ALomGpjEIyliB/sZYfuLaOPDDZNCggiGqPHj/2LAdLlMQKlFuwgLh7Dx+SKrzSZpSv5QUvE7+kEFY7amAt6151WVhHR0eRdy6GqEGxWsu8t96I7Zg8RQD6znEeobfqz1lV1gJV20i8/p3lpeKG2UZiUUXeITrHHlewPq/aRkKBRnJJDu+GXRRw3KoVLmlQ/WOwa790+qFhN9fZBUfb2tpcN9cb8nMIL1HA88scrqCf6sstDS9RwNcnR+zHQ9idpyNM4Ih+fBpAW/yUD/SRGFJBIpEY07kW6ZM8j4yeOkU/N5Q+68O2Lp8GoxYIKyGcu0W+WoT6wjQqgULQMMavGOqRAro+nb0mJqp3uUFKIxaI4fEeJryjcuoRBi3CrEAkn87SwfZUGpseLh87wyozYjFpRocYK/8BAi2HMCpE+ycAAAAASUVORK5CYII='
        width={40}
        height={40}
        className='size-10 tablet:size-12'
        sizes="40x40"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
      <Image
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASLSURBVHgB1Zq9TttQFMdPnKgIiUAoXWApLGWkHywVA2FoxVAh3qD0CUqfgPAEhScoDEgdUIVQB9QFGFAXWmCEDmSCBYr5kBCIj/7/ro0Sx4mde2+c5CdZdhzH8j/n3HPPOdcJMcz5+XkWu4FEIvH8/v6eWwbHvYXX4Fwe5/I4tLGtYdtJp9NrYpCEGIBi8KDv8cDj+JgRNWzcYwn3mDchUlkYLXFxcTGJw4+iLiYQ15q5tra2eVFESRgFQdiUGBbkR0dgVcIuLy97b25uvuAwKzFCgclkcqS1tTUf9TdW1AtpJYjakphFEXgH/9Ct09PTyai/iWQxBIccdlPSGEwjuOTCLgoVdnZ2NseIJw0EnmcO4+5DxWsqfdmIojzCxJUdY3S/RhVFMO4m3CESSKDF3HD+WZqAu7u7Tx0dHTP+8yXC3JDO6FfTOcogdiqVeuGfCkpc8fb2dlWaRxTJuHNrEUXCECwmOGdI85H1z3FFroixtW9S2NXVlRwfH8s19r19fVJjbFiur7OzkxWDpLyzJq11cHAgvzc3H0S9HhqSGMhgrDEhn+aHB4uZsBbCr6yvrsohhHk86++X4ZERiQkbWUknDyz3gbK6omid78vLRaLIq8FBiZGMW+j+F6Y7EXuiLmCxQp5iXLWl0xInnhZHmFv5KkH3+7Gy4owlPz09PRI3nhbLNZ3yvPULQcJvKY+uri6pA4470mIDogij35/dXWlABigsK4rshYi6vr6WesAOGYUpu2GYtc7LuGitYdvPUg3zB76wHkR+f1/qATtolr+ZGZW/CPFhcE47jPAHmIaaIjdz/FwFhPcgGDXrgbKwqBy6eWPcKAtLV5FR0GrVimPE3dOYShg88qJAtakSxX1bXAyNlHTxnxsbTjKdVkzHqCmFgWaLAk+QVTxqaQlMpcpxfHQkXxcWpBupFjdmJi24B8WgunCiaGGw6VZMydg5prBtxn2pEorig6lEvSjRkuWOBjZdcVsUeVnDkkRT2BqDx44o0uO6lGkoSvO+25a7yKY0zkgW1XHaYM3Fe2kWp6yi171Cc0kUYXR8MzrqjDldGEje4l46xSmGlqPFKzSVVw4Jg8i7sTEty/G3vMdjzRqOPX1n753A/HIimo1SFpycr6qdWDme6NK6bQTOX+3t7U6fr1AY179yYgCvAK0kkG5H63A8mQpAsNaEt6z7IOzk5IR9OdYZRtvbFMlKwEua6XLcutwJ3hSF1iJFnWC2iS3LaopVFj+F1nI++y+AS3JRIitNhN9apCS7R/+bq4TK81rcQJSNFaKSVnOJMDT181hMm5YmAS6Y4zP7zwfWY+4KYU4anxwC0WzQF027uA4XnMO4Kru43pSvQ4SJIqGtAdxgQhrLLXNhokikngf8eJqr81LHaMnoh90knyXK9VW9JIbspDeZTK6q9iI1WOM0FBT9yqH0Wh+XdbGbqrVAWonhvFzkq4TWG6a1EugKmoGVZr3F8mox9ersMF8BwuE4HkgpiaYY5Kl8dXaOFbBoYkRYIRSJHbteWWwZLnqUednZdjtkbCZtmxBTyD8HwTk5HzXkfwAAAABJRU5ErkJggg=='
        width={40}
        height={40}
        className='size-10 tablet:size-12'
        sizes="40x40"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    </div>
  )

  return (
    <div className='absolute top-12 left-8 tablet:top-20 tablet:left-12 flex tablet:flex-col gap-3 tablet:gap-5 z-50'>
      <Image
        src={sun}
        alt='sun image'
        className={`size-10 tablet:size-12 ${resolvedTheme === 'dark' ? 'scale-75 grayscale invert' : ''} transition-all ease-linear cursor-pointer`}
        onClick={() => setTheme('light')}
        priority={true}
      />
      <Image
        src={moon}
        alt='moon image'
        className={`size-10 tablet:size-12 ${resolvedTheme === 'light' ? 'scale-75 grayscale invert' : ''} transition-all ease-linear cursor-pointer`}
        onClick={() => setTheme('dark')}
        priority={true}
      />
    </div>
  )
}