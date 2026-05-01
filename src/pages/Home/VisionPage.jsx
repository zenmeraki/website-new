import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Lightbulb, Rocket, TrendingUp } from "@mui/icons-material";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

/* ============================================================
   🎨 THEME — Unified across pages
   ============================================================ */
const theme = createTheme({
  palette: {
    primary: { main: "#00332D" },
    secondary: { main: "#E6FFDF" },
    background: { default: "#00332D", paper: "#023B34" },
    text: { primary: "#FFFFFF", secondary: "rgba(255,255,255,0.7)" },
  },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: "clamp(1.8rem, 3vw + 1rem, 2.8rem)" },
    h2: { fontWeight: 600, fontSize: "clamp(1.4rem, 2vw + 0.8rem, 2rem)" },
  },
});

/* ============================================================
   ♿ Accessibility Hook
   ============================================================ */
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReducedMotion;
};

/* ============================================================
   🌌 Animated Background
   ============================================================ */
const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const numParticles = 60;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.6,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.15 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,255,223,${p.o})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.3,
      }}
    />
  );
};

/* ============================================================
   ✨ Animated Wrapper
   ============================================================ */
const AnimatedWrapper = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return <Box ref={ref}>{children}</Box>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================
   💫 Value Card — Halo + Glass Shimmer
   ============================================================ */
const ValueCard = ({ title, desc, icon, delay }) => {
  const cardRef = useRef(null);
  const shimmerX = useMotionValue(50);
  const shimmerY = useMotionValue(50);
  const springX = useSpring(shimmerX, { stiffness: 120, damping: 10 });
  const springY = useSpring(shimmerY, { stiffness: 120, damping: 10 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    shimmerX.set((x / rect.width) * 100);
    shimmerY.set((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    shimmerX.set(50);
    shimmerY.set(50);
  };

  return (
    <AnimatedWrapper delay={delay}>
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* 🌈 Ambient Halo */}
        <Box
          sx={{
            position: "absolute",
            inset: "-10%",
            borderRadius: "20px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(230,255,223,0.2), transparent 70%)",
            filter: "blur(40px)",
            zIndex: 0,
            animation: "haloPulse 8s ease-in-out infinite alternate",
            "@keyframes haloPulse": {
              "0%": { opacity: 0.4, transform: "scale(1)" },
              "50%": {
                opacity: 0.6,
                transform: "scale(1.05)",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(59,163,153,0.25), transparent 70%)",
              },
              "100%": { opacity: 0.4, transform: "scale(1)" },
            },
          }}
        />

        {/* 💎 Foreground Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            zIndex: 1,
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Card
            sx={{
              flex: 1,
              p: { xs: 2, sm: 3 },
              bgcolor: "rgba(255,255,255,0.05)",
              color: "white",
              width: "100%",
              borderRadius: 3,
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              "@media (hover: hover)": {
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(230,255,223,0.15)",
                },
              },
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at ${springX.get()}% ${springY.get()}%, rgba(255,255,255,0.25), transparent 70%)`,
                mixBlendMode: "soft-light",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
              {icon}
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" } }}
              >
                {title}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              }}
            >
              {desc}
            </Typography>
          </Card>
        </motion.div>
      </Box>
    </AnimatedWrapper>
  );
};

/* ============================================================
   🚀 VisionPage
   ============================================================ */
const VisionPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const values = [
    {
      id: 1,
      title: "Creative",
      desc: "We approach every challenge with fresh perspectives and innovative thinking to create truly unique solutions.",
      icon: <Lightbulb sx={{ color: "#E6FFDF", fontSize: { xs: 28, sm: 32, md: 36 } }} />,
    },
    {
      id: 2,
      title: "Innovative",
      desc: "Our team leverages cutting-edge technology and forward-thinking design to deliver future-ready products.",
      icon: <Rocket sx={{ color: "#E6FFDF", fontSize: { xs: 28, sm: 32, md: 36 } }} />,
    },
    {
      id: 3,
      title: "Driven",
      desc: "We are passionate about excellence — committed to exceeding expectations and creating lasting impact.",
      icon: <TrendingUp sx={{ color: "#E6FFDF", fontSize: { xs: 28, sm: 32, md: 36 } }} />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          overflowX: "hidden",
        }}
      >
        {/* Animated Background only on md+ */}
        {/* Animated Background only on desktop */}
        {!isMobile && <AnimatedBackground />}


        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 0 }, // reduce full width on mobile
            textAlign: "center",
          }}
        >
          {/* Hero */}
          <AnimatedWrapper>
            <Typography
              variant="subtitle2"
              sx={{
                color: "rgba(255,255,255,0.6)",
                letterSpacing: 1,
                mb: 1,
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem" },
              }}
            >
              # Creative • Innovative • Driven
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "white",
                mb: 2,
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.8rem" },
                lineHeight: { xs: 1.3, md: 1.2 },
              }}
            >
              Building the Future with Passion and Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: { xs: "100%", sm: 500, md: 800 },
                mx: "auto",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              We transform bold ideas into real-world solutions through creativity, technology, and collaboration.
            </Typography>
          </AnimatedWrapper>

          {/* CTA */}
          <AnimatedWrapper delay={0.2}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
              <Button
                variant="outlined"
                onClick={() => navigate("/contact")}
                sx={{
                  mt: 6,
                  borderColor: "#E6FFDF",
                  color: "#E6FFDF",
                  px: { xs: 2, sm: 3 },
                  py: 1.25,
                  width: { xs: "90%", sm: "auto" },
                  maxWidth: { xs: "400px", sm: "none" },
                  borderRadius: 10,
                  minHeight: "44px",
                  fontSize: "0.9rem",
                  "@media (hover: hover)": {
                    "&:hover": {
                      bgcolor: "rgba(230,255,223,0.1)",
                      borderColor: "#E6FFDF",
                    },
                  },
                }}
              >
                Let’s Create Together
              </Button>
            </Box>
          </AnimatedWrapper>

          {/* Values Grid */}
          <Box
            sx={{
              mt: { xs: 6, md: 10 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {values.map((v, i) => (
              <Box
                key={v.id}
                sx={{
                  flex: { xs: "1 1 95%", md: "1 1 30%" }, // reduce width on mobile
                  maxWidth: { xs: "100%", md: "calc(33.333% - 16px)" },
                }}
              >
                <ValueCard
                  title={v.title}
                  desc={v.desc}
                  icon={v.icon}
                  delay={i * 0.15}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default VisionPage;