import React from "react";
import { Container, Typography, Card, CardMedia, Box } from "@mui/material";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  "Full compliance with PF, ESI, GST, and Labour Laws",
  "Transparent pricing with no hidden costs",
  "Dedicated employees working exclusively for you",
  "Reliable support and quick response times",
];

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 16 }, bgcolor: "grey.100" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{
            delay: 0 * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // responsive font size
                textAlign: "center",
              }}
            >
              About <span style={{ color: "#0f4f4b" }}>Zenmeraki</span>
            </Typography>

            <Typography variant="h6" color="text.secondary">
              Your trusted partner for employee leasing and staffing solutions
            </Typography>
          </Box>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{
            delay: 1 * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <Box mb={6}>
            <Typography variant="body1" color="text.primary" paragraph>
              We provide full-time employees to client companies while keeping
              them on our payroll. This means you get skilled, dedicated
              professionals without the compliance headaches.
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              Our team handles all HR operations, payroll processing, statutory
              compliance (PF, ESI, GST), and employee benefits. You focus on
              your business while we manage the workforce administration.
            </Typography>
          </Box>
        </motion.div>

        {/* Values Cards in 2 Rows, 2 cards per row */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} // 1 column on mobile, 2 columns on sm+
          justifyContent="center" // center grid horizontally
          gap={3} // spacing between cards
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{
                delay: (index + 2) * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              style={{
                width: "100%", // grid item will take full cell width
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  bgcolor: "background.paper",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  <CheckCircle2 size={28} style={{ color: "#0f4f4b" }} />
                </CardMedia>
                <Typography variant="body1" color="text.primary">
                  {value}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;