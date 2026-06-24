export function saveHomeWallpaper(
    wallpaper
) {

    localStorage.setItem(
        "settings_home_wallpaper",
        wallpaper
    );

}

export function saveLockWallpaper(
    wallpaper
) {

    localStorage.setItem(
        "settings_lock_wallpaper",
        wallpaper
    );

}

export function getHomeWallpaper() {

    return localStorage.getItem(
        "settings_home_wallpaper"
    );

}

export function getLockWallpaper() {

    return localStorage.getItem(
        "settings_lock_wallpaper"
    );

}