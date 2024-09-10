import React from 'react'
import Popup from 'reactjs-popup';
import playicon from "../../assets/playIcon.svg"
import { ElipseImg, Video2, VideoImg } from './style';
import { videoData } from '../mock/videoData';

const VideoModal = () => {
      const data = videoData.maindata;
  return (
    <div>
      <Popup
    trigger={
    <button className="button">
      <Video2>
            {data.map ((value) => {
                  return (
                  <VideoImg style={{ backgroundImage: `url (${value.photo})`}}>
                        <ElipseImg>
                         <img src={playicon} alt="icon" />
                        </ElipseImg>
                  </VideoImg>   
                  )
            })} 
      </Video2>  
    </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">New 2022 Hyundai Staria Lounge Camping car</div>
        <div className="content">
        </div>
      </div>
    )}
   </Popup>

    </div>
  )
}

export default VideoModal