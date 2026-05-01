import { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Chip,
  Card,
  CardContent,
  Grid,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  ThemeProvider,
  createTheme,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import HistoryIcon from "@mui/icons-material/History";
import FilterListIcon from "@mui/icons-material/FilterList";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EmailIcon from "@mui/icons-material/Email";

// ── THEME ──────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3fb950" },
    secondary: { main: "#58a6ff" },
    background: { default: "#0d1117", paper: "#161b22" },
    text: { primary: "#e6edf3", secondary: "#8b949e" },
    divider: "#21262d",
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    h1: { fontWeight: 800, fontSize: "2.4rem", letterSpacing: "-0.5px" },
    h2: { fontWeight: 700, fontSize: "1.45rem", letterSpacing: "-0.3px" },
    h3: { fontWeight: 700, fontSize: "1.05rem" },
    body1: { fontSize: "0.95rem", lineHeight: 1.75 },
    body2: { fontSize: "0.85rem", lineHeight: 1.65 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#161b22",
          border: "1px solid #21262d",
          borderRadius: 10,
          transition: "border-color 0.2s",
          "&:hover": { borderColor: "#3fb950" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "monospace",
          fontSize: "0.7rem",
          fontWeight: 600,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: "#21262d", fontSize: "0.85rem" },
        head: {
          color: "#8b949e",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: "0.72rem",
          letterSpacing: "0.5px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "#161b22",
          border: "1px solid #21262d",
          borderRadius: "10px !important",
          marginBottom: 8,
          "&:before": { display: "none" },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#161b22",
          borderRight: "1px solid #21262d",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#21262d" },
      },
    },
  },
});

const DRAWER_WIDTH = 258;

// ── NAV ITEMS ──────────────────────────────────────────────────────────
const navItems = [
  { id: "overview", label: "Overview", num: "01" },
  { id: "getting-started", label: "Getting Started", num: "02" },
  { id: "features", label: "Core Features", num: "03" },
  { id: "how-to-use", label: "How to Use", num: "04" },
  { id: "settings", label: "Settings & Customization", num: "05" },
  { id: "pricing", label: "Pricing & Plans", num: "06" },
  { id: "faq", label: "FAQs", num: "07" },
  { id: "troubleshooting", label: "Troubleshooting", num: "08" },
  { id: "support", label: "Support", num: "09" },
  { id: "video", label: "🎬 Video Tutorials", num: "10" },
];

// ── REUSABLE COMPONENTS ────────────────────────────────────────────────
const SectionTag = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      bgcolor: "rgba(63,185,80,0.1)",
      color: "#3fb950",
      border: "1px solid rgba(63,185,80,0.25)",
      mb: 2,
      fontFamily: "monospace",
      fontSize: "0.7rem",
      letterSpacing: "0.5px",
    }}
  />
);

const LeadText = ({ children }) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: "1.05rem",
      color: "text.secondary",
      fontStyle: "italic",
      borderLeft: "3px solid #3fb950",
      pl: 2,
      mb: 4,
      lineHeight: 1.7,
    }}
  >
    {children}
  </Typography>
);

const SectionHeading = ({ children }) => (
  <>
    <Typography variant="h2" sx={{ mt: 5, mb: 2, color: "text.primary" }}>
      {children}
    </Typography>
    <Divider sx={{ mb: 2 }} />
  </>
);

const FeatureItem = ({ children }) => (
  <Stack
    direction="row"
    spacing={1.5}
    alignItems="flex-start"
    sx={{ py: 1, borderBottom: "1px solid #21262d" }}
  >
    <CheckCircleIcon
      sx={{ color: "#3fb950", fontSize: 18, mt: "3px", flexShrink: 0 }}
    />
    <Typography variant="body2" color="text.primary">
      {children}
    </Typography>
  </Stack>
);

