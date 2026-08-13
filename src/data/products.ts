export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  image: string; // <-- Place your image in the public/images folder and update this path!
  shortDesc: string;
  fullDesc: string;
  dimensions?: string;
  materials?: string[];
  customizationOptions: string[];
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 'zar-cr-01',
    code: '#ZAR-CR01',
    name: 'Everlasting Crochet Tulip & Rose Bouquet',
    category: 'Crochet Bouquets',
    badge: 'Bestseller',
    rating: 5.0,
    reviewsCount: 142,
    image: '/images/bouquet.jpg', // Replace file in public/images/bouquet.jpg
    shortDesc: 'A bloom that never fades. Hand-crocheted tulips, roses, lavender sprigs, and daisies wrapped in luxury paper.',
    fullDesc: 'The sweetest gift that lasts forever! Handcrafted with 100% premium milk cotton yarn, each petal is intricately stitched with high precision, mounted on bendable floral stems, and wrapped with vintage Korean craft paper and satin ribbon.',
    dimensions: 'Stem height: ~35-40 cm | Bouquet width: ~25 cm (5-12 stems customizable)',
    materials: ['100% Premium Soft Milk Cotton Yarn', 'Flexible floral wire stems', 'Korean bouquet wrapping sheet', 'Satin ribbon bow'],
    customizationOptions: ['Custom flower mix (Tulips, Roses, Sunflowers, Daisies, Lavender)', 'Choice of color palette (Pastel pink, Lilac, Sunshine yellow, Ivory white)', 'Free handwritten gift note with wax seal'],
    isFeatured: true
  },
  {
    id: 'zar-cr-02',
    code: '#ZAR-CR02',
    name: 'Vintage Daisy Granny Square Crochet Tote',
    category: 'Bags & Totes',
    badge: 'Trending',
    rating: 4.9,
    reviewsCount: 98,
    image: '/images/tote_bag.jpg', // Replace file in public/images/tote_bag.jpg
    shortDesc: 'Aesthetic vintage granny square shoulder tote with sturdy reinforced crochet straps and lined interior.',
    fullDesc: 'Step out in timeless handmade style. Individually hand-joined floral granny squares create a vibrant, durable, and eye-catching aesthetic. Perfect for college, picnics, cafes, or casual day outs.',
    dimensions: '36 cm × 34 cm | Strap drop: 28 cm',
    materials: ['High-tensile Milk Cotton Blend', 'Double-stitched reinforced handles', 'Optional cotton fabric inner lining'],
    customizationOptions: ['Color combination (Neutral Earth tones, Pastel Multi, Black & Olive)', 'With or without inner zipper pocket', 'Custom strap length'],
    isFeatured: true
  },
  {
    id: 'zar-cr-03',
    code: '#ZAR-CR03',
    name: 'Bespoke Floral Crochet Halter Top / Vest',
    category: 'Wearables',
    badge: 'Custom Sizing',
    rating: 4.9,
    reviewsCount: 76,
    image: '/images/crochet_top.jpg', // Replace file in public/images/crochet_top.jpg
    shortDesc: 'Custom-fit boho crochet top featuring delicate shell stitches, scalloped hems, and adjustable corset back-ties.',
    fullDesc: 'Every body is unique, which is why our crochet wearables are made purely to your custom measurements! Breathable, soft on the skin, and designed to flatter with adjustable lace-up ties.',
    dimensions: 'Custom made to your bust & waist measurements (XS to 3XL)',
    materials: ['100% Breathable Hypoallergenic Cotton Yarn', 'Soft stretch-knit structure', 'Skin-friendly non-itchy finish'],
    customizationOptions: ['Exact cup & bust sizing', 'Choice of neckline (Halter, Square neck, Sweetheart)', 'Custom colorway & stripe pattern'],
    isFeatured: true
  },
  {
    id: 'zar-cr-04',
    code: '#ZAR-CR04',
    name: 'Adorable Amigurumi Bunny & Whale Plushie Set',
    category: 'Amigurumi Plushies',
    badge: 'Super Cute',
    rating: 5.0,
    reviewsCount: 89,
    image: '/images/amigurumi.jpg', // Replace file in public/images/amigurumi.jpg
    shortDesc: 'Pocket-sized chunky yarn amigurumi plushies with hand-stitched blush cheeks and safety eyes.',
    fullDesc: 'The ultimate emotional support cuddle buddies! Hand-knitted with ultra-soft plush velvet yarn and stuffed with squishy hypoallergenic fiberfill. Perfect for your study desk, gifting a loved one, or car dashboard.',
    dimensions: 'Height: 12-15 cm | Width: ~10 cm',
    materials: ['Ultra-soft Chenille / Velvet Yarn', 'Hypoallergenic Virgin Polyfill', 'Child-safe locking safety eyes'],
    customizationOptions: ['Bunny with mini carrot / Whale with water sprout / Strawberry Bear', 'Optional keychain clip attachment', 'Custom accessory (mini scarf, bucket hat)'],
    isFeatured: true
  },
  {
    id: 'zar-cr-05',
    code: '#ZAR-CR05',
    name: 'Boho Floral Crochet Bandana & Scrunchie Duo',
    category: 'Accessories',
    badge: 'Signature',
    rating: 4.8,
    reviewsCount: 54,
    image: '/images/bandana.jpg', // Replace file in public/images/bandana.jpg
    shortDesc: 'Cottagecore lace-stitch hair bandana with matching ruffled oversized crochet scrunchie.',
    fullDesc: 'Elevate any hairstyle with our lightweight, non-slip crochet bandana. Features soft knit ties that stay securely in place without pulling your hair. Comes with a matching oversized flower-trimmed scrunchie.',
    dimensions: 'Bandana: 48 cm × 26 cm + 25 cm ties | Scrunchie: 12 cm diameter',
    materials: ['Silky Soft Combed Cotton Yarn', 'Durable elastic band inside scrunchie', 'Colorfast non-bleed dyes'],
    customizationOptions: ['Choice of pattern (Granny triangles, Daisy lattice, Solid scalloped)', 'Color duo of your choice', 'Individual or set purchase'],
    isFeatured: true
  }
];
