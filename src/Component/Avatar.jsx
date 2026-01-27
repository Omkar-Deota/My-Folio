import { useEffect, useRef, useState } from "react";

export default function AvatarParallax({
  src,
  size = 220,
  strength = 18, // max px movement
  rotate = 8,    // max degrees rotation
  smooth = 0.12, // smaller = more smooth/lag
}) {
  const wrapRef = useRef(null);
  const sizeValue = typeof size === "number" ? `${size}px` : size;
  const [isDesktop, setIsDesktop] = useState(false);

  const target = useRef({ x: 0, y: 0, rX: 0, rY: 0 });
  const current = useRef({ x: 0, y: 0, rX: 0, rY: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !isDesktop) {
      if (el) el.style.transform = "none";
      return;
    }

    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      // normalized: -1 to +1
      const nx = (e.clientX - cx) / cx;
      const ny = (e.clientY - cy) / cy;

      target.current.x = nx * strength;
      target.current.y = ny * strength;

      // tilt opposite so it feels natural
      target.current.rY = nx * rotate;
      target.current.rX = -ny * rotate;
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    const animate = () => {
      const t = target.current;
      const c = current.current;

      c.x += (t.x - c.x) * smooth;
      c.y += (t.y - c.y) * smooth;
      c.rX += (t.rX - c.rX) * smooth;
      c.rY += (t.rY - c.rY) * smooth;

      el.style.transform = `
        translate3d(${c.x}px, ${c.y}px, 0)
        rotateX(${c.rX}deg)
        rotateY(${c.rY}deg)
      `;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength, rotate, smooth, isDesktop]);

  return (
    <div
      style={{
        position: isDesktop ? "fixed" : "relative",
        right: isDesktop ? 40 : "auto",
        bottom: isDesktop ? 30 : "auto",
        width: sizeValue,
        height: sizeValue,
        maxWidth: "calc(100vw - 32px)",
        maxHeight: "calc(100vh - 120px)",
        pointerEvents: "none",
        zIndex: isDesktop ? 9999 : "auto",
        perspective: 800,
        margin: isDesktop ? 0 : "0 auto",
      }}
    >
      <div
        ref={wrapRef}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <img
          src={src}
          alt="avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.35))",
            transform: "translateZ(30px)",
          }}
        />
      </div>
    </div>
  );
}
