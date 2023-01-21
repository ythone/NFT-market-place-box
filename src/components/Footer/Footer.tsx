import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsPinterest,BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className='bottom-0 min-h-full bg-[#5e605f] py-20 mx-auto px-20'>
            <div className='md:flex items-center justify-between'>
                <div className=''>
                    <p className='text-white font-bold flex items-center justify-start'> <span className='text-4xl font-bold text-[#6fdeda]'>O</span> BOXARE</p>
                    <p className='text-gray-400'>Trusted platform website for buying<br />and selling NFTs quality</p>
                </div>

                <div>
                    <p className='text-white font-bold'>Follow us :</p>
                    <div className='md:flex items-center justify-center pt-5'>
                        <div className='bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center p-1 text-white text-3sm'><AiFillInstagram /></div>
                        <div className='bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-white p-1 text-3sm'><BsPinterest /></div>
                        <div className='bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-white p-1'><BsFacebook /></div>
                        <div className='bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-white p-1'><BsTwitter /></div>
                    </div>
                </div>
            </div>
            <div className='border-gray-300 border-b mt-5'></div>
            <div className='text-gray-300 font-semibold flex items-center justify-between mt-5'>
                <p>Copyright 2022 Boxare.All Right Reserved</p>
                <p>Community | Support | Company | Service</p>
            </div>
        </footer>
    )
}

export default Footer