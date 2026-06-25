const SOUND_SETTINGS_KEY =
    "phoneSoundEnabled";

export function getSoundEnabled() {

    const saved =
        localStorage.getItem(
            SOUND_SETTINGS_KEY
        );

    if (saved === null)
        return true;

    return saved === "true";

}

export function setSoundEnabled(value) {

    localStorage.setItem(
        SOUND_SETTINGS_KEY,
        value
    );

}