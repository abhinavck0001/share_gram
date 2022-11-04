import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserApi from "../../api/UserRequest.js";
import { logout } from "../../actions/AuthAction.js";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleLogOut = ()=> {
    dispatch(logout())
  }



  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
        console.log(user,'userrrrrr')
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);


  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4 style={{color:"black"}}>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data = {user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        <span>
          <b style={{color:"#33333a"}}>Status-:</b>
        </span>
        <span >{profileUser.relationship}</span>
      </div>

      <div className="info">
        <span>
          <b style={{color:"#33333a"}}>Lives in-:</b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>

      <div className="info">
        <span>
          <b style={{color:"#33333a"}}>Country-:</b>
        </span>
        <span>{profileUser.country}</span>
      </div>

      <div className="info">
        <span>
          <b style={{color:"#33333a"}} >Works at -:</b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default InfoCard;