import { useRef, useState, useEffect } from "react";
import tapSound from "../assets/sounds/tap.mp3"
import getWallpaper from "../utils/getWallpaper";

import {
  FaWhatsapp,
  FaInstagram,
  FaCalculator,
  FaStickyNote,
  FaAppStoreIos,
  FaCog
} from "react-icons/fa";

import {
  IoCalendar,
  IoMap
} from "react-icons/io5";

import {
  SiUber
} from "react-icons/si";

export default function HomeScreen({ openApp }) {

  const tapAudio = useRef(null);

  useEffect(() => {

    tapAudio.current = new Audio(tapSound);

    tapAudio.current.volume = 0.15;

  }, []);

  const playHoverSound = () => {

    if (!tapAudio.current) return;

    tapAudio.current.pause();

    tapAudio.current.currentTime = 0;

    tapAudio.current.play().catch(() => { });

  };

  const [wallpaper, setWallpaper] =
    useState(getWallpaper());

  useEffect(() => {

    const updateWallpaper = () => {
      setWallpaper(getWallpaper());
    };

    window.addEventListener(
      "wallpaperChanged",
      updateWallpaper
    );

    return () => {
      window.removeEventListener(
        "wallpaperChanged",
        updateWallpaper
      );
    };

  }, []);

  return (
    <div
      className="app-grid"
      style={{
        backgroundImage: `url(${wallpaper})`
      }}
    >

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaWhatsapp
            size={38}
            color="white"
          />
        </div>

        WhatsApp
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaInstagram
            size={38}
            color="white"
          />
        </div>

        Instagram
      </div>

      <div
        className="app-icon"
        onClick={() => openApp("nubank")}
      >
        <div
          className="app-icon"
          onMouseEnter={playHoverSound}
        >
          <div
            className="icon-box"
            style={{ background: "#7025d3" }}
          >
            <span className="nubank-app-logo">
              Nu
            </span>
          </div>
        </div>

        Nubank
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#000000" }}
        >
          <SiUber
            size={38}
            color="white"
          />
        </div>

        Uber
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#259cd3" }}
        >
          <IoMap
            size={38}
            color="white"
          />
        </div>

        Waze
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <IoCalendar
            size={38}
            color="white"
          />
        </div>

        Calendário
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaStickyNote
            size={38}
            color="white"
          />
        </div>

        Notas
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaCalculator
            size={38}
            color="white"
          />
        </div>

        Calculadora
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaAppStoreIos
            size={38}
            color="white"
          />
        </div>

        Apple Store
      </div>

      <div
        className="app-icon"
        onMouseEnter={playHoverSound}
      >
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaCog
            size={38}
            color="white"
          />
        </div>

        Ajustes
      </div>

    </div>

  );
}