const StepCard = ({ num, title, desc }) => (
  <Paper
    elevation={0}
    sx={{
      display: "flex",
      gap: 2,
      p: 2.5,
      mb: 1.5,
      background: "#161b22",
      border: "1px solid #21262d",
      borderRadius: 2,
      transition: "border-color 0.2s",
      "&:hover": { borderColor: "rgba(63,185,80,0.4)" },
    }}
  >
    <Avatar
      sx={{
        bgcolor: "#3fb950",
        color: "#0d1117",
        fontWeight: 800,
        fontSize: 14,
        width: 36,
        height: 36,
        flexShrink: 0,
      }}
    >
      {num}
    </Avatar>
    <Box>
      <Typography variant="h3" sx={{ mb: 0.5, color: "text.primary" }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </Box>
  </Paper>
);

const AlertBox = ({ type, children }) => {
  const configs = {
    tip: {
      icon: <TipsAndUpdatesIcon fontSize="small" />,
      color: "#3fb950",
      bg: "rgba(63,185,80,0.08)",
      border: "rgba(63,185,80,0.25)",
    },
    warn: {
      icon: <WarningAmberIcon fontSize="small" />,
      color: "#f78166",
      bg: "rgba(247,129,102,0.08)",
      border: "rgba(247,129,102,0.25)",
    },
    info: {
      icon: <InfoOutlinedIcon fontSize="small" />,
      color: "#58a6ff",
      bg: "rgba(88,166,255,0.08)",
      border: "rgba(88,166,255,0.25)",
    },
  };

  const c = configs[type];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        p: 2,
        my: 2.5,
        borderRadius: 2,
        bgcolor: c.bg,
        border: `1px solid ${c.border}`,
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ color: c.color, mt: "1px", flexShrink: 0 }}>{c.icon}</Box>
      <Typography variant="body2" color="text.primary">
        {children}
      </Typography>
    </Box>
  );
};

const PlanCard = ({ name, price, priceUnit, features, featured }) => (
  <Card
    sx={{
      position: "relative",
      height: "100%",
      overflow: "visible",
      ...(featured && { borderColor: "#3fb950 !important" }),
    }}
  >
    {featured && (
      <Chip
        label="Most Popular"
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          bgcolor: "#3fb950",
          color: "#0d1117",
          fontWeight: 700,
          fontSize: "0.65rem",
          height: 24,
          zIndex: 2,
        }}
      />
    )}

    <CardContent
      sx={{
        pt: featured ? 6 : 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "0.7rem",
          color: "text.secondary",
          textTransform: "uppercase",
          letterSpacing: 1,
          mb: 3,
        }}
      >
        {name}
      </Typography>

      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "2rem",
          color: "text.primary",
          mb: 0.5,
          lineHeight: 1.1,
        }}
      >
        {price}
        <Typography
          component="span"
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.05rem" }}
        >
          {" "}
          {priceUnit}
        </Typography>
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {features.map((f, i) => (
          <Stack key={i} direction="row" spacing={1.25} alignItems="flex-start">
            <CheckCircleIcon
              sx={{ color: "#3fb950", fontSize: 18, mt: "2px", flexShrink: 0 }}
            />
            <Typography variant="body2" color="text.secondary">
              {f}
            </Typography>
          </Stack>
        ))}
      </Box>
    </CardContent>
  </Card>
);

