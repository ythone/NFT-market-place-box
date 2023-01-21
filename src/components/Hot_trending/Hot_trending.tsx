import React from 'react'
import { SelectedPage } from '../../shared/enum_types';
import CardItems2 from '../Acceuil/CardItems2';
import Avatar2 from '../Acceuil/Avatar2';
import Avatar4 from './Avatar4';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Hot_trending = ({ setSelectedPage }: Props) => {
    return (
        <section id="trend" className="mx-auto min-h-full w-5/6 py-20">
            <div className='text-center py-20'>
                <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>Hot trending of this week</h1>
                <p className='text-[#3c3b40] text-2xl mt-5'>Varous type of trending ntfs will be reset every week.<br/>Don't miss the best nfts week and add to cart immediatly.</p>
            </div>
            <div className='bg-[#5d5f5e]'>
                <div className='p-5 md:flex items-center justify-between'>
                    <div className='p-5'>
                        <CardItems2
                            descr_left_1="Monument Game"
                            descr_right_1="684ETH"
                            main_img_url="https://i.seadn.io/gae/xdzqNpxIH78p9Sd4GRtGeeHBoHtqCinYNLMHCtMp5Y6tVG0gAiU2TFedLGHMTiX_J2kNSGI4DWfTPbBUt3fzPLAe8ZX3IpUSIAkSug?auto=format&w=384"
                            circle_img_url_1="https://i.seadn.io/gae/8o57vRIab1R5hstI6lzk3ycu4c1SFirYXV9YVvTvGBmTKl1TB0nghn8Ozz0eqNJNk3lsQ7N4Y5iza8IOhaghkSG4HsfQE6FpWODNmg?auto=format&w=384"
                            circle_img_url_2="https://i.seadn.io/gae/zvVDQKBWbnGsrUI7dzmT1obVWR5VLYAOFJpW1Rj_WV8iSyYs_yX2Em9wbFdeTtKVJ3M_mDQPqpAx8TLWVlpnWj_7ybohYFFE-XLYe54?auto=format&w=384"
                            circle_img_url_3="https://i.seadn.io/gae/6h_r1jKpDEUAk48EH0MvaiExkM0YDoT_T6BVndwZNe-vp1Wa3iPa9cV3JJt_Bastb3u9I6-AIzSbDo-9hspysDcP_0ONvxG1v96Tdg?auto=format&w=384"
                            transaction_hour="2h 47m 08s" />
                    </div>

                    <div className='p-5'>
                        <div>
                            <h1 className='font-bold text-2xl text-white'>Monument Game</h1>
                            <p className='text-gray-200 font-semibold mt-5'>We are a community driven collection project featuring best box head monster NFTs coming in
                                all kinds of evil shapes and sizes with some surprises along the way of the characters
                            </p>
                        </div>
                        <div className='bg-[#09090b] rounded-lg flex items-center justify-between p-5 mt-5'>
                            <div className='flex items-center justify-center'>
                                <Avatar4 />
                                <div className='p-2'>
                                    <h3 className='text-[#3c3b40]'>Owner</h3>
                                    <h1 className='text-white font-bold'>Raffildao Bachu</h1>
                                </div>
                            </div>
                            <div className='md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>
                                <h1>The artwork</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hot_trending