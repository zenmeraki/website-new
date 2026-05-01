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
import StorefrontIcon from "@mui/icons-material/Storefront";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CheckIcon from "@mui/icons-material/Check";
import GroupIcon from "@mui/icons-material/Group";
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
  FAQ: "faq",
};

const featureContent = {
  title: "Complete Multivendor Solution",
  description:
    "Transform your Shopify store into a thriving marketplace with multiple vendors, commission management, and automated payouts in one platform.",
  benefits: [
    "Unlimited vendors and product listings",
    "Automated commission tracking and payments",
    "Vendor application and approval system",
    "Individual vendor dashboards and analytics",
  ],
};

const faqs = [
  {
    question: "How do vendors join my marketplace?",
    answer:
      "You can send direct invitations or set up a vendor application form on your store. All applications go through your approval process before vendors can start selling.",
  },
  {
    question: "How are commissions calculated and paid?",
    answer:
      "You set commission rates by vendor or product category. The app calculates commissions on each sale and supports scheduled payout workflows.",
  },
  {
    question: "Can I customize how vendor stores look?",
    answer:
      "Yes. Vendors can have their own storefront presence while still aligning with your overall marketplace design.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. A 14-day free trial is available with access to core features.",
  },
  {
    question: "How does inventory management work?",
    answer:
      "Vendors manage their own inventory through dedicated dashboards while you retain marketplace oversight.",
  },
];

function HeroSection({ isMobile }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1.9rem", sm: "1.8rem", md: "3.4rem" },
              lineHeight: { xs: 1.3, md: 1.2 },
            }}
          >
            Launch Your Own Marketplace with MultiVendor
          </Typography>

          <Typography
            variant={isMobile ? "body2" : "body1"}
            color="text.secondary"
            paragraph
            sx={{ mb: { xs: 2, md: 4 } }}
          >
            Transform your Shopify store into a thriving marketplace where
            multiple vendors can sell products while you earn commission on
            every sale without handling inventory.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function FeatureSection({ isMobile }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: { xs: 2, md: 3 }, mb: { xs: 2, md: 4 } }}>
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
      </Paper>
    </Box>
  );
}

function HowItWorksSection({ isMobile, theme }) {
  const items = [
    {
      icon: <StorefrontIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "1. Install the App",
      desc: "Add MultiVendor to your Shopify store with an easy setup flow.",
    },
    {
      icon: <GroupIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "2. Invite Vendors",
      desc: "Set up vendor applications and approve sellers into your marketplace.",
    },
    {
      icon: <MonetizationOnIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "3. Start Earning",
      desc: "Set commission rules and grow your marketplace revenue.",
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
        How MultiVendor Works
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Setting up your marketplace is simple with a guided setup experience.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid key={item.title} item xs={12} md={4} sx={{ textAlign: "center" }}>
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
        sx={{ mb: 3 }}
      >
        Frequently Asked Questions
      </Typography>

      <Box>
        {faqs.map((faq, index) => (
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
              variant={isMobile ? "body2" : "body1"}
              color="text.secondary"
              sx={{ fontSize: isMobile ? "0.9rem" : "inherit" }}
            >
              {faq.answer}
            </Typography>

            {index < faqs.length - 1 && <Divider sx={{ mt: { xs: 2, md: 3 } }} />}
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
        py: { xs: 3, md: 5 },
        borderRadius: 2,
        mb: { xs: 2, md: 4 },
        bgcolor: theme.palette.primary.main,
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              fontWeight="bold"
              gutterBottom
              color="white"
            >
              Ready to Launch Your Marketplace?
            </Typography>

            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{ mb: { xs: 2, md: 3 } }}
              color="white"
            >
              Join merchants using MultiVendor to create thriving marketplaces
              without inventory hassles.
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
                padding: { xs: 2, md: 3 },
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
              >
                Our advanced marketplace builder is in final testing
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function MultiVendorContent() {
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
                  <StorefrontIcon fontSize={isMobile ? "small" : "medium"} />
                </motion.div>
              </MotionBox>

              <Typography variant={isMobile ? "subtitle1" : "h6"} component="div">
                MultiVendor
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

export default function MultiVendorApp() {
  return (
    <ThemeProvider theme={appTheme}>
      <MultiVendorContent />
    </ThemeProvider>
  );
}