"use client";

import { useEffect, useState } from "react";

export default function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollY / totalScroll;

      setScrollY(scrollY);
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-debug">
      <p>Scroll: {scrollY}px</p>
      <p>Progress: {progress}</p>
    </div>
  );
}