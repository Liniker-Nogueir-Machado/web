import { useState } from "react";
import { APPS } from "../data/apps";

export default function useAppsLayout() {

    const saved =
        localStorage.getItem("appsLayout");

    const [apps, setApps] =
        useState(
            saved
                ? JSON.parse(saved)
                : APPS
        );

    const saveLayout = (newApps) => {

        setApps(newApps);

        localStorage.setItem(
            "appsLayout",
            JSON.stringify(newApps)
        );

    };

    return {
        apps,
        saveLayout
    };
}