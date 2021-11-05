import React from "react";
import "./Sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
            <ul className="sidebarList">
            <Link to="/">

              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
             
            </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu </h3>
            <ul className="sidebarList">
            <Link to="/users" >
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Users
              </li>
              </Link>
            <Link to="/products">

              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Products
              </li>
              </Link>

              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Reports
              </li>
             
            </ul>
        </div>


        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notifications </h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Messages
              </li>
             
            </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Staff </h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Reports
              </li>
             
            </ul>
        </div>




      </div>
    </div>
  );
};

export default Sidebar;
