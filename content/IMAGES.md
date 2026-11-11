# Images for the home page and the industry pages

Twelve photos: one for the home page and one for each `/industries/<slug>`
page. The served files are in `public/images/`; the full size originals the
share cards are cut from are in `content/photos/`. Each photo is used twice:

1. **In the page**, in the "Every lead arrives ready for the call" section
   (square crop on desktop, 3:2 on phones).
2. **As the page's share card** (`og:image`, 1200 x 630 JPEG). The headline and
   logo are added on top of the photo's empty left third when the card is built,
   so the photo itself must contain no text.

## How they were made

- Generated on 2026-11-11 with Canva's AI image generation from the prompts
  below (3:2 landscape), then placed on a helper Canva design, "YourLio photo
  export holder" (`DAHam4Bpolk`), and exported at 1536 x 1024 JPEG. Canva only
  exports full-size files from a design, which is all that design is for.
- The exported JPEGs are kept in `content/photos/`. `npm run images` writes
  the WebP picture (`cwebp -q 82`) and the 1200 x 630 JPEG share card for
  every page into `public/images/`. The card puts the page's
  headline over the photo's empty left third, so a new headline in
  `src/data/b2b.js` only needs the script run again.
- Each page reads `photo: { src, alt }` and `og` from `src/data/industries.js`
  (`B2B_HUB` for the home page, `B2B_PAGES.<id>` for an industry), which sets
  the picture, `og:image` and the `primaryImageOfPage` schema.
- To replace one photo, save the new one in `content/photos/` under the same
  file name and run `npm run images` again.

## Rules for every image

- Photographic and candid, not posed stock. People look busy with real work.
- No text, letters, numbers, logos, watermarks or brand names anywhere,
  including on screens, signs, packaging and clothing. Screens show only soft
  blurred shapes.
- The subject sits in the right two thirds. The left third is calm, darker,
  empty background, so a headline can sit there on the share card.
- Cool colour grade that sits on the navy page: deep navy shadows, soft blue
  highlights, natural skin tones.
- The people are illustrative. Never caption or describe them as YourLio
  customers.

## The list

Alt text describes what each picture actually shows.

| # | Page | File name | Canva media | Alt text |
|---|------|-----------|-------------|----------|
| 1 | `/` | `b2b-sales-team-lead-qualification` | `MAHam4r4poM` | Sales manager with a headset reading a new lead on a laptop in a modern office |
| 2 | `/industries/security-and-av` | `security-av-installer-lead-qualification` | `MAHamzvrRUY` | Security systems consultant with a tablet checking a ceiling CCTV camera in an office lobby |
| 3 | `/industries/it-services` | `it-managed-services-lead-qualification` | `MAHam6qAZoM` | IT account manager at a desk with two monitors and a network cabinet behind him |
| 4 | `/industries/software-and-saas` | `saas-demo-booking-chatbot` | `MAHamyfXPPc` | Software account executive presenting a product demo on a laptop video call |
| 5 | `/industries/manufacturing-and-wholesale` | `manufacturing-wholesale-bulk-quote-chatbot` | `MAHamxL7rvU` | Wholesale sales manager in a safety vest checking an order on a tablet beside boxes in a warehouse |
| 6 | `/industries/agencies-and-consulting` | `agency-discovery-call-chatbot` | `MAHam1UzEoA` | Agency strategist thinking in front of a wall of website wireframe sketches |
| 7 | `/industries/real-estate` | `real-estate-lead-qualification-chatbot` | `MAHam2XbQR8` | Real estate agent showing a couple around a bright apartment with a city view |
| 8 | `/industries/offline-retail` | `retail-store-whatsapp-chatbot` | `MAHamx_NLeE` | Furniture store assistant helping a shopper choose a grey sofa |
| 9 | `/industries/education` | `education-admissions-chatbot` | `MAHam9SE2TM` | Admissions counsellor talking with a student and parent in a college office |
| 10 | `/industries/events-and-webinars` | `events-webinar-lead-chatbot` | `MAHam48YoiE` | Event planner with a tablet walking through a conference hall set up for a launch |
| 11 | `/industries/travel-and-hospitality` | `travel-hospitality-enquiry-chatbot` | `MAHam7qCWmc` | Resort concierge planning a trip with a guest over a map at the lobby desk |
| 12 | `/industries/finance-and-insurance` | `finance-insurance-lead-qualification` | `MAHam65lir4` | Insurance adviser reviewing business cover options on a tablet with a client |

## Prompts

Every prompt ends with the same style block so the twelve read as one set.
Paste each prompt into ChatGPT as one message.

**1. B2B hub**
> A sales manager in her thirties, South Asian, wearing a light headset, sits at a tidy desk in a modern glass office in the evening, looking at a laptop as if reading a new lead before a call. A phone with a green messaging app lies beside the laptop. Colleagues blurred far in the background. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**2. Security and AV installers**
> A security systems consultant in his forties, wearing a navy work polo, stands in a bright corporate office lobby holding a tablet and looking up at a white dome CCTV camera on the ceiling, as if planning where to install cameras. Glass doors and reception desk softly blurred behind. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**3. IT and managed services**
> An IT account manager in his late twenties sits at a desk with two monitors in a small office, a neat network cabinet with blinking lights and tidy cables behind him, a mug of coffee beside the keyboard, focused on preparing for a client call. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**4. Software and SaaS**
> A software account executive, a woman in her thirties, smiles while presenting on a video call from a quiet meeting room, laptop open in front of her with a blurred dashboard on screen and a small ring light off to the side. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**5. Manufacturing and wholesale**
> A wholesale sales manager in his thirties, in a high visibility vest over a shirt, stands in a clean warehouse aisle holding a tablet beside tall pallets of plain brown corrugated packaging boxes, checking an order. Warm warehouse lights fade into the background. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**6. Agencies and consulting**
> An agency strategist in her late twenties stands in a creative studio in front of a wall covered in paper wireframe sketches and sticky notes with no readable writing, holding a marker and thinking, a laptop open on a high table beside her. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**7. Real estate**
> A real estate agent in a smart blazer shows a young couple around a bright, empty modern apartment living room with large windows and a city view, gesturing toward the windows while the couple looks around. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**8. Offline retail**
> A friendly store assistant in a furniture showroom helps a shopper in her forties choose between grey sofas, the shopper running a hand over the fabric. Warm lamps and styled furniture blurred in the background. No price tags or signs. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**9. Education**
> An admissions counsellor in her forties sits across a desk from a college applicant in his early twenties and his parent in a calm, bright college office, talking through options with a closed folder and a laptop on the desk. Bookshelves blurred behind. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**10. Events and webinars**
> An event planner in her thirties with a tablet walks through a conference hall being set up for a product launch: rows of chairs, a stage with soft blue lighting and an empty screen, crew members blurred in the background. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**11. Travel and hospitality**
> A resort concierge in a neat uniform stands at a lobby desk helping a guest plan a group trip, pointing at a paper map with no readable text. Palm plants and an open view to the sea softly blurred behind. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.

**12. Finance and insurance**
> An insurance adviser in his forties, in a light shirt with rolled sleeves, sits with a small business owner at a round table in a calm office, both looking at a tablet as they discuss cover options. A plant and window light in the background. Style: photorealistic editorial photo, 35mm lens, soft window light, cool navy and blue colour grade with natural skin tones. Subject in the right two thirds; the left third is calm, dark, empty background. Landscape 1536x1024. No text, numbers, logos or watermarks anywhere; screens show only blurred shapes.
