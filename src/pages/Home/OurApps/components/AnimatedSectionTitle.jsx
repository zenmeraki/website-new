// src/components/AnimatedSectionTitle.jsx
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

/**
 * ✨ AnimatedSectionTitle
 * Reusable motion wrapper for headings/subtitles
 */
const AnimatedSectionTitle = ({ children, delay = 0, align = "center" }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        mb: { xs: 3, sm: 4 },
        textAlign: align,
        px: { xs: 2, sm: 0 },
        overflow: "visible", // ensure motion is not clipped
      }}
    >
      {children}
    </Box>
  );
};

export default AnimatedSectionTitle;