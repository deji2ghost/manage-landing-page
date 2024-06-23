import { Button } from './Button'

export const FooterOne = () => {
  return (
    <div className="bg-BrightRed bg-[url('images/bg-simplify-section-mobile.svg')] bg-no-repeat bg-contain md:flex md:justify-between items-center px-4 py-16 md:px-10 lg:px-20">
        <h1 className='font-bold text-3xl text-center text-white md:text-left mb-7'>Simplify how<br /> your team works<br className='md:hidden'/> today.</h1>
        <div className='w-full md:w-[40%] md:flex md:justify-end'>
            <Button white>Get Started</Button>
        </div>
    </div>
  )
}
