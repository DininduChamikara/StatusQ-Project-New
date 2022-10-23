import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

function SelectAudience() {
  const [state, setState] = React.useState({
    schoolCat: false,
    universityCat: false,
    olCat: false,
    alCat: false,
    subMaths: false,
    subBio: false,
    subCommerce: false,
    subArt: false,
    subTechnology: false,
    undergraduateCat: false,
    postgraduateCat: false,
    ageGroup_13_15: false,
    ageGroup_16_18: false,
    ageGroup_19_25: false,
    ageGroup_26_35:false,
    ageGroup_36_60:false,
    ageGroup_over_60:false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    schoolCat,
    universityCat,
    olCat,
    alCat,
    subMaths,
    subBio,
    subCommerce,
    subArt,
    subTechnology,
    undergraduateCat,
    postgraduateCat,
    ageGroup_13_15,
    ageGroup_16_18,
    ageGroup_19_25,
    ageGroup_26_35,
    ageGroup_36_60,
    ageGroup_over_60,
  } = state;

  return (
    <Box sx={{ my: 2 }}>
      <FormControl>
        <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Campaign Media
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="WHATSAPP"
              control={<Radio />}
              label="WhatsApp"
            />
            <FormControlLabel
              value="FACEBOOK"
              control={<Radio />}
              label="Facebook"
            />
            <FormControlLabel
              value="INSTAGRAM"
              control={<Radio />}
              label="Instagram"
            />
          </RadioGroup>
        </Paper>

        <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 1 }}>
            Audience Category
          </Typography>
          <FormLabel component="legend">Educational Level</FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              control={
                <Checkbox
                  checked={schoolCat}
                  onChange={handleChange}
                  name="schoolCat"
                />
              }
              label="School Category"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={universityCat}
                  onChange={handleChange}
                  name="universityCat"
                />
              }
              label="University Category"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
          <Divider />
          {schoolCat && (
            <Box sx={{ pl: 10, mt: 1 }}>
              <FormLabel component="legend">School Category</FormLabel>
              <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="olCat"
                      checked={olCat}
                    />
                  }
                  label="Ordinary Level"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="alCat"
                      checked={alCat}
                    />
                  }
                  label="Advanced Level"
                />
              </FormGroup>
              <Divider />
              {alCat && (
                <Box sx={{ pl: 10, mt: 1 }}>
                  <FormLabel component="legend">
                    A/L Subject Categories
                  </FormLabel>
                  <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subMaths"
                          checked={subMaths}
                        />
                      }
                      label="Mathematics"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subBio"
                          checked={subBio}
                        />
                      }
                      label="Biology"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subCommerce"
                          checked={subCommerce}
                        />
                      }
                      label="Commerce"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subArt"
                          checked={subArt}
                        />
                      }
                      label="Art"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subTechnology"
                          checked={subTechnology}
                        />
                      }
                      label="Technology"
                    />
                  </FormGroup>
                  <Divider />
                </Box>
              )}
            </Box>
          )}

          {universityCat && (
            <Box sx={{ pl: 10, mt: 1 }}>
              <FormLabel component="legend">University Category</FormLabel>
              <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="undergraduateCat"
                      checked={undergraduateCat}
                    />
                  }
                  label="Undergraduate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="postgraduateCat"
                      checked={postgraduateCat}
                    />
                  }
                  label="Postgraduate"
                />
              </FormGroup>
              <Divider />
            </Box>
          )}

          <FormLabel sx={{ mt: 1 }} component="legend">
            Age Level
          </FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_13_15}
                  onChange={handleChange}
                  name="ageGroup_13_15"
                />
              }
              label="13 - 15 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_16_18}
                  onChange={handleChange}
                  name="ageGroup_16_18"
                />
              }
              label="16 - 18 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_19_25}
                  onChange={handleChange}
                  name="ageGroup_19_25"
                />
              }
              label="19 - 25 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_26_35}
                  onChange={handleChange}
                  name="ageGroup_26_35"
                />
              }
              label="26 - 35 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_36_60}
                  onChange={handleChange}
                  name="ageGroup_36_60"
                />
              }
              label="36 - 60 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_over_60}
                  onChange={handleChange}
                  name="ageGroup_over_60"
                />
              }
              label="Over 60 Years"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
        </Paper>
      </FormControl>
    </Box>
  );
}

export default SelectAudience;
