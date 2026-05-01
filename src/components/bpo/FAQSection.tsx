import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, Transition } from "framer-motion";

const faqs = [
  {
    question: "How does employee leasing work?",
    answer:
      "We hire employees who work exclusively for your company, but they remain on our payroll. We handle all HR, payroll, and compliance while you manage their day-to-day work. It's the best of both worlds - dedicated employees without administrative hassle.",
  },
  {
    question: "What is the cost structure?",
    answer:
      "Our pricing is transparent with no hidden charges. You pay the employee's salary plus a service fee (typically 8-12% of CTC) that covers payroll processing, compliance, HR support, and administration. Volume discounts available for larger teams.",
  },
  {
    question: "Are you responsible for compliance?",
    answer:
      "Yes, 100%. We handle all statutory compliance including PF, ESI, GST, professional tax, labour laws, and more. We're legally responsible for all compliance matters, giving you complete peace of mind.",
  },
  {
    question: "How quickly can you onboard employees?",
    answer:
      "Standard onboarding takes 3-5 business days once all documentation is complete. For urgent requirements, we can expedite the process to 24-48 hours with our fast-track service.",
  },
  {
    question: "Can I hire employees from anywhere in India?",
    answer:
      "Absolutely! We support pan-India operations and can onboard employees from any state or city. We handle local compliance requirements specific to each location.",
  },
  {
    question: "What if an employee needs to be replaced?",
    answer:
      "We offer a replacement guarantee. If an employee leaves within the probation period, we'll find a suitable replacement at no additional cost. Our retention rates are industry-leading at 85%+.",
  },
  {
    question: "Do you provide HR support?",
    answer:
      "Yes! Beyond payroll and compliance, we offer complete HR support including leave management, attendance tracking, grievance handling, exit management, and employee engagement programs.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "We offer flexible contracts starting from 6 months. However, for maximum cost efficiency and better employee retention, we recommend annual contracts with quarterly review cycles.",
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

const FAQ: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="md">
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
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "text.primary",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
            }}
          >
            Frequently Asked{" "}
            <Box component="span" color="primary.main">
              Questions
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 1 * 0.2, ...springTransition }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
          >
            Everything you need to know about our services
          </Typography>
        </motion.div>

        {/* FAQ Items */}
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: (index + 2) * 0.2, ...springTransition }}
            whileHover={{ scale: 1.02, y: -3, transition: springTransition }}
            style={{ marginBottom: 16 }}
          >
            <Paper
              elevation={2}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                cursor: "pointer",
              }}
            >
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    "& .MuiTypography-root": {
                      fontWeight: 600,
                      color: "text.primary",
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      transition: "color 0.3s ease",
                    },
                    "&:hover .MuiTypography-root": {
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: 3,
                    pt: 1,
                    pb: 2,
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                  }}
                >
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            </Paper>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default FAQ;