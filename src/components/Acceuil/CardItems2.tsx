import React from 'react'
import Stackavatar from './Stackavatar'
import { TbCurrencyEthereum } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";

type Props = {
  descr_left_1:string;
  descr_right_1:string;
  main_img_url:string;
  circle_img_url_1:string;
  circle_img_url_2:string;
  circle_img_url_3:string;
  transaction_hour:string;
}

const CardItems2 = ({
    descr_left_1,
    descr_right_1,
    main_img_url,
    circle_img_url_1,
    circle_img_url_2,
    circle_img_url_3,
    transaction_hour
}:Props) => {
    return (
        <div className="relative shadow-lg">
            <img className='object-cover object-top w-full' src={main_img_url} />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#5b5958] opacity-90">
            <div className='-mt-8 flex items-start'>
                <Stackavatar 
                circle_img_url_1={circle_img_url_1} 
                circle_img_url_2={circle_img_url_2} 
                circle_img_url_3={circle_img_url_3} />
            </div>
                <div className='p-1'>
                    {/*heading*/}
                    <div className='text-white opacity-100 flex items-center justify-between'>
                        <h2 className='font-bold'>{descr_left_1}</h2>
                        <h2 className='font-bold flex items-center'><span><TbCurrencyEthereum/></span>{descr_right_1}</h2>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
duration-500'>
                Place a Bid
            </button>
                    <div className='flex flex-col items-end'>
                    <h2 className='text-[#d0d0d0] font-semibold'>Ending In</h2>
                    <h2 className='font-bold text-white flex items-center'><span className='p-1'><AiOutlineClockCircle/></span>{transaction_hour}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems2