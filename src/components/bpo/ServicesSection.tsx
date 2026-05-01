import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { Users, FileCheck, Globe, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Users,
    title: "Employee Leasing & Staffing",
    description:
      "Full-time employees on our payroll, dedicated to your company. Scale up or down as needed.",
  },
  {
    icon: FileCheck,
    title: "Payroll & Compliance Management",
    description:
      "Complete handling of PF, ESI, GST, and labour law compliance. Stay worry-free.",
  },
  {
    icon: Globe,
    title: "Dedicated Offshore Teams",
    description:
      "Build your remote team in India with our support. Ideal for global companies.",
  },
  {
    icon: Briefcase,
    title: "HR Outsourcing",
    description:
      "End-to-end HR operations from recruitment to exit management. Focus on growth.",
  },
];

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 16 }, backgroundColor: "background.default" }}
      id="services"
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // responsive sizes
                  lineHeight: { xs: 1.3, md: 1.2 },
                }}
              >
                Our{" "}
                <Box component="span" color="primary.main">
                  Services
                </Box>
              </Typography>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                maxWidth={600}
                mx="auto"
              >
                Comprehensive staffing solutions tailored to your business needs
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Service Cards */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ xs: 2, sm: 3, md: 4 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                style={{
                  width: "100%",
                  maxWidth: "260px", // ensures max width per card
                  flex: "1 1 220px", // flex-grow, flex-shrink, flex-basis
                }}
              >
                <Card
                  sx={{
                    height: 300,
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                    border: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    mx: "auto",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mt: 3,
                      mb: 2,
                      bgcolor: "primary.main",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.contrastText",
                    }}
                  >
                    <Icon size={28} />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight="medium"
                        gutterBottom
                        textAlign="center"
                      >
                        {service.title}
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="center"
                      >
                        {service.description}
                      </Typography>
                    </motion.div>
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

export default Services;