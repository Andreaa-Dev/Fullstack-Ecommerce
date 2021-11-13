import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Box, Button, Typography } from '@mui/material'
import { createTheme } from '@mui/system'

export const themes = createTheme({
  typography: {
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
  },
})

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const BoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BoxRow = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const CustomizedButton = styled(Button)`
  color: white;
  border-radius: 20px;
  background-color: #16213e;
  padding: 10px;
  border: 1px white solid;
  margin: 20px;
  width: 150px;
`

export const CustomizedLPlayIcon = styled(PlayCircleOutlineIcon)`
  color: white;
  width: 50px;
  height: 50px;
`

export const CustomizedTitle = styled(Typography)`
  color: white;
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
`

export const CustomizedText = styled(Typography)`
  color: black;
  text-align: center;
  margin: 10px;
`
