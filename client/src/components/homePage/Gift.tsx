import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import { giftImgList } from '../../misc/giftImgList'
import { BoxRow } from '../customizedCSS'

function Gift() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = giftImgList.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div>
      <Box sx={{ backgroundColor: 'white' }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          {/* <Typography>{steps[activeStep].label}</Typography> */}
        </Paper>
        <BoxRow
          sx={{
            height: 155,
            width: '50%',
            p: 2,
            justifyContent: 'space-between',
            margin: 'auto',
          }}
        >
          <img
            src={giftImgList[activeStep].name}
            alt=""
            height="150"
            width="150"
          />
          <img
            src={giftImgList[activeStep + 1].name}
            alt=""
            height="150"
            width="150"
          />
          <img
            src={giftImgList[activeStep + 2].name}
            alt=""
            height="150"
            width="150"
          />
        </BoxRow>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  )
}

export default Gift
