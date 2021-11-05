import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="userPic"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Manish Yadav</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Manish267</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+919191919191</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">m@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Manish | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdatetitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  id=""
                  placeholder="manish267"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  id=""
                  placeholder="Manish Yadav"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  id=""
                  placeholder="m@gmail.com"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="userUpdateInput"
                  id=""
                  placeholder="m@gmail.com"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  id=""
                  placeholder="+91 7206151901"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  id=""
                  placeholder="Bhiwani | India"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUddateUpload">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="user"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
