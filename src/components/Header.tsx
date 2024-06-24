import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { nav } from "../data/data"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Button } from "./Button"

export const Header = () => {
    const [ clicked, setClicked ] = useState(true)

    const handleClick = () => {
        if(clicked){
            setClicked(!clicked)
            document.body.style.overflowY = 'hidden'
        }else{
            setClicked(!clicked)
            document.body.style.overflowY = 'visible'
        }
    }
  return (
    <div className="flex justify-between items-center relative md:px-10 px-6 lg:px-20">
        <img src="images/logo.svg"/>

        <div onClick={handleClick} className={`${clicked ? 'hidden' : 'visible'} absolute left-0 -top-4 bg-opacity-20 md:hidden w-full h-screen bg-DarkBlue `}></div>
        <ul className={`${clicked ? '-translate-y-[350px] transform-all' : 'translate-y-0 transform-all'} ease-in-out duration-300 transition-all absolute flex flex-col gap-5 text-[20px] font-semibold top-12 w-[90%] mx-auto right-0 left-0 py-7 px-4 md:p-0 text-center md:text-balance md:justify-center md:gap-[10px] text-DarkBlue md:bg-inherit md:w-full md:flex md:flex-row md:text-[16px] md:static md:font-normal lg:gap-[16px] bg-VeryLightGray`}>
            {
                nav.map(head => {
                    return(
                        <li key={head.id}>{head.name}</li>
                    )
                })
            }
        </ul>

        <Button started>Get Started</Button>
        <div onClick={handleClick} className="md:hidden text-[35px] ease-in-out duration-300 transition-all z-10">{clicked ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes} />}</div>
    </div>
  )
}
