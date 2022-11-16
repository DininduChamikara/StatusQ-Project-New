import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

function CheckAndCountRow({categoryLabal, categoryText}) {
  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleOnChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleOnChangeAmount = (event) => {
    setAmount(event.target.value)
    console.log(event.target.value)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        mt: 1,
        alignItems: "center",
        // height:'60px'
      }}
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
        <FormControlLabel
          control={
            <Checkbox name="ageGroup_13_15" onChange={handleOnChangeCheckbox} />
          }
          label={categoryLabal}
          labelPlacement="start"
        />
      </Box>
      {checked && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider orientation="vertical" flexItem />
          <Typography sx={{ p: 1, width: "60%", color: "#336cad" }}>
            Enter the number of views you can generate from this{" "}
            {categoryText}{" "}
          </Typography>

          <Box sx={{ width: "10%" }}>
            <TextField
              sx={{ pl: 1, width: "100px" }}
              inputProps={{ min: 0 }}
              type="number"
              size="small"
              value={amount}
              onChange={handleOnChangeAmount}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CheckAndCountRow;
