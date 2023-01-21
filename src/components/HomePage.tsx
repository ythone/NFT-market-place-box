import React, { useEffect, useState } from 'react'
import Appbar from './Appbar/Appbar'
import { SelectedPage } from '../shared/enum_types';
import Home from './Acceuil/Home';
import Hot_trending from './Hot_trending/Hot_trending';
import Featured_gallery from './Featured_gallery/Featured_gallery';
import PopularArtist from './PopularArtist/PopularArtist';
import Suscribe from './Suscribe/Suscribe';
import Footer from './Footer/Footer';


const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='bg-[#09090b]'>
      <Appbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Hot_trending setSelectedPage={setSelectedPage}/>
      <Featured_gallery setSelectedPage={setSelectedPage}/>
      <PopularArtist setSelectedPage={setSelectedPage}/>
      <Suscribe/>
      <Footer/>
    </div>
  )
}

export default HomePage