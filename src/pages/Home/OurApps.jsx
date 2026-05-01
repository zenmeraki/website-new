// src/pages/OurAppsPage.jsx
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  ThemeProvider,
  Button,
  useMediaQuery,
} from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { ourAppsTheme } from "../Home/OurApps/theme/ourAppsTheme";
import { appsData } from "../Home/OurApps/data/appsData";
import AnimatedBackground from "../Home/OurApps/components/AnimatedBackground";
import AnimatedAppCard from "../Home/OurApps/components/AnimatedAppCard";
import AnimatedSectionTitle from "../Home/OurApps/components/AnimatedSectionTitle";

import "../Home/OurApps/index.css";
/**
 * 🌟 OurAppsPage
 * Fixed version — Removed white space before App Carousel
 */
const OurAppsPage = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  // Parallax effect for background
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newScrollLeft = container.scrollLeft;
          const delta = newScrollLeft - (container.lastScrollLeft || 0);
          container.lastScrollLeft = newScrollLeft;

          const scrollProgress = newScrollLeft / container.scrollWidth;
          setParallaxOffset(scrollProgress * -40);
          setScrollVelocity(delta * 0.05);
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual horizontal scroll buttons
  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: scrollAmount * dir,
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeProvider theme={ourAppsTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* Animated Background */}
        <AnimatedBackground
          parallaxOffset={parallaxOffset}
          scrollVelocity={scrollVelocity}
        />

        {/* Hero Section */}
        <Box
          sx={{
            background: "primary.main",
            color: "white",
            pt: { xs: 8, sm: 12 },
            pb: { xs: 2, sm: 3 }, // ✅ reduced bottom padding
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient Glow */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.08), transparent 70%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.06), transparent 80%)",
              backgroundSize: "200% 200%",
              animation: "ambientShift 16s ease-in-out infinite",
              zIndex: 0,
              "@keyframes ambientShift": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
          />

          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <AnimatedSectionTitle>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: "black",
                  textShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                }}
              >
                Explore Our Apps
              </Typography>
            </AnimatedSectionTitle>

            <AnimatedSectionTitle delay={0.1}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "rgba(0,0,0,0.85)",
                  maxWidth: 620,
                  mx: "auto",
                  mt: 1,
                  lineHeight: 1.6,
                  fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1.25rem)",
                  textShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                Discover our suite of innovative applications, meticulously
                crafted to enhance your workflow and drive business growth.
              </Typography>
            </AnimatedSectionTitle>

            {/* CTA */}
            <Box mt={3}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  px: 3,
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#f1f1f1",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s cubic-bezier(0.25,0.8,0.25,1)",
                  },
                }}
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </Button>
            </Box>
          </Container>
        </Box>

        {/* App Carousel Section */}
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 2, md: 4 }, // ✅ reduced vertical padding
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mb: 2,
                px: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mr: 1 }}
              >
                Navigate
              </Typography>
              <IconButton
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                sx={{ color: "text.primary" }}
              >
                <NavigateBefore />
              </IconButton>
              <IconButton
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                sx={{ color: "text.primary" }}
              >
                <NavigateNext />
              </IconButton>
            </Box>
          )}

          {/* Scrollable App Cards */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: { xs: 2, md: 3 },
              py: 2,
              px: { xs: 2, sm: 4 },
              scrollSnapType: "x mandatory",
              scrollPadding: { xs: 2, sm: 4 },
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": isMobile
                ? { height: "6px" }
                : { display: "none" },
              "&::-webkit-scrollbar-thumb": isMobile
                ? {
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 3,
                }
                : {},
              "&::-webkit-scrollbar-track": isMobile
                ? { backgroundColor: "rgba(0,0,0,0.05)" }
                : {},
              msOverflowStyle: isMobile ? "auto" : "none",
              scrollbarWidth: isMobile ? "thin" : "none",
            }}
          >
            {appsData.map((app, index) => (
              <AnimatedAppCard key={app.id} app={app} delay={index * 0.1} />
            ))}
          </Box>
        </Container>

        {/* CTA Section */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 8, sm: 10 },
            mt: { xs: 6, sm: 10 },
            textAlign: "center",
            color: "white",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #0A2725 0%, #245F5C 50%, #3BA399 100%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.1), transparent 60%)",
              backgroundSize: "400% 400%",
              animation:
                "lightShift 14s cubic-bezier(0.25,0.1,0.25,1) infinite",
              zIndex: 0,
              "@keyframes lightShift": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
          />

          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <AnimatedSectionTitle>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  textShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  fontSize: "clamp(1.8rem, 3vw + 1rem, 2.8rem)",
                }}
              >
                Ready to Elevate Your Business?
              </Typography>
            </AnimatedSectionTitle>

            <AnimatedSectionTitle delay={0.1}>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 640,
                  mx: "auto",
                  mb: 4,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "clamp(1rem,1vw+0.5rem,1.15rem)",
                  lineHeight: 1.7,
                }}
              >
                Let’s collaborate and build transformative experiences together.
                Explore all our apps or reach out to our team for tailored
                solutions.
              </Typography>
            </AnimatedSectionTitle>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  bgcolor: "white",
                  "&:hover": { bgcolor: "#f4f4f4" },
                }}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 3,
                  py: 1,
                  minWidth: "180px",
                  fontSize: "1rem",
                  borderRadius: 5,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#f1f1f1",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={() => {
                  const section = document.getElementById("apps");
                  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Explore Our Apps
              </Button>

            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default OurAppsPage;