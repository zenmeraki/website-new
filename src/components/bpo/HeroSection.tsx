import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const heroTimer = setTimeout(() => setHeroVisible(true), 200);
    const sectionTimer = setTimeout(() => setSectionVisible(true), 1200);
    return () => {
      clearTimeout(heroTimer);
      clearTimeout(sectionTimer);
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, sm: 12, md: 20 },
          textAlign: "center",
          background: "linear-gradient(135deg, #0e3b39 0%, #1a5e5c 100%)",
          color: "#fff",
          minHeight: { xs: "75vh", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 40 }}
          transition={{ duration: 1 }}
          style={{ width: "100%" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: { xs: 1.3, sm: 1.3 },
              px: { xs: 1, sm: 4 },
            }}
          >
            Business Process Outsourcing (BPO)
          </Typography>

          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.25rem" },
              px: { xs: 2, sm: 4 },
              lineHeight: 1.5,
            }}
          >
            Streamlining your operations for smarter business growth
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<FiChevronRight />}
            onClick={() => navigate("/contact")}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              background: "linear-gradient(135deg, #00bfa5 0%, #00796b 100%)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #00bfa5 20%, #004d40 100%)",
              },
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>

      {/* Next Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: sectionVisible ? 1 : 0,
          y: sectionVisible ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ py: { xs: 6, md: 8 }, mt: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 6 },
              }}
            >
              {/* Left Text Section */}
              <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
                    lineHeight: 1.3,
                  }}
                >
                  Hire Talent Without{" "}
                  <Box component="span" color="primary.main">
                    Compliance Hassle
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    px: { xs: 2, md: 0 },
                  }}
                >
                  We handle payroll & compliance. You get dedicated employees
                  who stay on our payroll while working exclusively for you.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 4,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      textTransform: "none",
                      borderRadius: "8px",
                      px: 3,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    Get a Proposal
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      textTransform: "none",
                      borderRadius: "8px",
                      px: 3,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    Talk on WhatsApp
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    "500+ Companies Trust Us",
                    "100% Compliance",
                    "24/7 Support",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "success.main",
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Right Image Section */}
              <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <CardMedia
                  component="img"
                  image="https://cdn.prod.website-files.com/622e57064a9d66de02c60980/6734a44fbc163313c2e51757_03.%20Business%20Process%20Outsourcing%20in%20the%20Philippines.webp"
                  alt="Office team"
                  sx={{
                    width: { xs: "100%", sm: "85%", md: "90%" },
                    borderRadius: 2,
                    boxShadow: 3,
                    maxHeight: { xs: 300, sm: 400, md: 500 },
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};

export default HeroSection;