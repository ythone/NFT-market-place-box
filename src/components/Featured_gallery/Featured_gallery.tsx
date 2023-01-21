import React from 'react'
import { SelectedPage } from '../../shared/enum_types';
import CardItemGallery from './CardItemGallery';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Featured_gallery = ({ setSelectedPage }: Props) => {
    return (
        <section id="gallery" className="mx-auto min-h-full w-5/6 py-20">
            <div>
                <div className='md:flex items-center justify-between'>
                    <h1 className='p-2 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>Featured Gallery<br />With Best Works</h1>
                    <p className='text-[#3c3b40] text-xl p-2'>Our featured gallery with best NFT collections.<br />From creators who already have high selling<br />
                        power and perfect works in their fields</p>
                </div>
            </div>

            <div className='mt-20 md:flex items-center justify-center'>
                <div className='p-1'>
                    <CardItemGallery
                        main_img_url1="https://i.seadn.io/gae/lqSPB_ClOTb7zH93ppkLsxN8tuZsrkMzr8orN456e7KsnYaFpnVL2d-tiF0IxhQttD10hSnvyxgyc6IfP58dknQlOyk2GZ1rjjtcUYQ?auto=format&w=384"
                        main_img_url2="https://i.seadn.io/gae/GOsPe_uWwAekMFDSyvgvvgnZe1An3Xw6CXJcvCsxfyYM6uMOc5-l8Ya1_kibmgd7xIPvY0CHIdngYz0daKkrh9vCEl6auB6K3wCL?auto=format&w=384"
                        main_img_url3="https://i.seadn.io/gae/z6CqKhoXKYEna6SEObYUQujP2wn9dGCs21P7ljuI35-Fi90ps2GQ2FIxs9ex27Kd9i9_gOHKCYA1a7l0WpYZy9bEjtmSMO2Q1ClVAA?auto=format&w=384"
                        main_img_url4="https://i.seadn.io/gae/BSdUvSjUmOPepR0FEhecnEGdvAlYJ_wSYHGM9Xn87G6hiGU8fFBnmJV_9g19NyQqelkRC8reOvn5TUj5d7KqIXqja02Haao30KxW?auto=format&w=384"
                        img_avatar="https://i.seadn.io/gae/anF5jm-JTCSLqiBnGR9tkZqEwTytt4XV_OL53H6M5fPNOAZifNgyx_OJEajamomjhxLV8f3tdD-CFrElaklXz0J6DOgyFnx8R_E94g?auto=format&w=384" />
                </div>

                <div className='p-1'>
                    <CardItemGallery
                        main_img_url1="https://i.seadn.io/gae/I4o22gnjm8NBxHCkZ0YX8wNIQdm8DDcgr0UMx2Y6R2pgLbINO52GVZ4T8gKlwQDvz1ZGvhUFJV_37XfghWMOhOPA7wOfSz0CgAfsjJI?auto=format&w=384"
                        main_img_url2="https://i.seadn.io/gae/zE7XEEe6rRHvJ6C96i716_DX82q6EBnY14GMQN8ZkeC-Hnpo2OjVNeRBqA8zcUq3_y6shwbnQkPkDT4gqP99TZgJgISWUdYLuWh3?auto=format&w=384"
                        main_img_url3="https://i.seadn.io/gae/uYz2PU0XdMvs9p1UyaPOu5V8WEwXyttlvt3uNmYriTnzvZ1tbOtdjk_7BHo-SSsgODTxSQqrnAfrrZica2tmkM5TmSeB8rHtlv9YKQ?auto=format&w=384"
                        main_img_url4="https://i.seadn.io/gae/9CAnOkbtsdfb0GEX2pSNzh8F0SQUTqiTcPvuEYAkWrL65GIxA-kMpvAJnvLCJHmOU3ShclmcGZSWHYGLvho_lWodWCEuYbRxv9fEYSY?auto=format&w=384"
                        img_avatar="https://i.seadn.io/gae/f4eIkZura5k3sueEwh6NSb5ytQFIcJkCMWvjxle0IlFv7B-Rneh8p5GH8WgxNU_gGGYRPtyV_au4TxV06jlvj5juWR2uXS3IGSOd?auto=format&w=384" />
                </div>
                <div className='p-1'>
                    <CardItemGallery
                        main_img_url1="https://i.seadn.io/gae/CoHsHMD38QZk28Z5BPKkdQ-PpAcQ5-Oo-PINDFU9hmObe2EusiFvnbfr2JBA8HTkMjccfwVq5ca7syXPA3tyaBb6ODvBP3Iq6ZCy1g?auto=format&w=384"
                        main_img_url2="https://i.seadn.io/gae/wnF89kPXRxU_U-nEtrt1AWA79PXOtCtKM983lAmFrtIXcK_HrxvwKfSW4UYWGaV_FB00_K8LNfDuxgq946ktCoa33mckSZ4S7S7Z?auto=format&w=384"
                        main_img_url3="https://i.seadn.io/gae/N7nSblmTrMp3bNu4oGVMEd3iXF9wDGD2-Zr38ZcaMfdpb8dF6LZWSFaGXWal0Xe0myma3VsPSux9Ew_fL4Lj0z12b1w8sNfsh8jP0Q?auto=format&w=384"
                        main_img_url4="https://i.seadn.io/gae/CD7rUNal_QHO4ZITWEQgFsWbwcBXLMtN12dUjwDKc9k7v6mTYHMsyJH0ZzD4k5Zpz4OzDNmoMw3V6SFRT-GRb1vInxBgX9D9JRQU?auto=format&w=384"
                        img_avatar="https://i.seadn.io/gae/I7JKNEJvf-PgF4ypv_8kR3LRDiDs-_RCFzLw374UhszUQiJwHO0In9QhvlDE_euUCQ1-hhzY06yU8kP_hcAJXW68jSBA9rvYlSh-zQ?auto=format&w=384" />
                </div>
            </div>
        </section>
    )
}

export default Featured_gallery