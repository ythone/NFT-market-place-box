import React from 'react'
import Avatar5 from '../Featured_gallery/Avatar5'
import { IoArrowForward } from 'react-icons/io5'

const Artist1 = () => {
    return (
        <div className='flex flex-row pb-3'>
        <div className='basis-1/3 pr-3'>
            <div className='relative h-full' style={{
                backgroundImage: `url("https://i.seadn.io/gcs/files/a84738d1e22b263440133910cf03fa1a.png?auto=format&w=384")`,
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
                                <Avatar5 img_url="https://i.seadn.io/gae/wnF89kPXRxU_U-nEtrt1AWA79PXOtCtKM983lAmFrtIXcK_HrxvwKfSW4UYWGaV_FB00_K8LNfDuxgq946ktCoa33mckSZ4S7S7Z?auto=format&w=384" />
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

        </div>
        <div className='basis-2/3'>
            <div className='relative h-full' style={{
                backgroundImage: `url("https://i.seadn.io/gcs/files/158ecba699c0ed1cb9df1524d6c38ae8.png?auto=format&w=384")`,
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
                                <Avatar5 img_url="https://i.seadn.io/gae/eV77B-kN9wW9xs-czOHJ3Wx_vrBuf1Slwkm6zPqR4CWfXP_fdwlizDue9peieuZuIq-hYwXQK8Zl9aNGl-dwp-Dp11BrxGJZjRWk?auto=format&w=384" />
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
        </div>

</div>
    )
}

export default Artist1