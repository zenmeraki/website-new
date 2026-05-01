import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckIcon from "@mui/icons-material/Check";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);
const MotionCard = motion(Card);

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
  PRICING: "pricing",
  FAQ: "faq",
  CTA: "cta",
};

const featureContent = {
  title: "Seamless Social Sharing",
  description:
    "Enable customers to share products directly to their favorite social networks with one click, increasing visibility and driving more traffic to your store.",
  benefits: [
    "One-click sharing to multiple platforms",
    "Customizable share messages with product details",
    "Image optimization for each social network",
    "Mobile-friendly sharing experience",
  ],
};

const faqItems = [
  {
    question: "How easy is it to install Tap2share for Shopify?",
    answer:
      "Installation is a simple one-click process through the Shopify App Store. Most merchants can get started in minutes.",
  },
  {
    question: "Which social platforms does Tap2share for Shopify support?",
    answer:
      "Tap2share supports major platforms including Facebook, Instagram, Twitter, Pinterest, TikTok, and LinkedIn.",
  },
  {
    question: "Can I customize how my products appear when shared?",
    answer:
      "Yes. You can customize share messaging, images, descriptions, and defaults across your store.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. A 14-day free trial is available with access to the full feature set.",
  },
  {
    question: "How detailed are the analytics?",
    answer:
      "The analytics dashboard includes shared products, top channels, conversion tracking, and ROI visibility.",
  },
];

