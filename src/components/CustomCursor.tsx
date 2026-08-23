"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let transitionsEnabled = false;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Position both elements using left/top (no transform-based positioning)
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;

      // Make dot visible on first move
      dot.style.opacity = "1";

      if (!transitionsEnabled) {
        transitionsEnabled = true;
        // Enable ring transitions after a brief delay so it doesn't
        // animate from the initial off-screen position
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.transition =
              "scale 250ms cubic-bezier(0.34,1.4,0.64,1), opacity 200ms ease";
          }
        }, 60);
      }

      // Detect hoverable elements
      const target = e.target as HTMLElement;
      const hovering =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "ARTICLE" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest("article") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      if (hovering !== isHoveringRef.current) {
        isHoveringRef.current = hovering;
        if (hovering) {
          ring.style.opacity = "1";
          ring.style.scale = "1";
        } else {
          ring.style.opacity = "0";
          ring.style.scale = "0";
        }
      }
    };

    const onDown = () => {
      isClickingRef.current = true;
      if (dot) dot.style.scale = "0.5";
      if (ring) ring.style.scale = isHoveringRef.current ? "0.9" : "0";
    };

    const onUp = () => {
      isClickingRef.current = false;
      if (dot) dot.style.scale = "1";
      if (ring) ring.style.scale = isHoveringRef.current ? "1" : "0";
    };

    const onLeave = () => {
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    };
    const onEnter = () => {
      if (dot) dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    borderRadius: "50%",
    mixBlendMode: "difference",
    // Center the element on the cursor point
    transform: "translate(-50%, -50%)",
    // Start off-screen so there's never a flash at 0,0
    left: "-9999px",
    top: "-9999px",
  };

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          ...baseStyle,
          width: "16px",
          height: "16px",
          background: "white",
          zIndex: 9999,
          transition: "scale 150ms ease-out, opacity 150ms ease",
          opacity: 0,
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          ...baseStyle,
          width: "56px",
          height: "56px",
          background: "rgba(255, 255, 255, 0.2)",
          zIndex: 9998,
          // No transition initially — enabled via JS after first position
          transition: "none",
          scale: "0",
          opacity: 0,
        }}
      />
    </>
  );
}
