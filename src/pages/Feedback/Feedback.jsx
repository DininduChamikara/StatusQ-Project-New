import { RestartAlt, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReviewService from "../../api/services/ReviewService";
import RateUsImage from "../../images/rate_us.png";

function Feedback({ userInfo }) {
  const current = new Date();
  const currentDate = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  let date = new Date().toISOString().split("T")[0];

  const { userId } = useSelector((state) => state.login);

  const [review, setReview] = useState({
    userId: userId,
    // date: currentDate,
    date: date,
    ratingCount: 1,
    description: "",
    state: "ACTIVE",
  });

  const handleOnChangeDescription = (event) => {
    console.log("user info from feedback " + userInfo.fname);
    setReview({
      ...review,
      description: event.target.value,
    });
  };

  const handleOnChangeRatingCount = (event) => {
    setReview({
      ...review,
      ratingCount: event.target.value,
    });
  };

  const sendReview = () => {
    let apiCall = ReviewService.saveReview(review);
    apiCall.then((response) => {
      if (response) {
        response = response.data;
        console.log("response is ", response)
        
      }
    });
  };

  return (
    <Paper
      sx={{
        p: 3,
        py: 8,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "55%",
          p: 5,
        }}
      >
        <img src={RateUsImage} alt="Ratings" width="400" />
      </Box>
      <Box sx={{ width: "45%", px: 4 }}>
        <Paper elevation={3} sx={{ borderRadius: 5, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", mb: 1 }}>
              Send Feedback
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{ fontWeight: "bold", mt: 0.5, fontSize: "1.2rem" }}
            >
              Rate StatusQ
            </Typography>
            <Typography>Tell others what you think</Typography>

            <Box sx={{ my: 2 }}>
              <Rating
                name="simple-controlled"
                size="large"
                value={review.ratingCount}
                onChange={handleOnChangeRatingCount}
              />
            </Box>

            <Box>
              <TextField
                inputProps={{
                  maxLength: 100,
                }}
                id="outlined-multiline-static"
                multiline
                fullWidth
                value={review.description}
                onChange={handleOnChangeDescription}
                rows={4}
                placeholder="Describe your experience (Optional)"
              />
            </Box>
            <Box
              sx={{ flexDirection: "row", justifyContent: "flex-end", mx: 1 }}
              display="flex"
            >
              <Typography>{review.description.length}</Typography>
              <Typography>/100</Typography>
            </Box>

            <Stack
              sx={{ mt: 3, justifyContent: "flex-end" }}
              direction="row"
              spacing={2}
            >
              <Button variant="outlined" startIcon={<RestartAlt />}>
                Cancel
              </Button>
              <Button
                onClick={sendReview}
                variant="contained"
                endIcon={<Send />}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}

export default Feedback;
