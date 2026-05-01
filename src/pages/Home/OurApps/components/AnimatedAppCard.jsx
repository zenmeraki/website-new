import React from "react";
import { CardMedia, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedAppCard = ({ app, delay }) => {
  const { title, description, image, link } = app;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{ flex: "0 0 280px" }}
    >
      <Box
        component={motion.div}
        whileHover="hover"
        whileTap="hover" // 👉 Enables animation for mobile/touch
        variants={{
          hover: { scale: 1.05 }
        }}
        sx={{
          width: 280,
          height: 380,
          position: "relative",

          // 📌 Custom curved border style
          borderTopLeftRadius: "70px",
          borderBottomRightRadius: "70px",
          borderTopRightRadius: "16px",
          borderBottomLeftRadius: "16px",

          overflow: "hidden",
          cursor: "pointer",
          background: "#023B34",
          transition: "0.4s ease",
        }}
      >
        {/* Background Image */}
        <CardMedia
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.4s ease",
            "&:hover": { filter: "brightness(55%)" }
          }}
        />

        {/* Always Visible Title */}
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            bottom: 18,
            left: 20,
            color: "white",
            fontWeight: "600",
            fontSize: "1.2rem",
            zIndex: 2,
            textShadow: "0 3px 10px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Typography>

        {/* Hover & Mobile Tap Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          variants={{
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            pointerEvents: "auto", // 👉 Makes the button clickable
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "white", lineHeight: 1.5, mb: 2 }}
          >
            {description}
          </Typography>

          <Button
            component={Link}
            to={link}
            variant="contained"
            sx={{
              background: "#57E0C4",
              color: "black",
              fontWeight: 600,
              textTransform: "none",
              px: 3,
              "&:hover": { background: "#6FFFF1" }
            }}
          >
            Explore
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default AnimatedAppCard;