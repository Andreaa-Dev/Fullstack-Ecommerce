import React, { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import { styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import {
  Avatar,
  Card,
  CardActions,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'

import UserOrderProduct from './UserOrderProduct'
import {
  BoxColumnStart,
  CustomizedButton,
  CustomizedLink,
  CustomizedText,
} from '../../../customizedCSS'

type ItemPropType = {
  item: any
  orderData: any
}

function UserOrderItem({ item, orderData }: ItemPropType) {
  const product = item.products

  type ExpandMoreProps = IconButtonProps & {
    expand: boolean
  }
  const ExpandMore = styled(({ expand, ...other }: ExpandMoreProps) => {
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card sx={{ width: 320, m: '10px' }}>
      <CardContent>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{orderData.indexOf(item)} </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Status" secondary="Shipping..." />
          <CustomizedText>{new Date(item.date).toDateString()}</CustomizedText>
        </ListItem>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <BoxColumnStart>
            <CustomizedText sx={{ textAlign: 'left' }}>
              ORDER NO: {item._id}
            </CustomizedText>
            <CustomizedText sx={{ textAlign: 'left' }}>
              DATE: {new Date(item.date).toDateString()}
            </CustomizedText>
            <CustomizedText sx={{ textAlign: 'left' }}>
              PRODUCTS:
            </CustomizedText>
            <UserOrderProduct product={product} />
            <CustomizedLink to="/home">
              <CustomizedButton>SEE DETAILS</CustomizedButton>
            </CustomizedLink>
          </BoxColumnStart>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default UserOrderItem
