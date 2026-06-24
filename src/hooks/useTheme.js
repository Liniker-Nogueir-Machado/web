import { useState, useEffect } from "react";

export default function useTheme() {

    const [textColor, setTextColor] = useState(
        localStorage.getItem("phone_text_color") || "white"
    );

    useEffect(() => {

        document.documentElement.setAttribute(
            "data-text-color",
            textColor
        );

        localStorage.setItem(
            "phone_text_color",
            textColor
        );

    }, [textColor]);

    return {
        textColor,
        setTextColor
    };
}