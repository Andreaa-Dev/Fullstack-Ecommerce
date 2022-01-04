import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Card, CardContent, CardMedia } from '@mui/material'

import { AppState } from '../../misc/type'
import { fetchUserData } from '../../redux/action'
import {
  BoxRow,
  CustomizedLink,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'
import UserDetail from './user/userInformation/UserDetail'
import UserOrder from './user/userOrder'
import user from '../images/user.png'
import product from '../images/product.png'

type TabPanelPropType = {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel({ children, value, index, ...other }: TabPanelPropType) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function Index() {
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  let param = useParams() as { id: string }
  const dispatch = useDispatch()
  const userData = useSelector((state: AppState) => state.userState.userById)
  let userId = userData?._id

  useEffect(() => {
    dispatch(fetchUserData(param.id))
  }, [dispatch, param.id])
  return (
    <Box sx={{ m: '50px' }}>
      <CustomizedTitle> YOUR ACCOUNT</CustomizedTitle>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="YOUR PROFILE" />
          <Tab label="ORDERS" />
          {userData && userData?.role === 'admin' && <Tab label="ADMIN" />}
        </Tabs>
        <TabPanel value={value} index={0}>
          <UserDetail userData={userData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserOrder userId={userId} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <BoxRow>
            <Card sx={{ height: '230px', mr: '30px' }}>
              <CardMedia
                component="img"
                height="150"
                width="200"
                image={product}
                alt="product managing"
              />
              <CardContent>
                <CustomizedLink to="/admin/product">
                  <CustomizedText> PRODUCTS</CustomizedText>
                </CustomizedLink>
              </CardContent>
            </Card>
            <Card sx={{ height: '230px' }}>
              <CardMedia
                component="img"
                height="150"
                width="200"
                image={user}
                alt="user managing"
              />
              <CardContent>
                <CustomizedLink to="/admin/user">
                  <CustomizedText>USERS</CustomizedText>
                </CustomizedLink>
              </CardContent>
            </Card>
          </BoxRow>
        </TabPanel>
      </Box>
    </Box>
  )
}

export default Index
