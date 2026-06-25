import { useRef, useEffect } from "react";
import tapSound from "../assets/sounds/tap.mp3";
import settingsIcon from "../utils/icons/settings.png";

import {
  FaPhone,
  FaUserFriends
} from "react-icons/fa";

import {
  IoChatbubbleEllipses
} from "react-icons/io5";

export default function Dock({
  openApp
}) {

  const tapAudio = useRef(null);

  useEffect(() => {

    tapAudio.current =
      new Audio(tapSound);

    tapAudio.current.volume = 0.15;

  }, []);

  const playHoverSound = () => {

    if (!tapAudio.current)
      return;

    tapAudio.current.pause();

    tapAudio.current.currentTime = 0;

    tapAudio.current
      .play()
      .catch(() => { });

  };

  return (

    <div className="dock">

      <div
        className="dock-icon"
        onMouseEnter={playHoverSound}
      >
        <IoChatbubbleEllipses
          size={40}
          color="#34C759"
        />
      </div>

      <div
        className="dock-icon"
        onMouseEnter={playHoverSound}
        onClick={() => openApp("phone")}
      >
        <FaPhone
          size={34}
          color="#34C759"
        />
      </div>

      <div
        className="dock-icon"
        onMouseEnter={playHoverSound}
      >
        <FaUserFriends
          size={34}
          color="#0A84FF"
        />
      </div>

      <div
        className="dock-icon"
        onMouseEnter={playHoverSound}
        onClick={() => openApp("settings")}
      >
        <img
          src={settingsIcon}
          alt="Ajustes"
          className="dock-settings-image"
        />
      </div>

    </div>

  );
}