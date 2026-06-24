import { useState, useEffect } from "react";

export default function useInternetClock() {

    const [time, setTime] = useState(
        new Date()
    );

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(
                new Date()
            );

        }, 1000);

        return () =>
            clearInterval(timer);

    }, []);

    return time;
}