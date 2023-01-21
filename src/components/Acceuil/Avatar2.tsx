import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';

const Avatar2 = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const height_andwidth_div = ()=>{
    if(isAboveMediumScreens==true){
       return "flex items-center justify-center h-10 w-20";
    }else{
       return "flex items-center justify-center h-7 w-12";
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
          src="https://i.seadn.io/gae/Sm5kJXt1fOdaQsKJzuX6NH7cpMIUhr8cORYCxWho6XsHe3KWeLmqZp8W7lrKHmtspFskhye65CLeQK70c2AdYx4hMmP_PMtHKROZU1M?auto=format&w=384"
          alt=""
        />
      </div>
      )
}

export default Avatar2