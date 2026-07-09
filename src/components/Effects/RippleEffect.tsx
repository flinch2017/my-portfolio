import { useEffect } from "react";

function RippleEffect() {
  useEffect(() => {
    const createRipple = (event: PointerEvent) => {
      const ripple = document.createElement("span");

      ripple.className = "page-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 900);
    };

    window.addEventListener("pointerdown", createRipple);

    return () => {
      window.removeEventListener("pointerdown", createRipple);
    };
  }, []);

  return null;
}

export default RippleEffect;
