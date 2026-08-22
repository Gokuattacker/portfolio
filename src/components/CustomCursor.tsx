"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-transform duration-150 ease-out ${
          isClicking ? "scale-50" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Outer ring */}
      <div
        className={`pointer-events-none fixed z-[9998] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out ${
          isHovering ? "scale-150 bg-white/20 opacity-100 mix-blend-difference" : "scale-0 bg-transparent opacity-0"
        } ${isClicking ? "scale-90" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
