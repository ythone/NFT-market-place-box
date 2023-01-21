import React from 'react'
import { SelectedPage } from '../../shared/enum_types';
import CardItemArtist from './CardItemArtist';
import Artist1 from './Artist1';
import Artist2 from './Artist2';
import Artist3 from './Artist3';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const PopularArtist = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const displaycard = () => {
        return <>
            <div className='p-1'>
                <CardItemArtist img_url="https://i.seadn.io/gcs/files/9f3aeca3a0056d984bc4e6c7f9572615.png?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/0LqSq0yV68cxPGFfmloOgfuMlMGVx7VwZ2UoJjHoDcctBTA0VlNI3MBeov5k7yx6xhYy9MJQy1rR3peJazxOnr06y0gW93adOZ61?auto=format&w=384"
                    height="object-cover" />
            </div>
            <div className='p-1'>
                <CardItemArtist img_url="https://i.seadn.io/gcs/files/9f3aeca3a0056d984bc4e6c7f9572615.png?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/0LqSq0yV68cxPGFfmloOgfuMlMGVx7VwZ2UoJjHoDcctBTA0VlNI3MBeov5k7yx6xhYy9MJQy1rR3peJazxOnr06y0gW93adOZ61?auto=format&w=384"
                    height="object-cover" />
            </div>
            <div className='p-1'>
                <CardItemArtist img_url="https://i.seadn.io/gcs/files/9f3aeca3a0056d984bc4e6c7f9572615.png?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/0LqSq0yV68cxPGFfmloOgfuMlMGVx7VwZ2UoJjHoDcctBTA0VlNI3MBeov5k7yx6xhYy9MJQy1rR3peJazxOnr06y0gW93adOZ61?auto=format&w=384"
                    height="object-cover" />
            </div>
            <div className='p-1'>
                <CardItemArtist img_url="https://i.seadn.io/gcs/files/9f3aeca3a0056d984bc4e6c7f9572615.png?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/0LqSq0yV68cxPGFfmloOgfuMlMGVx7VwZ2UoJjHoDcctBTA0VlNI3MBeov5k7yx6xhYy9MJQy1rR3peJazxOnr06y0gW93adOZ61?auto=format&w=384"
                    height="object-cover" />
            </div>
            <div className='p-1'>
                <CardItemArtist img_url="https://i.seadn.io/gcs/files/9f3aeca3a0056d984bc4e6c7f9572615.png?auto=format&w=384"
                    img_avatar="https://i.seadn.io/gae/0LqSq0yV68cxPGFfmloOgfuMlMGVx7VwZ2UoJjHoDcctBTA0VlNI3MBeov5k7yx6xhYy9MJQy1rR3peJazxOnr06y0gW93adOZ61?auto=format&w=384"
                    height="object-cover" />
            </div>
        </>
    }

    const display_grid = () => {
        if (isAboveMediumScreens == true) {
            return (
                <>
                    <div className='flex flex-row px-20'>
                        <div className='basis-2/3 pr-3'>
                            <Artist1 />
                            <Artist2 />
                        </div>
                        <div className='basis-1/3'>
                            <Artist3 />
                        </div>
                    </div>
                </>
            )
        }

        return (
            <div className='md:flex items-center justify-center'>
                {displaycard()}
            </div>
        )
    }
    return (
        <section id="marketplace" className="mx-auto min-h-full w-5/6 py-20 bg-[#09090b]">
            <div className='p-3'>
                <div className='md:flex items-center justify-between'>
                    <h1 className='p-2 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#64e2de] to-[#af94cb]'>Popular Artists<br />On This week</h1>
                    <p className='text-[#3c3b40] text-xl p-2'>Our featured artists with the best NFTs collection.<br />Who are also well know in the NFT world,their<br />
                        works have their own style in the NFT world.</p>
                </div>
            </div>

            <div className='mt-10 md:flex items-center justify-center'>
               {display_grid()}
            </div>
        </section>
    )
}

export default PopularArtist