import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Theme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bpoLogo from "../assets/images/bpo_logo.jpg";

const BPOSection: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)",
        overflow: "hidden",
        overflowX: "hidden", // ✅ Prevent horizontal scroll
      }}
    >
      <Container
        maxWidth="lg" // ✅ Added explicit maxWidth
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: { xs: 2, sm: 3, md: 8 }, // ✅ Reduced mobile gap
          px: { xs: 2, sm: 3 }, // ✅ Added horizontal padding control
        }}
      >
        {/* ✅ Left: Text Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: isMobile ? -20 : -50 }} // ✅ Reduced mobile animation distance
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // ✅ Prevents re-animation on scroll
          sx={{ flex: 1 }} // ✅ Moved from inline style to sx
        >
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{
              color: "#0f4f4b",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              lineHeight: 1.2,
              mb: { xs: 2, md: 3 },
              wordBreak: "break-word", // ✅ Prevent text overflow
              hyphens: "auto", // ✅ Smart word breaking
            }}
          >
            Business Process Outsourcing (BPO)
          </Typography>

          {/* ✅ Taglines */}
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: 550,
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              lineHeight: 1.5,
              wordBreak: "break-word", // ✅ Added
            }}
          >
            Empower your business with flexible outsourcing solutions that
            combine technology, talent, and efficiency.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: 550,
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.6,
              wordBreak: "break-word", // ✅ Added
            }}
          >
            From customer support to back-office operations, we help streamline
            your processes and enhance service delivery.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: 550,
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.6,
              wordBreak: "break-word", // ✅ Added
            }}
          >
            Partner with ZenMeraki to scale faster, reduce costs, and focus on
            what truly matters — growing your business.
          </Typography>

          {/* ✅ Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              component={Link}
              to="/BPOServices"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#0f4f4b",
                borderRadius: "50px",
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 1.2 }, // ✅ Increased mobile padding
                minHeight: { xs: "44px", sm: "48px" }, // ✅ Touch target compliance
                fontSize: { xs: "0.9rem", sm: "1rem" },
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#0d3f3c",
                },
                "&:focus-visible": {
                  // ✅ Added focus indicator
                  outline: "3px solid #0f4f4b",
                  outlineOffset: "2px",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Box>

        {/* ✅ Right: Image Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: isMobile ? 20 : 50 }} // ✅ Reduced mobile animation distance
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // ✅ Prevents re-animation
          sx={{
            flex: 1, // ✅ Moved from inline style to sx
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, md: 0 }, // ✅ Replaced marginTop with responsive mt
          }}
        >
          <Box
            component="img"
            src="https://media.licdn.com/dms/image/v2/D4D12AQHuXQ1HbWXcFw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701906057260?e=2147483647&v=beta&t=uS3V69-9nPeaaRcOdSP-spHwkyPJlCbaGAwDTOt80Ks"
            alt="Business team collaborating on BPO services" //✅ More descriptive alt text
            loading="lazy" // ✅ Performance optimization
            sx={{
              width: { xs: "100%", sm: "90%", md: "100%" },
              maxWidth: 500,
              height: "auto",
              borderRadius: { xs: "20px", sm: "30px", md: "40px" }, // ✅ Responsive border radius
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BPOSection;