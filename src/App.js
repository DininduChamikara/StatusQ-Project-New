import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonBar from "./components/CommonBar/CommonBar.jsx"
import ClientView from "./pages/ClientView/ClientView.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";
import Help from "./pages/Help/Help.jsx";
import Home from "./pages/Home/Home.jsx";
import Payments from "./pages/Payments/Payments.jsx";
import PromoterView from "./pages/PromoterView/PromoterView.jsx";
import Settings from "./pages/SettingsView/Settings.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonBar title={"Home"} component={<Home/>} />} />
          <Route path="/client-view" element={<CommonBar title={"Client View"} component={<ClientView/>} />} />
          <Route path="/promoter-view" element={<CommonBar title={"Promoter View"} component={<PromoterView/>} />} />
          <Route path="/payments" element={<CommonBar title={"Payments"} component={<Payments/>} />} />
          <Route path="/settings" element={<CommonBar title={"Settings"} component={<Settings/>} />} />
          <Route path="/help" element={<CommonBar title={"Help"} component={<Help/>} />} />
          <Route path="/feedback" element={<CommonBar title={"Feedback"} component={<Feedback/>} />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
