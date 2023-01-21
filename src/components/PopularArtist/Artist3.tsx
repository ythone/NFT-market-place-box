import React from 'react'
import CardItemArtist from './CardItemArtist'
import Avatar5 from '../Featured_gallery/Avatar5'
import { IoArrowForward } from 'react-icons/io5'

const Artist3 = () => {
    return (
        <div className='relative h-full' style={{
            backgroundImage: `url("https://i.seadn.io/gcs/files/9f3aeca3a0056d984bc4e6c7f9572615.png?auto=format&w=384")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            width:"250px",
            height:"612px",
            display:"flex"
        }}>
            <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-transparent to-[#09090b]'>
            </div>
            <div className='absolute inset-x-0 bottom-0'>
                <div className='p-1'>
                    <div className='text-white opacity-100 flex items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <Avatar5 img_url="https://i.seadn.io/gae/0LqSq0yV68cxPGFfmloOgfuMlMGVx7VwZ2UoJjHoDcctBTA0VlNI3MBeov5k7yx6xhYy9MJQy1rR3peJazxOnr06y0gW93adOZ61?auto=format&w=384" />
                            <div className='p-2'>
                                <h3 className='text-gray-200'>Owner</h3>
                                <h1 className='text-white font-bold'>Raffildao Bachu</h1>
                            </div>
                        </div>
                        <h2 className='font-bold flex items-center'></h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Artist3