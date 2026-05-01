import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { CheckCircle } from "lucide-react";
import { motion, Transition } from "framer-motion";

const ComplianceSection: React.FC = () => {
  const compliance = [
    "Provident Fund (PF) Management",
    "Employee State Insurance (ESI)",
    "GST Compliance",
    "Labour Law Adherence",
    "Professional Tax Filing",
    "Gratuity Management",
  ];

  const leftColumn = compliance.slice(0, 3);
  const rightColumn = compliance.slice(3, 6);

  // Spring transition
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

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "grey.100" }}>
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
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              100% Compliance
            </Box>{" "}
            Guaranteed
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
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
          >
            We handle all statutory requirements so you can focus on business
            growth
          </Typography>
        </motion.div>

        {/* Two columns */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
            mb: 6,
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flex: 1,
              width: "100%",
            }}
          >
            {leftColumn.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: (index + 2) * 0.2, ...springTransition }}
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  transition: springTransition,
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 2,
                    cursor: "pointer",
                    width: { xs: "100%", md: "auto" }, // full width on mobile
                  }}
                >
                  <CardMedia
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "primary.main",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <CheckCircle size={16} color="white" />
                  </CardMedia>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "0.85rem", md: "1rem" },
                      }}
                    >
                      {item}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flex: 1,
              width: "100%",
            }}
          >
            {rightColumn.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: (index + 5) * 0.2, ...springTransition }}
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  transition: springTransition,
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 2,
                    cursor: "pointer",
                    width: { xs: "100%", md: "auto" }, // full width on mobile
                  }}
                >
                  <CardMedia
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "primary.main",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <CheckCircle size={16} color="white" />
                  </CardMedia>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "0.85rem", md: "1rem" },
                      }}
                    >
                      {item}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Last Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 8 * 0.2, ...springTransition }}
          whileHover={{ scale: 1.03, y: -3, transition: springTransition }}
        >
          <Card
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
              textAlign: "center",
              width: { xs: "100%" },
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              <Box
                component="span"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                Certified & Audited:
              </Box>{" "}
              Our processes are regularly audited for compliance. We maintain
              complete transparency with detailed reports and documentation.
            </Typography>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ComplianceSection;