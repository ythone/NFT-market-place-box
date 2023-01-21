import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbCurrencyEthereum } from 'react-icons/tb'
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
    descr_left_1: string;
    descr_right_1: string;
    main_img_url: string;
    transaction_hour: string;
}


const CardIemSuscribe = ({ main_img_url, descr_left_1, descr_right_1, transaction_hour }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 760px)');
    const display_according_to_screen = () => {
        if (isAboveMediumScreens == true) {
            <div className="relative shadow-lg h-72">
                <img className='object-cover object-top h-72 w-72' src={main_img_url} />

                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#5b5958] opacity-90">

                    <div className='p-1'>
                        {/*heading*/}
                        <div className='text-white opacity-100 flex items-center justify-between'>
                            <h2 className='font-bold'>{descr_left_1}</h2>
                            <h2 className='font-bold flex items-center'><span><TbCurrencyEthereum /></span>{descr_right_1}</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
duration-500'>
                            Place a Bid
                        </button>
                        <div className='flex flex-col items-end'>
                            <h2 className='text-[#d0d0d0] font-semibold'>Ending In</h2>
                            <h2 className='font-bold text-white flex items-center'><span className='p-1'><AiOutlineClockCircle /></span>{transaction_hour}</h2>
                        </div>
                    </div>
                </div>
            </div>
        }

        return (
            <div className="relative shadow-lg text-sm">
                <img className='object-cover object-top h-48 w-48' src={main_img_url} />

                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#5b5958] opacity-90">

                    <div className='p-1'>
                        {/*heading*/}
                        <div className='text-white opacity-100 flex items-center justify-between'>
                            <h2 className='font-bold'>{descr_left_1}</h2>
                            <h2 className='font-bold flex items-center'><span><TbCurrencyEthereum /></span>{descr_right_1}</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
duration-500'>
                            Place a Bid
                        </button>
                        <div className='flex flex-col items-end'>
                            <h2 className='text-[#d0d0d0] font-semibold'>Ending In</h2>
                            <h2 className='font-bold text-white flex items-center'><span className='p-1'><AiOutlineClockCircle /></span>{transaction_hour}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="relative shadow-lg h-72">
        <img className='object-cover object-top h-72 w-72' src={main_img_url} />

        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#5b5958] opacity-90">

            <div className='p-1'>
                {/*heading*/}
                <div className='text-white opacity-100 flex items-center justify-between'>
                    <h2 className='font-bold'>{descr_left_1}</h2>
                    <h2 className='font-bold flex items-center'><span><TbCurrencyEthereum /></span>{descr_right_1}</h2>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
duration-500'>
                    Place a Bid
                </button>
                <div className='flex flex-col items-end'>
                    <h2 className='text-[#d0d0d0] font-semibold'>Ending In</h2>
                    <h2 className='font-bold text-white flex items-center'><span className='p-1'><AiOutlineClockCircle /></span>{transaction_hour}</h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardIemSuscribe