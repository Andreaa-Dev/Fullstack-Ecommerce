import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-scroll'

function ProductByCategory() {
  return (
    <div>
      <Link activeClass="active" to="home" spy={true} smooth={true}>
        <Button>button1</Button>
      </Link>
      <Button>button2</Button>
      <Button>button3</Button>
      <Typography className="scrollToSection">What</Typography>

      <Typography id="home">Why</Typography>
    </div>
  )
}

export default ProductByCategory
