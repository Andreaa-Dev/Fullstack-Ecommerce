import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography } from '@mui/material'
import { createTheme, styled } from '@mui/material/styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'

import background from '../images/background.webp'

export const themes = createTheme({
  typography: {
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#16213e',
    },
    secondary: {
      main: '#BA1B2B',
    },
  },
})

export const useStyles = makeStyles({
  typography: {
    fontFamily: 'Open Sans Condensed',
  },
})

//NORMAL THEME
export const CustomizedTitle = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 2rem;
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

export const BoxRowStart = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const BoxGrid = styled(Box)`
  display: grid;
  grid-template-columns: 400px 400px;
  column-gap: 20px;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  grid-row-start: row1-start;
`

export const CustomizedLPlayIcon = styled(PlayCircleOutlineIcon)`
  color: white;
  width: 50px;
  height: 50px;
`

export const CustomizedText = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
`
export const CustomizedTextUC = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 20px;
`

export const CustomizedTextLeft = styled(Typography)`
  text-align: left;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 20px;
`

export const CustomizedTitleProduct = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
`
export const CustomizedTextProduct = styled(Typography)`
  text-align: flex-start;
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 1rem;
  -webkit-line-clamp: 2;
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

//HOLIDAY THEME

export const CustomizedBoxHT = styled(Box)`
  background-image: url(${background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomizedTitleHT = styled(Typography)`
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
  margin-bottom: 1rem;
`
export const CustomizedTextHT = styled(Typography)`
  text-align: center;
  margin: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1rem;
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
