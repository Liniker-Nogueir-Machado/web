import { useRef, useState, useEffect } from "react";

import tapSound from "../assets/sounds/tap.mp3";
import getWallpaper from "../utils/getWallpaper";
import settingsIcon from "../utils/icons/settings.png";

import { SiNubank, SiUber } from "react-icons/si";

import {
  FaWhatsapp,
  FaInstagram,
  FaCalculator,
  FaStickyNote,
  FaAppStoreIos
} from "react-icons/fa";

import {
  IoCalendar,
  IoMap
} from "react-icons/io5";

const APPS_DATA = {

  whatsapp: {
    label: "WhatsApp",
    color: "#25D366",
    icon: <FaWhatsapp size={38} color="white" />
  },

  instagram: {
    label: "Instagram",
    className: "instagram-icon",
    icon: <FaInstagram size={38} color="white" />
  },

  nubank: {
    label: "Nubank",
    color: "linear-gradient(135deg,#8A05BE,#6B00A8)",
    icon: <SiNubank size={42} color="white" />
  },

  uber: {
    label: "Uber",
    color: "#000000",
    icon: <SiUber size={38} color="white" />
  },

  waze: {
    label: "Waze",
    color: "#05C8F7",
    icon: <IoMap size={38} color="white" />
  },

  calendar: {
    label: "Calendário",
    color: "#FF3B30",
    icon: <IoCalendar size={38} color="white" />
  },

  notes: {
    label: "Notas",
    color: "#FFD60A",
    icon: <FaStickyNote size={38} color="#222" />
  },

  calculator: {
    label: "Calculadora",
    color: "#1C1C1E",
    icon: <FaCalculator size={38} color="white" />
  },

  appstore: {
    label: "App Store",
    color: "linear-gradient(135deg,#0A84FF,#5AC8FA)",
    icon: <FaAppStoreIos size={38} color="white" />
  },

  settings: {
    label: "Ajustes",
    image: settingsIcon
  }

};

export default function HomeScreen({ openApp }) {

  const tapAudio = useRef(null);

  const [wallpaper, setWallpaper] =
    useState(getWallpaper());

  const [dragIndex, setDragIndex] =
    useState(null);

  const [editMode, setEditMode] =
    useState(false);

  const holdTimer =
    useRef(null);

  const DEFAULT_LAYOUT = [

    "whatsapp",
    "instagram",
    "nubank",
    "uber",

    "waze",
    "calendar",
    "notes",
    "calculator",

    "appstore",
    "settings",

    null,
    null,

    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null

  ];

  const [apps, setApps] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "homeAppsLayout"
        );

      if (!saved)
        return DEFAULT_LAYOUT;

      try {

        const parsed =
          JSON.parse(saved);

        return parsed.length === 28
          ? parsed
          : DEFAULT_LAYOUT;

      } catch {

        return DEFAULT_LAYOUT;

      }

    });

  useEffect(() => {

    tapAudio.current =
      new Audio(tapSound);

    tapAudio.current.volume =
      0.15;

  }, []);

  useEffect(() => {

    const updateWallpaper = () => {
      setWallpaper(
        getWallpaper()
      );
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

  const moveApp = (from, to) => {

    if (
      from === null ||
      from === to
    ) return;

    const updatedApps =
      [...apps];

    const destination =
      updatedApps[to];

    if (destination === null) {

      updatedApps[to] =
        updatedApps[from];

      updatedApps[from] =
        null;

    } else {

      [
        updatedApps[from],
        updatedApps[to]
      ] = [
          updatedApps[to],
          updatedApps[from]
        ];

    }

    setApps(updatedApps);

    localStorage.setItem(
      "homeAppsLayout",
      JSON.stringify(
        updatedApps
      )
    );

  };

  const playHoverSound = () => {

    if (!tapAudio.current)
      return;

    tapAudio.current.pause();

    tapAudio.current.currentTime =
      0;

    tapAudio.current.play()
      .catch(() => { });

  };

  const renderApp = (appName) => {

    const app =
      APPS_DATA[appName];

    if (!app)
      return null;

    return (
      <>
        <div
          className={
            app.className
              ? `icon-box ${app.className}`
              : "icon-box"
          }
          style={{
            background: app.color
          }}
        >

          {app.image ? (

            <img
              src={app.image}
              alt={app.label}
              className="settings-app-image"
            />

          ) : (

            app.icon

          )}

        </div>

        {app.label}
      </>
    );

  };

  return (
    <>
      {editMode && (
        <button
          className="done-edit"
          onClick={() => setEditMode(false)}
        >
          Concluir
        </button>
      )}

      <div
        className="app-grid"
        style={{
          backgroundImage: `url(${wallpaper})`
        }}
      >

        {
          apps.map((appName, index) => (

            <div
              key={index}
              className={
                appName
                  ? `app-icon ${editMode ? "editing" : ""}`
                  : "app-slot"
              }

              draggable={
                !!appName &&
                editMode
              }

              onMouseDown={() => {

                if (!appName) return;

                holdTimer.current =
                  setTimeout(() => {

                    setEditMode(true);

                  }, 1000);

              }}

              onMouseUp={() => {

                clearTimeout(
                  holdTimer.current
                );

              }}

              onMouseLeave={() => {

                clearTimeout(
                  holdTimer.current
                );

              }}

              onDragStart={() =>
                appName &&
                setDragIndex(index)
              }

              onDragOver={(e) =>
                e.preventDefault()
              }

              onDrop={() =>
                moveApp(
                  dragIndex,
                  index
                )
              }

              onMouseEnter={() =>
                appName &&
                playHoverSound()
              }

              onClick={() => {

                if (!appName) return;

                if (editMode) return;

                openApp(appName);

              }}
            >

              {appName &&
                renderApp(appName)}

            </div>


          ))
        }


      </div>

    </>

  );

}