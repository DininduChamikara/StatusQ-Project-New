import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonBar from "./components/CommonBar/CommonBar.jsx";
import ProtectedRoute, {
  AdminUserProtectedRoute,
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
            path="/admin_home"
            element={
              <ProtectedRoute>
                <AdminUserProtectedRoute>
                  <CommonBar title={"Home"} />
                </AdminUserProtectedRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin_complaints"
            element={
              <ProtectedRoute>
                <AdminUserProtectedRoute>
                  <CommonBar title={"Complaints"} />
                </AdminUserProtectedRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin_account"
            element={
              <ProtectedRoute>
                <AdminUserProtectedRoute>
                  <CommonBar title={"Account"} />
                </AdminUserProtectedRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin_report"
            element={
              <ProtectedRoute>
                <AdminUserProtectedRoute>
                  <CommonBar title={"Report"} />
                </AdminUserProtectedRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/client-view"
            element={
              // <ProtectedRoute>
              //   <NormalUserProtectedRoute>
                  <CommonBar title={"Client View"} component={<ClientView />} />
              //   </NormalUserProtectedRoute>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/promoter-view"
            element={
              // <ProtectedRoute>
              //   <NormalUserProtectedRoute>
                  <CommonBar
                    title={"Promoter View"}
                    component={<PromoterView />}
                  />
              //   </NormalUserProtectedRoute>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute>
                <NormalUserProtectedRoute>
                  <CommonBar title={"Payments"} component={<Payments />} />
                </NormalUserProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <NormalUserProtectedRoute>
                  <CommonBar title={"Settings"} component={<Settings />} />
                </NormalUserProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <NormalUserProtectedRoute>
                  <CommonBar title={"Help"} component={<Help />} />
                </NormalUserProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <NormalUserProtectedRoute>
                  <CommonBar
                    title={"Feedback"}
                    component={<Feedback userInfo={userInfo} />}
                  />
                </NormalUserProtectedRoute>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
