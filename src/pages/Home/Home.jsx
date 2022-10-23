import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Reviews from "../../components/Reviews/Reviews";
import ThemeImage from "../../images/statusq-main-image.png";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          gap: 1,
          mt: 2,
        }}
      >
        <Paper sx={{ width: "52vw" }} elevation={3}>
          <Typography>Image Slider</Typography>
        </Paper>
        <Paper sx={{ width: "25vw", height: "25vw", p: 2 }} elevation={3}>
          <Box
            sx={{
              backgroundColor: "#E59393",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
            }}
          >
            <img src={ThemeImage} width={"100%"} alt="ThemeImage" />
          </Box>
        </Paper>
      </Box>
      <Box sx={{ width: "77.5vw", my:1 }}>
        <Reviews/>
      </Box>
    </Box>
  );
}

export default Home;
