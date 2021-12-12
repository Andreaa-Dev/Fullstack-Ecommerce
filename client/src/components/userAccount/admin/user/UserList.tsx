import React, { useState } from 'react'
import axios from 'axios'
import { red } from '@mui/material/colors'
import { grey } from '@mui/material/colors'
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
import { BoxColumn, CustomizedText } from '../../../customizedCSS'
import { UserDataType } from '../../../../misc/type'

type UserDataPropType = {
  userData: UserDataType[] | undefined
  getUserData: () => Promise<void>
}

function UserList({ userData, getUserData }: UserDataPropType) {
  const [banColor] = useState<'primary' | 'warning'>('primary')
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
                <TableCell align="right">Status*</TableCell>
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
                      <IconButton>
                        <BlockIcon
                          className={classes.icon}
                          id={row._id}
                          color={row.isBanned === true ? 'error' : 'primary'}
                          onClick={() => onClickHandler(row._id)}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomizedText sx={{ fontWeight: 'bold' }}>
          Status* : red means the user was banned
        </CustomizedText>
      </BoxColumn>
    )
  }
  return <></>
}

export default UserList
