import React from 'react'
import { Box } from '@mui/system'
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import ReactPlayer from 'react-player'

import lipstick1 from '../images/lipstick1.webp'
import lipstick2 from '../images/lipstick2.jpeg'

function ProductDetail() {
  return (
    <Box>
      <Box>
        <img src="" alt="" />
        <img src={lipstick1} alt="" />
        <img src={lipstick2} alt="" />
      </Box>
      <Box>
        <Typography>name</Typography>
        <Typography>description</Typography>
        variant
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1 }}>
        <CardActionArea>
          <CardMedia
            component="video"
            autoPlay
            controls
            src="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_no_transfer/videos/20210308145130_960x540_1900_986decdf-da91-4dab-8d8c-0ddeb1c6ce7a.mp4"
            // image={lipstick2}
          />
          <ReactPlayer
            url="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_no_transfer/videos/20210308145130_960x540_1900_986decdf-da91-4dab-8d8c-0ddeb1c6ce7a.mp4"
            width="100%"
            height="500px"
            playing
            playIcon={<button>Play</button>}
            light={lipstick1}
          />

          <CardContent>
            <Typography>TRANSFER-PROOF 12* WEAR</Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea>
          <CardMedia
            component="video"
            autoPlay
            controls
            src="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_second_skin/videos/20210308145132_960x540_1900_890625ef-f15d-4510-8829-801f7ccd4193.mp4"
          />
          <CardContent>
            <Typography>WEIGHTLESS COMFORT</Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardMedia
            component="video"
            autoPlay
            controls
            src="https://secure.massmotionmedia.com/diorparfums/projects/diorparfums_rouge_forever_liquid_ultra_matte/videos/20210308145133_960x540_1900_a313cacf-6970-4002-9ec4-1787cd142b03.mp4"
          />
          <CardContent>
            <Typography>ULTRA-PIGMENTED MATTE FINISH</Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Box>
  )
}

export default ProductDetail
