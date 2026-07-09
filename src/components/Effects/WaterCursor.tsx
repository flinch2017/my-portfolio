import { useEffect, useRef } from "react";

function WaterCursor() {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveWater = (e: PointerEvent) => {
      if (!blobRef.current) return;

      blobRef.current.style.left = `${e.clientX}px`;
      blobRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("pointermove", moveWater);

    return () => {
      window.removeEventListener("pointermove", moveWater);
    };
  }, []);

  return <div ref={blobRef} className="water-cursor" />;
}

export default WaterCursor;
