import { useState, useEffect } from "react";

import wall1 from "../assets/wallpapers/wall1.jpg";
import wall2 from "../assets/wallpapers/wall2.jpg";
import wall3 from "../assets/wallpapers/wall3.jpg";
import wall4 from "../assets/wallpapers/wall4.jpg";
import wall5 from "../assets/wallpapers/wall5.jpg";
import wall6 from "../assets/wallpapers/wall6.jpg";
import wall7 from "../assets/wallpapers/wall7.jpg";

const wallpapers = [
    wall1,
    wall2,
    wall3,
    wall4,
    wall5,
    wall6,
    wall7
];

export default function useWallpaperCarousel(
    interval = 10000 //contagem em segundos para troca do wallpaper
) {

    const [currentWallpaper, setCurrentWallpaper] =
        useState(() => {

            const saved =
                localStorage.getItem(
                    "lockscreen_wallpaper_index"
                );

            return saved
                ? parseInt(saved)
                : 0;
        });

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentWallpaper((prev) => {

                const next =
                    (prev + 1) %
                    wallpapers.length;

                localStorage.setItem(
                    "lockscreen_wallpaper_index",
                    next
                );

                return next;
            });

        }, interval);

        return () => clearInterval(timer);

    }, [interval]);

    return wallpapers[currentWallpaper];
}