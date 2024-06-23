import { Button } from "./Button"
import { fontimage, footernav, footertwo } from "../data/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FooterTwo = () => {
  return (
    <div className="bg-VeryDarkBlue p-3 md:flex md:flex-row md:items-start lg:px-20 md:justify-between md:px-10">
        <div className="flex md:hidden mt-9 justify-center">
            <input placeholder="updates in your box" className="py-1 mx-auto px-7 w-[70%] border-none outline-none rounded-full" />
            <Button small>
                Go
            </Button>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-20 md:items-start">
            <img className="text-white" src="images/logo.svg" />
            <div className="flex justify-center gap-4 text-white">
                {
                    fontimage.map(font=> {
                        return(
                            <FontAwesomeIcon icon={font.name} className="md:text-[20px]"/>
                        )
                    })
                }
            </div>
            <p className="text-center md:hidden">Copyright 2020. All Rights Reserved</p>
        </div>
        <div className="mt-8 md:mt-0">
            <div className="text-white flex justify-between md:justify-normal w-[80%] md:w-full md:w- mx-auto md:gap-60 text-[15px]">
                <ul>
                    {
                        footernav.map(foot => {
                            return(
                                <li key={foot.id} className="md:mb-2">{foot.name}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        footertwo.map(foot => {
                            return(
                                <li key={foot.id} className="md:mb-2">{foot.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        <div className="mt-5 md:hidden flex flex-col gap-9">
            <div className="flex justify-center gap-8 md:gap-0 text-VeryLightGray">
                {
                    fontimage.map(font=> {
                        return(
                            <FontAwesomeIcon icon={font.name} className="text-4xl"/>
                        )
                    })
                }
            </div>
            <img className="text-VeryLightGray mx-auto" src="images/logo.svg" />
            <p className="text-center md:hidden text-VeryLightGray">Copyright 2020. All Rights Reserved</p>
        </div>
        <div className="hidden md:flex flex-col items-end gap-16">
            <div className="md:flex gap-4">
                <input placeholder="updates in your box" className="py-2 px-7 border-none outline-none rounded-full w-full" />
                <Button small>
                    Go
                </Button>
            </div>
            <p className="text-center text-VeryLightGray text-[12px]">Copyright 2020. All Rights Reserved</p>
        </div>
    </div>
  )
}
