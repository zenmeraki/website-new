import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { DollarSign, Shield, UserCheck, TrendingUp } from "lucide-react";
import { motion, Transition } from "framer-motion";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description:
      "Save up to 40% on HR and compliance costs. No need for in-house payroll team.",
  },
  {
    icon: Shield,
    title: "Compliance Handled",
    description:
      "100% compliance with PF, ESI, GST, and all labour laws. We keep you safe.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Employees",
    description:
      "Employees work exclusively for you, aligned with your culture and goals.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Workforce",
    description:
      "Scale your team up or down based on business needs. Complete flexibility.",
  },
];

// TypeScript-friendly spring transition
const springTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 12,
};

// Fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs: React.FC = () => {
  return (
    <Box
      component="section"
      id="why-us"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.100" }}
    >
      <Container maxWidth="lg">
        {/* Title & Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{
            delay: 0 * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          style={{ textAlign: "center", marginBottom: 24 }}
        >
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            mb={2}
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, // responsive sizes
              textAlign: { xs: "center", md: "center" }, // optional: center on mobile
              lineHeight: 1.2,
            }}
          >
            Why Choose{" "}
            <Box component="span" color="primary.main">
              Zenmeraki
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{
            delay: 1 * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={600}
            mx="auto"
          >
            Partner with us for hassle-free workforce management
          </Typography>
        </motion.div>

        {/* Benefits Cards */}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            maxWidth: { xs: "100%", md: 900 }, // Full width on mobile
            margin: "0 auto",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  delay: (index + 2) * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: { xs: 2, md: 3 }, // smaller padding on mobile
                    borderRadius: 3,
                    bgcolor: "background.paper",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      bgcolor: "primary.main",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon color="#fff" size={24} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      mb={0.5}
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, // responsive heading
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" }, // optional: smaller description on mobile
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;