import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function PromoterDeclaration() {
  return (
    <Box sx={{ my: 2 }}>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1 }}>
          Promoter Declaration
        </Typography>
        <Typography sx={{ px: 1, my: 2 }}>
          I hereby declare that the details mentionaed above in my resume are
          correct to the best of my knowledge and belief. I bear the
          responsibility of any error or mistake in the data if occur in the
          future.
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1, px:1 }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography>31/10/2022</Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography>Dinindu Chamikara</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default PromoterDeclaration;
