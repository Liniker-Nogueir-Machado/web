import { useState, useEffect } from "react";

import wall1 from "../assets/wallpapers/wall1.jpg";
import wall2 from "../assets/wallpapers/wall2.jpg";
import wall3 from "../assets/wallpapers/wall3.jpg";
import wall4 from "../assets/wallpapers/wall4.jpg";

const wallpapers = [
    wall1,
    wall2,
    wall3,
    wall4
];

export default function useWallpaperCarousel(
    interval = 20000
) {
    const [currentWallpaper, setCurrentWallpaper] =
        useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentWallpaper((prev) =>
                (prev + 1) % wallpapers.length
            );
        }, interval);

        return () => clearInterval(timer);
    }, [interval]);

    return wallpapers[currentWallpaper];
}