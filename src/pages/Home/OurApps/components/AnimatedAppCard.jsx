import React, { useState } from "react";
import { CardMedia, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedAppCard = ({ app, delay = 0, isMobile = false }) => {
  const { title, description, image, link } = app;
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: isMobile ? 0 : delay, duration: 0.45 }}
      style={{ flex: "0 0 280px" }}
      onPointerLeave={() => !isMobile && setActive(false)}
    >
      <Box
        component={motion.div}
        whileHover={isMobile ? undefined : { scale: 1.05 }}
        onPointerEnter={() => !isMobile && setActive(true)}
        onClick={() => isMobile && setActive((v) => !v)}
        sx={{
          width: 280,
          height: 380,
          position: "relative",
          borderTopLeftRadius: "70px",
          borderBottomRightRadius: "70px",
          borderTopRightRadius: "16px",
          borderBottomLeftRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          background: "#023B34",
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
      >
        <CardMedia
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: active ? "brightness(55%)" : "brightness(100%)",
            transition: "filter 0.25s ease",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            bottom: 18,
            left: 20,
            color: "white",
            fontWeight: 600,
            fontSize: "1.2rem",
            zIndex: 2,
            textShadow: "0 3px 10px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Typography>

        <motion.div
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            y: active ? 0 : 80,
          }}
          transition={{ duration: 0.25 }}
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
            pointerEvents: active ? "auto" : "none",
          }}
        >
          <Typography variant="body2" sx={{ color: "white", lineHeight: 1.5, mb: 2 }}>
            {description}
          </Typography>

          <Button
            component={Link}
            to={link}
            variant="contained"
            onClick={(e) => e.stopPropagation()}
            sx={{
              background: "#57E0C4",
              color: "black",
              fontWeight: 600,
              textTransform: "none",
              px: 3,
              "&:hover": { background: "#6FFFF1" },
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