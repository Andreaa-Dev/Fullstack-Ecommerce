import { Link } from 'react-router-dom'
import { createTheme, styled } from '@mui/material/styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Box, Button, Typography } from '@mui/material'

export const themes = createTheme({
  typography: {
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
  },
})

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
`

export const BoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BoxColumnStart = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-family: 'Open Sans Condensed', sans-serif;
`

export const CustomizedLPlayIcon = styled(PlayCircleOutlineIcon)`
  color: white;
  width: 50px;
  height: 50px;
`

export const CustomizedTitle = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 2rem;
  background-image: linear-gradient(
    92deg,
    #a48b5e -31%,
    #ce944a -7%,
    #d8a965 11%,
    #f9f3e2 121%,
    #f4e3af 132%
  );
  background-clip: text;
  text-fill-color: transparent;
`

export const CustomizedText = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
`