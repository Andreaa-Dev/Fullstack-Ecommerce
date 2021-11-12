import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ProductType } from '../../misc/type'
import { Box } from '@mui/system'

type DataPropType = {
  data: ProductType
}
export default function ProductItem(data: DataPropType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img src={data.data.imageLink} alt={data.data.name} width="50%" />
      </Box>
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
