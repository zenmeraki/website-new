import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CheckIcon from "@mui/icons-material/Check";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);

const appTheme = createTheme({
  palette: {
    primary: {
      main: "#0e3b39",
      light: "#1a5754",
      dark: "#082624",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1E88E5",
      light: "#6AB7FF",
      dark: "#005CB2",
      contrastText: "#FFFFFF",
    },
  },
});

const SECTION_KEYS = {
  HERO: "hero",
  FEATURES: "features",
  HOW_IT_WORKS: "how-it-works",
  FAQ: "faq",
};

const featureContent = {
  title: "Visual Search Technology",
  description:
    "Find products by simply uploading an image. Our AI-powered search engine identifies similar items across vendors in your marketplace.",
  benefits: [
    "Instant visual product matching",
    "Cross-vendor product discovery",
    "Increasing conversion rates by 35%",
    "Easy implementation for all vendors",
  ],
};

const faqItems = [
  {
    question: "How accurate is the visual search technology?",
    answer:
      "Our visual search is designed to achieve high matching accuracy by analyzing color, pattern, shape, and texture across product catalogs.",
  },
  {
    question: "Can customers search from mobile devices?",
    answer:
      "Yes. The visual search flow is mobile-friendly and supports camera capture or image upload from a device gallery.",
  },
  {
    question: "How does this benefit marketplace vendors?",
    answer:
      "Visual search increases product discovery across vendors, helping more products appear through image similarity instead of keyword-only matching.",
  },
  {
    question: "Is visual search available for all product categories?",
    answer:
      "Yes. The approach can be adapted across many physical product categories including fashion, decor, and electronics.",
  },
  {
    question: "How do we implement this for our marketplace?",
    answer:
      "The module can be integrated into your marketplace experience with minimal setup and onboarding support.",
  },
];

