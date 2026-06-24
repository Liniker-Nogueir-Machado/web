import wall1 from "../assets/wallpapers/wall1.jpg";
import wall2 from "../assets/wallpapers/wall2.jpg";
import wall3 from "../assets/wallpapers/wall3.jpg";
import wall4 from "../assets/wallpapers/wall4.jpg";
import wall5 from "../assets/wallpapers/wall5.jpg";
import wall6 from "../assets/wallpapers/wall6.jpg";
import wall7 from "../assets/wallpapers/wall7.jpg";

export default function getWallpaper() {

    const wallpaper =
        localStorage.getItem("homeWallpaper");

    switch (wallpaper) {

        case "wall2":
            return wall2;

        case "wall3":
            return wall3;

        case "wall4":
            return wall4;

        case "wall5":
            return wall5;

        case "wall6":
            return wall6;

        case "wall7":
            return wall7;

        default:
            return wall1;
    }
}