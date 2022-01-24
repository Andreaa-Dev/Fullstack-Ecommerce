import React from 'react'
import ReactPlayer from 'react-player'

import videoImg from '../images/giftVideo.webp'
import giftImg1 from '../images/giftImg1.webp'
import { CustomizedLPlayIcon, CustomizedTitleHT } from '../customizedCSS'

function ArtofGift() {
  return (
    <div>
      <ReactPlayer
        url="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_unboxing_video_2021_16_9/videos/20211018091819_960x540_1900_03d0f268-1b38-42a2-af81-294b409f1ccf.mp4"
        width="100%"
        height="460px"
        playing
        playIcon={<CustomizedLPlayIcon />}
        light={videoImg}
        controls={true}
      />
      <CustomizedTitleHT>ADD A PERSONALISED MESSAGE</CustomizedTitleHT>
      <img src={giftImg1} alt="PERSONALISED MESSAGE" />
    </div>
  )
}

export default ArtofGift
