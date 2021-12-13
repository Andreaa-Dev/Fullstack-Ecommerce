import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles'
import BlockIcon from '@mui/icons-material/Block'
import IconButton from '@mui/material/IconButton'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { BoxColumn, CustomizedText } from '../../../customizedCSS'
import { UserDataType } from '../../../../misc/type'

type UserDataPropType = {
  userData: UserDataType[] | undefined
  getUserData: () => Promise<void>
}

function UserList({ userData, getUserData }: UserDataPropType) {
  const [banColor] = useState<'primary' | 'warning'>('primary')
  const [adminColor] = useState<'action' | 'success'>('action')

  const useStyles = makeStyles({
    bannedIcon: {
      color: banColor,
    },
    adminIcon: {
      color: adminColor,
    },
  })
  const classes = useStyles()

  const onClickBannedHandler = async (userIdBanned: string) => {
    const response = await axios.patch(
      `http://localhost:5000/api/v1/user/${userIdBanned}/ban-user`,
      {}
    )
    if (response.status === 200) {
      getUserData()
    }
  }

  const onClickAdminHandler = async (userIdAdmin: string) => {
    const adminReq = await axios.patch(
      `http://localhost:5000/api/v1/user/${userIdAdmin}/make-admin`,
      {}
    )
    console.log(adminReq, 'h')

    if (adminReq.status === 200) {
      getUserData()
    }
  }

  if (userData) {
    return (
      <BoxColumn sx={{ m: '20px' }}>
        <TableContainer component={Paper} sx={{ width: '1300px' }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Status*</TableCell>
                <TableCell align="right">Make Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .filter((item) => item._id !== '61b6138873e5c6053f2df38d')
                .map((row: UserDataType) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="left">{row.country}</TableCell>
                    <TableCell align="right">{row.role}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => onClickBannedHandler(row._id)}>
                        <BlockIcon
                          className={classes.bannedIcon}
                          id={row._id}
                          color={row.isBanned === true ? 'error' : 'primary'}
                        />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => onClickAdminHandler(row._id)}>
                        <AdminPanelSettingsIcon
                          className={classes.adminIcon}
                          id={row._id}
                          color={row.role === 'user' ? 'action' : 'success'}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomizedText
          sx={{
            fontWeight: 'bold',
          }}
        >
          Status* : red : is banned & Make Admin*: green: Admin
        </CustomizedText>
      </BoxColumn>
    )
  }
  return <></>
}

export default UserList
