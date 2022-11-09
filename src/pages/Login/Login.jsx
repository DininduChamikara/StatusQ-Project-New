import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DialogBox from "../../components/DialogBox/DialogBox";
import ThemeImage from "../../images/statusq-main-image.png";
import { login } from "../../store/reducers/login.slice";

function Login({ setUserInfo }) {
  // Alert Box
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [navigateLink, setNavigateLink] = useState();

  const [loginCredentials, setLoginCredentials] = useState({
    email: null,
    password: null,
  });

  const handleOnChangeEmail = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      email: event.target.value,
    });
  };

  const handleOnChangePassword = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      password: event.target.value,
    });
  };

  const loginUser = () => {
    axios
      .get(
        `http://localhost:8080/api/v1/user/getUser/${loginCredentials.email}/${loginCredentials.password}`
      )
      .then((res) => {
        if (res) {
          res = res.data;

          dispatch(
            login({
              isLoggedIn: true,
              userId: res.userId,
              firstName: res.firstname,
              lastName: res.lastname,
              email: res.email,
              userType: res.userType,
              profileImageurl: res.profileImageurl,
            })
          );

          if (res.userType === "NORMAL_USER") {
            setTitle("Loging Successfull");
            setDescription(
              "You are logged successfully. Welcome to StatusQ!!!"
            );

            setNavigateLink("/home");
            setDialogOpen(true);
          }
        }

        // temperary commented until check redux
        // console.log(res.data);
        // if (res.data.userType === "NORMAL_USER") {
        //   setTitle("Loging Successfull");
        //   setDescription("You are logged successfully. Welcome to StatusQ!!!");

        //   setUserInfo({
        //     fname: res.data.fname,
        //   })

        //   setNavigateLink("/home");
        //   setDialogOpen(true);
        //   // navigate("/home");
        // }
      })
      .catch((err) => {
        console.log(err);
        setTitle("Can't Log");
        setDescription("Invalid email or password");
        setNavigateLink("/");
        setDialogOpen(true);
      });
  };

  ////////
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.login);
  const [loggedIn, setLoggedIn] = useState(false);
  ////////

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
              Sign In
            </Typography>
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
                value={loginCredentials.email}
              />

              <TextField
                sx={{ my: 1 }}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Password"
                size="small"
                type="password"
                name="password"
                placeholder=""
                onChange={handleOnChangePassword}
                value={loginCredentials.password}
              />
            </Box>
            <Button
              onClick={loginUser}
              sx={{ mt: 5 }}
              variant="contained"
              fullWidth
            >
              Sign In
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                my: 1,
              }}
            >
              <Typography>Don't have an account?</Typography>
              <Typography sx={{ mx: 1, fontWeight: "bold", cursor: "pointer" }}>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "secondary" }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <DialogBox
        title={title}
        description={description}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        navigateLink={navigateLink}
      />
    </Box>
  );
}

export default Login;
