import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Transition } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    role: "CEO",
    text: "StaffEase transformed our hiring process. We scaled from 10 to 50 employees in 6 months without worrying about compliance. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    company: "Global Finance Corp",
    role: "HR Director",
    text: "As a foreign company entering India, compliance was our biggest concern. StaffEase handled everything seamlessly. Their team is professional and responsive.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Digital Marketing Pro",
    role: "Founder",
    text: "The cost savings are real. We save over 35% on HR costs while getting dedicated, skilled employees. StaffEase is a game-changer for startups.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "BPO Services Ltd",
    role: "Operations Head",
    text: "Quick response times, transparent pricing, and zero compliance issues in 2 years. StaffEase is our trusted partner for workforce management.",
    rating: 5,
  },
];

// Spring transition
const springTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 12,
};

// Fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 2 < 0 ? testimonials.length - 2 : prev - 2));
  };

  const visibleCards = testimonials.slice(current, current + 2);

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
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
            fontWeight={700}
            color="text.primary"
            mb={1}
            sx={{ fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" } }}
          >
            What Our{" "}
            <Box component="span" color="#0f4f4b">
              Clients Say
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
            color="text.secondary"
            sx={{ fontSize: { xs: "0.85rem", sm: "1rem", md: "1.125rem" } }}
          >
            Trusted by 500+ companies across India
          </Typography>
        </motion.div>

        {/* Testimonials Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 3,
            flexWrap: "wrap",
            maxWidth: 1000,
            mx: "auto",
            position: "relative",
          }}
        >
          {/* Previous Button */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: { xs: -20, md: -60 },
              top: "45%",
              display: { xs: "none", md: "flex" },
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Cards */}
          {visibleCards.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: (index + 2) * 0.2, ...springTransition }}
              whileHover={{ scale: 1.03, y: -3, transition: springTransition }}
              style={{
                flex: "1 1 100%",
                maxWidth: "45%",
                display: "flex",
                minWidth: 280,
              }}
            >
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  {/* ⭐ Rating */}
                  <Box display="flex" gap={0.5} mb={1}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} color="#0f4f4b" fill="#0f4f4b" />
                    ))}
                  </Box>

                  {/* 💬 Testimonial Text */}
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                    }}
                  >
                    “{testimonial.text}”
                  </Typography>

                  {/* 👤 Name & Company */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Next Button */}
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: { xs: -20, md: -60 },
              top: "45%",
              display: { xs: "none", md: "flex" },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;