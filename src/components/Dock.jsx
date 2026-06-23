import {
  FaPhone,
  FaCog,
  FaUserFriends
} from "react-icons/fa";

import {
  IoChatbubbleEllipses
} from "react-icons/io5";

export default function Dock() {

  return (

    <div className="dock">

      <div className="dock-icon">
        <IoChatbubbleEllipses
          size={40}
          color="#34C759"
        />
      </div>

      <div className="dock-icon">
        <FaPhone
          size={34}
          color="#34C759"
        />
      </div>

      <div className="dock-icon">
        <FaUserFriends
          size={34}
          color="#0A84FF"
        />
      </div>

      <div className="dock-icon">
        <FaCog
          size={34}
          color="#8E8E93"
        />
      </div>

    </div>

  );

}