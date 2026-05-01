import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Chip,
  Divider,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  useMediaQuery,
  IconButton,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BuildIcon from "@mui/icons-material/Build";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import OverviewIcon from "@mui/icons-material/Visibility";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const DRAWER_WIDTH = 272;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00e5a0" },
    background: { default: "#0d1117", paper: "#161b22" },
    text: { primary: "#e6edf3", secondary: "#8b949e" },
  },
  typography: {
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0d1117",
          borderRight: "1px solid #21262d",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          margin: "1px 8px",
          "&.Mui-selected": {
            backgroundColor: "#1f2937",
            borderLeft: "3px solid #00e5a0",
            "& .MuiListItemText-primary": { color: "#00e5a0" },
          },
          "&:hover": { backgroundColor: "#1c2128" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem" },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#161b22",
          border: "1px solid #21262d",
          borderRadius: "8px !important",
          marginBottom: "8px",
          "&:before": { display: "none" },
        },
      },
    },
  },
});

const navItems = [
  { id: "overview", label: "Overview", num: "01", icon: <OverviewIcon fontSize="small" /> },
  { id: "getting-started", label: "Getting Started", num: "02", icon: <RocketLaunchIcon fontSize="small" /> },
  { id: "core-features", label: "Core Features", num: "03", icon: <StorefrontIcon fontSize="small" /> },
  { id: "how-to-use", label: "How to Use", num: "04", icon: <PlayArrowIcon fontSize="small" /> },
  { id: "settings", label: "Settings & Customization", num: "05", icon: <TuneIcon fontSize="small" /> },
  { id: "pricing", label: "Pricing & Plans", num: "06", icon: <MonetizationOnIcon fontSize="small" /> },
  { id: "faqs", label: "FAQs", num: "07", icon: <HelpOutlineIcon fontSize="small" /> },
  { id: "troubleshooting", label: "Troubleshooting", num: "08", icon: <BuildIcon fontSize="small" /> },
  { id: "support", label: "Support", num: "09", icon: <SupportAgentIcon fontSize="small" /> },
];

const CodeBlock = ({ children }) => (
  <Box
    component="pre"
    sx={{
      backgroundColor: "#0d1117",
      border: "1px solid #21262d",
      borderRadius: "6px",
      p: 2,
      overflowX: "auto",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: "0.82rem",
      color: "#00e5a0",
      my: 2,
      lineHeight: 1.6,
    }}
  >
    <code>{children}</code>
  </Box>
);

const StepCard = ({ num, title, desc }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      p: 2,
      mb: 1.5,
      backgroundColor: "#161b22",
      border: "1px solid #21262d",
      borderRadius: "8px",
      alignItems: "flex-start",
      transition: "border-color 0.2s",
      "&:hover": { borderColor: "#00e5a0" },
    }}
  >
    <Box
      sx={{
        minWidth: 32,
        height: 32,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00e5a0, #00b37d)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.75rem",
        fontWeight: 700,
        color: "#0d1117",
      }}
    >
      {num}
    </Box>
    <Box>
      <Typography variant="subtitle1" fontWeight={600} gutterBottom sx={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}>
        {desc}
      </Typography>
    </Box>
  </Box>
);

const FeatureCard = ({ icon, title, desc }) => (
  <Paper
    sx={{
      p: 2.5,
      backgroundColor: "#161b22",
      border: "1px solid #21262d",
      borderRadius: "10px",
      transition: "all 0.2s",
      "&:hover": { borderColor: "#00e5a0", transform: "translateY(-2px)" },
    }}
  >
    <Box sx={{ color: "#00e5a0", mb: 1 }}>{icon}</Box>
    <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.78rem", lineHeight: 1.7 }}>
      {desc}
    </Typography>
  </Paper>
);

const SectionHeader = ({ num, title }) => (
  <Box sx={{ mb: 3 }}>
    <Chip
      label={`${num} · ${title.toUpperCase()}`}
      size="small"
      sx={{
        backgroundColor: "rgba(0,229,160,0.1)",
        color: "#00e5a0",
        border: "1px solid rgba(0,229,160,0.3)",
        mb: 1.5,
        letterSpacing: "0.08em",
      }}
    />
    <Typography variant="h4" sx={{ color: "#e6edf3", lineHeight: 1.2 }}>
      {title}
    </Typography>
  </Box>
);

// ── Sections ──────────────────────────────────────────────────────────────────

