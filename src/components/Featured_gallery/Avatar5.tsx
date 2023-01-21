import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
    img_url:string;
}

const Avatar5 = ({img_url}:Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const height_andwidth_div = ()=>{
      if(isAboveMediumScreens==true){
         return "flex items-center justify-start h-10 w-10";
      }else{
         return "flex items-center justify-start h-7 w-12";
      }
    }
  
    const height_andwidth_img = ()=>{
      if(isAboveMediumScreens==true){
         return "h-10 w-10 rounded-full";
      }else{
         return "h-7 w-7 rounded-full";
      }
    }
  
      return (
          <div className={height_andwidth_div()}>
          <img
            className={height_andwidth_img()}
            src={img_url}
            alt=""
          />
        </div>
        )
}

export default Avatar5