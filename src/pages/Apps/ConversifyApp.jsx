import React, { useMemo, useState } from "react";
import {
  Avatar,
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
import DataUsageIcon from "@mui/icons-material/DataUsage";
import InsightsIcon from "@mui/icons-material/Insights";
import CheckIcon from "@mui/icons-material/Check";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LinkIcon from "@mui/icons-material/Link";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReferralModal from "../../components/ReferralModal";
import ShopifyStoreModal from "../../components/ShopifyStoreModal";
import logo from "../../../public/conversify_logo.jpeg";

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
};

const featureContent = {
  title: "Effortless Messaging for Your Conversations",
  description:
    "Transform the way you connect with intelligent, AI-powered chat that makes communication smooth, engaging, and stress-free.",
  benefits: [
    "Chat seamlessly across multiple platforms in one place",
    "AI-powered replies for faster, smarter communication",
    "Personalize conversations to keep users engaged",
    "Automate routine messages to save time and effort",
  ],
};

const pricingPlans = [
  {
    title: "Free Version",
    price: "$0",
    period: "/month",
    description: "Best for testing and early-stage usage.",
    features: [
      "10 product edits monthly",
      "Edit as much as you want",
      "Unlimited use in dev until launch",
    ],
  },
  {
    title: "Basic (Monthly)",
    price: "$20",
    period: "/month",
    description: "For teams that need regular messaging workflows.",
    features: [
      "Unlimited Product per Task",
      "60-Day Bulk Edit History",
      "Scheduled Edits",
    ],
  },
  {
    title: "Advanced (Monthly)",
    price: "$50",
    period: "/month",
    description: "For growing teams needing more automation.",
    highlighted: true,
    features: [
      "90-Day Bulk Edit History",
      "Scheduled exports for seamless reporting",
      "5 product rules",
    ],
  },
  {
    title: "Pro (Monthly)",
    price: "$100",
    period: "/month",
    description: "For larger operations and advanced workflows.",
    features: [
      "180-Day Bulk Edit History",
      "10 inventory syncs for comprehensive tracking",
      "Dedicated Account Manager",
    ],
  },
];

const faqs = [
  {
    question: "What is Conversify?",
    answer:
      "Conversify is an AI-powered messaging platform that streamlines communication across multiple channels. It helps you chat smarter, automate routine messages, and personalize interactions for better engagement.",
  },
  {
    question: "Which platforms can I connect with Conversify?",
    answer:
      "You can link multiple platforms including WhatsApp, Messenger, Instagram, email, and web chat widgets, so you can manage conversations in one place.",
  },
  {
    question: "Do I need technical skills to use Conversify?",
    answer:
      "No. Conversify is built with a simple, user-friendly interface and AI-powered tools that make messaging faster and easier.",
  },
  {
    question: "How does Conversify automate messages?",
    answer:
      "Conversify supports automated responses, scheduled messages, and intelligent conversation flows that save time and keep your audience engaged.",
  },
  {
    question: "Can I personalize conversations using Conversify?",
    answer:
      "Yes. Conversify provides AI-powered suggestions, quick replies, and personalization tools so you can tailor messages based on context and customer data.",
  },
  {
    question: "How quickly can I get started with Conversify?",
    answer:
      "You can get started in minutes. Connect your channels and begin using smarter chat tools right away.",
  },
  {
    question: "Can I analyze my chat performance?",
    answer:
      "Absolutely. Conversify includes analytics to track engagement, response times, and interaction performance.",
  },
];

