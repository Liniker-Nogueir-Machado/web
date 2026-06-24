import wall1 from "../assets/wallpapers/wall1.jpg";
import wall2 from "../assets/wallpapers/wall2.jpg";
import wall3 from "../assets/wallpapers/wall3.jpg";
import wall4 from "../assets/wallpapers/wall4.jpg";
import wall5 from "../assets/wallpapers/wall4.jpg";
import wall6 from "../assets/wallpapers/wall4.jpg";
import wall7 from "../assets/wallpapers/wall4.jpg";

export default function getWallpaper() {
    const selected =
        localStorage.getItem("homeWallpaper") || "wall1";

    const wallpapers = {
        wall1,
        wall2,
        wall3,
        wall4,
        wall5,
        wall6,
        wall7
    };

    return wallpapers[selected] || wall1;
}