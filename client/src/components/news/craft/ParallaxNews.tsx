import React from 'react'
import { Parallax } from 'react-parallax'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'

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
        Content goes here. Parallax height grows with content height.
        <div style={{ height: '500px' }} />
      </Parallax>
      <Parallax
        bgImage="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/para_sep4.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        Content goes here. Parallax height grows with content height.
        <div style={{ height: '500px' }} />
      </Parallax>
    </div>
  )
}

export default ParallaxNews
