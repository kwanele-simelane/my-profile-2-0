import React, { useEffect, useState } from "react";

const CursorAccent = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(function animate() {
      setPosition((prev) => ({
        x: prev.x + (cursor.x - prev.x) * 0.1,
        y: prev.y + (cursor.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(id);
  }, [cursor]);

  return (
    <div
      className="fixed pointer-events-none w-172 h-172 bg-primary rounded-full opacity-15 !blur-3xl transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 144}px, ${position.y - 144}px)`,
      }}
    />
  );
};

export default CursorAccent;
