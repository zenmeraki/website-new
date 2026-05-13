// src/pages/ZenoChat/ZenoChatSections.jsx

import React from "react";
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
} from "@mui/material";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import InsightsIcon from "@mui/icons-material/Insights";
import CheckIcon from "@mui/icons-material/Check";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LinkIcon from "@mui/icons-material/Link";
import SecurityIcon from "@mui/icons-material/Security";
import GavelIcon from "@mui/icons-material/Gavel";
import { motion } from "framer-motion";

import {
  featureContent,
  pricingPlans,
  faqs,
  privacySections,
  termsSections,
} from "./ZenoChatData";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);
const MotionCard = motion(Card);

// ─── SECTION COMPONENTS ───────────────────────────────────────────────────────

export function HeroSection({
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

export function FeatureSection({ isMobile }) {
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

export function HowItWorksSection({ isMobile, theme }) {
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
          <Grid
            key={item.title}
            item
            xs={12}
            md={4}
            sx={{ textAlign: "center" }}
          >
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

export function PricingSection({ isMobile, theme, onOpenInstall }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography variant="h6" component="div" sx={{ mb: 1, mt: 2 }}>
        Pricing Plans
      </Typography>

      <Grid container spacing={3}>
        {pricingPlans.map((plan) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={plan.title}
            sx={{ display: "flex" }}
          >
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
                borderColor: plan.highlighted
                  ? theme.palette.primary.main
                  : undefined,
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

                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {plan.description}
                </Typography>

                <Box sx={{ my: 3 }}>
                  <Typography
                    component="span"
                    variant={isMobile ? "h5" : "h4"}
                    fontWeight="bold"
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {plan.period}
                  </Typography>
                </Box>

                <List disablePadding sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature) => (
                    <ListItem
                      key={feature}
                      disablePadding
                      disableGutters
                      sx={{ py: 0.5 }}
                    >
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

export function FAQSection({ isMobile, theme }) {
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

            <Typography
              variant={isMobile ? "body2" : "body1"}
              color="text.secondary"
            >
              {faq.answer}
            </Typography>

            {index < faqs.length - 1 && <Divider sx={{ mt: 3 }} />}
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}

export function PrivacySection({ isMobile, theme }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
        <Box
          sx={{
            width: isMobile ? 40 : 48,
            height: isMobile ? 40 : 48,
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <SecurityIcon sx={{ color: "white", fontSize: isMobile ? 20 : 24 }} />
        </Box>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          fontWeight="bold"
        >
          Privacy Policy
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 1, pl: isMobile ? 0 : 8 }}
      >
        Effective date: 1 January 2025 &nbsp;·&nbsp; Last updated: 13 May 2025
      </Typography>

      <Typography
        variant={isMobile ? "body2" : "body1"}
        color="text.secondary"
        sx={{ mb: 4, pl: isMobile ? 0 : 8 }}
      >
        ZenoChat, operated by Zen Meraki, is committed to protecting your
        personal data. This Privacy Policy explains what information we collect,
        how we use it, and the rights you have over it when you use our
        WhatsApp Business inbox platform.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {privacySections.map((section, sIdx) => (
        <MotionBox
          key={section.title}
          sx={{ mb: 4 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sIdx * 0.04 }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            component="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: theme.palette.primary.main }}
          >
            {section.title}
          </Typography>

          <List disablePadding>
            {section.content.map((item, iIdx) => (
              <ListItem
                key={iIdx}
                disableGutters
                alignItems="flex-start"
                sx={{ py: 0.5 }}
              >
                <ListItemIcon sx={{ minWidth: 32, mt: "4px" }}>
                  <CheckIcon
                    sx={{ fontSize: 16, color: theme.palette.primary.light }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: isMobile ? "body2" : "body1",
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                />
              </ListItem>
            ))}
          </List>

          {sIdx < privacySections.length - 1 && <Divider sx={{ mt: 3 }} />}
        </MotionBox>
      ))}

      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 2,
          borderColor: theme.palette.primary.light,
          bgcolor: "rgba(14, 59, 57, 0.04)",
          mt: 2,
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          Questions about your privacy?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact our privacy team at{" "}
          <Box
            component="a"
            href="mailto:zenmerakihelp@gmail.com"
            sx={{ color: theme.palette.primary.main, textDecoration: "none" }}
          >
            zenmerakihelp@gmail.com
          </Box>
          . We respond to all privacy requests within 72 hours.
        </Typography>
      </Paper>
    </Box>
  );
}

export function TermsSection({ isMobile, theme }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
        <Box
          sx={{
            width: isMobile ? 40 : 48,
            height: isMobile ? 40 : 48,
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <GavelIcon sx={{ color: "white", fontSize: isMobile ? 20 : 24 }} />
        </Box>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h2"
          fontWeight="bold"
        >
          Terms & Conditions
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 1, pl: isMobile ? 0 : 8 }}
      >
        Effective date: 1 January 2025 &nbsp;·&nbsp; Last updated: 13 May 2025
      </Typography>

      <Typography
        variant={isMobile ? "body2" : "body1"}
        color="text.secondary"
        sx={{ mb: 4, pl: isMobile ? 0 : 8 }}
      >
        These Terms and Conditions govern your access to and use of ZenoChat,
        operated by Zen Meraki, Kerala, India. Please read them carefully before
        using the platform.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {termsSections.map((section, sIdx) => (
        <MotionBox
          key={section.title}
          sx={{ mb: 4 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sIdx * 0.04 }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            component="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: theme.palette.primary.main }}
          >
            {section.title}
          </Typography>

          <List disablePadding>
            {section.content.map((item, iIdx) => (
              <ListItem
                key={iIdx}
                disableGutters
                alignItems="flex-start"
                sx={{ py: 0.5 }}
              >
                <ListItemIcon sx={{ minWidth: 32, mt: "4px" }}>
                  <CheckIcon
                    sx={{ fontSize: 16, color: theme.palette.primary.light }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: isMobile ? "body2" : "body1",
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                />
              </ListItem>
            ))}
          </List>

          {sIdx < termsSections.length - 1 && <Divider sx={{ mt: 3 }} />}
        </MotionBox>
      ))}

      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 2,
          borderColor: theme.palette.primary.light,
          bgcolor: "rgba(14, 59, 57, 0.04)",
          mt: 2,
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          Legal enquiries
        </Typography>
        <Typography variant="body2" color="text.secondary">
          For questions about these Terms, contact{" "}
          <Box
            component="a"
            href="mailto:zenmerakihelp@gmail.com"
            sx={{ color: theme.palette.primary.main, textDecoration: "none" }}
          >
            zenmerakihelp@gmail.com
          </Box>
          . ZenoChat is operated by Zen Meraki, Kerala, India.
        </Typography>
      </Paper>
    </Box>
  );
}

export function CallToActionSection({ isMobile, theme }) {
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
            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{ mb: 3 }}
              color="white"
            >
              Join merchants using ZenoChat to manage WhatsApp as a real team —
              shared inbox, fast replies, and zero missed messages.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
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
                window.open(
                  "https://youtu.be/1UMtbQG5Z1M",
                  "_blank",
                  "noopener,noreferrer"
                )
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