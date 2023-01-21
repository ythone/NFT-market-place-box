import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';

const Avatar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const height_andwidth_div = ()=>{
    if(isAboveMediumScreens==true){
       return "flex items-center justify-start h-20 w-40 bg-[#3c3b40] rounded-full ";
    }else{
       return "flex items-center justify-start h-7 w-12 bg-[#3c3b40] rounded-full ";
    }
  }

  const height_andwidth_img = ()=>{
    if(isAboveMediumScreens==true){
       return "h-20 w-20 rounded-full";
    }else{
       return "h-7 w-7 rounded-full";
    }
  }

  return (
    <div className={height_andwidth_div()}>
    <img
      className={height_andwidth_img()}
      src="https://i.seadn.io/gae/VmguGN_7c1xpPg0i-E0QZ9vh9_aGVL9Cv8SKrjwfqX69UzCDqYLWZTXmJuLB7qCPWk9Ke46D7qqvPSnLx_vhZH65v_rD9yYyRqkLng?auto=format&w=384"
      alt=""
    />
  </div>
  )
}

export default Avatar