import { Box, Slider } from "@mui/material";
import React from "react";

function DiscreteSlider({setViews}) {
  function valuetext(value) {
    // return `${value}°C`;
    setViews(value);
    return value;
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </Box>
  );
}

export default DiscreteSlider;
