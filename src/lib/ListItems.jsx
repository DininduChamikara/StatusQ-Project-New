import * as React from "react";
import SidebarItem from "../components/SidebarItem/SidebarItem";
import {
  AccountBox,
  Campaign,
  Dashboard,
  ExitToApp,
  Help,
  HelpCenter,
  Home,
  Payments,
  Reviews,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    {[
      {
        name: "Home",
        icon: <Home />,
        link: "/",
      },
      {
        name: "Client View",
        icon: <AccountBox />,
        link: "/client-view",
      },
      {
        name: "Promoter View",
        icon: <Campaign />,
        link: "/promoter-view",
      },
      {
        name: "Payments",
        icon: <Payments />,
        link: "/payments",
      },
      {
        name: "Settings",
        icon: <Settings />,
        link: "/settings",
      },
      {
        name: "Help",
        icon: <Help />,
        link: "/help",
      },
      {
        name: "Feedback",
        icon: <Reviews />,
        link: "/feedback",
      },
    ].map((item, index) => (
      <Link to={item.link} style={{textDecoration: 'none', color: 'black'}}>
        <SidebarItem title={item.name} icon={item.icon} />
      </Link>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {[
      {
        name: "Log out",
        icon: <ExitToApp />,
      },
    ].map((item, index) => (
      <SidebarItem title={item.name} icon={item.icon} />
    ))}
  </React.Fragment>
);
