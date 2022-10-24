import {
  Box,
  Divider,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import CardPayment from "./CardPayment";
import PayOnEarnings from "./PayOnEarnings";

function CampaignPayment() {
  const [alignment, setAlignment] = React.useState("CARD_PAYMENT");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
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
              Advertisement Campaign Cost
            </Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={"Rs. 2000.00"}
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
            <Typography sx={{ color: "#336cad" }}>System Fee (10%)</Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={"Rs. 200.00"}
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
              Total Campaign Cost
            </Typography>
          </Box>

          <Box sx={{ width: "60%" }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={"Rs. 2200.00"}
              size="small"
            ></TextField>
          </Box>
        </Box>
      </Paper>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1, mt:2 }}>
        <Box sx={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <ToggleButtonGroup
            sx={{ mb: 1 }}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="small"
          >
            <ToggleButton
              sx={{ width: 200, fontWeight: "bold" }}
              color="primary"
              value="CARD_PAYMENT"
            >
              Card Payment
            </ToggleButton>
            <ToggleButton
              sx={{ width: 200, fontWeight: "bold" }}
              color="secondary"
              value="PAYMENT_ON_EARNINGS"
            >
              Pay on your earnings
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider />
        {alignment === "CARD_PAYMENT" && <CardPayment />}
        {alignment === "PAYMENT_ON_EARNINGS" && <PayOnEarnings />}
      </Paper>
    </Box>
  );
}

export default CampaignPayment;