function HeroSection({ isMobile, hoverStates, onHover }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.9rem", sm: "1.8rem", md: "3.4rem" } }}
          >
            Boost Your Sales Through Tap2share
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ mb: { xs: 2, md: 4 } }}
          >
            Tap2share for Shopify makes it simple for customers to share their
            favorite products on social media, driving traffic and increasing
            conversions for your store.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 4,
            }}
          >
            <MotionButton
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ShareIcon />}
              whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => onHover("installBtn", true)}
              onMouseLeave={() => onHover("installBtn", false)}
              fullWidth={isMobile}
              disabled
              sx={{
                opacity: 0.6,
                textTransform: "none",
                background: hoverStates.installBtn
                  ? `linear-gradient(90deg, ${appTheme.palette.primary.main}, ${appTheme.palette.primary.dark})`
                  : appTheme.palette.primary.main,
              }}
            >
              Install App
            </MotionButton>

            <MotionButton
              variant="outlined"
              color="primary"
              size="large"
              href="https://youtu.be/916_bQB-xgI"
              whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              fullWidth={isMobile}
              sx={{ textTransform: "none" }}
            >
              Watch Demo
            </MotionButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function FeatureSection({ isMobile }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
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
            <ListItemIcon sx={{ minWidth: 36 }}>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <CheckIcon color="success" />
              </motion.div>
            </ListItemIcon>
            <ListItemText primary={benefit} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function HowItWorksSection({ isMobile, theme }) {
  const items = [
    {
      icon: <ShoppingCartIcon fontSize="large" />,
      title: "1. Install the App",
      desc: "Add Tap2share to your Shopify store with a quick setup flow.",
    },
    {
      icon: <BoltIcon fontSize="large" />,
      title: "2. Customize Settings",
      desc: "Choose what can be shared and how it appears.",
    },
    {
      icon: <RefreshIcon fontSize="large" />,
      title: "3. Increase Sales",
      desc: "Turn customer shares into new traffic and more conversions.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        component="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 3 }}
      >
        How Tap2share for Shopify Works
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Get up and running in minutes with a simple installation process.
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
                mb: 2,
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
                  "rgba(24, 193, 185, 0.8)",
                  theme.palette.primary.light,
                ],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: index,
                  ease: "easeInOut",
                },
              }}
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

            <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
              {item.title}
            </Typography>

            <Typography variant="body2">{item.desc}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function PricingSection({ isMobile, theme }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography variant="h6" component="div" sx={{ mb: 1, mt: 2 }}>
        Get Started
      </Typography>

      <MotionCard
        variant="outlined"
        sx={{
          borderRadius: 2,
          position: "relative",
          overflow: "visible",
          mb: 4,
          maxWidth: isMobile ? "100%" : "500px",
          mx: "auto",
        }}
        whileHover={{
          boxShadow: "0px 10px 30px rgba(0, 128, 128, 0.2)",
          borderColor: theme.palette.primary.main,
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
            Basic
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            For growing businesses
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography component="span" variant="h4" fontWeight="bold">
              $3
            </Typography>
            <Typography component="span" variant="subtitle1" color="text.secondary">
              /month
            </Typography>
          </Box>

          <List disablePadding>
            {[
              "Social sharing for all platforms",
              "Unlimited shares",
              "Custom button styling",
            ].map((feature) => (
              <ListItem key={feature} disablePadding disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <CheckIcon color="success" fontSize="small" />
                  </motion.div>
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>

          <MotionButton
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 4, textTransform: "none" }}
            href="https://admin.shopify.com/store/demo-zen-store/apps/customizer-39?app_load_id=ea3ddb76-72ce-4436-82c1-f57b35cb2e68&link_source=search"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </MotionButton>
        </CardContent>
      </MotionCard>
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
            sx={{ mb: 3 }}
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

            <Typography variant="body1" color="text.secondary">
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
        mb: 4,
        bgcolor: theme.palette.primary.main,
        position: "relative",
      }}
    >
      <Container>
        <Grid container spacing={isMobile ? 2 : 4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              fontWeight="bold"
              gutterBottom
              color="white"
            >
              Ready to Boost Your Social Presence?
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }} color="white">
              Join merchants using Tap2share for Shopify to drive traffic,
              increase engagement, and boost sales.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                textTransform: "none",
                "&:hover": { bgcolor: "grey.100" },
              }}
              href="https://youtu.be/916_bQB-xgI"
            >
              WATCH DEMO
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Tap2shareContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activePage, setActivePage] = useState(SECTION_KEYS.HERO);
  const [hoverStates, setHoverStates] = useState({});

  const navigationItems = [
    { key: SECTION_KEYS.HERO, label: "Home" },
    { key: SECTION_KEYS.FEATURES, label: "Features" },
    { key: SECTION_KEYS.HOW_IT_WORKS, label: "How It Works" },
    { key: SECTION_KEYS.PRICING, label: "Pricing" },
    { key: SECTION_KEYS.FAQ, label: "FAQ" },
    { key: SECTION_KEYS.CTA, label: "Get Started" },
  ];

  const handleHover = (id, isHovering) => {
    setHoverStates((prev) => ({
      ...prev,
      [id]: isHovering,
    }));
  };

  const renderActiveSection = () => {
    switch (activePage) {
      case SECTION_KEYS.HERO:
        return <HeroSection isMobile={isMobile} hoverStates={hoverStates} onHover={handleHover} />;
      case SECTION_KEYS.FEATURES:
        return <FeatureSection isMobile={isMobile} />;
      case SECTION_KEYS.HOW_IT_WORKS:
        return <HowItWorksSection isMobile={isMobile} theme={appTheme} />;
      case SECTION_KEYS.PRICING:
        return <PricingSection isMobile={isMobile} theme={appTheme} />;
      case SECTION_KEYS.FAQ:
        return <FAQSection isMobile={isMobile} theme={appTheme} />;
      case SECTION_KEYS.CTA:
        return <CallToActionSection isMobile={isMobile} theme={appTheme} />;
      default:
        return <HeroSection isMobile={isMobile} hoverStates={hoverStates} onHover={handleHover} />;
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />

      <Container sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 3 } }}>
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
              py: 2,
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
                  p: 1,
                  borderRadius: 1,
                  display: "flex",
                  mr: 2,
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
                  <ShareIcon />
                </motion.div>
              </MotionBox>

              <Typography variant={isMobile ? "subtitle1" : "h6"} component="div">
                Tap2share for Shopify
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

            {(activePage === SECTION_KEYS.HERO ||
              activePage === SECTION_KEYS.FEATURES ||
              activePage === SECTION_KEYS.HOW_IT_WORKS) && (
              <CallToActionSection isMobile={isMobile} theme={appTheme} />
            )}
          </Box>
        </MotionPaper>
      </Container>

      <Footer />
    </Box>
  );
}

export default function Tap2shareApp() {
  return (
    <ThemeProvider theme={appTheme}>
      <Tap2shareContent />
    </ThemeProvider>
  );
}