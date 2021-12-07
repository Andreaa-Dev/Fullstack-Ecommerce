import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

//test
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { AppState } from '../../misc/type'
import { fetchUserData } from '../../redux/action'
import { BoxColumn, CustomizedTitle } from '../customizedCSS'
import UserDetail from './UserDetail'
import UserOrder from './UserOrder'

// test
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

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
  // test
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  let param = useParams() as { id: string }
  const dispatch = useDispatch()
  const userData = useSelector((state: AppState) => state.userState.userById)

  useEffect(() => {
    dispatch(fetchUserData(param.id))
  }, [dispatch, param.id])

  console.log(userData, 'h')
  return (
    <Box sx={{ m: '50px' }}>
      <CustomizedTitle> YOUR ACCOUNT</CustomizedTitle>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 224,
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
        </Tabs>
        <TabPanel value={value} index={0}>
          <UserDetail userData={userData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserOrder />
        </TabPanel>
      </Box>
    </Box>
  )
}

export default Index
