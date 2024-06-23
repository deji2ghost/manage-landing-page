import { Button } from "./Button"


export const HeroOne = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-between items-center px-6 mb-16 md:px-10 md:mt-9 lg:px-20'>
        <div className="">
            <h1 className="font-bold text-3xl text-center mb-1 md:mb-4 md:text-left">Bring everyone<br /> together to build<br /> better product.</h1>
            <p className="mb-3 md:mb-4 text-center md:text-left">Manage makes it simple for software teams<br className="hidden md:hidden lg:flex"/> to plan day-to-day tasks while keeping the<br className="hidden md:hidden lg:flex"/> larger-team goals in view.</p>
            <Button heroone>Get Started</Button>
        </div>
        <div className="my-3 md:my-0 ">
            <img src='images/illustration-intro.svg' className="md:w-full" />
        </div>
    </div>
  )
}
