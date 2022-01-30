import React from 'react'
import { Parallax } from 'react-parallax'

import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import Parallax3 from './Parallax3'
import Parallax4 from './Parallax4'
import { BoxColumn, CustomizedTitle } from '../../customizedCSS'

function ParallaxNews() {
  return (
    <div>
      <Parallax
        bgImage="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/para_sep1.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <Parallax1 />
      </Parallax>

      <Parallax
        bgImage="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/para_sep2.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <Parallax2 />
      </Parallax>
      <Parallax
        bgImage="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/para_sep3.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <Parallax3 />
      </Parallax>
      <Parallax
        bgImage="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/para_sep4.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <Parallax4 />
      </Parallax>
      <CustomizedTitle> FINAL PRODUCT</CustomizedTitle>
      <BoxColumn>
        <img
          src="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/col2_montage1.jpg"
          alt="Haute Couture"
          height="500px"
          width="400px"
        />
      </BoxColumn>
    </div>
  )
}

export default ParallaxNews
