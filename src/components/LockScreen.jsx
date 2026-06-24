import { useState } from "react";
import PatternUnlock from "./PatternUnlock";
import useWallpaperCarousel from "../hooks/useWallpaperCarousel";
import useInternetClock from "../hooks/useInternetClock";
import { FaCamera } from "react-icons/fa";

import "../styles/LockScreen.css";

export default function LockScreen({ unlock }) {

    const [showPin, setShowPin] = useState(false);

    const wallpaper = useWallpaperCarousel();

    const time = useInternetClock();

    return (
        <div
            className="lock-screen"
            style={{
                backgroundImage: `url(${wallpaper})`
            }}
            onClick={() => {
                if (!showPin) {
                    setShowPin(true);
                }
            }}
        >
            <div className="lock-overlay">

                <div className="lock-time">

                    <span>
                        {time.toLocaleDateString("pt-BR", {
                            weekday: "long",
                            day: "numeric",
                            month: "long"
                        })}
                    </span>

                    <h1>
                        {time.toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}
                    </h1>

                </div>

                <div className="notification-card">

                    <h3>Notificações</h3>

                    <p>WhatsApp • 2 mensagens</p>

                    <p>Banco • Pix recebido</p>

                </div>

                <button
                    className="camera-lock"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaCamera />
                </button>

            </div>

            {showPin && (
                <PatternUnlock unlock={unlock} />
            )}

        </div>
    );
}