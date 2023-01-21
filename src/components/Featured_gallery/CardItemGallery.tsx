import React from 'react'
import Avatar5 from './Avatar5'
import { IoArrowForward } from "react-icons/io5";

type Props = {
    main_img_url1: string;
    main_img_url2: string;
    main_img_url3: string;
    main_img_url4: string;
    img_avatar: string;
}

const CardItemGallery = ({ main_img_url1, main_img_url2, main_img_url3, main_img_url4, img_avatar }: Props) => {
    return (
        <div className='p-2 bg-[#5b5958] shadow-lg'>
            {/*image*/}
            <div className='flex flex-row'>

                <div className='basis-2/3 p-3'>
                    <img className='h-full' alt="home-pageGraphic1" src={main_img_url1} />
                </div>
                <div className='basis-1/3 p-3'>
                    <div className='pb-3'>
                        <img className='object-fill w-40 h-50' alt="home-pageGraphic2" src={main_img_url2} />
                    </div>
                    <div className='pb-3'>
                        <img className='object-fill w-40 h-50' alt="home-pageGraphic3" src={main_img_url3} />
                    </div>
                    <div className=''>
                        <img className='object-fill w-60 h-50' alt="home-pageGraphic4" src={main_img_url4} />
                    </div>
                </div>
            </div>
            <div className='p-1'>
                {/*heading*/}
                <div className='text-white opacity-100 flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <Avatar5 img_url={img_avatar} />
                        <div className='p-2'>
                            <h3 className='text-[#3c3b40]'>Owner</h3>
                            <h1 className='text-white font-bold'>Raffildao Bachu</h1>
                        </div>
                    </div>
                    <h2 className='font-bold flex items-center'><IoArrowForward /></h2>
                </div>
            </div>
        </div>
    )
}

export default CardItemGallery