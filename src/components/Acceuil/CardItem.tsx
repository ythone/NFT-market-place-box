import React from 'react'
import Stackavatar from './Stackavatar';

type props = {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    title: string;
    price: string;
    hour: string;
};


const CardItem = ({ img1, img2, img3, img4, img5, title, price, hour }: props) => {
    return (
        <div className='px-2'>
            <div className='bg-transparent shadow-lg'>
                {/*image*/}
                <img className='h-100 object-contain' alt="home-pageGraphic" src="https://i.seadn.io/gae/0mUf80tXiyX765flp14NrFEoBxflLcx-10DGF4uqFHjylDyWfGmLmfKW5zjoeGnamCLKYfWqjchceoJ6LtZ8iydxJBRK5_XIga0q?auto=format&w=384" />
                 <div className='isolate flex items-start'>
                 <Stackavatar circle_img_url_1={''} circle_img_url_2={''} circle_img_url_3={''} />
                 </div>
                <div className='p-1'>
                    {/*heading*/}
                    <div className='flex items-center justify-between'>
                        <h2 className='font-bold'>Heading</h2>
                        <h2 className='font-bold'>#.01</h2>
                    </div>

                    {/*description*/}
                    <div className='text-[#d0d0d0] flex items-center justify-between'>
                        <h2 className='font-semibold'>Current bid</h2>
                        <h2 className='font-semibold'>Ending In</h2>
                    </div>

                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold'>5.64 ETH</h2>
                    <h2 className='font-bold'>12h21m</h2>
                </div>

            </div>
        </div>
    )
}

export default CardItem