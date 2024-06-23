import { ReactNode } from "react"

type Name={
    children: ReactNode,
    white?: boolean,
    small?: boolean,
    heroone?: boolean,
    started?: boolean
}
export const Button = ({ children, white, small, started,heroone }: Name) => {
    console.log(children, white, small)
    const buttonClass = white ? 'bg-VeryLightGray w-[50%] item-center mx-auto md:mx-0 md:p-2 py-[9px] text-BrightRed rounded-full text-center outline-none border-none md:w-[45%]' : started ? 'bg-BrightRed w-[50%] mx-auto md:flex justify-center py-[9px] text-VeryLightGray rounded-full text-center outline-none border-none hidden md:w-[30%] md:items-center md:py-2' : small ? 'bg-BrightRed w-[18%] md:w-[40%] mx-auto flex justify-center py-[9px] text-VeryLightGray rounded-full text-center outline-none border-none' : heroone ? 'bg-BrightRed w-[50%] mx-auto flex justify-center md:mx-0 py-[9px] md:py-1 text-VeryLightGray rounded-full text-center outline-none border-none md:w-[50%]' : 'bg-BrightRed w-[50%] mx-auto flex justify-center py-[9px] md:py-2 text-VeryLightGray rounded-full text-center outline-none border-none md:w-[19%]'
  return (
    <div className={buttonClass}>
        {children}
    </div>
  )
}