function HeroSection({
  isMobile,
  hoverStates,
  onHover,
  onOpenInstall,
  onOpenReferral,
  theme,
}) {
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
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              lineHeight: { xs: 1.3, md: 1.2 },
            }}
          >
            Conversify – Discover Effortless Chatting with Conversify
          </Typography>

          <Typography
            variant={isMobile ? "body2" : "body1"}
            color="text.secondary"
            paragraph
            sx={{
              mb: { xs: 2, md: 4 },
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.125rem" },
            }}
          >
            Transform your platform with Conversify, where intelligent,
            seamless chat experiences empower users to connect, engage, and
            communicate more effectively than ever before.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1.5, md: 2 },
              mb: { xs: 2, md: 4 },
            }}
          >
            <MotionButton
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
              startIcon={
                <DataUsageIcon fontSize={isMobile ? "small" : "medium"} />
              }
              whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => onHover("installBtn", true)}
              onMouseLeave={() => onHover("installBtn", false)}
              onClick={onOpenInstall}
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                minHeight: { xs: "44px", md: "48px" },
                textTransform: "none",
                background: hoverStates.installBtn
                  ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                  : theme.palette.primary.main,
              }}
            >
              GET THE APP
            </MotionButton>

            <MotionButton
              variant="outlined"
              color="primary"
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
              startIcon={<LinkIcon fontSize={isMobile ? "small" : "medium"} />}
              whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenReferral}
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                minHeight: { xs: "44px", md: "48px" },
                textTransform: "none",
              }}
            >
              Generate Referral Link
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
  );
}

