import React from 'react'

type Props = {
    circle_img_url_1:string;
    circle_img_url_2:string;
    circle_img_url_3:string;
  }
  

const Stackavatar = ({
    circle_img_url_1,
    circle_img_url_2,
    circle_img_url_3
}:Props) => {
    return (
        <div className=' flex basis-3/3 items-start justify-center'>
            <div className="absolute z-40 p-1 bg-white h-12 w-12 rounded-full">
                <img
                    className="h-10 w-10 rounded-full"
                    src={circle_img_url_1}
                    alt=""
                />
            </div>
            <div className=" p-1 bg-white h-12 w-12 rounded-full z-40">
                <img
                    className="h-10 w-10 rounded-full"
                    src={circle_img_url_2}
                    alt=""
                />
            </div>
            <div className=" p-1 bg-white h-12 w-12 rounded-full z-30">
                <img
                    className="h-10 w-10 rounded-full"
                    src={circle_img_url_3}
                    alt=""
                />
            </div>
            <div className="absolute p-1 bg-white h-12 w-12 rounded-full z-20">
                <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.seadn.io/gae/GOsPe_uWwAekMFDSyvgvvgnZe1An3Xw6CXJcvCsxfyYM6uMOc5-l8Ya1_kibmgd7xIPvY0CHIdngYz0daKkrh9vCEl6auB6K3wCL?auto=format&w=384"
                    alt=""
                />
            </div>
            
        </div>
    )
}

export default Stackavatar