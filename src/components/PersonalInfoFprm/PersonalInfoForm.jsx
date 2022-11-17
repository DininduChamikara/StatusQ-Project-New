import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {changePersonalDetails, savePromoter} from "../../store/reducers/savePromoter";

function PersonalInfoForm() {
  const [state, setState] = useState({
    whatsapp: false,
    facebook: false,
    instagram: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [promoterPersonalInfo, setPromoterPersonalInfo] = useState({
    fullname: undefined,
    nameWithInit: undefined,
    dob: undefined,
    gender: undefined,
    nic: undefined,
    address: undefined,
    postcode: undefined,
    mobile: undefined,
    province: undefined,
    language: undefined,
    educationalLevel: undefined,
    whatsAppMinViews: undefined,
    facebookMinViews: undefined,
    instagramMinViews: undefined,
  })

  const dispatch = useDispatch();
  // const { promoterStepperActive } = useSelector((state) => state.activeStep);

  useEffect(() => {
    dispatch(
      changePersonalDetails({
        fullName: promoterPersonalInfo.fullname,
        nameWithInit: promoterPersonalInfo.nameWithInit,
        dob: promoterPersonalInfo.dob,
        gender: promoterPersonalInfo.gender,
        nic: promoterPersonalInfo.nic,
        address: promoterPersonalInfo.address,
        postcode: promoterPersonalInfo.postcode,
        mobile: promoterPersonalInfo.mobile,
        province: promoterPersonalInfo.province,
        language: promoterPersonalInfo.language,
        educationalCategory: promoterPersonalInfo.educationalLevel,
      })
    )
  }, [promoterPersonalInfo])

  // get form info on hadle chages
  const handleOnChangeFullName = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      fullname: event.target.value,
    });
  };
  const handleOnChangeNameWithInit = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      nameWithInit: event.target.value,
    });
  };
  const handleOnChangeDob = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      dob: event.target.value,
    });
  };
  const handleOnChangeGender = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      gender: event.target.value,
    });
  };
  const handleOnChangeNic = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      nic: event.target.value,
    });
  };
  const handleOnChangeAddress = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      address: event.target.value,
    });
  };
  const handleOnChangePostcode = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      postcode: event.target.value,
    });
  };
  const handleOnChangeMobile = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      mobile: event.target.value,
    });
  };
  const handleOnChangeProvince = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      province: event.target.value,
    });
  };
  const handleOnChangeLanguage = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      language: event.target.value,
    });
  };
  const handleOnChangeEducationalLevel = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      educationalLevel: event.target.value,
    });
  };
  const handleOnChangeWhatsAppMinViews = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      whatsAppMinViews: event.target.value,
    });
  };
  const handleOnChangeFacebookMinViews = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      facebookMinViews: event.target.value,
    });
  };
  const handleOnChangeInstagramMinViews = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      instagramMinViews: event.target.value,
    });
  };

  const { whatsapp, facebook, instagram } = state;

  return (
    <Box sx={{ my: 2 }}>
      <FormControl>
        <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1 }}>
            Personal Information
          </Typography>
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
              <Typography sx={{ color: "#336cad" }}>Full legal name</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter the full legal name"
                size="small"
                value={promoterPersonalInfo.fullname}
                onChange={handleOnChangeFullName}
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
                Name with initials
              </Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter the name with initials"
                size="small"
                value={promoterPersonalInfo.nameWithInit}
                onChange={handleOnChangeNameWithInit}
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
              <Typography sx={{ color: "#336cad" }}>Date of Birth</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                id="date"
                type="date"
                // defaultValue="2017-05-24"
                sx={{ pl: 1, width: "96%" }}
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                value={promoterPersonalInfo.dob}
                onChange={handleOnChangeDob}
              />
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
              <Typography sx={{ color: "#336cad" }}>Gender</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <RadioGroup
                sx={{ pl: 1, width: "96%" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={promoterPersonalInfo.gender}
                onChange={handleOnChangeGender}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
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
              <Typography sx={{ color: "#336cad" }}>NIC number</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your NIC"
                size="small"
                value={promoterPersonalInfo.nic}
                onChange={handleOnChangeNic}
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
              <Typography sx={{ color: "#336cad" }}>Address</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your address"
                size="small"
                value={promoterPersonalInfo.address}
                onChange={handleOnChangeAddress}
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
              <Typography sx={{ color: "#336cad" }}>Postal Code</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your postal code"
                size="small"
                value={promoterPersonalInfo.postcode}
                onChange={handleOnChangePostcode}
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
              <Typography sx={{ color: "#336cad" }}>Mobile</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your mobile number"
                type="tel"
                size="small"
                value={promoterPersonalInfo.mobile}
                onChange={handleOnChangeMobile}
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
              <Typography sx={{ color: "#336cad" }}>Living Province</Typography>
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
                  value={promoterPersonalInfo.province}
                  onChange={handleOnChangeProvince}
                >
                  <MenuItem value="western">Western Province</MenuItem>
                  <MenuItem value="uva">Uva Province</MenuItem>
                  <MenuItem value="sabaragamuwa">
                    Sabaragamuwa Province
                  </MenuItem>
                  <MenuItem value="central">Central Province</MenuItem>
                  <MenuItem value="nothern">Nothern Province</MenuItem>
                  <MenuItem value="northern western">
                    Northern Western Province
                  </MenuItem>
                  <MenuItem value="southern">Southern Province</MenuItem>
                  <MenuItem value="eastern">Eastern Province</MenuItem>
                  <MenuItem value="north central">
                    North Central Province
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", my: 1 }}
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
              <Typography sx={{ color: "#336cad" }}>Language</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <RadioGroup
                sx={{ pl: 1, width: "96%" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={promoterPersonalInfo.language}
                onChange={handleOnChangeLanguage}
              >
                <FormControlLabel
                  value="sinhala"
                  control={<Radio />}
                  label="Sinhala"
                />
                <FormControlLabel
                  value="tamil"
                  control={<Radio />}
                  label="Tamil"
                />
                <FormControlLabel
                  value="english"
                  control={<Radio />}
                  label="English"
                />
              </RadioGroup>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", my: 1 }}
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
                Educational Level
              </Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <RadioGroup
                sx={{ pl: 1, width: "96%" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={promoterPersonalInfo.educationalLevel}
                onChange={handleOnChangeEducationalLevel}
              >
                <FormControlLabel
                  value="upto-ol"
                  control={<Radio />}
                  label="Upto O/L"
                />
                <FormControlLabel
                  value="upto-al"
                  control={<Radio />}
                  label="Upto A/L"
                />
                <FormControlLabel
                  value="undergraduate"
                  control={<Radio />}
                  label="Undergraduate"
                />
                <FormControlLabel
                  value="postgraduate"
                  control={<Radio />}
                  label="Postgraduate"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Box>
          </Box>
          <Divider />

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
                Accessible social media platforms
              </Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <FormGroup
                sx={{ pl: 1, width: "96%" }}
                row
                name="row-radio-buttonsMuiFormGroup-row"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="whatsapp"
                      checked={whatsapp}
                      onChange={handleChange}
                    />
                  }
                  label="WhatsApp"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="facebook"
                      checked={facebook}
                      onChange={handleChange}
                    />
                  }
                  label="Facebook"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="instagram"
                      checked={instagram}
                      onChange={handleChange}
                    />
                  }
                  label="Instagram"
                />
              </FormGroup>
              <FormHelperText></FormHelperText>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                my: 1,
                ml: 1,
              }}
            ></Box>

            {(whatsapp || facebook || instagram) && (
              <Box sx={{ width: "60%", my:1 }}>
              <Typography sx={{ color: "#336cad", fontWeight:'bold' }}>
                Select accessible amount of views for selected platforms
              </Typography>
            </Box>
            )}
            
          </Box>

          {whatsapp && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                my: 1,
                ml: 11,
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
                <Typography sx={{ color: "#336cad" }}>WhatsApp</Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <RadioGroup
                  sx={{ pl: 1, width: "96%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={promoterPersonalInfo.whatsAppMinViews}
                  onChange={handleOnChangeWhatsAppMinViews}
                >
                  <FormControlLabel value={50} control={<Radio />} label="50" />
                  <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </Box>
            </Box>
          )}

          {facebook && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                my: 1,
                ml: 11,
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
                <Typography sx={{ color: "#336cad" }}>Facebook</Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <RadioGroup
                  sx={{ pl: 1, width: "96%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={promoterPersonalInfo.facebookMinViews}
                  onChange={handleOnChangeFacebookMinViews}
                >
                  <FormControlLabel value={50} control={<Radio />} label="50" />
                  <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </Box>
            </Box>
          )}

          {instagram && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                my: 1,
                ml: 11,
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
                <Typography sx={{ color: "#336cad" }}>Instagram</Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <RadioGroup
                  sx={{ pl: 1, width: "96%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={promoterPersonalInfo.instagramMinViews}
                  onChange={handleOnChangeInstagramMinViews}
                >
                  <FormControlLabel value={50} control={<Radio />} label="50" />
                  <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </Box>
            </Box>
          )}
        </Paper>
      </FormControl>
    </Box>
  );
}

export default PersonalInfoForm;
