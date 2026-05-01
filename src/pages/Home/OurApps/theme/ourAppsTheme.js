// src/pages/Home/OurApps/theme/ourAppsTheme.js
import { createTheme } from "@mui/material/styles";
import { motionConfig } from "../components/motionConfig";

export const ourAppsTheme = createTheme({
  palette: {
    primary: { main: "#0A2725" },
    secondary: { main: "#EFF9F9" },
    background: { default: "#ffffff" },
    text: {
      primary: "#0A2725",
      secondary: "rgba(10, 39, 37, 0.7)",
    },
  },

  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
      lineHeight: 1.6,
    },
  },

  // 🕹 Global motion tokens integrated from motionConfig
  transitions: {
    easing: {
      // Use same cubic-beziers defined in motionConfig
      soft: `cubic-bezier(${motionConfig.easing.soft.join(",")})`,
      sharp: `cubic-bezier(${motionConfig.easing.sharp.join(",")})`,
      bounce: `cubic-bezier(${motionConfig.easing.bounce.join(",")})`,
      swift: `cubic-bezier(${motionConfig.easing.swift.join(",")})`,
    },
    duration: {
      short: motionConfig.duration.short * 1000, // MUI expects ms
      medium: motionConfig.duration.medium * 1000,
      long: motionConfig.duration.long * 1000,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: "none",
          minHeight: 44,
          transition: `all ${motionConfig.duration.short}s cubic-bezier(${motionConfig.easing.soft.join(",")})`,
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: `box-shadow ${motionConfig.duration.medium}s cubic-bezier(${motionConfig.easing.soft.join(",")})`,
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          transition: `all ${motionConfig.duration.medium}s cubic-bezier(${motionConfig.easing.soft.join(",")})`,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          transformOrigin: "center",
          transition: `transform ${motionConfig.duration.medium}s cubic-bezier(${motionConfig.easing.soft.join(",")}), opacity ${motionConfig.duration.medium}s cubic-bezier(${motionConfig.easing.soft.join(",")})`,
        },
      },
    },

    MuiTooltip: {
      defaultProps: {
        enterDelay: 150,
      },
      styleOverrides: {
        tooltip: {
          fontSize: "0.875rem",
          borderRadius: 6,
          transition: `opacity ${motionConfig.duration.short}s cubic-bezier(${motionConfig.easing.soft.join(",")})`,
        },
      },
    },
  },
});