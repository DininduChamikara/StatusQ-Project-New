import { Box } from '@mui/material'
import React from 'react'
import BecomePromoterBanner from '../../components/BecomePromoterBanner/BecomePromoterBanner'
import PromoterSurveyStepper from '../../components/PromoterSurveyStepper/PromoterSurveyStepper'

function PromoterView() {
  return (
    <Box>
      <BecomePromoterBanner/>
      <PromoterSurveyStepper/>
    </Box>
  )
}

export default PromoterView