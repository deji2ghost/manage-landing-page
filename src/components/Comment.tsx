import { comment } from '../data/data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import { Button } from './Button';

export const Comment = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        className: 'flex items-center gap-4',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                dots: true,
            }
        }]
    };
  return (
    <div className='mb-5 px-3'>
        <h1 className='text-center font-bold text-[30px] mb-8 md:mb-10'>What they've said</h1>
        <div className=''>
            <Slider {...settings} >
                {
                    comment.map(com => {
                        return(
                            <div className='relative pt-16'>
                                <img src={com.img} className='w-[25%] mx-auto absolute top-1 left-0 right-0 md:top-9 lg:top-1'/>
                                <div className='bg-VeryLightGray py-16 px-5 md:mx-1 h-[250px]'>
                                    <h1 className='text-center font-bold text-xl'>{com.name}</h1>
                                    <p className='text-center'>"{com.paragraph}"</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
        <div className='mt-16 md:mt-7'>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}
