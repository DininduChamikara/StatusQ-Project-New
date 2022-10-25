/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import axios from "axios";
import testImage from '../../images/profile.jpg';


function Reviews() {

  const [reviewResponses, setReviewResponses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/review/getAllReviewResponses")
      .then((res) => {
        setReviewResponses(res.data);
        // console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", pb: 1 }}>
        Recent Reviews
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifycontent: "center",
          flexdirection: "row",
        }}
      >
        <Swiper spacebetween={10} slidesPerView={2.6} grabCursor={true}>
          {reviewResponses.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <Paper
                  variant="outlined"
                  sx={{ borderRadius: 5, p: 1.5, width: "25rem" }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box sx={{ width: "80%" }}>
                      <Box sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                        {review.firstname + " " + review.lastname}
                      </Box>
                      <Box
                        sx={{
                          displey: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Rating
                          name="read-only"
                          value={review.ratingCount}
                          readOnly
                        />
                      </Box>
                    </Box>
                    <Box sx={{ width: "20%", display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>
                      <Avatar alt="Image" src={testImage} />
                    </Box>
                  </Box>

                  <Typography>{review.date}</Typography>
                  <Typography sx={{ my: 1 }}>{review.description}</Typography>
                </Paper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Paper>
  );
}

export default Reviews;
