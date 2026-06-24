import { useState } from "react";

import "../styles/DisplaySettings.css";

import getWallpaper from "../utils/getWallpaper";

import wall1 from "../assets/wallpapers/wall1.jpg";
import wall2 from "../assets/wallpapers/wall2.jpg";
import wall3 from "../assets/wallpapers/wall3.jpg";
import wall4 from "../assets/wallpapers/wall4.jpg";
import wall5 from "../assets/wallpapers/wall5.jpg";
import wall6 from "../assets/wallpapers/wall6.jpg";
import wall7 from "../assets/wallpapers/wall7.jpg";

export default function DisplaySettings({
    goBack
}) {

    const wallpaper = getWallpaper();

    const wallpapers = [
        { id: "wall1", image: wall1 },
        { id: "wall2", image: wall2 },
        { id: "wall3", image: wall3 },
        { id: "wall4", image: wall4 },
        { id: "wall5", image: wall5 },
        { id: "wall6", image: wall6 },
        { id: "wall7", image: wall7 }
    ];

    const [selectedWallpaper, setSelectedWallpaper] =
        useState(null);

    const applyWallpaper = () => {

        if (!selectedWallpaper) {
            return;
        }

        localStorage.setItem(
            "homeWallpaper",
            selectedWallpaper
        );

        window.dispatchEvent(
            new Event("wallpaperChanged")
        );

    };

    return (

        <div
            className="display-screen"
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

                    <h2>Tela</h2>

                </div>

                <div className="display-container">

                    <div className="display-card">

                        <h3>
                            Papel de Parede
                        </h3>

                        <div
                            className="wallpaper-scroll"
                            onWheel={(e) => {

                                e.preventDefault();

                                e.currentTarget.scrollLeft +=
                                    e.deltaY;

                            }}
                        >

                            {wallpapers.map((wall) => (

                                <img
                                    key={wall.id}
                                    src={wall.image}
                                    alt={wall.id}
                                    className={
                                        selectedWallpaper === wall.id
                                            ? "wallpaper-preview active"
                                            : "wallpaper-preview"
                                    }
                                    onClick={() =>
                                        setSelectedWallpaper(
                                            selectedWallpaper === wall.id
                                                ? null
                                                : wall.id
                                        )
                                    }
                                />

                            ))}

                        </div>

                    </div>

                    {selectedWallpaper && (

                        <div className="wallpaper-actions">

                            <button
                                onClick={applyWallpaper}
                            >
                                Aplicar em Tela Home
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}