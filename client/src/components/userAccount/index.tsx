import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ThemeProvider } from '@emotion/react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { AppState } from '../../misc/type'
import { fetchUserData } from '../../redux/action'
import {
  CustomizedLink,
  CustomizedText,
  CustomizedTitle,
  themes,
} from '../customizedCSS'
import UserDetail from './user/userInformation/UserDetail'
import UserOrder from './user/userOrder'

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
    <ThemeProvider theme={themes}>
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
            <Tab label="ADMIN" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <UserDetail userData={userData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserOrder userId={userId} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CustomizedLink to="/admin/product">
              <CustomizedText> Products</CustomizedText>
            </CustomizedLink>
            <CustomizedLink to="/admin/user">
              <CustomizedText>Users</CustomizedText>
            </CustomizedLink>
          </TabPanel>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Index
