import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";



const AnimatedBackground = ({ parallaxOffset = 0, scrollVelocity = 0 }) => {
  const canvasRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Respect motion preferences & exit early
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    let smoothVelocity = 0;
    let lastFrameTime = 0;

    // 🔧 ResizeObserver: maintain crispness on DPI changes
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);

    // 🌌 Responsive particle parameters
    const numParticles = isMobile ? 18 : isTablet ? 45 : 90;
    const baseSpeed = isMobile ? 0.15 : isTablet ? 0.25 : 0.4;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * baseSpeed,
      vy: (Math.random() - 0.5) * baseSpeed,
      s: Math.random() * 2 + 0.8,
      o: Math.random() * 0.15 + 0.05,
    }));

    // 🕒 Frame pacing (lower FPS on mobile)
    const targetFPS = isMobile ? 30 : 60;
    const frameDuration = 1000 / targetFPS;

    const draw = (now) => {
      const deltaTime = now - lastFrameTime;
      if (deltaTime < frameDuration) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastFrameTime = now;

      // Smooth scroll-velocity easing for natural drift
      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx + smoothVelocity * -0.15;
        p.y += p.vy;

        // Wrap particles around viewport edges
        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10,39,37,${p.o})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [isMobile, isTablet, prefersReducedMotion, scrollVelocity]);

  // 🧩 Graceful fallback (no animation)
  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        transition: "transform 0.15s linear",
        willChange: "transform",
        // 🪶 Optimize compositing on high-DPR displays
        backfaceVisibility: "hidden",
      }}
    />
  );
};

export default AnimatedBackground;