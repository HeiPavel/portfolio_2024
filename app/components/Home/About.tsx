export const About = () => {
  return (
    <article className='box-content relative z-10 max-w-72 tablet:max-w-4xl tablet:px-2 laptop:px-24 desktop:px-36 mt-16 tablet:mt-20 desktop:mt-28 flex flex-col tablet:flex-row gap-4 tablet:gap-12 laptop:gap-16'>
      <div className='pb-4 tablet:pb-0 w-full tablet:w-56 laptop:w-64 shrink-0 border-b tablet:border-r tablet:border-b-0 border-grey-border'>
        <p className='text-2xl tablet:text-3xl laptop:text-4xl dark:text-white-default text-black-dark font-bold'>About me</p>
      </div>
      <div className='basis-full text-sm laptop:text-base leading-6 text-grey-default dark:text-grey-light flex flex-col gap-4 laptop:gap-6'>
        <p>
          My name is <span className='text-purple'>Pavel Trofymovych</span>, and I'm a web developer from Odesa. 
          I like combining the logic of code and modern design to create websites and applications that make people's lives easier.
        </p>
        <p>I love taking on new challenges in the field of web development, whether it's creating a new feature or improving an existing one.</p>
        <p>I'm excited to improve my skills and get more experience in the right company.</p>
      </div>
    </article>
  )
}