const Overview = () => (
  <Box>
    <SectionHeader num="01" title="Overview" />

    {/* Hero card */}
    <Box
      sx={{
        background: "linear-gradient(135deg, #0d2818 0%, #0a1f15 50%, #0d1117 100%)",
        border: "1px solid #1e3a2a",
        borderRadius: "12px",
        p: 4,
        mb: 4,
      }}
    >
      <Typography variant="h2" sx={{ mb: 1.5, fontSize: { xs: "2rem", md: "2.8rem" } }}>
        Deskribe{" "}
        <Box component="span" sx={{ color: "#00e5a0" }}>
          AI
        </Box>
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.05rem", mb: 3, maxWidth: 600, lineHeight: 1.8, fontFamily: "'IBM Plex Mono', monospace" }}>
        AI-powered product descriptions and SEO content for your Shopify store — generated in seconds and published directly to your products.
      </Typography>
      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
        {["✓ Save time", "✓ Boost SEO", "✓ Publish directly to store"].map((t) => (
          <Chip key={t} label={t} sx={{ backgroundColor: "rgba(0,229,160,0.12)", color: "#00e5a0", border: "1px solid rgba(0,229,160,0.25)", fontFamily: "'IBM Plex Mono', monospace" }} />
        ))}
      </Box>
    </Box>

    <Typography variant="h5" gutterBottom>
      What is Deskribe AI?
    </Typography>
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Deskribe AI is a Shopify app that lets merchants automatically generate high-quality product descriptions and SEO content using artificial intelligence. It reads your existing product data — name, category, and tags — and produces ready-to-publish copy in seconds.
    </Typography>
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Once you're happy with the content, you can save it directly to your Shopify store without leaving the app. No copy-pasting, no context-switching.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
      Who is it for?
    </Typography>
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Deskribe AI is built for Shopify merchants — whether you're running a small boutique or a large catalog store. If you spend hours writing product copy or struggle with SEO optimization, Deskribe AI automates that work for you.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
      Key Benefits
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2, mt: 1 }}>
      <FeatureCard icon={<CheckCircleOutlineIcon />} title="Save Time" desc="Generate complete product descriptions in seconds instead of spending hours writing manually." />
      <FeatureCard icon={<CheckCircleOutlineIcon />} title="Boost SEO" desc="AI-crafted meta titles and meta descriptions optimized to rank higher in search engines." />
      <FeatureCard icon={<CheckCircleOutlineIcon />} title="Direct Publishing" desc="Save content straight to your Shopify store with one click — no copy-paste needed." />
    </Box>
  </Box>
);

