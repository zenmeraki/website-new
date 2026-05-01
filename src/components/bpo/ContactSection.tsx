import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion, Variants, Transition } from "framer-motion";

// Spring transition
const springTransition: Transition = {
  type: "spring",
  stiffness: 70,
  damping: 20,
};

// Fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

const Contact: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, sm: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0 * 0.2, ...springTransition }}
          style={{ textAlign: "center", marginBottom: 16 }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{
              mb: 2,
              color: "text.primary",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Get in{" "}
            <Box component="span" color="primary.main">
              Touch
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 1 * 0.2, ...springTransition }}
          style={{ textAlign: "center", marginBottom: 32 }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            }}
          >
            Let's discuss how we can help you build your team
          </Typography>
        </motion.div>

        {/* Contact Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: 3, md: 4 }}
          justifyContent="center"
        >
          {/* Contact Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 2 * 0.2, ...springTransition }}
            whileHover={{ scale: 1.02, y: -3, transition: springTransition }}
            style={{ flex: 1 }}
          >
            <Card
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia>
                <Typography
                  variant="h6"
                  sx={{
                    mb: { xs: 2, md: 3 },
                    fontWeight: 600,
                    color: "text.primary",
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                  }}
                >
                  Contact Information
                </Typography>

                {/* Phone */}
                <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
                  <Box
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Phone size={22} />
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                    >
                      Phone
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                    >
                     +91 6282 346 108
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
                  <Box
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Mail size={22} />
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                    >
                      Email
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                    >
                     official@zenmeraki.com
                    </Typography>
                  </Box>
                </Box>

                {/* Office */}
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Box
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                    }}
                  >
                    <MapPin size={22} />
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={600}
                      sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                    >
                      Office
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                    >
                    Chowallur tower, 5th floor, 
                      <br />
                     West Fort, Thrissur 680004
                    </Typography>
                  </Box>
                </Box>
              </CardMedia>

              {/* WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={springTransition}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<MessageCircle size={18} />} // smaller icon on mobile
                  sx={{
                    mt: { xs: 2, md: 4 }, // smaller top margin on mobile
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    py: { xs: 0.8, md: 1.2 }, // smaller vertical padding on mobile
                    px: { xs: 2, md: 3 }, // optional horizontal padding adjustment
                    fontSize: { xs: "0.75rem", md: "1rem" }, // smaller font on mobile
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 3 * 0.2, ...springTransition }}
            whileHover={{ scale: 1.02, y: -3, transition: springTransition }}
            style={{ flex: 1 }}
          >
            <Card sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <TextField
                  fullWidth
                  label="Your Name *"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email Address *"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone Number *"
                  type="tel"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Company Name"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Number of Employees Needed"
                  type="number"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Tell us about your requirements..."
                  variant="outlined"
                  multiline
                  rows={4}
                  margin="normal"
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    },
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={springTransition}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      mt: { xs: 2, md: 2 },
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      py: { xs: 1, md: 1.2 },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      "&:hover": { opacity: 0.9 },
                    }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;