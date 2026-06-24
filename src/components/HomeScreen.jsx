import { useState, useEffect } from "react";

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

      <div className="app-icon">
        <div
          className="icon-box"
          style={{ background: "#25D366" }}
        >
          <FaWhatsapp size={38} color="white" />
        </div>
        WhatsApp
      </div>

      <div className="app-icon">
        <div className="icon-box instagram-icon">
          <FaInstagram size={38} color="white" />
        </div>
        Instagram
      </div>

      <div
        className="app-icon"
        onClick={() => openApp("nubank")}
      >
        <div
          className="icon-box"
          style={{
            background: "#820AD1"
          }}
        >
          <span className="nubank-app-logo">
            Nu
          </span>
        </div>

        Nubank
      </div>

      <div className="app-icon">
        <div
          className="icon-box"
          style={{ background: "#000" }}
        >
          <SiUber size={38} color="white" />
        </div>
        Uber
      </div>

      <div className="app-icon">
        <div
          className="icon-box"
          style={{ background: "#33CCFF" }}
        >
          <IoMap size={38} color="white" />
        </div>
        Waze
      </div>

      <div className="app-icon">
        <div
          className="icon-box"
          style={{ background: "#FFF" }}
        >
          <IoCalendar size={38} color="#FF3B30" />
        </div>
        Calendário
      </div>

      <div className="app-icon">
        <div className="icon-box notes-icon">
          <FaStickyNote size={34} color="#666" />
        </div>
        Notas
      </div>

      <div className="app-icon">
        <div className="icon-box calc-icon">
          <FaCalculator size={34} color="white" />
        </div>
        Calculadora
      </div>

      <div className="app-icon">
        <div
          className="icon-box"
          style={{ background: "#0A84FF" }}
        >
          <FaAppStoreIos size={38} color="white" />
        </div>
        App Store
      </div>

      <div
        className="app-icon"
        onClick={() => openApp("settings")}
      >
        <div
          className="icon-box"
          style={{ background: "#8E8E93" }}
        >
          <FaCog size={38} color="white" />
        </div>
        Ajustes
      </div>

    </div>

  );
}