import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import BPO from "./BPO";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          height: isMobile ? "70vh" : "80vh",
          bgcolor: "#EFF9F9",
          color: "#0A2725",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          textAlign: "center",
          m: 0,
          p: 0,
        }}
      >
        <Container
          disableGutters
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            width: "100%",
            maxWidth: "900px",
            px: { xs: 2, sm: 3, md: 0 },
            m: 0,
            py: { xs: 2, sm: 0 },
          }}
        >
          {/* Subtitle */}
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
              letterSpacing: 2,
              mb: 1,
              lineHeight: 1.6,
              display: "block",
              px: { xs: 1, sm: 0 },
            }}
          >
            ◆ INNOVATIVE AND TRANSFORMATIVE
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              lineHeight: { xs: 1.4, sm: 1.35, md: 1.3 },
              fontSize: { xs: "1.8rem", sm: "2.8rem", md: "4rem" }, //  reduced for mobile
              mt: 1,
              mb: 1.5,
              px: { xs: 1, sm: 0 },
            }}
          >
            Innovating Beyond <br /> Boundaries
          </Typography>


          {/* Description */}
          <Typography
            variant="h6"
            sx={{
              mt: 1,
              mb: 2,
              fontWeight: 400,
              maxWidth: 700,
              mx: "auto",
              px: { xs: 2.5, sm: 1, md: 0 }, // ✅ Added side padding only for mobile
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.15rem" },
              lineHeight: 1.7,
              letterSpacing: 0.2,
            }}
          >
            We specialize in transforming ideas into impactful solutions. From
            cutting-edge applications to intuitive designs, our work reflects a
            commitment to excellence and a passion for innovation.
          </Typography>


          {/* Buttons */}
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 3 : 2.5}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0A2725",
                color: "white",
                px: isMobile ? 3 : 3,
                py: isMobile ? 1.5 : 1,
                minHeight: "44px",
                minWidth: isMobile ? "200px" : "auto",
                fontSize: isMobile ? "0.85rem" : "1rem",
                borderRadius: 5,
                textTransform: "none",
                boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                "&:hover": { bgcolor: "#0D302E" },
              }}
              onClick={() => navigate("/about-us")}
            >
              Learn More
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#0A2725",
                color: "#0A2725",
                px: isMobile ? 3 : 3,
                py: isMobile ? 1.5 : 1,
                minHeight: "44px",
                minWidth: isMobile ? "200px" : "auto",
                fontSize: isMobile ? "0.85rem" : "1rem",
                borderRadius: 5,
                textTransform: "none",
                "&:hover": { bgcolor: "#E4F1F1" },
              }}
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Projects
            </Button>
          </Stack>
        </Container>
      </Box>


      {/* <Box sx={{ bgcolor: "#FFFFFF", m: 0, p: 0 }}>
        <BPO />
      </Box> */}
    </>
  );
};

export default Landing;