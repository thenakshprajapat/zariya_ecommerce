export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  productName: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
}

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Ananya Sharma',
    location: 'Mumbai, MH',
    rating: 5,
    date: '2 days ago',
    productName: 'Everlasting Crochet Tulip & Rose Bouquet',
    comment: 'I gifted the crochet tulip bouquet to my best friend for her graduation and she cried happy tears! The fact that these flowers will literally never wither is so special. Deeya’s stitches are so clean and neat! ❤️',
    verified: true,
    avatarBg: '#E69A28'
  },
  {
    id: 'rev-2',
    name: 'Rhea Sen',
    location: 'Bangalore, KA',
    rating: 5,
    date: '1 week ago',
    productName: 'Vintage Daisy Granny Square Crochet Tote',
    comment: 'The tote bag is so strong and sturdy! I carry my iPad, book, and bottle in it every day. The yarn quality is super soft and doesn’t fray at all. DMing on @zariya_verse was so smooth.',
    verified: true,
    avatarBg: '#165B66'
  },
  {
    id: 'rev-3',
    name: 'Pooja Varma',
    location: 'Delhi, DL',
    rating: 5,
    date: '2 weeks ago',
    productName: 'Bespoke Floral Crochet Halter Top',
    comment: 'Finding a crochet top that actually fits my bust perfectly used to be impossible until I found Zariya! Deeya took my exact measurements and the fit is 10/10. It’s so soft on the skin!',
    verified: true,
    avatarBg: '#D9822B'
  },
  {
    id: 'rev-4',
    name: 'Meera Nair',
    location: 'Kochi, KL',
    rating: 5,
    date: '3 weeks ago',
    productName: 'Adorable Amigurumi Bunny & Whale Set',
    comment: 'The softest little plushies ever! The yarn feels like a cloud and the little details on the bunny cheeks are so adorable. 100% ordering more for gifts.',
    verified: true,
    avatarBg: '#1E7582'
  },
  {
    id: 'rev-5',
    name: 'Tanvi Joshi',
    location: 'Pune, MH',
    rating: 5,
    date: '1 month ago',
    productName: 'Boho Floral Crochet Bandana & Scrunchie',
    comment: 'The bandana doesn’t slip off my hair and the floral lace pattern looks straight out of Pinterest! Packaging came with a cute handwritten note from Deeya. Love love love!',
    verified: true,
    avatarBg: '#B86E18'
  }
];
