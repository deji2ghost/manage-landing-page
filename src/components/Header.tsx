import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { nav } from "../data/data"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Button } from "./Button"

export const Header = () => {
    const [ clicked, setClicked ] = useState(true)
  return (
    <div className="flex justify-between items-center relative md:px-10 px-6 lg:px-20">
        <img src="images/logo.svg"/>

        <ul className={`${clicked ? 'hidden' : 'block'} absolute top-12 w-full md:justify-center md:gap-[10px] text-DarkBlue md:bg-inherit md:w-full md:flex md:static font-normal lg:gap-[16px]`}>
            {
                nav.map(head => {
                    return(
                        <li>{head.name}</li>
                    )
                })
            }
        </ul>

        <Button started>Get Started</Button>
        <div onClick={() => setClicked(!clicked)} className="md:hidden">{clicked ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes} />}</div>
    </div>
  )
}
