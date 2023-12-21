// @ts-nocheck
import React from 'react'
import { Box } from '@mui/system'
import ReactPlayer from 'react-player'

import videoImg1 from '../images/videoImg1.webp'
import videoImg2 from '../images/videoImg2.webp'
import videoImg3 from '../images/videoImg3.webp'
import { CustomizedLPlayIcon } from '../customizedCSS'

function ProductVideo(props: any) {
  return (
    <div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center',
          mt: '100px',
          ml: '200px',
          mr: '200px',
        }}
      >
        <ReactPlayer
          url="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_no_transfer/videos/20210308145130_960x540_1900_986decdf-da91-4dab-8d8c-0ddeb1c6ce7a.mp4"
          width="100%"
          height="200px"
          playing
          playIcon={<CustomizedLPlayIcon />}
          light={videoImg1}
          controls={true}
        />
        <ReactPlayer
          url="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_second_skin/videos/20210308145132_960x540_1900_890625ef-f15d-4510-8829-801f7ccd4193.mp4"
          width="100%"
          height="200px"
          playing
          playIcon={<CustomizedLPlayIcon />}
          light={videoImg2}
          controls={true}
        />
        <ReactPlayer
          url="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_ultra_matte/videos/20210308145133_960x540_1900_a313cacf-6970-4002-9ec4-1787cd142b03.mp4"
          width="100%"
          height="200px"
          playing
          playIcon={<CustomizedLPlayIcon />}
          light={videoImg3}
          controls={true}
        />
      </Box>
    </div>
  )
}

export default ProductVideo
