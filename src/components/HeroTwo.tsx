import { heroTwo } from "../data/data"


export const HeroTwo = () => {
  return (
    <div className="md:flex mb-16 md:mb-5 md:px-10 lg:px-20">
        <div className="px-6 md:px-0 mb-9 md:mb-0">
            <h1 className="font-bold text-4xl mb-3 md:mb-4 text-center md:text-left">What's different about manage?</h1>
            <p className="text-center md:text-left">Manage provides all the functionality your team needs, Without the complexity. Our software is tailor-made for modern digital products team.</p>
        </div>
        <div>
            {
                heroTwo.map(nav => {
                    return(
                        <div key={nav.id} className="md:flex md:items-start md:gap-3 mb-8 md:mb-10">
                            <span className="bg-BrightRed md:w-[22%] lg:w-[12%] text-white text-center px-1 rounded-full hidden md:block">0{nav.id}</span>
                            <div className="pl-6 md:pl-0">
                                <div className="font-bold text-[14px] md:text-[17px] mb-2 flex bg-VeryPaleRed rounded-l-full md:bg-inherit  items-center gap-2 pr-2 md:pr-0"><span className="bg-BrightRed text-center w-[17%] py-[6px] px-2 rounded-full md:hidden">0{nav.id}</span><h1>{nav.name}</h1></div>
                                <p className="pr-6 md:pr-0">{nav.paragraph}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
