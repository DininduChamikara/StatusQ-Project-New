import {
  Box,
  Button,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ThemeImage from "../../images/statusq-main-image.png";
import { showAlert } from "../../store/reducers/alert.slice";
import { login } from "../../store/reducers/login.slice";

function Login({ setUserInfo }) {
  let navigate = useNavigate();

  const [errorInfo, setErrorInfo] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleOnChangeEmail = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        emailError: "Email is empty",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        emailError: "",
      });
    }
    setLoginCredentials({
      ...loginCredentials,
      email: event.target.value,
    });
  };

  const handleOnChangePassword = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        passwordError: "Password is empty",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        passwordError: "",
      });
    }
    setLoginCredentials({
      ...loginCredentials,
      password: event.target.value,
    });
  };

  const loginUser = () => {
    if (errorInfo.emailError === "" && errorInfo.passwordError === "") {
      if (loginCredentials.email === "") {
        setErrorInfo({
          ...errorInfo,
          emailError: "Email is empty",
        });
      } else if (loginCredentials.password === "") {
        setErrorInfo({
          ...errorInfo,
          passwordError: "Password is empty",
        });
      } else {
        axios
          .get(
            `http://localhost:8080/api/v1/user/getUser/${loginCredentials.email}/${loginCredentials.password}`
          )
          .then((res) => {
            if (res) {
              res = res.data;

              if (res.responseCode === "00") {
                dispatch(
                  login({
                    isLoggedIn: true,
                    userId: res.user.userId,
                    firstName: res.user.firstname,
                    lastName: res.user.lastname,
                    email: res.user.email,
                    userType: res.user.userType,
                    profileImageurl: res.user.profileImageurl,
                  })
                );
                dispatch(
                  showAlert({
                    message: res.message,
                    isVisible: true,
                    severity: "success",
                  })
                );

                if (res.user.userType === "NORMAL_USER") {
                  navigate("/home");
                } else if (res.user.userType === "ADMIN_USER") {
                  navigate("/admin_home");
                }
              } else if (res.responseCode === "1000") {
                dispatch(
                  showAlert({
                    message: res.message,
                    isVisible: true,
                    severity: "error",
                  })
                );
              }
            }
          })
          // should change later
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  ////////
  const dispatch = useDispatch();
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
                sx={{ mt: 2 }}
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
              {errorInfo.emailError !== "" && (
                <FormHelperText
                  sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                >
                  - {errorInfo.emailError}
                </FormHelperText>
              )}

              <TextField
                sx={{ mt: 2 }}
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
              {errorInfo.passwordError !== "" && (
                <FormHelperText
                  sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                >
                  - {errorInfo.passwordError}
                </FormHelperText>
              )}
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
    </Box>
  );
}

export default Login;
