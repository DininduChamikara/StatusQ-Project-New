import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCampaignViewsInfo } from "../../store/reducers/saveCampaign";
import ImagePreview from "../ImagePreview/ImagePreview";

function UploadAdvertisement() {
  const onFileChange = (files) => {
    console.log(files);
  };

  let { selectedAdvertisements } = useSelector((state) => state.saveCampaign);

  const [selectedAdsCount, setSelectedAdsCount] = useState(0);
  const [perViewCost, setPerViewCost] = useState(2);
  const [adCampaignCost, setAdCampaignCost] = useState(0);
  const [viewsAmount, setViewsAmount] = useState(1000);
  const [promoterMinViews, setPromoterMinViews] = useState(50);
  const [numOfPromoters, setNumOfPromoters] = useState(0);

  const handleOnChangeViewsAmount = (event) => {
    setViewsAmount(event.target.value);
  }
  const handleOnChangePromoterMinViews = (event) => {
    setPromoterMinViews(event.target.value);
  }

  useEffect(() => {
    setSelectedAdsCount(selectedAdvertisements.length);
    setAdCampaignCost(selectedAdsCount * perViewCost * viewsAmount);
    setNumOfPromoters(viewsAmount/promoterMinViews);

  }, [selectedAdvertisements, selectedAdsCount, viewsAmount, promoterMinViews])

  // console.log("length is", selectedAdsCount)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeCampaignViewsInfo({
        minRequiredViews: viewsAmount,
        viewsFromEach: promoterMinViews,
        numOfPromoters: numOfPromoters,
      })
    )
  }, [viewsAmount, promoterMinViews, numOfPromoters])

  return (
    <Box>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 1 }}>
          Upload the advertisement
        </Typography>

        <ImagePreview />

        {/* <DropFileInput onFileChange={(files) => onFileChange(files)} /> */}
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
            <Typography sx={{ color: "#336cad" }}>
              Select the required amount of views
            </Typography>
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
                defaultValue={1000}
                onChange={handleOnChangeViewsAmount}
                value={viewsAmount}
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
            <Typography sx={{ color: "#336cad" }}>Required Payment</Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              value={"Rs. " + adCampaignCost + ".00"}
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
            <Typography sx={{ color: "#336cad" }}>
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
                onChange={handleOnChangePromoterMinViews}
                value={promoterMinViews}
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
            <Typography sx={{ color: "#336cad" }}>
              Number of promoters required
            </Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={numOfPromoters}
              size="small"
            ></TextField>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default UploadAdvertisement;
