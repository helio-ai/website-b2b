// Editorial summaries of merchant reviews, not verbatim personal quotations.
// Ratings, dates and links checked across all four Shopify review pages on
// 2026-10-12. People supplied by the site owner; titles and portraits checked
// against their linked profiles or official brand pages.
export const SHOPIFY_REVIEWS_URL = 'https://apps.shopify.com/helio-ai/reviews';

export const SHOPIFY_REVIEW_SUMMARIES = [
  {
    brand: 'Dr. Ortho', logoName: 'Dr. Ortho',
    person: 'Sanjeev Juneja', role: 'Founder',
    profileUrl: 'https://drorthooil.com/pages/our-owner',
    photo: '/brands/sanjeev-juneja.webp',
    photoStyle: { transform: 'scale(2)', transformOrigin: '50% 0' },
    rating: 5, date: '2026-08-31', reviewId: '2342225',
    summary: 'Dr. Ortho uses YourLio AI to answer shopper questions quickly and values the team’s responsive support.',
  },
  {
    brand: 'Sylvi', logoName: 'Sylvi',
    person: 'Ishan Kukadia', role: 'Founder',
    profileUrl: 'https://www.linkedin.com/in/ishankukadia/',
    photo: '/brands/ishan-kukadia.webp',
    rating: 5, date: '2026-09-09', reviewId: '2353577',
    summary: 'Sylvi uses YourLio AI for order and product questions in Hinglish, product recommendations, and smooth handoffs to its team.',
  },
  {
    brand: 'Longway India', logoName: 'Longway',
    person: 'Deepak Garg', role: 'Co Founder',
    profileUrl: 'https://www.linkedin.com/in/deepak-garg-071a85266/',
    photo: '/brands/deepak-garg.webp',
    rating: 5, date: '2026-08-25', reviewId: '2335573',
    summary: 'Longway India uses YourLio AI on Shopify and describes it as a good, reliable product after five months of use.',
  },
  {
    brand: 'Luxmi Estates',
    logo: { src: '/logos/luxmi_estates_yourlio.webp', w: 262, h: 96 },
    person: 'Rehan Khan', role: 'Customer Experience & Retention Manager',
    profileUrl: 'https://www.linkedin.com/in/rehan-khan-b84371405/',
    photo: '/brands/rehan-khan.webp',
    rating: 5, date: '2026-08-31', reviewId: '2342161',
    summary: 'Luxmi Estates uses YourLio AI to help shoppers find products and complete purchases through a simpler, smoother shopping journey.',
  },
  {
    brand: 'NoizzyBox', person: 'Neeraj Sablok', role: 'Founder & CEO',
    profileUrl: 'https://www.linkedin.com/in/neeraj-sablok-2096b52b/',
    // Portrait supplied directly by the site owner.
    photo: '/brands/neeraj-sablok.webp',
    rating: 5, date: '2026-09-09', reviewId: '2354108',
    summary: 'NoizzyBox uses YourLio AI to guide shoppers toward suitable products, answer questions in its brand voice, and keep online shopping personal.',
  },
  {
    brand: 'SkinInspired', person: 'Piyush Jain', role: 'Founder & CEO',
    profileUrl: 'https://www.linkedin.com/in/piyushj12/',
    photo: '/brands/piyush-jain.webp',
    rating: 5, date: '2026-06-22', reviewId: '2256032',
    summary: 'SkinInspired uses YourLio AI for instant answers to skincare product questions, helping customers make informed purchases while reducing the team’s support load.',
  },
  {
    brand: 'My Pahadi Dukan', person: 'Mohd Anas Zubair', role: 'Co Founder',
    profileUrl: 'https://www.linkedin.com/in/mohd-anas-zubair-257443159/',
    photo: '/brands/mohd-anas-zubair.webp',
    rating: 5, date: '2026-09-28', reviewId: '2375903',
    summary: 'My Pahadi Dukan uses YourLio AI on Shopify and praises its articulate conversations and ability to handle hiccups well.',
  },
  {
    brand: 'Auravedic', logoName: 'Auravedic', person: 'Amrita Bhatia', role: 'Co Founder',
    profileUrl: 'https://www.linkedin.com/in/amrita-bhatia-11a934116/',
    photo: '/brands/amrita-bhatia.webp',
    rating: 5, date: '2026-09-22', reviewId: '2369503',
    summary: 'Auravedic uses YourLio AI for its DTC brand, describing it as a powerful, essential tool backed by a very supportive team.',
  },
  {
    brand: 'AllurElixir', person: 'Dr. Sradha Prakash', role: 'Founder',
    profileUrl: 'https://allurelixir.com/pages/about-us',
    photo: '/brands/sradha-prakash.webp',
    rating: 5, date: '2026-06-03', reviewId: '2229054',
    summary: 'AllurElixir uses YourLio AI for haircare recommendations and reports around 23% higher conversion among shoppers who engage with the assistant, alongside fewer repetitive support tickets.',
  },
  {
    brand: 'Sarinskin', person: 'Dr. Ankur Sarin', role: 'Consultant Dermatologist',
    profileUrl: 'https://www.linkedin.com/in/ankur-sarin-10427045/',
    photo: '/brands/ankur-sarin.webp',
    rating: 5, date: '2026-06-03', reviewId: '2229152',
    summary: 'Sarinskin recommends YourLio AI for Shopify and WhatsApp, praising its ease of use and the team behind it.',
  },
].map((review) => ({ ...review, sourceUrl: `https://apps.shopify.com/reviews/${review.reviewId}` }));
