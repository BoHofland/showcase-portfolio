"use client";

import { useState, useEffect } from "react";

export default function BackgroundChanger({ gradients = [], interval = 5000 }) {
  const [currentGradient, setCurrentGradient] = useState(gradients[0] || "");
  const [nextGradient, setNextGradient] = useState("");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const changeGradientInterval = setInterval(() => {
      handleGradientChange();
    }, interval);

    return () => clearInterval(changeGradientInterval); // Cleanup bij unmount
  }, [gradients, interval]);

  const handleGradientChange = () => {
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    setNextGradient(randomGradient);
    setIsFading(true);

    setTimeout(() => {
      setCurrentGradient(randomGradient);
      setIsFading(false);
    }, 3000);
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Huidige achtergrondkleur */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${currentGradient} transition-all duration-500`}
        style={{ zIndex: 1 }}
      ></div>

      {/* Nieuwe achtergrondkleur */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${nextGradient}`}
        style={{
          zIndex: 2,
          opacity: isFading ? 1 : 0,
          transition: "opacity 3s ease-in-out",
        }}
      ></div>
    </div>
  );
}
