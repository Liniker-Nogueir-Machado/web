import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LockScreen from "./components/LockScreen";
import Dock from "./components/Dock";
import DynamicIsland from "./components/DynamicIsland";
import StatusBar from "./components/StatusBar";
import HomeScreen from "./components/HomeScreen";

import Settings from "./components/Settings";
import Nubank from "./apps/Nubank";

import "./styles/iphone.css";

export default function App() {
  const [locked, setLocked] = useState(true);
  const [open, setOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState("home");
  const [phoneScale, setPhoneScale] = useState(0.7);

  useEffect(() => {
    const handler = (e) => {
      if (e.key.toLowerCase() === "k") {
        setOpen((prev) => {
          if (prev) {
            setLocked(true);
            setCurrentApp("home");
          }

          return !prev;
        });
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="phone-wrapper"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          exit={{ y: 1000 }}
          transition={{ duration: 0.45 }}
        >
          <div
            className="phone"
            style={{
              transform: `scale(${phoneScale})`,
              transformOrigin: "bottom right"
            }}
          >
            <DynamicIsland />

            <StatusBar />

            {currentApp === "home" && (
              <>
                {locked ? (
                  <LockScreen
                    unlock={() => setLocked(false)}
                  />
                ) : (
                  <HomeScreen
                    openApp={setCurrentApp}
                  />
                )}

                {!locked && (
                  <Dock
                    openApp={setCurrentApp}
                  />
                )}
              </>
            )}

            {currentApp === "settings" && (
              <Settings
                goBack={() => setCurrentApp("home")}
                phoneScale={phoneScale}
                setPhoneScale={setPhoneScale}
              />
            )}

            {currentApp === "nubank" && (
              <Nubank
                goBack={() => setCurrentApp("home")}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}