function HowItWorksSection({ isMobile, theme }) {
  const items = [
    {
      icon: <DataUsageIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "1. Connect Your Channels",
      desc: "Link chats instantly for seamless multi-channel communication.",
    },
    {
      icon: <InsightsIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "2. Chat Smarter",
      desc: "Respond faster with AI-powered suggestions, quick replies, and better context.",
    },
    {
      icon: <AutoGraphIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "3. Automate & Engage",
      desc: "Save time with automated responses, scheduled messages, and intelligent flows.",
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
        How Conversify Works
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Effortless chatting for smarter conversations.
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
                boxShadow: "0px 5px 15px rgba(25, 118, 210, 0.4)",
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

function PricingSection({ isMobile, theme, onOpenInstall }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography variant="h6" component="div" sx={{ mb: 1, mt: 2 }}>
        Pricing Plans
      </Typography>

      <Grid container spacing={3}>
        {pricingPlans.map((plan) => (
          <Grid item xs={12} sm={6} md={3} key={plan.title} sx={{ display: "flex" }}>
            <MotionCard
              variant="outlined"
              sx={{
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                mb: 4,
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                borderColor: plan.highlighted ? theme.palette.primary.main : undefined,
                boxShadow: plan.highlighted
                  ? "0px 5px 15px rgba(25, 118, 210, 0.2)"
                  : undefined,
              }}
              whileHover={{
                boxShadow: "0px 10px 30px rgba(25, 118, 210, 0.2)",
                borderColor: theme.palette.primary.main,
                y: -5,
              }}
            >
              {plan.highlighted && (
                <Box
                  sx={{
                    position: "absolute",
                    top: -12,
                    right: 20,
                    bgcolor: "secondary.main",
                    color: "white",
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </Box>
              )}

              <CardContent
                sx={{
                  p: { xs: 2, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                >
                  {plan.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {plan.description}
                </Typography>

                <Box sx={{ my: 3 }}>
                  <Typography component="span" variant={isMobile ? "h5" : "h4"} fontWeight="bold">
                    {plan.price}
                  </Typography>
                  <Typography component="span" variant="subtitle1" color="text.secondary">
                    {plan.period}
                  </Typography>
                </Box>

                <List disablePadding sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature) => (
                    <ListItem key={feature} disablePadding disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <motion.div whileHover={{ scale: 1.2 }}>
                          <CheckIcon
                            sx={{ color: theme.palette.primary.main }}
                            fontSize={isMobile ? "small" : "medium"}
                          />
                        </motion.div>
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          fontSize: isMobile ? "0.85rem" : "inherit",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <MotionButton
                  variant={plan.highlighted ? "contained" : "outlined"}
                  color="primary"
                  fullWidth
                  size={isMobile ? "medium" : "large"}
                  sx={{ mt: "auto", textTransform: "none" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenInstall}
                >
                  GET THE APP
                </MotionButton>
              </CardContent>
            </MotionCard>
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
            sx={{ mb: 3, px: isMobile ? 1 : 2 }}
            whileHover={{
              backgroundColor: "rgba(25, 118, 210, 0.03)",
              borderRadius: "8px",
              padding: isMobile ? "8px" : "16px",
              marginLeft: isMobile ? "-8px" : "-16px",
              marginRight: isMobile ? "-8px" : "-16px",
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

            <Typography variant={isMobile ? "body2" : "body1"} color="text.secondary">
              {faq.answer}
            </Typography>

            {index < faqs.length - 1 && <Divider sx={{ mt: 3 }} />}
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
        px: { xs: 2, md: 3 },
        borderRadius: 2,
        mb: 4,
        bgcolor: theme.palette.primary.main,
        position: "relative",
      }}
    >
      <Container maxWidth={isMobile ? "xs" : "lg"}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              fontWeight="bold"
              gutterBottom
              color="white"
            >
              Ready to Make Conversations Effortless with Conversify?
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"} sx={{ mb: 3 }} color="white">
              Join users using Conversify to make conversations smoother, smarter,
              and more engaging.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}
          >
            <Button
              variant="contained"
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                textTransform: "none",
                "&:hover": { bgcolor: "grey.100" },
              }}
              onClick={() =>
                window.open("https://youtu.be/1UMtbQG5Z1M", "_blank", "noopener,noreferrer")
              }
            >
              WATCH DEMO
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function ConversifyContent() {
  const location = useLocation();
  const theme = useTheme();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const referralCode = queryParams.get("ref");

  const [activePage, setActivePage] = useState(SECTION_KEYS.HERO);
  const [hoverStates, setHoverStates] = useState({});
  const [referralModalOpen, setReferralModalOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(Boolean(referralCode));

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigationItems = [
    { key: SECTION_KEYS.HERO, label: "Hero" },
    { key: SECTION_KEYS.FEATURES, label: "Features" },
    { key: SECTION_KEYS.HOW_IT_WORKS, label: "How It Works" },
    { key: SECTION_KEYS.PRICING, label: "Pricing" },
    { key: SECTION_KEYS.FAQ, label: "FAQ" },
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
        return (
          <HeroSection
            isMobile={isMobile}
            hoverStates={hoverStates}
            onHover={handleHover}
            onOpenInstall={() => setStoreModalOpen(true)}
            onOpenReferral={() => setReferralModalOpen(true)}
            theme={appTheme}
          />
        );
      case SECTION_KEYS.FEATURES:
        return <FeatureSection isMobile={isMobile} />;
      case SECTION_KEYS.HOW_IT_WORKS:
        return <HowItWorksSection isMobile={isMobile} theme={appTheme} />;
      case SECTION_KEYS.PRICING:
        return (
          <PricingSection
            isMobile={isMobile}
            theme={appTheme}
            onOpenInstall={() => setStoreModalOpen(true)}
          />
        );
      case SECTION_KEYS.FAQ:
        return <FAQSection isMobile={isMobile} theme={appTheme} />;
      default:
        return (
          <HeroSection
            isMobile={isMobile}
            hoverStates={hoverStates}
            onHover={handleHover}
            onOpenInstall={() => setStoreModalOpen(true)}
            onOpenReferral={() => setReferralModalOpen(true)}
            theme={appTheme}
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
        <MotionPaper
          sx={{ p: 0, overflow: "hidden" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
                  alt="Conversify Logo"
                  sx={{
                    width: isMobile ? 32 : 48,
                    height: isMobile ? 32 : 48,
                  }}
                />
              </Box>

              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                component="div"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                Conversify
              </Typography>
            </Box>
          </Box>

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

export default function Conversify() {
  return (
    <ThemeProvider theme={appTheme}>
      <ConversifyContent />
    </ThemeProvider>
  );
}