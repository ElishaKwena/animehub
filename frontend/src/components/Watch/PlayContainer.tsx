import React from "react";
import bleach from '../../assets/images/bleach.jpg'
interface PlayContainerProps {
    videosrc:string;
  }

const PlayContainer:React.FC<PlayContainerProps> = ({videosrc}) =>{
    return(
        <>
        <div className="h-full w-auto mx-aut">
            <video
            controls
            poster={bleach}
            className="w-full h-full object-contain object-top"
            >
                <source src={videosrc} type="video/mp4" />
            </video>
        </div>
        </>
    )
}

export default PlayContainer;