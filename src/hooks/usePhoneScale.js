import { useState, useEffect } from "react";

export default function usePhoneScale() {

    const [phoneScale, setPhoneScale] =
        useState(() => {

            const saved =
                localStorage.getItem("phoneScale");

            return saved
                ? Number(saved)
                : 0.7;

        });

    useEffect(() => {

        localStorage.setItem(
            "phoneScale",
            phoneScale
        );

    }, [phoneScale]);

    return {
        phoneScale,
        setPhoneScale
    };

}