const VideoCard = ({ title, tag, tagColor, duration, videoId }) => {
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  const isPlaceholder = videoId.startsWith("VIDEO_ID");

  const handlePlay = () => {
    if (isPlaceholder) {
      alert(`Replace ${videoId} with your real YouTube video ID.`);
      return;
    }
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  const tagColors = {
    green: { bg: "rgba(63,185,80,0.15)", color: "#3fb950" },
    blue: { bg: "rgba(88,166,255,0.15)", color: "#58a6ff" },
    orange: { bg: "rgba(240,168,48,0.15)", color: "#f0a830" },
    red: { bg: "rgba(247,129,102,0.15)", color: "#f78166" },
  };

  const tc = tagColors[tagColor] || tagColors.green;

  return (
    <Card sx={{ overflow: "hidden" }}>
      <Box
        onClick={handlePlay}
        sx={{
          position: "relative",
          aspectRatio: "16/9",
          bgcolor: "#1c2330",
          cursor: "pointer",
          overflow: "hidden",
          "&:hover img": { transform: "scale(1.04)" },
          "&:hover .play-icon": {
            bgcolor: "#3fb950",
            borderColor: "#3fb950",
            transform: "translate(-50%,-50%) scale(1.1)",
          },
        }}
      >
        <Box
          component="img"
          src={isPlaceholder ? "" : thumbUrl}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.3s",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <Box
          className="play-icon"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 48,
            height: 48,
            bgcolor: "rgba(0,0,0,0.75)",
            border: "2px solid rgba(255,255,255,0.7)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            pl: "3px",
          }}
        >
          <PlayCircleIcon sx={{ color: "#fff", fontSize: 22 }} />
        </Box>

        <Chip
          label={duration}
          size="small"
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            bgcolor: "rgba(0,0,0,0.8)",
            color: "#fff",
            fontFamily: "monospace",
            fontSize: "0.65rem",
          }}
        />
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Chip
          label={tag}
          size="small"
          sx={{
            bgcolor: tc.bg,
            color: tc.color,
            mb: 1,
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        />
        <Typography
          variant="h3"
          sx={{ mb: 0.5, fontSize: "0.9rem", color: "text.primary" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

// ── SECTIONS ──────────────────────────────────────────────────────────
const sections = {
  overview: (
    <Box>
      <SectionTag label="01 · OVERVIEW" />

      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        MetaMatrix Bulk Product Editor
      </Typography>

      <LeadText>
        Effortless bulk editing for your Shopify store. Transform how you manage
        thousands of products — faster, safer, and without leaving Shopify
        Admin.
      </LeadText>

      <Typography variant="body1" sx={{ mb: 3 }}>
        MetaMatrix is a Shopify app built for merchants who need speed and
        precision when managing large product catalogs. Whether you're running a
        flash sale, updating inventory across hundreds of SKUs, or cleaning up
        tags at scale — MetaMatrix gives you full control with zero risk of
        irreversible mistakes.
      </Typography>

      <SectionHeading>What is MetaMatrix?</SectionHeading>

      <Typography variant="body1" sx={{ mb: 3 }}>
        MetaMatrix is an all-in-one bulk editing solution embedded directly into
        your Shopify Admin. It lets you edit product titles, prices, variants,
        inventory, tags, metafields, and more — all at once, with a
        preview-before-save workflow and one-click undo.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
          },
          gap: 3,
          mb: 3,
          alignItems: "stretch",
        }}
      >
        {[
          {
            icon: <BoltIcon />,
            title: "Built for Speed",
            desc: "Edit thousands of products in seconds using powerful filters and batch actions.",
          },
          {
            icon: <ShieldIcon />,
            title: "Safe by Design",
            desc: "Preview every change before applying. Undo instantly with one click.",
          },
          {
            icon: <FileUploadIcon />,
            title: "Import / Export",
            desc: "Work with CSV files for cross-store consistency and bulk data management.",
          },
          {
            icon: <ScheduleIcon />,
            title: "Schedule Updates",
            desc: "Plan flash sales and price changes ahead of time with scheduled edits.",
          },
        ].map((c) => (
          <Card key={c.title} sx={{ height: "100%" }}>
            <CardContent
              sx={{
                p: 3,
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ color: "#3fb950", mb: 1.5 }}>{c.icon}</Box>

              <Typography variant="h3" sx={{ mb: 1 }}>
                {c.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {c.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <AlertBox type="info">
        MetaMatrix is developed by <strong>Zen Meraki</strong> and is available
        on the Shopify App Store with a free plan and paid tiers starting at
        $3/month.
      </AlertBox>
    </Box>
  ),

  "getting-started": (
    <Box>
      <SectionTag label="02 · GETTING STARTED" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Getting Started
      </Typography>
      <LeadText>
        You can be up and running with MetaMatrix in under 2 minutes. No
        technical skills required.
      </LeadText>

      <SectionHeading>Installation</SectionHeading>

      {[
        {
          num: 1,
          title: "Find MetaMatrix on the Shopify App Store",
          desc: 'Search for "MetaMatrix Bulk Product Editor" in the Shopify App Store, or use the direct link from the MetaMatrix website.',
        },
        {
          num: 2,
          title: 'Click "Add App" and authorize',
          desc: "Shopify will ask for permissions to access your products, variants, and inventory. These are required for bulk editing to work.",
        },
        {
          num: 3,
          title: "One-click store connection",
          desc: "MetaMatrix automatically syncs your store data immediately after installation. No manual setup needed.",
        },
        {
          num: 4,
          title: "Open the app from Shopify Admin",
          desc: "Navigate to Apps → MetaMatrix from your Shopify Admin sidebar to launch the dashboard.",
        },
      ].map((s) => (
        <StepCard key={s.num} {...s} />
      ))}

      <AlertBox type="tip">
        <strong>Tip:</strong> Most users are fully set up and making their first
        bulk edit within 2 minutes of installing.
      </AlertBox>

      <SectionHeading>Requirements</SectionHeading>

      {[
        "An active Shopify store (any plan)",
        "Store admin access to install apps",
        "No coding or technical skills required",
        "Works on all modern browsers",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}
    </Box>
  ),

  features: (
    <Box>
      <SectionTag label="03 · CORE FEATURES" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Core Features
      </Typography>
      <LeadText>
        Everything you need to manage your Shopify store at scale — from simple
        price updates to complex metafield edits.
      </LeadText>

      <SectionHeading>Bulk Editing</SectionHeading>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Select any number of products using filters, then apply changes across
        all of them in one action.
      </Typography>

      {[
        "Edit product titles, descriptions, prices, and compare-at prices",
        "Update variants — sizes, colors, SKUs, weights",
        "Modify inventory quantities across locations",
        "Add, remove, or replace tags in bulk",
        "Edit metafields and custom data fields",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}

      <SectionHeading>Advanced Filtering</SectionHeading>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: "1px solid #21262d", borderRadius: 2 }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Filter Type</TableCell>
              <TableCell>Example</TableCell>
              <TableCell>Plan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                type: "Vendor",
                example: "Filter by brand or supplier",
                plan: "Free",
                color: "success",
              },
              {
                type: "Collection",
                example: 'All products in "Summer Sale"',
                plan: "Free",
                color: "success",
              },
              {
                type: "Product Type",
                example: 'All "T-Shirts"',
                plan: "Free",
                color: "success",
              },
              {
                type: "Tag",
                example: 'Products tagged "clearance"',
                plan: "Free",
                color: "success",
              },
              {
                type: "Price Range",
                example: "Products priced $10–$50",
                plan: "Advanced",
                color: "info",
              },
              {
                type: "Inventory Status",
                example: "Out-of-stock variants only",
                plan: "Advanced",
                color: "info",
              },
            ].map((r) => (
              <TableRow key={r.type} hover>
                <TableCell>{r.type}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  {r.example}
                </TableCell>
                <TableCell>
                  <Chip
                    label={r.plan}
                    size="small"
                    color={r.color}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SectionHeading>Preview & Safe Undo</SectionHeading>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Before any change goes live, MetaMatrix shows you a side-by-side diff of
        old vs. new values. Once applied, every edit is logged and can be rolled
        back with one click.
      </Typography>

      <AlertBox type="tip">
        The undo feature stores your full <strong>edit history</strong>, so you
        can revert even days after making a change.
      </AlertBox>

      <SectionHeading>Import & Export (CSV)</SectionHeading>

      <Typography variant="body1">
        Export your product data to CSV for editing in Excel or Google Sheets,
        then re-import the modified file. MetaMatrix validates the file before
        applying changes and flags any errors.
      </Typography>

      <SectionHeading>Scheduled Edits</SectionHeading>

      <Typography variant="body1">
        Set changes to go live at a specific date and time — perfect for flash
        sales, seasonal pricing, or product launches. Available on Advanced and
        Pro plans.
      </Typography>
    </Box>
  ),

  "how-to-use": (
    <Box>
      <SectionTag label="04 · HOW TO USE" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        How to Use
      </Typography>
      <LeadText>
        A complete step-by-step walkthrough of how to make bulk edits using
        MetaMatrix.
      </LeadText>

      <SectionHeading>Making a Bulk Edit</SectionHeading>

      {[
        {
          num: 1,
          title: "Open MetaMatrix",
          desc: "Go to your Shopify Admin → Apps → MetaMatrix to open the app dashboard.",
        },
        {
          num: 2,
          title: "Filter Your Products",
          desc: "Use the filter panel to narrow down products by vendor, collection, product type, tags, or other attributes.",
        },
        {
          num: 3,
          title: "Choose an Edit Action",
          desc: "Select what you want to change — price, title, tags, inventory, metafields, etc.",
        },
        {
          num: 4,
          title: "Preview Changes",
          desc: "Review the before/after diff for each product. Confirm everything looks right before proceeding.",
        },
        {
          num: 5,
          title: "Apply",
          desc: "Click Apply to push changes live. MetaMatrix processes changes in the background.",
        },
        {
          num: 6,
          title: "Undo If Needed",
          desc: "Find the edit in your Edit History and click Rollback to instantly undo any change.",
        },
      ].map((s) => (
        <StepCard key={s.num} {...s} />
      ))}

      <SectionHeading>Scheduling a Future Edit</SectionHeading>

      {[
        {
          num: 1,
          title: "Set up your edit",
          desc: "Follow steps 1–4 above, then instead of clicking Apply, click Schedule.",
        },
        {
          num: 2,
          title: "Pick your date and time",
          desc: "Set the exact date and time (in your timezone) when you want the edit to go live.",
        },
        {
          num: 3,
          title: "Confirm the schedule",
          desc: "The edit is saved and will apply automatically. View, edit, or cancel from the Schedule tab.",
        },
      ].map((s) => (
        <StepCard key={s.num} {...s} />
      ))}
    </Box>
  ),

  settings: (
    <Box>
      <SectionTag label="05 · SETTINGS & CUSTOMIZATION" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Settings & Customization
      </Typography>
      <LeadText>
        Configure MetaMatrix to match your store's workflow and team
        preferences.
      </LeadText>

      <SectionHeading>General Settings</SectionHeading>

      {[
        "Set your store's default timezone for scheduled edits",
        "Configure CSV export format (column order, delimiter)",
        "Enable or disable edit history retention",
        "Set default filter preferences for your dashboard view",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}

      <SectionHeading>Edit History & Retention</SectionHeading>

      <Typography variant="body1" sx={{ mb: 2 }}>
        MetaMatrix keeps a log of every bulk edit made in your store. Configure
        how long history is retained and who can access it.
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        {[
          {
            icon: <HistoryIcon />,
            title: "View Edit Logs",
            desc: "See every change made, who made it, when, and on how many products.",
          },
          {
            icon: <FilterListIcon />,
            title: "One-Click Rollback",
            desc: "Revert any edit from history instantly without re-entering values manually.",
          },
        ].map((c) => (
          <Grid item xs={12} sm={6} key={c.title}>
            <Card>
              <CardContent>
                <Box sx={{ color: "#3fb950", mb: 1 }}>{c.icon}</Box>
                <Typography variant="h3" sx={{ mb: 0.5 }}>
                  {c.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {c.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <SectionHeading>CSV Import Settings</SectionHeading>

      <Typography variant="body1" sx={{ mb: 1 }}>
        Configure how MetaMatrix handles CSV imports — including column mapping,
        duplicate handling, and error behavior. Save custom column maps as
        templates for repeated use.
      </Typography>

      <AlertBox type="warn">
        <strong>Important:</strong> Always preview your CSV import before
        applying. MetaMatrix will flag rows with missing required fields or
        invalid values.
      </AlertBox>
    </Box>
  ),

pricing: (
  <Box>
    <SectionTag label="06 · PRICING & PLANS" />
    <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
      Pricing & Plans
    </Typography>
    <LeadText>
      Simple, transparent pricing. Start free, upgrade when you need more.
    </LeadText>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(3, minmax(0, 1fr))",
        },
        gap: 3,
        mb: 3,
        mt: 1,
        alignItems: "stretch",
      }}
    >
      <PlanCard
        name="Free Plan"
        price="Free"
        priceUnit=""
        features={[
          "Basic editing features",
          "Up to 100 products – manual edit",
          "Email support",
        ]}
      />

      <PlanCard
        name="Advanced Monthly"
        price="$3"
        priceUnit="/ month"
        features={[
          "All Free features",
          "Up to 1,000 products – manual edits",
          "Up to 1,000 products – scheduled edits",
        ]}
        featured
      />

      <PlanCard
        name="Pro Monthly"
        price="$5"
        priceUnit="/ month"
        features={[
          "All Advanced features",
          "Unlimited products",
          "Unlimited scheduled edits",
        ]}
      />
    </Box>

    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      All charges are billed in USD. Recurring and usage-based charges are billed every 30 days.
    </Typography>

    <SectionHeading>Plan Comparison</SectionHeading>

    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: "1px solid #21262d", borderRadius: 2 }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell>Free</TableCell>
            <TableCell>Advanced ($3)</TableCell>
            <TableCell>Pro ($5)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            {
              feature: "Manual bulk edits",
              free: "100 products",
              adv: "1,000 products",
              pro: "Unlimited",
            },
            {
              feature: "Scheduled edits",
              free: "✗",
              adv: "1,000 products",
              pro: "Unlimited",
            },
            {
              feature: "CSV import/export",
              free: "✓",
              adv: "✓",
              pro: "✓",
            },
            {
              feature: "Edit history & rollback",
              free: "✓",
              adv: "✓",
              pro: "✓",
            },
            {
              feature: "Advanced filters",
              free: "✗",
              adv: "✓",
              pro: "✓",
            },
            {
              feature: "Email support",
              free: "✓",
              adv: "✓",
              pro: "✓",
            },
          ].map((r) => (
            <TableRow key={r.feature} hover>
              <TableCell>{r.feature}</TableCell>
              <TableCell
                sx={{
                  color:
                    r.free === "✗"
                      ? "#f78166"
                      : r.free === "✓"
                      ? "#3fb950"
                      : "text.secondary",
                }}
              >
                {r.free}
              </TableCell>
              <TableCell
                sx={{
                  color:
                    r.adv === "✗"
                      ? "#f78166"
                      : r.adv === "✓"
                      ? "#3fb950"
                      : "text.secondary",
                }}
              >
                {r.adv}
              </TableCell>
              <TableCell
                sx={{
                  color:
                    r.pro === "✗"
                      ? "#f78166"
                      : r.pro === "✓" || r.pro === "Unlimited"
                      ? "#3fb950"
                      : "text.secondary",
                }}
              >
                {r.pro}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
),

  faq: (
    <Box>
      <SectionTag label="07 · FAQS" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Frequently Asked Questions
      </Typography>
      <LeadText>
        Quick answers to the most common questions about MetaMatrix.
      </LeadText>

      {[
        {
          q: "How easy is it to connect my Shopify store?",
          a: "MetaMatrix offers a one-click integration with Shopify. Once connected, we automatically import your store data and begin generating insights immediately. No technical setup required.",
        },
        {
          q: "Can I connect data from sources other than Shopify?",
          a: "Yes. MetaMatrix can be extended to support multiple data sources including analytics tools, CSV imports, and external systems.",
        },
        {
          q: "Do I need technical skills to use MetaMatrix?",
          a: "No. The interface is designed for merchants and store operators — not just technical users. If you can use Shopify Admin, you can use MetaMatrix.",
        },
        {
          q: "How long does it take to set up?",
          a: "Most users can get started very quickly after installing and connecting their Shopify store. The typical setup takes under 2 minutes.",
        },
        {
          q: "Can I export reports and visualizations?",
          a: "Yes. Reports and outputs can be exported in multiple formats including CSV depending on the enabled features and your plan.",
        },
        {
          q: "Is there a limit to how many products I can edit at once?",
          a: "Limits depend on your plan. Free: 100 products, Advanced: 1,000 products, Pro: unlimited products per edit session.",
        },
        {
          q: "Can I undo a bulk edit after applying it?",
          a: "Yes. MetaMatrix logs every edit and lets you roll back any change with a single click from your Edit History — even days after the change was made.",
        },
      ].map((item) => (
        <Accordion key={item.q} disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {item.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "background.default",
              borderTop: "1px solid #21262d",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {item.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  ),

  troubleshooting: (
    <Box>
      <SectionTag label="08 · TROUBLESHOOTING" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Troubleshooting
      </Typography>
      <LeadText>Common issues and how to fix them quickly.</LeadText>

      <SectionHeading>App Not Loading</SectionHeading>

      {[
        "Try refreshing the page and reopening the app from Shopify Admin",
        "Clear your browser cache and cookies",
        "Try a different browser (Chrome, Firefox, Edge)",
        "Check your internet connection",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}

      <SectionHeading>Products Not Showing</SectionHeading>

      {[
        "Wait a few seconds — first-time syncs may take a moment",
        "Go to Settings → Sync and trigger a manual re-sync",
        "Ensure you have at least one published product in your store",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}

      <SectionHeading>CSV Import Errors</SectionHeading>

      <Typography variant="body1" sx={{ mb: 1 }}>
        If your CSV import fails, MetaMatrix will show you which rows have
        errors. Common causes:
      </Typography>

      {[
        "Missing required columns (Product ID or Handle must be present)",
        "Invalid price format — use numbers only (e.g. 19.99 not $19.99)",
        "Extra blank rows at the end of the file",
        "Wrong file encoding — save as UTF-8",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}

      <AlertBox type="tip">
        Use MetaMatrix's built-in export to get a correctly formatted CSV
        template to start from.
      </AlertBox>

      <SectionHeading>Scheduled Edit Didn't Fire</SectionHeading>

      {[
        "Check that the correct timezone is set in Settings",
        "Verify the scheduled edit is still listed under Scheduled (not Completed or Cancelled)",
        "Ensure the app is still installed and authorized on your store",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}
    </Box>
  ),

  support: (
    <Box>
      <SectionTag label="09 · SUPPORT" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Support
      </Typography>
      <LeadText>Need help? The MetaMatrix team is here for you.</LeadText>

      <SectionHeading>Contact Support</SectionHeading>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          {
            icon: <EmailIcon />,
            title: "Email Support",
            desc: "Available on all plans. Send your query to the support email listed in the app's Shopify listing page.",
          },
          {
            icon: <StorefrontIcon />,
            title: "Shopify App Store",
            desc: "Leave a review or reach the developer via the MetaMatrix listing on the Shopify App Store.",
          },
        ].map((c) => (
          <Grid item xs={12} sm={6} key={c.title}>
            <Card>
              <CardContent>
                <Box sx={{ color: "#3fb950", mb: 1 }}>{c.icon}</Box>
                <Typography variant="h3" sx={{ mb: 0.5 }}>
                  {c.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {c.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <SectionHeading>Before Contacting Support</SectionHeading>

      {[
        "Check the FAQ section — most common questions are answered there",
        "Review the Troubleshooting section for known issues and fixes",
        "Include your Shopify store URL and a description of the issue when emailing",
        "If reporting a bug, describe the steps to reproduce it and include screenshots if possible",
      ].map((f) => (
        <FeatureItem key={f}>{f}</FeatureItem>
      ))}

      <AlertBox type="info">
        MetaMatrix is developed by <strong>Zen Meraki</strong>. You can also
        submit feedback through the Shopify App Store review system.
      </AlertBox>

      <SectionHeading>Feature Requests</SectionHeading>

      <Typography variant="body1">
        Have an idea that would make MetaMatrix better for your store? Reach out
        via email with the subject line "Feature Request" and describe what
        you'd like to see.
      </Typography>
    </Box>
  ),

  video: (
    <Box>
      <SectionTag label="10 · VIDEO TUTORIALS" />
      <Typography variant="h1" sx={{ mb: 2, color: "text.primary" }}>
        Video Tutorials
      </Typography>
      <LeadText>
        Watch MetaMatrix in action — from installation to advanced bulk editing
        workflows.
      </LeadText>

      <SectionHeading>Getting Started with MetaMatrix</SectionHeading>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This walkthrough covers installation, connecting your Shopify store, and
        making your first bulk edit in under 5 minutes.
      </Typography>

      <Box
        sx={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid #21262d",
          bgcolor: "#000",
          mb: 1.5,
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/VIDEO_ID_HERE?rel=0&modestbranding=1&color=white"
          title="MetaMatrix – Getting Started"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 2,
          }}
        />
      </Box>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip
          label="📦 Getting Started"
          size="small"
          sx={{
            bgcolor: "#1c2330",
            color: "text.secondary",
            fontFamily: "monospace",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="⏱ ~5 min"
          size="small"
          sx={{
            bgcolor: "#1c2330",
            color: "text.secondary",
            fontFamily: "monospace",
            fontSize: "0.7rem",
          }}
        />
      </Stack>

      <AlertBox type="info">
        Replace <code>VIDEO_ID_HERE</code> with your actual YouTube video ID.
        Example: for <code>youtube.com/watch?v=abc123</code>, the ID is{" "}
        <code>abc123</code>.
      </AlertBox>

      <SectionHeading>More Tutorials</SectionHeading>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <VideoCard
            title="How to Bulk Edit Product Prices"
            tag="Bulk Editing"
            tagColor="green"
            duration="4:32"
            videoId="VIDEO_ID_2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VideoCard
            title="Scheduling a Flash Sale"
            tag="Scheduling"
            tagColor="blue"
            duration="3:15"
            videoId="VIDEO_ID_3"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VideoCard
            title="Using CSV Import & Export"
            tag="Import/Export"
            tagColor="orange"
            duration="5:48"
            videoId="VIDEO_ID_4"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VideoCard
            title="Undoing a Bulk Edit"
            tag="Safety"
            tagColor="red"
            duration="2:20"
            videoId="VIDEO_ID_5"
          />
        </Grid>
      </Grid>

      <AlertBox type="tip">
        Replace each <code>VIDEO_ID_2</code>, <code>VIDEO_ID_3</code> etc. with
        your real YouTube video IDs. Thumbnails will load automatically from
        YouTube.
      </AlertBox>
    </Box>
  ),
};

// ── APP ────────────────────────────────────────────────────────────────
export default function MetaMatrixDocs() {
  const [active, setActive] = useState("overview");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
            },
          }}
        >
          {/* Logo */}
          <Box sx={{ p: 3, borderBottom: "1px solid #21262d" }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar
                sx={{
                  bgcolor: "#3fb950",
                  color: "#0d1117",
                  fontWeight: 800,
                  fontSize: 16,
                  borderRadius: 2,
                  width: 38,
                  height: 38,
                }}
              >
                M
              </Avatar>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "text.primary",
                    lineHeight: 1.2,
                  }}
                >
                  MetaMatrix
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#3fb950",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Docs
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Nav */}
          <Typography
            sx={{
              px: 2.5,
              pt: 2.5,
              pb: 0.5,
              fontFamily: "monospace",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: "text.secondary",
            }}
          >
            Docs
          </Typography>

          <List dense sx={{ px: 1, flex: 1 }}>
            {navItems.map((item) => (
              <ListItemButton
                key={item.id}
                selected={active === item.id}
                onClick={() => setActive(item.id)}
                sx={{
                  borderRadius: 1.5,
                  mb: 0.25,
                  "&.Mui-selected": {
                    bgcolor: "rgba(63,185,80,0.12)",
                    "&:hover": { bgcolor: "rgba(63,185,80,0.16)" },
                  },
                  "&.Mui-selected .MuiListItemText-primary": {
                    color: "#3fb950",
                    fontWeight: 600,
                  },
                  "&.Mui-selected .num": {
                    color: "#3fb950",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <Typography
                    className="num"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      color: "text.secondary",
                    }}
                  >
                    {item.num}
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 13.5,
                    color: "text.secondary",
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          {/* Footer */}
          <Box sx={{ p: 2, borderTop: "1px solid #21262d" }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<OpenInNewIcon />}
              sx={{
                fontWeight: 700,
                fontSize: 13,
                textTransform: "none",
                borderRadius: 2,
                color: "#0d1117",
              }}
            >
              + Shopify App
            </Button>
          </Box>
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 3, md: "56px 60px 100px" },
            maxWidth: 860,
          }}
        >
          {sections[active]}
        </Box>
      </Box>
    </ThemeProvider>
  );
}