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

const logo = "/zenochat_logo.jpeg";

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
  title: "Everything Your Team Needs to Manage WhatsApp at Scale",
  description:
    "ZenoChat gives your support and sales team a shared inbox, smart assignment, and live analytics — all built on Meta's official WhatsApp Business API.",
  benefits: [
    "Unified inbox — all WhatsApp conversations in one clean dashboard",
    "Assign chats to agents and track ownership in real time",
    "Send and receive images, PDFs, audio, and video inline",
    "Get 24-hour window alerts so you never miss a reply deadline",
  ],
};

const pricingPlans = [
  {
    title: "Free",
    price: "₹0",
    period: "/month",
    description: "Get started with no credit card needed.",
    features: [
      "1 WhatsApp number",
      "2 team members",
      "1,000 conversations / mo",
      "Media message support",
    ],
  },
  {
    title: "Starter (Monthly)",
    price: "₹999",
    period: "/month",
    description: "For small teams getting off shared phones.",
    features: [
      "1 WhatsApp number",
      "5 team members",
      "5,000 conversations / mo",
      "Media message support",
    ],
  },
  {
    title: "Growth (Monthly)",
    price: "₹2,499",
    period: "/month",
    description: "For active merchant and support teams.",
    highlighted: true,
    features: [
      "1 WhatsApp number",
      "10 team members",
      "Unlimited conversations",
      "Response time analytics",
    ],
  },
  {
    title: "Scale (Monthly)",
    price: "₹6,999",
    period: "/month",
    description: "For larger operations with advanced needs.",
    features: [
      "Multiple phone numbers",
      "Unlimited team members",
      "Unlimited conversations",
      "Priority support + onboarding",
    ],
  },
];

const faqs = [
  {
    question: "What is ZenoChat?",
    answer:
      "ZenoChat is a WhatsApp Business inbox built for merchant and support teams. It lets your entire team share one WhatsApp number, assign chats to agents, send media messages, and track response performance — all in one dashboard.",
  },
  {
    question: "How do I connect my WhatsApp number to ZenoChat?",
    answer:
      "You authorize via Meta's official OAuth flow. ZenoChat requests only the WhatsApp Business messaging scope, automatically registers your webhook, and has you live in under 5 minutes — no developer needed.",
  },
  {
    question: "Does ZenoChat charge per message?",
    answer:
      "No. ZenoChat charges a flat monthly fee and does not add any per-message fees on top. WhatsApp Business API conversation charges from Meta apply separately based on your usage.",
  },
  {
    question: "How many team members can use ZenoChat?",
    answer:
      "The Free plan supports 2 members. Starter supports 5, Growth supports 10, and Scale supports unlimited team members — so the whole company can be in one inbox.",
  },
  {
    question: "Can I send images, PDFs, and audio through ZenoChat?",
    answer:
      "Yes. ZenoChat renders all WhatsApp media types — images, documents, audio, and video — inline in the chat window. No broken CDN links, no downloading raw files.",
  },
  {
    question: "What is the 24-hour window alert?",
    answer:
      "Meta's WhatsApp Business API requires you to reply within 24 hours of a customer's last message. ZenoChat warns you before that window closes so you never lose the ability to reply.",
  },
  {
    question: "Is my WhatsApp access token safe with ZenoChat?",
    answer:
      "Your Meta access token is never exposed to the browser. All API calls go through ZenoChat's hardened backend. Access is scoped, logged, and auditable at all times.",
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
            Your WhatsApp inbox, built for business
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
            Reply to customers, assign chats to your team, and manage your
            entire WhatsApp support in one clean dashboard. No per-message fees.
            Built on Meta's official WhatsApp Business API.
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
              CONNECT WHATSAPP — FREE
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
              Book a Demo
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
      title: "1. Connect Your Meta Account",
      desc: "Authorize via Meta's official OAuth in under 60 seconds. We request only the WhatsApp Business messaging scope — nothing else.",
    },
    {
      icon: <InsightsIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "2. We Configure the Webhook",
      desc: "ZenoChat automatically registers and verifies your Meta webhook. No developer work, no YAML configs required on your end.",
    },
    {
      icon: <AutoGraphIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "3. Invite Your Team & Start Replying",
      desc: "Assign chats to agents, reply to customers, and track response performance — all from one clean shared inbox.",
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
        How ZenoChat Works
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Up and running in under 5 minutes — no developer needed.
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
                  {plan.title === "Free" ? "Start for Free" : "Get Started"}
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
              Ready to clean up your WhatsApp support?
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"} sx={{ mb: 3 }} color="white">
              Join merchants using ZenoChat to manage WhatsApp as a real team —
              shared inbox, fast replies, and zero missed messages.
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

function ZenoChatContent() {
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
                  alt="ZenoChat Logo"
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
                ZenoChat
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

export default function ZenoChat() {
  return (
    <ThemeProvider theme={appTheme}>
      <ZenoChatContent />
    </ThemeProvider>
  );
}