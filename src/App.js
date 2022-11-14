import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonBar from "./components/CommonBar/CommonBar.jsx";
import ProtectedRoute, {
  NormalUserProtectedRoute,
} from "./components/ProtectedRoute/ProtectedRoute.jsx";
import SnackBar from "./components/SnackBar/SnackBar.jsx";
import ClientView from "./pages/ClientView/ClientView.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";
import Help from "./pages/Help/Help.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Payments from "./pages/Payments/Payments.jsx";
import PromoterView from "./pages/PromoterView/PromoterView.jsx";
import Register from "./pages/Register/Register.jsx";
import Settings from "./pages/SettingsView/Settings.jsx";

function App() {
  const [userInfo, setUserInfo] = useState({
    fname: null,
    lname: null,
    email: null,
    profileImgUrl: null,
    userType: null,
    state: null,
  });

  // console.log("User first name from app js firl is " + userInfo.fname);

  // const {firstName} = useSelector((state) => state.login)

  return (
    <div>
      <SnackBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <NormalUserProtectedRoute>
                  <CommonBar title={"Home"} component={<Home />} />
                </NormalUserProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client-view"
            element={
              <CommonBar title={"Client View"} component={<ClientView />} />
            }
          />
          <Route
            path="/promoter-view"
            element={
              <CommonBar title={"Promoter View"} component={<PromoterView />} />
            }
          />
          <Route
            path="/payments"
            element={<CommonBar title={"Payments"} component={<Payments />} />}
          />
          <Route
            path="/settings"
            element={<CommonBar title={"Settings"} component={<Settings />} />}
          />
          <Route
            path="/help"
            element={<CommonBar title={"Help"} component={<Help />} />}
          />
          <Route
            path="/feedback"
            element={
              <CommonBar
                title={"Feedback"}
                component={<Feedback userInfo={userInfo} />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
