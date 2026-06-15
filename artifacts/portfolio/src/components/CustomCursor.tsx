import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    let rafId: number;

    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.getAttribute("data-interactive") === "true"
      );
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6, scale: isHovering ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.4 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 border border-cyan-400/40 rounded-full pointer-events-none z-[99]"
        animate={{ x: mousePosition.x - 14, y: mousePosition.y - 14, scale: isHovering ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.6 }}
      />
    </>
  );
}
