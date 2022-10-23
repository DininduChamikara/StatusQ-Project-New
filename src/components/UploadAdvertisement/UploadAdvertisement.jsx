import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DropFileInput from "../DropFileInput/DropFileInput";

function UploadAdvertisement() {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <Box>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 1 }}>
          Upload the advertisement
        </Typography>
        <DropFileInput onFileChange={(files) => onFileChange(files)} />
      </Paper>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{color:'#336cad'}}>Select the required amount of views</Typography>
          </Box>
          <Box sx={{ width: "60%" }}>
            <FormControl sx={{ mx: 1, width: "95%" }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  width: "100%",
                  backgroundColor: "",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={2000}>2000</MenuItem>
                <MenuItem value={3000}>3000</MenuItem>
                <MenuItem value={4000}>4000</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{color:'#336cad'}}>Required Payment</Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={"Rs. 1000.00"}
              size="small"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{color:'#336cad'}}>
              Select the required amount of views from each promoter
            </Typography>
          </Box>
          <Box sx={{ width: "60%", alignItems: "center" }}>
            <FormControl sx={{ mx: 1, width: "95%" }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  width: "100%",
                  backgroundColor: "",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={500}>500</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{color:'#336cad'}}>Number of promoters required</Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={50}
              size="small"
            ></TextField>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default UploadAdvertisement;
