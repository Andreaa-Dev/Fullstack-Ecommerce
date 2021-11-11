import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ProductType } from '../../misc/type'

type DataPropType = {
  data: ProductType
}
export default function ProductItem(data: DataPropType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.data.imageLink}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteBorderIcon />
        <ShoppingCartOutlinedIcon />
      </CardActions>
    </Card>
  )
}
