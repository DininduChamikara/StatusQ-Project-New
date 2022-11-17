import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ThemeImage from "../../images/statusq-main-image.png";
import { Link, useNavigate } from "react-router-dom";
import DialogBox from "../../components/DialogBox/DialogBox";
import UserService from "../../api/services/UserService";

function Register() {

  let navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
    confirm_password: undefined,
    userType: "NORMAL_USER",
    state: "ACTIVE",
  });

  const handleOnChangeFirstName = (event) => {
    setUserInfo({
      ...userInfo,
      firstname: event.target.value,
    });
  };

  const handleOnChangeLastName = (event) => {
    setUserInfo({
      ...userInfo,
      lastname: event.target.value,
    });
  };

  const handleOnChangeEmail = (event) => {
    setUserInfo({
      ...userInfo,
      email: event.target.value,
    });
  };

  const handleOnChangePassword = (event) => {
    setUserInfo({
      ...userInfo,
      password: event.target.value,
    });
  };

  const handleOnChangeConfirmPassword = (event) => {
    setUserInfo({
      ...userInfo,
      confirm_password: event.target.value,
    });
  };

  const saveUser = () => {
    let apiCall = UserService.saveUser(userInfo);
    apiCall.then((response) => {
      if (response) {
        response = response.data;

        console.log("response is ", response)
        
        if(response.responseCode === "00"){
          console.log("navigate to login")
          navigate("/");
        }
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 2, width: "1000px", backgroundColor: "#18345E" }}
      >
        <Box sx={{ flexDirection: "row", width: "100%", display: "flex" }}>
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
            >
              StatusQ
            </Typography>

            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "bisque" }}
            >
              Welcome!!!
            </Typography>
            <Box sx={{ p: 5, pb: 7 }}>
              <img src={ThemeImage} width={"100%"} alt="ThemeImage" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              backgroundColor: "white",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", my: 5 }}>
              Create Account
            </Typography>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%", pr: 0.5 }}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="First Name"
                  size="small"
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  onChange={handleOnChangeFirstName}
                  value={userInfo.fname}
                />
              </Box>
              <Box sx={{ width: "50%", pl: 0.5 }}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="Last Name"
                  size="small"
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  onChange={handleOnChangeLastName}
                  value={userInfo.lname}
                />
              </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                sx={{ my: 1 }}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Email"
                size="small"
                type="email"
                name="name"
                placeholder="Email"
                onChange={handleOnChangeEmail}
                value={userInfo.email}
              />
            </Box>

            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%", pr: 0.5 }}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="Password"
                  size="small"
                  type="password"
                  name="password"
                  onChange={handleOnChangePassword}
                  value={userInfo.password}
                />
              </Box>
              <Box sx={{ width: "50%", pl: 0.5 }}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="Confirm Password"
                  size="small"
                  type="password"
                  name="confirm_password"
                  onChange={handleOnChangeConfirmPassword}
                  value={userInfo.confirm_password}
                />
              </Box>
            </Box>

            <Button
              onClick={saveUser}
              sx={{ mt: 5 }}
              variant="contained"
              fullWidth
            >
              Sign Up
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                my: 1,
              }}
            >
              <Typography>Already a member?</Typography>
              <Typography
                sx={{ mx: 1, fontWeight: "bold", cursor: "pointer" }}
              >
                <Link to={"/"} style={{textDecoration: 'none', color:'secondary'}}>Sign In</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      {/* <DialogBox title={title} description={description} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} navigateLink={"/"}/> */}
    </Box>
  );
}

export default Register;
