import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles'
import BlockIcon from '@mui/icons-material/Block'
import IconButton from '@mui/material/IconButton'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { BoxColumn } from '../../../customizedCSS'

type UserDataType = {
  _id: string
  acceptedTerms: boolean
  address: string
  country: string
  email: string
  firstName: string
  lastName: string
  orderIds: []
  isBanned: boolean
  password: string
  phone: string
  role: string
}

type UserDataPropType = {
  userData: UserDataType[]
  getUserData: () => Promise<void>
}

function UserList({ userData, getUserData }: UserDataPropType) {
  const [buttonStatus, setButtonStatus] = useState(false)
  const [banColor, setColor] = useState<'action' | 'secondary'>('action')
  const useStyles = makeStyles({
    icon: {
      color: banColor,
    },
  })
  const classes = useStyles()

  const onClickHandler = async (userId: string) => {
    const response = await axios.patch(
      `http://localhost:5000/api/v1/user/${userId}/ban-user`,
      {}
    )
    if (response.status === 200) {
      getUserData()
    }
  }

  if (userData) {
    return (
      <BoxColumn sx={{ m: '20px' }}>
        <TableContainer component={Paper} sx={{ width: '1200px' }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Other</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .filter((item) => item.role !== 'admin')
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
                    <TableCell align="right">
                      <IconButton disabled={true}>
                        <BlockIcon
                          className={classes.icon}
                          id={row._id}
                          color={row.isBanned === true ? 'secondary' : 'action'}
                          onClick={() => onClickHandler(row._id)}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </BoxColumn>
    )
  }
  return <></>
}

export default UserList
