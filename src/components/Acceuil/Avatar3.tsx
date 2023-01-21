import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';

const Avatar3 = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const height_andwidth_div = ()=>{
    if(isAboveMediumScreens==true){
       return "flex items-center justify-start h-10 w-20";
    }else{
       return "flex items-center justify-start h-7 w-12";
    }
  }

  const height_andwidth_img = ()=>{
    if(isAboveMediumScreens==true){
       return "h-20 w-20 rounded-lg";
    }else{
       return "h-7 w-7 rounded-lg";
    }
  }

    return (
        <div className={height_andwidth_div()}>
        <img
          className={height_andwidth_img()}
          src="https://i.seadn.io/gae/ene3fYCIL2H2eRIVF8ndM4Q4Flf3p-EyOmqufIRBqJ9HuQm8rI3XP0SYVdLYQZQgpndUOrsCV5KukRzlSnf2b6v9LKCTzVG6BBvITw?auto=format&w=384"
          alt=""
        />
      </div>
      )
}

export default Avatar3