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
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReferralModal from "../../components/ReferralModal";
import ShopifyStoreModal from "../../components/ShopifyStoreModal";

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
  title: "Effortless Bulk Editing for Your Shopify Store",
  description:
    "Transform your Shopify store management with seamless bulk editing and automation.",
  benefits: [
    "Bulk edit products, variants, and collections with ease",
    "Streamlined inventory and pricing updates in just a few clicks",
    "User-friendly interface with advanced filtering options",
    "Automate repetitive tasks to save time and reduce errors",
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
    description: "For stores that need regular bulk editing.",
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
    description: "For teams needing exports and rules.",
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
    question: "How easy is it to connect my Shopify store?",
    answer:
      "MetaMatrix offers a one-click integration with Shopify. Once connected, we automatically import your store data and begin generating insights immediately.",
  },
  {
    question: "Can I connect data from sources other than Shopify?",
    answer:
      "Yes. MetaMatrix can be extended to support multiple data sources including analytics tools, CSV imports, and external systems.",
  },
  {
    question: "Do I need technical skills to use MetaMatrix?",
    answer:
      "No. The interface is designed for merchants and operators, not just technical users.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most users can get started very quickly after installing and connecting their Shopify store.",
  },
  {
    question: "Can I export reports and visualizations?",
    answer:
      "Yes. Reports and outputs can be exported in multiple formats depending on the enabled features.",
  },
];

function HeroSection({ isMobile, hoverStates, onHover, onOpenInstall, onOpenReferral, theme }) {
  return (
    <Box sx={{ py: { xs: 1, md: 4 } }}>
      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem", md: "3.4rem" } }}
          >
            MetaMatrix – Effortless Bulk Editing for Your Shopify Store!
          </Typography>

          <Typography
            variant={isMobile ? "body2" : "body1"}
            color="text.secondary"
            paragraph
            sx={{
              mb: { xs: 1.5, md: 4 },
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            MetaMatrix is a powerful bulk editor tool designed to streamline
            product data management. It helps merchants efficiently update,
            modify, and manage large volumes of product information with speed,
            accuracy, and ease.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, md: 2 },
              mb: { xs: 1.5, md: 4 },
            }}
          >
            <MotionButton
              variant="contained"
              color="primary"
              size={isMobile ? "medium" : "large"}
              fullWidth={isMobile}
              startIcon={<DataUsageIcon fontSize={isMobile ? "small" : "medium"} />}
              whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => onHover("installBtn", true)}
              onMouseLeave={() => onHover("installBtn", false)}
              onClick={onOpenInstall}
              sx={{
                fontSize: { xs: "0.8rem", md: "0.875rem" },
                height: { xs: "36px", md: "48px" },
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
                fontSize: { xs: "0.8rem", md: "0.875rem" },
                height: { xs: "36px", md: "48px" },
                mt: { xs: 0.5, sm: 0 },
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
      title: "1. Connect Your Store",
      desc: "Sync your Shopify store instantly for seamless product management.",
    },
    {
      icon: <InsightsIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "2. Edit in Bulk",
      desc: "Modify products, variants, pricing, and inventory with powerful bulk-editing tools.",
    },
    {
      icon: <AutoGraphIcon fontSize={isMobile ? "medium" : "large"} />,
      title: "3. Optimize & Automate",
      desc: "Save time with automation, scheduled updates, and smart editing suggestions.",
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
        How MetaMatrix Works
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Effortless bulk editing for a smarter Shopify store.
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

function PricingSection({ isMobile, theme }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography variant="h6" component="div" sx={{ mb: 1, mt: 2 }}>
        Pricing Plans
      </Typography>

      <Grid container spacing={3}>
        {pricingPlans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.title} sx={{ display: "flex" }}>
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
                  p: { xs: 2, md: 4 },
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
                  sx={{ mt: "auto" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
              Ready to Transform Your Store Workflows?
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"} sx={{ mb: 3 }} color="white">
              Start using MetaMatrix to speed up bulk editing, reduce repetitive work,
              and improve catalog operations.
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
                "&:hover": { bgcolor: "grey.100" },
              }}
              onClick={() => window.open("https://youtu.be/1UMtbQG5Z1M", "_blank", "noopener,noreferrer")}
            >
              WATCH DEMO
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const MetaMatrixApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const referralCode = queryParams.get("ref");

  const [activePage, setActivePage] = useState(SECTION_KEYS.HERO);
  const [hoverStates, setHoverStates] = useState({});
  const [referralModalOpen, setReferralModalOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(Boolean(referralCode));

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigationItems = [
    { key: SECTION_KEYS.HERO, label: "Hero", type: "tab" },
    { key: SECTION_KEYS.FEATURES, label: "Features", type: "tab" },
    { key: SECTION_KEYS.HOW_IT_WORKS, label: "How It Works", type: "tab" },
    { key: SECTION_KEYS.PRICING, label: "Pricing", type: "tab" },
    { key: SECTION_KEYS.FAQ, label: "FAQ", type: "tab" },
    { key: "documentation", label: "Documentation", type: "route", path: "/metametrixDocumentation" },
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
        return <PricingSection isMobile={isMobile} theme={appTheme} />;
      case SECTION_KEYS.FAQ:
        return <FAQSection isMobile={isMobile} theme={appTheme} />;
      default:
        return <HeroSection isMobile={isMobile} hoverStates={hoverStates} onHover={handleHover} onOpenInstall={() => setStoreModalOpen(true)} onOpenReferral={() => setReferralModalOpen(true)} theme={appTheme} />;
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Header />

        <Container
          sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, md: 3 } }}
          maxWidth={isMobile ? "xs" : "lg"}
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
                    color: "white",
                    p: isMobile ? 0.5 : 1,
                    borderRadius: 1,
                    display: "flex",
                    mr: { xs: 1, md: 2 },
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src="https://cdn.shopify.com/app-store/listing_images/0d2faed5eadc2b3043d4da7d9dc6e290/icon/CL_ziN7d8YkDEAE=.png"
                    sx={{
                      width: isMobile ? 24 : 32,
                      height: isMobile ? 24 : 32,
                    }}
                  />
                </Box>

                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  component="div"
                  sx={{ fontWeight: 600, color: "text.primary" }}
                >
                  MetaMatrix
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
                      const isActive = item.type === "tab" && activePage === item.key;

                      return (
                        <MotionButton
                          key={item.key}
                          color="inherit"
                          onClick={() => {
                            if (item.type === "route") {
                              navigate(item.path);
                              return;
                            }
                            setActivePage(item.key);
                          }}
                          variant="text"
                          sx={{
                            mx: 0.5,
                            py: 1,
                            px: 2,
                            textTransform: "capitalize",
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
    </ThemeProvider>
  );
};

export default MetaMatrixApp;