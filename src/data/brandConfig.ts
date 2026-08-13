export interface BrandConfig {
  name: string;
  creator: string;
  tagline: string;
  description: string;
  instagramHandle: string;
  instagramUrl: string;
  accentColors: {
    gold: string;
    goldDark: string;
    teal: string;
    bgWhite: string;
  };
  policy: {
    title: string;
    coreRule: string;
    description: string;
    bulletPoints: string[];
    faqs: { q: string; a: string }[];
  };
}

export const brandConfig: BrandConfig = {
  name: "ZARIYA",
  creator: "Deeya",
  tagline: "Handcrafted Crochet & Knit Art, Stitched With Love",
  description: "Bespoke handcrafted crochet wearables, everlasting floral bouquets, aesthetic tote bags, and amigurumi plushies. Every single stitch is thoughtfully hand-knitted by Deeya.",
  instagramHandle: "@zariya_verse",
  instagramUrl: "https://www.instagram.com/zariya_verse/",
  accentColors: {
    gold: "#E69A28",
    goldDark: "#B86E18",
    teal: "#165B66",
    bgWhite: "#FFFFFF"
  },
  policy: {
    title: "Crochet Order & Non-Cancellation Policy",
    coreRule: "Once an order is confirmed, it is final & binding. No cancellations, refunds, or returns are permitted. You must accept the order upon delivery.",
    description: "Because every Zariya crochet piece is handmade specifically according to your requested yarn shades, dimensions, and custom sizing, Deeya allocates premium yarn and starts hand-knitting immediately upon confirmation.",
    bulletPoints: [
      "No Cancellation after Confirmation: Once you confirm design details on Instagram DM and payment is recorded, your order cannot be altered or cancelled.",
      "Acceptance of Delivery: You must accept and receive the order upon delivery.",
      "Handcrafted Uniqueness: Slight natural variations in stitch tension, yarn texture, or flower petal shaping are intrinsic marks of handmade crochet artistry.",
      "Custom Sizing & Measurements: Please provide accurate measurements for wearables (tops, cardigans, hats) when discussing your order on Instagram DM.",
      "Dispatch Timelines: Crochet pieces take meticulous time and love to stitch. Standard pieces are handcrafted and dispatched within 5–9 working days."
    ],
    faqs: [
      {
        q: "Why can't I cancel once confirmed?",
        a: "Every piece is made entirely by hand from scratch using premium yarn. Once stitching has begun according to your custom colors and sizing, materials and crafting time cannot be reversed."
      },
      {
        q: "How long does a crochet piece take to handcraft?",
        a: "Depending on the complexity (e.g. bouquets take 3-5 days, amigurumi takes 2-4 days, and custom wearables take 5-9 days), we ensure every stitch is perfected before quality check and dispatch."
      },
      {
        q: "Can I choose my own color combination?",
        a: "Yes, absolutely! You can choose custom yarn colors, flower combinations, or size dimensions during our Instagram DM chat."
      },
      {
        q: "How do I place an order?",
        a: "Browse the website, take a screenshot or copy the crochet item code, and message us on Instagram @zariya_verse. We will discuss sizing, colors, and share the final price quote!"
      }
    ]
  }
};

// Helper to make image/asset paths work perfectly on GitHub Pages
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  const base = (import.meta as any).env?.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure we don't double slash
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

