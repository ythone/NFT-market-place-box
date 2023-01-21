import React from 'react'
import Avatar5 from '../Featured_gallery/Avatar5'
import { IoArrowForward } from 'react-icons/io5'

const Artist2 = () => {
  return (
    <div className='flex flex-row'>
            <div className='basis-2/3 pr-3'>
                <div className='relative h-full' style={{
                    backgroundImage: `url("https://i.seadn.io/gcs/files/427eac0e4c27c1342fb4c6d4fabb5e3e.png?auto=format&w=384")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    width: "500px",
                    height: "300px"
                }}>
                    <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-transparent to-[#09090b]'>
                    </div>
                    <div className='absolute inset-x-0 bottom-0'>
                        <div className='p-1'>
                            <div className='text-white opacity-100 flex items-center justify-between'>
                                <div className='flex items-center justify-center'>
                                    <Avatar5 img_url="https://i.seadn.io/gae/tTS-C_Dd0WOZ7c-FA8oOuvMEJcS_Pb3KyScN4ZZH1l1d53FBX0vlzul67sjEz8LFv2tl_VWi1YpmHwQFL964kYJTnEpMFdSpQMKrUx4?auto=format&w=384" />
                                    <div className='p-2'>
                                        <h3 className='text-gray-200'>Owner</h3>
                                        <h1 className='text-white font-bold'>Raffildao Bachu</h1>
                                    </div>
                                </div>
                                <h2 className='font-bold flex items-center'><IoArrowForward /></h2>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='basis-1/3'>
                <div className='relative h-full' style={{
                    backgroundImage: `url("https://i.seadn.io/gcs/files/3f51f0db2eadd5256b894c2451791bf6.png?auto=format&w=384")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    width: "300px",
                    height: "300px"
                }}>
                    <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-transparent to-[#09090b]'>
                    </div>
                    <div className='absolute inset-x-0 bottom-0'>
                        <div className='p-1'>
                            <div className='text-white opacity-100 flex items-center justify-between'>
                                <div className='flex items-center justify-center'>
                                    <Avatar5 img_url="https://i.seadn.io/gae/nyJTIfiL5Ix_Hx5VelNa6Ly_7ylCDs6JEVy4E-O23_ezomMh6psesGkdK7zbavtpOGKGXrUCTiKyVIq2kRKyA-PtPlAEDdBexRcDaIs?auto=format&w=384" />
                                    <div className='p-2'>
                                        <h3 className='text-gray-200'>Owner</h3>
                                        <h1 className='text-white font-bold'>Raffildao Bachu</h1>
                                    </div>
                                </div>
                                <h2 className='font-bold flex items-center'><IoArrowForward /></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default Artist2