const GettingStarted = () => (
  <Box>
    <SectionHeader num="02" title="Getting Started" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Follow the steps below to install Deskribe AI and connect it to your Shopify store. Setup takes less than 5 minutes.
    </Typography>

    <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
      Installation
    </Typography>
    <StepCard num="1" title="Find Deskribe AI on the Shopify App Store" desc="Go to the Shopify App Store and search for 'Deskribe AI', or follow the direct link provided on our website." />
    <StepCard num="2" title="Click 'Add app'" desc="Click the 'Add app' button. You'll be redirected to your Shopify admin for permission approval." />
    <StepCard num="3" title="Approve permissions" desc="Review the requested permissions (read/write product data) and click 'Install app' to confirm." />
    <StepCard num="4" title="You're in!" desc="Deskribe AI is now installed and accessible from your Shopify admin sidebar under 'Apps'." />

    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
      Initial Setup / Onboarding
    </Typography>
    <StepCard num="1" title="Connect your store" desc="On first launch, Deskribe AI automatically connects to your Shopify store using the approved OAuth credentials." />
    <StepCard num="2" title="Choose your tone of voice" desc="Pick a default writing tone (professional, casual, playful, etc.) that matches your brand." />
    <StepCard num="3" title="Set language preference" desc="Choose the language in which content will be generated (English, French, Spanish, and more)." />
    <StepCard num="4" title="Generate your first description" desc="Select any product from your catalog and hit Generate — your first AI-written description is ready instantly." />

    <Alert severity="info" sx={{ mt: 3, backgroundColor: "#0d2818", border: "1px solid #1e3a2a", color: "#00e5a0", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}>
      💡 Tip: Start with a product that already has a name, category, and tags for the best results.
    </Alert>
  </Box>
);

const CoreFeatures = () => (
  <Box>
    <SectionHeader num="03" title="Core Features" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Deskribe AI offers a focused set of powerful features designed specifically for Shopify merchants.
    </Typography>

    {[
      {
        title: "Generate Product Descriptions",
        desc: "Automatically create compelling, conversion-focused product descriptions based on your product name, category, and tags. The AI produces natural, human-sounding copy that engages your customers.",
      },
      {
        title: "Generate SEO Content",
        desc: "Produce optimized meta titles, meta descriptions, and keyword-rich product tags that help your store rank better on Google and other search engines — all without needing SEO expertise.",
      },
      {
        title: "Preview Before Saving",
        desc: "Review the generated content inside the app before publishing. You can edit any part of the output to match your brand voice or add specific details before it goes live.",
      },
      {
        title: "Save Directly to Store",
        desc: "With one click, push the generated content directly to your Shopify product listing. No manual copy-pasting required — Deskribe AI writes directly to your store via the Shopify API.",
      },
    ].map((f, i) => (
      <Box
        key={i}
        sx={{
          mb: 2,
          p: 3,
          backgroundColor: "#161b22",
          border: "1px solid #21262d",
          borderRadius: "10px",
          borderLeft: "3px solid #00e5a0",
          transition: "border-color 0.2s",
          "&:hover": { backgroundColor: "#1c2128" },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: "#00e5a0" }}>
          {f.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.82rem", lineHeight: 1.8 }}>
          {f.desc}
        </Typography>
      </Box>
    ))}
  </Box>
);

const HowToUse = () => (
  <Box>
    <SectionHeader num="04" title="How to Use" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Here's a complete step-by-step walkthrough of how to generate and publish content using Deskribe AI.
    </Typography>

    <StepCard num="1" title="Open Deskribe AI" desc="Go to your Shopify Admin → Apps → Deskribe AI to open the app dashboard." />
    <StepCard num="2" title="Select a Product" desc="Browse or search your product catalog within the app and select the product you want to write for." />
    <StepCard num="3" title="Choose Preferences" desc="Set your preferred tone of voice (e.g., professional, casual), language, and any custom instructions or keywords to include." />
    <StepCard num="4" title="Click 'Generate'" desc="Hit the Generate button. The AI will process your product data and return a complete description and SEO content in seconds." />
    <StepCard num="5" title="Review & Edit" desc="Read through the generated content in the preview panel. Make any edits or tweaks directly in the text editor." />
    <StepCard num="6" title="Save to Store" desc="Click 'Save to Store' to publish the content directly to your Shopify product listing. Done!" />

    <Alert severity="success" sx={{ mt: 3, backgroundColor: "#0d2818", border: "1px solid #1e3a2a", color: "#e6edf3", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}>
      ✅ Your product description and SEO content are now live on your Shopify store!
    </Alert>
  </Box>
);

const Settings = () => (
  <Box>
    <SectionHeader num="05" title="Settings & Customization" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Deskribe AI gives you control over how your content is generated. Customize the output to match your brand.
    </Typography>

    {[
      { setting: "Tone of Voice", options: "Professional, Casual, Playful, Luxury, Minimalist", desc: "Sets the writing style used across all generated content." },
      { setting: "Language", options: "English, French, Spanish, German, and more", desc: "The language in which descriptions and SEO content will be generated." },
      { setting: "Custom Instructions", options: "Free text field", desc: "Add brand-specific keywords, phrases to avoid, or specific product features to always mention." },
      { setting: "Default Meta Length", options: "Short / Standard / Long", desc: "Controls the length of generated meta titles and descriptions." },
    ].map((row, i) => (
      <Box key={i} sx={{ mb: 2, p: 2.5, backgroundColor: "#161b22", border: "1px solid #21262d", borderRadius: "8px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 1 }}>
          <Typography variant="subtitle1" fontWeight={700} sx={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {row.setting}
          </Typography>
          <Chip label={row.options} size="small" sx={{ backgroundColor: "#0d2818", color: "#00e5a0", border: "1px solid #1e3a2a", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem" }} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}>
          {row.desc}
        </Typography>
      </Box>
    ))}
  </Box>
);

const Pricing = () => (
  <Box>
    <SectionHeader num="06" title="Pricing & Plans" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Deskribe AI offers flexible plans designed to grow with your store.
    </Typography>

    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
      {[
        {
          plan: "Free",
          price: "$0 / month",
          features: ["10 generations / month", "Product descriptions", "Basic SEO content", "Direct Shopify publish"],
          highlight: false,
        },
        {
          plan: "Pro",
          price: "$19 / month",
          features: ["Unlimited generations", "Advanced SEO (meta, tags)", "Custom tone & language", "Brand instructions", "Priority support"],
          highlight: true,
        },
      ].map((p) => (
        <Box
          key={p.plan}
          sx={{
            p: 3,
            backgroundColor: p.highlight ? "rgba(0,229,160,0.05)" : "#161b22",
            border: p.highlight ? "2px solid #00e5a0" : "1px solid #21262d",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          {p.highlight && (
            <Chip label="RECOMMENDED" size="small" sx={{ position: "absolute", top: -12, left: 16, backgroundColor: "#00e5a0", color: "#0d1117", fontWeight: 700, fontSize: "0.65rem" }} />
          )}
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {p.plan}
          </Typography>
          <Typography variant="h4" sx={{ color: "#00e5a0", mb: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
            {p.price}
          </Typography>
          {p.features.map((f) => (
            <Box key={f} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 16, color: "#00e5a0" }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}>
                {f}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);

const FAQs = () => {
  const faqs = [
    { q: "Will it overwrite my existing product descriptions?", a: "Only if you click 'Save to Store'. You can always preview and edit the generated content before publishing. Deskribe AI never auto-publishes without your confirmation." },
    { q: "What languages are supported?", a: "Deskribe AI currently supports English, French, Spanish, German, Portuguese, and Dutch. More languages are being added regularly." },
    { q: "Does the AI use my product images?", a: "Currently, Deskribe AI uses your product name, category, and tags as inputs. Image-based generation is on the roadmap for a future update." },
    { q: "Can I edit the content after it's generated?", a: "Yes! All generated content is fully editable inside the app before you save it to your store." },
    { q: "Is my store data safe?", a: "Absolutely. Deskribe AI only reads product metadata (name, category, tags) and never stores sensitive customer or payment data." },
    { q: "Can I use Deskribe AI on multiple stores?", a: "Each Shopify store requires its own installation. If you manage multiple stores, each needs a separate plan." },
  ];

  return (
    <Box>
      <SectionHeader num="07" title="FAQs" />
      <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
        Answers to the most common questions about Deskribe AI.
      </Typography>
      {faqs.map((faq, i) => (
        <Accordion key={i} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#00e5a0" }} />}>
            <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>{faq.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.82rem", lineHeight: 1.8 }}>
              {faq.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const Troubleshooting = () => (
  <Box>
    <SectionHeader num="08" title="Troubleshooting" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Having issues? Here are the most common problems and how to fix them.
    </Typography>

    {[
      {
        issue: "Content doesn't save to the store",
        fix: "Ensure Deskribe AI has write permissions for your Shopify products. Go to Shopify Admin → Apps → Deskribe AI → Permissions and re-authorize if needed.",
        severity: "error",
      },
      {
        issue: "Generated content is blank or incomplete",
        fix: "Make sure your product has a name, category, and at least a few tags set. The AI needs these inputs to generate content.",
        severity: "warning",
      },
      {
        issue: "App not showing in Shopify Admin",
        fix: "Try reinstalling the app from the Shopify App Store. If the issue persists, clear your browser cache and try again.",
        severity: "warning",
      },
      {
        issue: "Generation is very slow",
        fix: "High traffic periods may cause slight delays. If it takes more than 30 seconds, refresh and try again. Contact support if it happens repeatedly.",
        severity: "info",
      },
    ].map((item, i) => (
      <Alert
        key={i}
        severity={item.severity}
        sx={{
          mb: 2,
          backgroundColor: "#161b22",
          border: "1px solid #21262d",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.82rem",
          "& .MuiAlert-message": { width: "100%" },
        }}
      >
        <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {item.issue}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem", lineHeight: 1.7 }}>
          {item.fix}
        </Typography>
      </Alert>
    ))}

    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
      Reinstalling the App
    </Typography>
    <CodeBlock>{`1. Go to Shopify Admin → Apps
2. Find Deskribe AI → click "Delete"
3. Visit the Shopify App Store
4. Search "Deskribe AI" → click "Add app"
5. Re-approve permissions and complete onboarding`}</CodeBlock>
  </Box>
);

const Support = () => (
  <Box>
    <SectionHeader num="09" title="Support" />
    <Typography color="text.secondary" paragraph sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.88rem", lineHeight: 1.9 }}>
      Our team is here to help. Reach out through any of the channels below.
    </Typography>

    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 2 }}>
      {[
        { label: "Email Support", value: "support@deskribeai.com", desc: "We respond within 24 hours on business days.", icon: "✉️" },
        { label: "Live Chat", value: "Available in-app", desc: "Click the chat icon inside the app for real-time help.", icon: "💬" },
        { label: "Website", value: "www.deskribeai.com", desc: "Visit our website for updates, blog posts, and announcements.", icon: "🌐" },
        { label: "Shopify App Store", value: "Leave a review", desc: "Your feedback helps us improve. We read every review!", icon: "⭐" },
      ].map((s, i) => (
        <Box key={i} sx={{ p: 3, backgroundColor: "#161b22", border: "1px solid #21262d", borderRadius: "10px", transition: "all 0.2s", "&:hover": { borderColor: "#00e5a0" } }}>
          <Typography sx={{ fontSize: "1.8rem", mb: 1 }}>{s.icon}</Typography>
          <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {s.label}
          </Typography>
          <Typography sx={{ color: "#00e5a0", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.82rem", mb: 0.5 }}>{s.value}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.78rem" }}>
            {s.desc}
          </Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{ mt: 4, p: 3, backgroundColor: "#0d2818", border: "1px solid #1e3a2a", borderRadius: "10px", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Before reaching out...
      </Typography>
      <Typography color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.82rem" }}>
        Check the <Box component="span" sx={{ color: "#00e5a0" }}>FAQs</Box> and <Box component="span" sx={{ color: "#00e5a0" }}>Troubleshooting</Box> sections — your answer might already be there!
      </Typography>
    </Box>
  </Box>
);

const SECTIONS = { overview: <Overview />, "getting-started": <GettingStarted />, "core-features": <CoreFeatures />, "how-to-use": <HowToUse />, settings: <Settings />, pricing: <Pricing />, faqs: <FAQs />, troubleshooting: <Troubleshooting />, support: <Support /> };

// ── App ───────────────────────────────────────────────────────────────────────

export default function DeskribeAIDocs() {
  const [active, setActive] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNav = (id) => {
    setActive(id);
    setMobileOpen(false);
  };

  const SidebarContent = () => (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Logo */}
      <Box sx={{ p: 3, borderBottom: "1px solid #21262d" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00e5a0, #00b37d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.85rem",
              color: "#0d1117",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Dk
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.2 }}>
              Deskribe AI
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em" }}>
              DOCUMENTATION
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Nav */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 2 }}>
        <Typography variant="caption" sx={{ px: 3, mb: 1, display: "block", color: "#8b949e", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em" }}>
          DOCS
        </Typography>
        <List dense disablePadding>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton selected={active === item.id} onClick={() => handleNav(item.id)}>
                <Box sx={{ mr: 1.5, color: active === item.id ? "#00e5a0" : "#8b949e", display: "flex", minWidth: 20, fontSize: "0.75rem", fontFamily: "'IBM Plex Mono', monospace" }}>
                  {item.num}
                </Box>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.85rem",
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: active === item.id ? "#00e5a0" : "#c9d1d9",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: "1px solid #21262d" }}>
        <Chip
          icon={<StorefrontIcon fontSize="small" />}
          label="+ Shopify App"
          sx={{ backgroundColor: "rgba(0,229,160,0.1)", color: "#00e5a0", border: "1px solid rgba(0,229,160,0.25)", width: "100%", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.78rem" }}
        />
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#0d1117" }}>
        {/* Mobile AppBar */}
        {isMobile && (
          <AppBar position="fixed" sx={{ backgroundColor: "#0d1117", borderBottom: "1px solid #21262d", boxShadow: "none" }}>
            <Toolbar>
              <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(true)} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="subtitle1" fontWeight={700} sx={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Deskribe AI Docs
              </Typography>
            </Toolbar>
          </AppBar>
        )}

        {/* Sidebar */}
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{ "& .MuiDrawer-paper": { width: DRAWER_WIDTH } }}
          >
            <SidebarContent />
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{ width: DRAWER_WIDTH, flexShrink: 0, "& .MuiDrawer-paper": { width: DRAWER_WIDTH, boxSizing: "border-box" } }}
          >
            <SidebarContent />
          </Drawer>
        )}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            minWidth: 0,
            mt: isMobile ? "64px" : 0,
            p: { xs: 2.5, md: 5 },
            maxWidth: 860,
            mx: "auto",
          }}
        >
          {SECTIONS[active]}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
