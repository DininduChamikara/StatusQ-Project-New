/* eslint-disable jsx-a11y/alt-text */
import { AddCircleOutline, Campaign } from '@mui/icons-material'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CampaignImage from "../../images/campaigns.jpg";

function CreateCampaignBanner() {
  return (
    <Paper
      sx={{
        p: 3,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Box sx={{ width: "50%" }}>
        <img width={500} height={300} src={CampaignImage} />
      </Box>
      <Box sx={{ width: "50%", alignItems: "center", p: 2 }}>
        <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold", my: 2 }}>
          Promote your Products or Services on Social Media
        </Typography>
        <Typography>
          Click on Create New Campaigns to launch an advertisement campaign on a
          Social Media Platform for your product or service
        </Typography>
        <Box sx={{my:2}}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" startIcon={<AddCircleOutline />}>
              Create New Campaign
            </Button>
            <Button variant="contained" color="secondary" endIcon={<Campaign />}>
              Ongoing Campaigns
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  )
}

export default CreateCampaignBanner