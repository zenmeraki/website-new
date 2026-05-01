import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Code, Headphones, TrendingUp, Users, Wrench } from "lucide-react";
import { motion, Transition } from "framer-motion";

const industries = [
  { icon: Code, name: "IT & Software" },
  { icon: Headphones, name: "BPO & KPO" },
  { icon: TrendingUp, name: "Finance & Banking" },
  { icon: Users, name: "Sales & Marketing" },
  { icon: Wrench, name: "Engineering & Manufacturing" },
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

const Industries: React.FC = () => {
  return (
    <Box
      component="section"
      py={{ xs: 8, md: 12 }}
      bgcolor="background.default"
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0 * 0.2, ...springTransition }}
          style={{ textAlign: "center", marginBottom: 32 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // responsive font sizes
              textAlign: { xs: "center", md: "center" }, // optional: keep center on mobile
            }}
          >
            Industries We{" "}
            <Box component="span" color="primary.main">
              Serve
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 1 * 0.2, ...springTransition }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={500}
            mx="auto"
          >
            Trusted staffing partner across diverse sectors
          </Typography>
        </motion.div>

        {/* Industry Cards */}
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: (index + 2) * 0.2, ...springTransition }}
              >
                <Card
                  sx={{
                    width: 180,
                    height: 140,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: 2,
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      bgcolor: "primary.main",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.contrastText",
                    }}
                  >
                    <Icon size={24} />
                  </CardMedia>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="body2" fontWeight={500}>
                      {industry.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Industries;