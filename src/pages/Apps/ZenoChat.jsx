// src/pages/ZenoChat/ZenoChat.jsx

import React, { useMemo, useState } from "react";
import { Avatar, Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReferralModal from "../../components/ReferralModal";
import ShopifyStoreModal from "../../components/ShopifyStoreModal";

import {
  HeroSection,
  FeatureSection,
  HowItWorksSection,
  PricingSection,
  FAQSection,
  PrivacySection,
  TermsSection,
  CallToActionSection,
} from "../../components/ZenoChatSections";

const logo = "/zenochat_logo.jpeg";

const MotionBox = motion(Box);
const MotionPaper = motion(Box); // Paper used only for shell here

export const appTheme = createTheme({
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
  PRIVACY: "privacy",
  TERMS: "terms",
};

const navigationItems = [
  { key: SECTION_KEYS.HERO, label: "Hero" },
  { key: SECTION_KEYS.FEATURES, label: "Features" },
  { key: SECTION_KEYS.HOW_IT_WORKS, label: "How It Works" },
  { key: SECTION_KEYS.PRICING, label: "Pricing" },
  { key: SECTION_KEYS.FAQ, label: "FAQ" },
  { key: SECTION_KEYS.PRIVACY, label: "Privacy Policy" },
  { key: SECTION_KEYS.TERMS, label: "Terms & Conditions" },
];

function ZenoChatContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const referralCode = queryParams.get("ref");

  const activePage = useMemo(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const lastPath = pathParts[pathParts.length - 1];

    const validSections = Object.values(SECTION_KEYS);

    return validSections.includes(lastPath) ? lastPath : SECTION_KEYS.HERO;
  }, [location.pathname]);

  const [hoverStates, setHoverStates] = useState({});
  const [referralModalOpen, setReferralModalOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(Boolean(referralCode));

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleHover = (id, isHovering) =>
    setHoverStates((prev) => ({ ...prev, [id]: isHovering }));

  const handleSectionChange = (sectionKey) => {
    navigate(`/zenochat-app/${sectionKey}`);
  };

  const renderActiveSection = () => {
    const sharedProps = { isMobile, theme: appTheme };

    switch (activePage) {
      case SECTION_KEYS.HERO:
        return (
          <HeroSection
            {...sharedProps}
            hoverStates={hoverStates}
            onHover={handleHover}
            onOpenInstall={() => setStoreModalOpen(true)}
            onOpenReferral={() => setReferralModalOpen(true)}
          />
        );
      case SECTION_KEYS.FEATURES:
        return <FeatureSection isMobile={isMobile} />;
      case SECTION_KEYS.HOW_IT_WORKS:
        return <HowItWorksSection {...sharedProps} />;
      case SECTION_KEYS.PRICING:
        return (
          <PricingSection
            {...sharedProps}
            onOpenInstall={() => setStoreModalOpen(true)}
          />
        );
      case SECTION_KEYS.FAQ:
        return <FAQSection {...sharedProps} />;
      case SECTION_KEYS.PRIVACY:
        return <PrivacySection {...sharedProps} />;
      case SECTION_KEYS.TERMS:
        return <TermsSection {...sharedProps} />;
      default:
        return (
          <HeroSection
            {...sharedProps}
            hoverStates={hoverStates}
            onHover={handleHover}
            onOpenInstall={() => setStoreModalOpen(true)}
            onOpenReferral={() => setReferralModalOpen(true)}
          />
        );
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />

      <Container
        sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 3 } }}
        maxWidth="lg"
      >
        <MotionBox
          sx={{ p: 0, overflow: "hidden", borderRadius: 1, boxShadow: 1, bgcolor: "background.paper" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 2.5 },
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  p: isMobile ? 0.5 : 1,
                  borderRadius: 1,
                  display: "flex",
                  mr: { xs: 1, md: 2 },
                }}
              >
                <Avatar
                  variant="rounded"
                  src={logo}
                  alt="ZenoChat Logo"
                  sx={{ width: isMobile ? 32 : 48, height: isMobile ? 32 : 48 }}
                />
              </Box>
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                ZenoChat
              </Typography>
            </Box>
          </Box>

          <Box sx={{ p: { xs: 2, md: 3 } }}>
            {/* Navigation tabs */}
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
                <Box
                  sx={{
                    display: "flex",
                    px: { xs: 2, md: 0 },
                    minWidth: "fit-content",
                  }}
                >
                  {navigationItems.map((item) => {
                    const isActive = activePage === item.key;
                    const isLegal =
                      item.key === SECTION_KEYS.PRIVACY ||
                      item.key === SECTION_KEYS.TERMS;

                    return (
                      <motion.div key={item.key} whileHover={{ scale: 1.05, y: -2 }}>
                        <Button
                          color="inherit"
                          onClick={() => handleSectionChange(item.key)}
                          variant="text"
                          sx={{
                            mx: 0.5,
                            py: 1,
                            px: 2,
                            textTransform: "none",
                            fontWeight: isActive ? 600 : 400,
                            minWidth: "auto",
                            whiteSpace: "nowrap",
                            color: isActive
                              ? "primary.main"
                              : isLegal
                                ? "text.disabled"
                                : "text.secondary",
                            borderRadius: 2,
                            "&:hover": { backgroundColor: "action.hover" },
                          }}
                        >
                          {item.label}
                        </Button>
                      </motion.div>
                    );
                  })}
                </Box>
              </Box>
            </Box>

            {/* Active section */}
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
        </MotionBox>

        <ShopifyStoreModal
          open={storeModalOpen}
          handleClose={() => setStoreModalOpen(false)}
          referralCode={referralCode}
          isMobile={isMobile}
        />

        <ReferralModal
          open={referralModalOpen}
          onClose={() => setReferralModalOpen(false)}
          theme={appTheme}
          isMobile={isMobile}
        />
      </Container>

      <Footer />
    </Box>
  );
}

export default function ZenoChat() {
  return (
    <ThemeProvider theme={appTheme}>
      <ZenoChatContent />
    </ThemeProvider>
  );
}