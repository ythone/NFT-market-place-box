import React from 'react'
import CardIemSuscribe from './CardIemSuscribe'
import StackCard from './StackCard'

const Suscribe = () => {
    return (
        <section id="suscribe" className="mx-auto min-h-full w-5/6 py-20">
            <div className='md:flex items-center justify-around'>
                <StackCard/>
                <div className='p-4'>
                    <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>Suscribe To Get Hot<br />New NFT News Updates</h1>
                    <p className='text-[#3c3b40] text-xl pt-2'>Various trending NFTs news will be reset every<br />week don't miss the best news every week</p>
                    <form className='bg-[#3c3b40] mt-5 rounded-lg p-4 md:flex items-center justify-between' action="">
                        <input className='text-gray-300 bg-[#3c3b40] font-semibold pb-2' placeholder='Type your email here...' type="text" />
                        <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-400 duration-500'>
                            Suscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Suscribe