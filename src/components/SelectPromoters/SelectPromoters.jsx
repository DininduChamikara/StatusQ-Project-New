import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPromotersList } from "../../store/reducers/saveCampaign";
import BarChart from "../BarChart/BarChart";
import DataTable from "../DataTable/DataTable";

function SelectPromoters() {
  const [selectedPromoterCount, setSelectedPromoterCount] = useState(0);
  const [selectedPromotersList, setSelectedPromotersList] = useState([]);

  // console.log("selected count ", selectedPromoterCount)
  // console.log(selectedPromotersList)
  const dispatch = useDispatch();

  const [listSaved, setListSaved] = useState(false);

  const {selectedPromoterForView} = useSelector((state) => state.saveCampaign);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "50%", p: 1 }}>
          <DataTable
            selectedPromoterCount={selectedPromoterCount}
            setSelectedPromoterCount={setSelectedPromoterCount}
            selectedPromotersList={selectedPromotersList}
            setSelectedPromotersList={setSelectedPromotersList}
            listSaved={listSaved}
          />
        </Box>

        <Box
          sx={{
            width: "50%",
            border: 1,
            borderRadius: 1,
            m: 1,
            borderColor: "#E0E0E0",
            p: 2,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              m: 1,
              fontSize: "1.2rem",
            }}
          >
            Promoter's Audience Statistics
          </Typography>
          <Divider />

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", width: "75%" }}>
              <Typography sx={{ mr: 1 }}>PromoterId:</Typography>
              <Typography>{selectedPromoterForView}</Typography>
            </Box>
            <Box sx={{ width: "25%" }}>
              <Select
                fullWidth
                size="small"
                sx={{
                  paddingLeft: "0px",
                  width: "100%",
                  backgroundColor: "",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="education"
              >
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="age">Age</MenuItem>
                <MenuItem value="region">Region</MenuItem>
                <MenuItem value="language">Language</MenuItem>
                <MenuItem value="gender">Gender</MenuItem>
              </Select>
            </Box>
          </Box>
          <BarChart />
        </Box>
      </Box>

      {selectedPromoterCount > 0 && (
        <Box
          sx={{
            textAlign: "center",
            my: 1,
            borderTop: 2,
            borderBottom: 2,
            py: 1,
            color: "primary",
          }}
        >
          <Button
            sx={{ ml: 1, width: 300 }}
            disabled={listSaved}
            variant="contained"
            onClick={() => {
              dispatch(
                changeSelectedPromotersList({
                  selectedPromoterIdList: selectedPromotersList,
                })
              );
              setListSaved(true)
            }}
          >
            Save Selections ({selectedPromoterCount})
          </Button>

          <Button
            sx={{ ml: 1, width: 300 }}
            variant="contained"
            color="secondary"
            onClick={() => {
              // need to clear details
              setListSaved(false)
            }}
          >
            Edit Selections
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default SelectPromoters;
