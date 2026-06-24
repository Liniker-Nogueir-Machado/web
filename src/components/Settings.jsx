import { useState, useEffect } from "react";

import DisplaySettings from "./DisplaySettings";
import getWallpaper from "../utils/getWallpaper";

import "../styles/Settings.css";

import {
  FaWifi,
  FaBluetoothB,
  FaBell,
  FaVolumeUp,
  FaMoon,
  FaMobileAlt,
  FaCog,
  FaPalette
} from "react-icons/fa";

export default function Settings({
  goBack,
  phoneScale,
  setPhoneScale
}) {

  const wallpaper = getWallpaper();

  const [screen, setScreen] =
    useState("settings");

  const [wifiEnabled, setWifiEnabled] =
    useState(
      localStorage.getItem("wifiEnabled") !== "false"
    );

  const [bluetoothEnabled, setBluetoothEnabled] =
    useState(
      localStorage.getItem("bluetoothEnabled") !== "false"
    );

  const [notificationsEnabled, setNotificationsEnabled] =
    useState(
      localStorage.getItem("notificationsEnabled") !== "false"
    );

  const [soundEnabled, setSoundEnabled] =
    useState(
      localStorage.getItem("soundEnabled") !== "false"
    );

  const [doNotDisturb, setDoNotDisturb] =
    useState(
      localStorage.getItem("doNotDisturb") === "true"
    );

  useEffect(() => {
    localStorage.setItem(
      "wifiEnabled",
      wifiEnabled
    );
  }, [wifiEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "bluetoothEnabled",
      bluetoothEnabled
    );
  }, [bluetoothEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "notificationsEnabled",
      notificationsEnabled
    );
  }, [notificationsEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "soundEnabled",
      soundEnabled
    );
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "doNotDisturb",
      doNotDisturb
    );
  }, [doNotDisturb]);

  if (screen === "display") {
    return (
      <DisplaySettings
        goBack={() =>
          setScreen("settings")
        }
      />
    );
  }

  return (
    <div
      className="settings-screen"
      style={{
        backgroundImage: `url(${wallpaper})`
      }}
    >
      <div className="settings-overlay">

        <div className="settings-navbar">
          <button
            className="settings-back"
            onClick={goBack}
          >
            ⟨ Voltar
          </button>

          <h2>Ajustes</h2>
        </div>

        <div className="settings-container">

          <div className="settings-profile-card">

            <div className="profile-avatar">
              LM
            </div>

            <div>

              <h3 className="name-iphone">
                Liniker Machado
              </h3>

              <p className="id-iphone">
                iCloud • FiveM Phone
              </p>

            </div>

          </div>

          <div className="settings-card">

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon wifi">
                  <FaWifi />
                </div>

                <p>Wi-Fi</p>

              </div>

              <div
                className={`toggle-switch ${wifiEnabled ? "active" : ""
                  }`}
                onClick={() =>
                  setWifiEnabled(
                    !wifiEnabled
                  )
                }
              >
                <div className="toggle-ball" />
              </div>

            </div>

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon bluetooth">
                  <FaBluetoothB />
                </div>

                <p>Bluetooth</p>

              </div>

              <div
                className={`toggle-switch ${bluetoothEnabled ? "active" : ""
                  }`}
                onClick={() =>
                  setBluetoothEnabled(
                    !bluetoothEnabled
                  )
                }
              >
                <div className="toggle-ball" />
              </div>

            </div>

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon mobile">
                  <FaMobileAlt />
                </div>

                <p>Rede Móvel</p>

              </div>

            </div>

          </div>

          <div className="settings-card">

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon bell">
                  <FaBell />
                </div>

                <p>Notificações</p>

              </div>

              <div
                className={`toggle-switch ${notificationsEnabled
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  setNotificationsEnabled(
                    !notificationsEnabled
                  )
                }
              >
                <div className="toggle-ball" />
              </div>

            </div>

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon sound">
                  <FaVolumeUp />
                </div>

                <p>Sons e Vibração</p>

              </div>

              <div
                className={`toggle-switch ${soundEnabled
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  setSoundEnabled(
                    !soundEnabled
                  )
                }
              >
                <div className="toggle-ball" />
              </div>

            </div>

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon moon">
                  <FaMoon />
                </div>

                <p>Não Perturbe</p>

              </div>

              <div
                className={`toggle-switch ${doNotDisturb
                  ? "active"
                  : ""
                  }`}
                onClick={() =>
                  setDoNotDisturb(
                    !doNotDisturb
                  )
                }
              >
                <div className="toggle-ball" />
              </div>

            </div>

          </div>

          <div className="settings-card">

            <div
              className="settings-row"
              onClick={() =>
                setScreen("display")
              }
            >

              <div className="settings-left">

                <div className="icon settings">
                  <FaPalette />
                </div>

                <p>Tela</p>

              </div>

            </div>

          </div>

          <div className="settings-card">

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon settings">
                  <FaCog />
                </div>

                <p>Sistema</p>

              </div>

            </div>

          </div>

          <div className="settings-card">

            <div className="settings-row-title">
              Escala do Celular
            </div>

            <div className="scale-options">

              {[0.5, 0.6, 0.7, 0.8, 0.9, 1].map(
                (scale) => (

                  <label
                    key={scale}
                    className="scale-option"
                  >

                    <input
                      type="radio"
                      name="phoneScale"
                      checked={
                        phoneScale === scale
                      }
                      onChange={() => {

                        setPhoneScale(scale);

                        localStorage.setItem(
                          "phoneScale",
                          scale
                        );

                      }}
                    />

                    {Math.round(
                      scale * 100
                    )}%

                  </label>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}