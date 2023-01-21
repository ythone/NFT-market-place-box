import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import Avatar5 from '../Featured_gallery/Avatar5';

type Props = {
    img_url: string;
    img_avatar: string;
    height:string;
}

const CardItemArtist = ({ img_url, img_avatar,height }: Props) => {
    
    return (
        <div className='relative'>
            <img className={height} alt="home-pageGraphic5" src={img_url} />
            {/*<div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-transparent to-[#09090b]'>
            </div>*/}
            {/*<div className='absolute inset-x-0 bottom-0'>
                <div className='p-1'>
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
            </div>*/}
        </div>
    )
}

export default CardItemArtist