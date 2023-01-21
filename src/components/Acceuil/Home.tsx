import React from 'react'
import { SelectedPage } from '../../shared/enum_types';
import useMediaQuery from '../../hooks/useMediaQuery';
import Avatar from './Avatar';
import Avatar2 from './Avatar2';
import Avatar3 from './Avatar3';
import CardItem from './CardItem';
import CardItems2 from './CardItems2';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const text_display = ()=>{
        if(isAboveMediumScreens==true){
           return (
            <div className='pb-2 text-center '>
            <div className='flex items-center justify-center text-7xl font-bold'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>Discover</p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-7xl font-bold p-2'><Avatar /></p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-7xl font-bold'>Digital Art</p>
            </div>
            <div className='flex items-center justify-center mt-2 text-7xl font-bold'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4'>And </p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4 p-2'><Avatar2 /></p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4'>Collect Rare NFTs</p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4 pl-4'><Avatar3 /></p>
            </div>
            <div className='py-4 text-2xl'>
                <p className='text-[#3c3b40] font-semibold'>the first NFT marketplace to allow content creators</p>
                <p className='text-[#3c3b40] font-semibold'>to select and pin licenses for the best NFTs to showcase</p>
            </div>
            <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
duration-500'>
                Start Trading
            </button>
        </div>
           )
        }else{
           return (
            <div className='pb-2 text-center  '>
            <div className='flex items-center justify-center text-2xl font-bold'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>Discover</p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] p-2'><Avatar /></p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] '>Digital Art</p>
            </div>
            <div className='flex items-center justify-center mt-2 text-2xl font-bold'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4 font-bold'>And </p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4 font-bold p-2'><Avatar2 /></p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4 font-bold'>Collect Rare NFTs</p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb] mt-4 font-bold pl-4'><Avatar3 /></p>
            </div>
            <div className='py-4 text-xl'>
                <p className='text-[#3c3b40] font-semibold'>the first NFT marketplace to allow content creators</p>
                <p className='text-[#3c3b40] font-semibold'>to select and pin licenses for the best NFTs to showcase</p>
            </div>
            <button className='bg-gradient-to-r from-[#64e2de] to-[#af94cb] text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-indigo-400 
duration-500'>
                Start Trading
            </button>
        </div>
           )
        }
    }
    return (
        <section id="home" className="mx-auto min-h-full w-5/6 py-20">
            <div className='flex flex-col'>
                 {text_display()}
                <div className='mt-5 md:flex items-center mx-auto'>
                    <div className='p-1'>
                        <CardItems2 
                            descr_left_1="Monument Hotly"
                            descr_right_1="326ETH"
                            main_img_url="https://i.seadn.io/gae/0mUf80tXiyX765flp14NrFEoBxflLcx-10DGF4uqFHjylDyWfGmLmfKW5zjoeGnamCLKYfWqjchceoJ6LtZ8iydxJBRK5_XIga0q?auto=format&w=384"
                            circle_img_url_1="https://i.seadn.io/gae/RSJ789Zo9pEBb6mI-zofvvjVDObDovkNWJsPtRPeNnXSx8Uxf2IQNw4XS5nhexvAJ1KdJ0ywCde3JNGkO59UVfO6dLYkL7QbRbGI-0I?auto=format&w=384"
                            circle_img_url_2="https://i.seadn.io/gae/d539qneB2g2bMBvI4vAEQ78fN7RDGTjqjcRnq3IX5WWxEWz0Y361Y9i1G2Gq2gMMnZA6ZXq8alIEY3njMHm4x4R4KC1-Oih5YDor?auto=format&w=384"
                            circle_img_url_3="https://i.seadn.io/gae/6h_r1jKpDEUAk48EH0MvaiExkM0YDoT_T6BVndwZNe-vp1Wa3iPa9cV3JJt_Bastb3u9I6-AIzSbDo-9hspysDcP_0ONvxG1v96Tdg?auto=format&w=384" 
                            transaction_hour="8h 6m 24s"                             />
                    </div>
                    <div className='p-1'>
                        <CardItems2 
                        descr_left_1="Monument Crystal" 
                        descr_right_1="438ETH" 
                        main_img_url="https://i.seadn.io/gae/Fhsi85-T_hOydm9JK2eBaQ0AK0QkIbTIX_d7pOi5O0JTcntyGjFoRCxRAlJUpYhqjHC54y9Ewq5w8C63E52-4HXnApww28hkkWKFKzw?auto=format&w=384"
                        circle_img_url_1="https://i.seadn.io/gae/GAbfmsfsQ6QUa_mwlB2Mdkio2mv00AXS1A1rVKrS_ZwkyMuN0s8-hvr7meACTe-7BTsK80QgCaqpUFAxn9PsDl7F0JMBb6urf39IepU?auto=format&w=384" 
                        circle_img_url_2="https://i.seadn.io/gae/xdzqNpxIH78p9Sd4GRtGeeHBoHtqCinYNLMHCtMp5Y6tVG0gAiU2TFedLGHMTiX_J2kNSGI4DWfTPbBUt3fzPLAe8ZX3IpUSIAkSug?auto=format&w=384" 
                        circle_img_url_3="https://i.seadn.io/gae/z6CqKhoXKYEna6SEObYUQujP2wn9dGCs21P7ljuI35-Fi90ps2GQ2FIxs9ex27Kd9i9_gOHKCYA1a7l0WpYZy9bEjtmSMO2Q1ClVAA?auto=format&w=384"
                        transaction_hour="4h 6m 06s"
                        />
                    </div>
                    <div className='p-1'>
                        <CardItems2 
                        descr_left_1="Monument Stone" 
                        descr_right_1="549ETH" 
                        main_img_url="https://i.seadn.io/gae/f9EmaxxHRuW6NjdpsrKyidvEijNGlK32c3A4xTteUMnhNFZQgYFChTeMe5u7RqTEIMtRconNgpJYn4ezMW3OqoDFt4duG_KvLz0aog?auto=format&w=384"
                        circle_img_url_1="https://i.seadn.io/gae/F45dyMWbwUAMINjqRccEz41E0FHSPQrRRAx3291MB6lHwUcjL_d8ELU1dsIiGH_vmChqSG6iC3D_9UkpQaAdHxwBAUsjm2hwSsJJxg?auto=format&w=384" 
                        circle_img_url_2="https://i.seadn.io/gae/LG19V2U8d3AMS3Y04ITEhp9eXJ-yIMPN3BzU8KDe6WCnybL_zYgeYM-qVyaqt3p3cQ1G_h4axdOhaprMjSjbbaYj4F5q_LUwvEDmAp0?auto=format&w=384" 
                        circle_img_url_3="https://i.seadn.io/gae/pzDIttN0ZgzXJPR8NxgwFm6T1HPhnzvGAWntdNd8LCQfdk7ZxSSBuOq0Nr1uX34lZEZhuQF3VzAidcHPTEexkInh5bMG8oKSmjbTYg?auto=format&w=384"
                        transaction_hour="6h 2m 13s"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home