function HeroSection({ isMobile }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.9rem", sm: "1.8rem", md: "3.4rem" } }}
          >
            Discover Products with Visual Search
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: { xs: 2, md: 4 } }}
          >
            Transform your marketplace with visual search technology. Let
            customers find products by uploading an image and improve discovery
            across all vendors.
          </Typography>

          <MotionBox
            sx={{
              mb: { xs: 3, md: 4 },
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              height: isMobile ? 180 : 240,
              width: "100%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Box
              component="img"
              src="https://cdn1.vectorstock.com/i/1000x1000/79/65/special-offer-50-off-banner-design-vector-22827965.jpg"
              alt="Visual Search Technology"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
              }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${15 + i * 15}%`,
                    left: `${10 + i * 18}%`,
                    width: isMobile ? 30 : 50,
                    height: isMobile ? 30 : 50,
                    borderRadius: "50%",
                    border: "2px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                    zIndex: 5,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 5px rgba(255, 255, 255, 0.3)",
                      "0 0 15px rgba(255, 255, 255, 0.7)",
                      "0 0 5px rgba(255, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: isMobile ? 8 : 12,
                      height: isMobile ? 8 : 12,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    }}
                    animate={{
                      scale: [0.8, 1.5, 0.8],
                    }}
                    transition={{
                      duration: 1.5 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4 + 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
}

function FeatureSection({ isMobile }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 } }}>
        <Box sx={{ mt: { xs: 2, md: 3 } }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            {featureContent.title}
          </Typography>

          <Typography variant="body1" paragraph>
            {featureContent.description}
          </Typography>

          <List>
            {featureContent.benefits.map((benefit) => (
              <ListItem key={benefit} disableGutters>
                <ListItemIcon sx={{ minWidth: isMobile ? 30 : 36 }}>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <CheckIcon color="success" fontSize={isMobile ? "small" : "medium"} />
                  </motion.div>
                </ListItemIcon>
                <ListItemText
                  primary={benefit}
                  primaryTypographyProps={{
                    fontSize: isMobile ? "0.9rem" : "inherit",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}

function HowItWorksSection({ isMobile, theme }) {
  const items = [
    {
      icon: <PhotoCameraIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "1. Capture or Upload",
      desc: "Take a photo or upload an image of a product you like.",
    },
    {
      icon: <SearchIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "2. Visual Analysis",
      desc: "AI analyzes patterns, colors, and shapes from the uploaded image.",
    },
    {
      icon: <StorefrontIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "3. Find Matches",
      desc: "Discover visually similar products across marketplace vendors.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: { xs: 2, md: 3 } }}
      >
        How Visual Search Works
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: { xs: 2, md: 4 } }}>
        Our AI-driven flow makes product discovery as easy as uploading a picture.
      </Typography>

      <Grid container spacing={isMobile ? 3 : 6} justifyContent="center">
        {items.map((item, index) => (
          <Grid key={item.title} item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
            <MotionPaper
              elevation={0}
              sx={{
                width: isMobile ? 60 : 80,
                height: isMobile ? 60 : 80,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: isMobile ? 1 : 2,
                mx: "auto",
                backgroundColor: theme.palette.primary.light,
                color: "white",
              }}
              whileHover={{
                backgroundColor: theme.palette.primary.main,
                scale: 1.1,
                boxShadow: "0px 5px 15px rgba(0, 128, 128, 0.4)",
              }}
              animate={{
                backgroundColor: [
                  theme.palette.primary.light,
                  "rgba(35, 190, 130, 0.8)",
                  theme.palette.primary.light,
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: index,
                  ease: "easeInOut",
                },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: index,
                  },
                }}
                style={{ color: "white" }}
              >
                {item.icon}
              </motion.div>
            </MotionPaper>

            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              component="h3"
              fontWeight="bold"
              gutterBottom
            >
              {item.title}
            </Typography>

            <Typography variant={isMobile ? "body2" : "body1"}>
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function FAQSection({ isMobile, theme }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: { xs: 2, md: 3 } }}
      >
        Frequently Asked Questions
      </Typography>

      <Box>
        {faqItems.map((faq, index) => (
          <MotionBox
            key={faq.question}
            sx={{ mb: { xs: 2, md: 3 } }}
            whileHover={{
              backgroundColor: "rgba(0, 128, 128, 0.03)",
              borderRadius: "8px",
              padding: isMobile ? "12px" : "16px",
              marginLeft: isMobile ? "-12px" : "-16px",
              marginRight: isMobile ? "-12px" : "-16px",
              borderLeft: `3px solid ${theme.palette.primary.main}`,
            }}
            transition={{ duration: 0.2 }}
          >
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              component="h3"
              fontWeight="bold"
              gutterBottom
            >
              {faq.question}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: isMobile ? "0.9rem" : "inherit" }}
            >
              {faq.answer}
            </Typography>

            {index < faqItems.length - 1 && <Divider sx={{ mt: isMobile ? 2 : 3 }} />}
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}

function CallToActionSection({ isMobile, theme }) {
  return (
    <Box
      sx={{
        py: isMobile ? 3 : 5,
        borderRadius: 2,
        mb: isMobile ? 2 : 4,
        bgcolor: theme.palette.primary.main,
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ px: isMobile ? 2 : 3 }}>
        <Grid container spacing={isMobile ? 2 : 4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              fontWeight="bold"
              gutterBottom
              color="white"
            >
              Ready to Transform Product Discovery?
            </Typography>

            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{ mb: isMobile ? 2 : 3 }}
              color="white"
            >
              Enhance user experience and drive conversions with powerful visual
              search technology for your marketplace.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: isMobile ? 2 : 3,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="span"
                fontWeight="600"
                color="white"
                sx={{
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: isMobile ? 8 : 10,
                    height: isMobile ? 8 : 10,
                    borderRadius: "50%",
                    backgroundColor: "#4caf50",
                    display: "inline-block",
                  }}
                />
                Coming Soon
              </Typography>

              <Typography
                variant={isMobile ? "caption" : "body2"}
                color="white"
                align="center"
                sx={{ mb: 2 }}
              >
                Our powerful Visual Search app is in the final stages of testing.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function VisualSearchContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activePage, setActivePage] = useState(SECTION_KEYS.HERO);

  const navigationItems = [
    { key: SECTION_KEYS.HERO, label: "Hero" },
    { key: SECTION_KEYS.FEATURES, label: "Features" },
    { key: SECTION_KEYS.HOW_IT_WORKS, label: "How It Works" },
    { key: SECTION_KEYS.FAQ, label: "FAQ" },
  ];

  const renderActiveSection = () => {
    switch (activePage) {
      case SECTION_KEYS.HERO:
        return <HeroSection isMobile={isMobile} />;
      case SECTION_KEYS.FEATURES:
        return <FeatureSection isMobile={isMobile} />;
      case SECTION_KEYS.HOW_IT_WORKS:
        return <HowItWorksSection isMobile={isMobile} theme={appTheme} />;
      case SECTION_KEYS.FAQ:
        return <FAQSection isMobile={isMobile} theme={appTheme} />;
      default:
        return <HeroSection isMobile={isMobile} />;
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />

      <Container sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, md: 3 } }}>
        <MotionPaper
          sx={{ p: 0, overflow: "hidden" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionBox
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2 },
              borderBottom: 1,
              borderColor: "divider",
            }}
            whileHover={{ backgroundColor: "rgba(0, 128, 128, 0.02)" }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MotionBox
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  p: { xs: 0.5, md: 1 },
                  borderRadius: 1,
                  display: "flex",
                  mr: { xs: 1, md: 2 },
                }}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                  transition: {
                    duration: 0.5,
                    repeat: 1,
                    repeatType: "reverse",
                  },
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  <SearchIcon fontSize={isMobile ? "small" : "medium"} />
                </motion.div>
              </MotionBox>

              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                sx={{ fontSize: isMobile ? "1rem" : "inherit" }}
              >
                Visual Search
              </Typography>
            </Box>
          </MotionBox>

          <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ position: "relative", mb: 4, width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: { xs: "flex-start", md: "center" },
                  overflowX: "auto",
                  pb: 1,
                  "&::-webkit-scrollbar": { height: "4px" },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "primary.light",
                    borderRadius: "10px",
                  },
                }}
              >
                <Box sx={{ display: "flex", px: { xs: 2, md: 0 }, minWidth: "fit-content" }}>
                  {navigationItems.map((item) => {
                    const isActive = activePage === item.key;

                    return (
                      <MotionButton
                        key={item.key}
                        color="inherit"
                        onClick={() => setActivePage(item.key)}
                        variant="text"
                        sx={{
                          mx: 0.5,
                          py: 1,
                          px: 2,
                          textTransform: "none",
                          fontWeight: isActive ? 600 : 400,
                          minWidth: "auto",
                          whiteSpace: "nowrap",
                          color: isActive ? "primary.main" : "text.secondary",
                          borderRadius: 2,
                          "&:hover": { backgroundColor: "action.hover" },
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {item.label}
                      </MotionButton>
                    );
                  })}
                </Box>
              </Box>
            </Box>

            <AnimatePresence mode="wait">
              <MotionBox
                key={activePage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderActiveSection()}
              </MotionBox>
            </AnimatePresence>

            <CallToActionSection isMobile={isMobile} theme={appTheme} />
          </Box>
        </MotionPaper>
      </Container>

      <Footer />
    </Box>
  );
}

export default function VisualSearchApp() {
  return (
    <ThemeProvider theme={appTheme}>
      <VisualSearchContent />
    </ThemeProvider>
  );
}