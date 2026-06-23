import { useState, useEffect, useRef } from "react";

export default function useInternetClock() {

    const [time, setTime] = useState(new Date());

    const offsetRef = useRef(0);

    useEffect(() => {

        async function syncClock() {

            try {

                const response = await fetch(
                    "https://worldtimeapi.org/api/timezone/America/Sao_Paulo"
                );

                const data = await response.json();

                const internetTime = new Date(
                    data.datetime
                );

                offsetRef.current =
                    internetTime.getTime() - Date.now();

            } catch (err) {

                console.log(
                    "Erro ao sincronizar relógio:",
                    err
                );

            }

        }

        syncClock();

        const timer = setInterval(() => {

            setTime(
                new Date(
                    Date.now() + offsetRef.current
                )
            );

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return time;
}