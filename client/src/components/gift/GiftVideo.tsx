import React from 'react'
import ReactPlayer from 'react-player'

import { CustomizedLPlayIcon } from '../customizedCSS'
import videoImg from '../images/videoImg.webp'

function GiftVideo() {
  return (
    <div>
      <ReactPlayer
        url="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_holidays_2021_16_9/videos/20210921075526_960x540_1900_78d8e24d-0c80-4e6a-a286-e3b3eba731fe.mp4"
        // width="640px"
        // height="250px"
        // width="100%"
        // height="200px"
        playing
        playIcon={<CustomizedLPlayIcon />}
        light={videoImg}
        controls={true}
      />
    </div>
  )
}

export default GiftVideo
