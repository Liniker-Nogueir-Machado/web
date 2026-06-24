import getWallpaper from "../utils/getWallpaper";
import "../styles/Settings.css";

import {
  FaWifi,
  FaBluetoothB,
  FaBell,
  FaVolumeUp,
  FaMoon,
  FaMobileAlt,
  FaCog
} from "react-icons/fa";

const wallpaper = getWallpaper();

export default function Settings({
  goBack,
  phoneScale,
  setPhoneScale
}) {
  return (
    <div
      className="settings-screen"
      style={{
        backgroundImage: `url(${wallpaper})`
      }}
    >
      <div className="settings-overlay">

        {/* HEADER */}
        <div className="settings-navbar">

          <button
            className="settings-back"
            onClick={goBack}
          >
            {"←"}
          </button>

          <h2>Ajustes</h2>

        </div>

        {/* CONTEÚDO */}
        <div className="settings-container">

          {/* PERFIL */}
          <div className="settings-profile-card">

            <div className="profile-avatar">
              LM
            </div>

            <div>
              <h3>Liniker Machado</h3>
              <p>iCloud • FiveM Phone</p>
            </div>

          </div>

          {/* CONECTIVIDADE */}
          <div className="settings-card">

            <div className="settings-row">
              <div className="settings-left">

                <div className="icon wifi">
                  <FaWifi />
                </div>

                Wi-Fi

              </div>

              <span>Casa</span>
            </div>

            <div className="settings-row">
              <div className="settings-left">

                <div className="icon bluetooth">
                  <FaBluetoothB />
                </div>

                Bluetooth

              </div>

              <span>Ativado</span>
            </div>

            <div className="settings-row">
              <div className="settings-left">

                <div className="icon mobile">
                  <FaMobileAlt />
                </div>

                Rede Móvel

              </div>
            </div>

          </div>

          {/* SISTEMA */}
          <div className="settings-card">

            <div className="settings-row">
              <div className="settings-left">

                <div className="icon bell">
                  <FaBell />
                </div>

                Notificações

              </div>
            </div>

            <div className="settings-row">
              <div className="settings-left">

                <div className="icon sound">
                  <FaVolumeUp />
                </div>

                Sons e Vibração

              </div>
            </div>

            <div className="settings-row">
              <div className="settings-left">

                <div className="icon moon">
                  <FaMoon />
                </div>

                Modo Foco

              </div>
            </div>

          </div>

          {/* ESCALA */}
          <div className="settings-card">

            <div className="settings-row-title">
              Escala do Celular
            </div>

            <div className="scale-options">

              {[0.5, 0.6, 0.7, 0.8, 0.9, 1].map((scale) => (
                <label
                  key={scale}
                  className="scale-option"
                >
                  <input
                    type="radio"
                    name="phoneScale"
                    checked={phoneScale === scale}
                    onChange={() =>
                      setPhoneScale(scale)
                    }
                  />

                  {Math.round(scale * 100)}%

                </label>
              ))}

            </div>

          </div>

          {/* SOBRE */}
          <div className="settings-card">

            <div className="settings-row">

              <div className="settings-left">

                <div className="icon settings">
                  <FaCog />
                </div>

                Sistema

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}