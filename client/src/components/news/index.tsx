import React from 'react'
import { Box } from '@mui/material'
import ReactPlayer from 'react-player'

import {
  BoxRow,
  CustomizedLink,
  CustomizedLPlayIcon,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'

function index() {
  return (
    <div>
      <BoxRow>
        <Box
          sx={{
            backgroundColor: 'black',
            height: '500px',
            width: '400px',
          }}
        >
          <CustomizedLink to="craft">
            <CustomizedTitle color="white"> THE CRAFT</CustomizedTitle>
          </CustomizedLink>
          <hr />
          <CustomizedText color="white">
            See inside the workshops to learn about Dior's unique expertise via
            its different crafts.
          </CustomizedText>
        </Box>
        <ReactPlayer
          url="https://secure.massmotionmedia.com/onedior/projects/dior_home_metiers_boucle_cover/videos/20150627072201_1280x720_1713_f73fb2a7-9d8c-42a4-a658-82a8a68458d9.mp4"
          playing
          playIcon={<CustomizedLPlayIcon />}
          light="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/home/poster-video.jpg"
          controls={true}
          height="500px"
          width="920px"
        />
      </BoxRow>
      <BoxRow>
        <Box>
          <img
            src="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/mazarine/images/medias/history/le-30-avenue-montaigne/30_montaigne_intro_vzg_01.jpg"
            alt="Avenue-Montaigne"
            height="500px"
            width="920px"
          />
        </Box>
        <Box
          sx={{
            backgroundColor: 'black',
            height: '500px',
            width: '400px',
          }}
        >
          <CustomizedLink to="history">
            <CustomizedTitle color="white"> THE STORY OF DIOR</CustomizedTitle>
          </CustomizedLink>
          <hr />
          <CustomizedText color="white">
            See inside the workshops to learn about Dior's unique expertise via
            its different crafts.
          </CustomizedText>
        </Box>
      </BoxRow>
    </div>
  )
}

export default index
