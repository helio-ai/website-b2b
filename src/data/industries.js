/* Content for the YourLio for business site (b2b.yourlio.com): the home page
   and one page per industry, for businesses that sell through a conversation:
   a call, a quote or a site visit.

   Every industry below drives the same journey the product runs on live B2B
   sites: the visitor asks, the agent asks two qualifying questions with tap
   options, collects contact details in the chat, and books the call. The
   WhatsApp follow up shows the shared memory: the lead is not asked again.

   `agent`, `topics`, `services`, `ready` and `event` fill the demo widget's
   header, welcome message, details prompt and booked call, so each segment
   reads the way that business would set the agent up.

   Sample details only. No customer is named, and the sample email uses the
   reserved example.com domain so it can never reach a real inbox. */

export const B2B_SAMPLE_LEAD = {
  firstName: 'Alex',
  name: 'Alex Morgan',
  phone: '+1 305 555 0177',
  email: 'alex@example.com',
  slot: 'Wed, 2:00 pm',
  slots: ['10:00 am', '11:30 am', '2:00 pm', '4:30 pm'],
};

export const B2B_INDUSTRIES = [
  {
    id: 'security',
    group: 'b2b',
    slug: 'security-and-av',
    agent: 'Security',
    topics: ['business', 'site', 'project'],
    services: "I can help you explore CCTV, access control, alarms, intercoms, and meeting room AV.",
    ready: "Thanks, that's what the team needs to scope it.",
    event: 'Site Survey Call',
    label: 'Security',
    name: 'Security and AV installers',
    who: 'CCTV, access control, alarms and meeting room AV.',
    company: 'Northwind Offices',
    visitor: 'We need CCTV for our office',
    q1: { field: 'Coverage', text: 'Happy to help with cameras for your office. Which areas need coverage?', options: ['Front entry', 'Lobby & hallways', 'Full perimeter + inside'], pick: 2 },
    q2: { field: 'Features', text: 'Got it. Do you want features like face or licence plate recognition, or just recording?', options: ['Just recording', 'Face recognition', 'Plate recognition'], pick: 0 },
    asks: ['Site size and coverage', 'Features needed', 'Install timeline'],
    whatsapp: {
      ask: 'Can you include pricing for 12 cameras?',
      reply: 'Hi Alex, I have your brief from the website chat: full perimeter + inside, recording only. I have added 12 cameras to it, and the team will bring pricing to your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'it',
    group: 'b2b',
    slug: 'it-services',
    agent: 'IT Support',
    topics: ['team', 'office', 'project'],
    services: "I can help you explore managed IT, cloud and email, networking, cybersecurity, and device support.",
    ready: "Thanks, that's what the team needs to scope it.",
    event: 'General Consultation',
    label: 'IT services',
    name: 'IT and managed services',
    who: 'Managed IT, cloud, networking and cybersecurity.',
    company: 'Brightline Legal',
    visitor: 'Do you offer IT support for small offices?',
    q1: { field: 'Team size', text: 'We do. How many people would need support?', options: ['Under 20', '20 to 100', 'Over 100'], pick: 1 },
    q2: { field: 'Scope', text: 'Thanks. Do you need help with devices, cloud and email, or both?', options: ['Devices', 'Cloud and email', 'Both'], pick: 2 },
    asks: ['Team size and sites', 'Current setup', 'Support hours needed'],
    whatsapp: {
      ask: 'We also have a second office. Can that be covered?',
      reply: 'Hi Alex, I have your details from the website chat: 20 to 100 people, devices plus cloud and email. I have added the second office to your request so the team can plan for both sites on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'software',
    group: 'b2b',
    slug: 'software-and-saas',
    agent: 'Sales',
    topics: ['team', 'goals', 'timeline'],
    services: "I can help you explore features, integrations, pricing, security reviews, and a demo for your team.",
    ready: "Thanks, that's what the team needs to plan your demo.",
    event: 'Product Demo',
    label: 'Software',
    name: 'Software and SaaS',
    who: 'Demo requests, trials and enterprise plans.',
    company: 'Lumen Freight',
    visitor: 'Can our sales team try this?',
    q1: { field: 'Seats', text: 'Of course. How many people would use it?', options: ['1 to 10', '11 to 50', 'More than 50'], pick: 1 },
    q2: { field: 'Priority', text: 'What matters most to your team right now?', options: ['Pricing', 'Integrations', 'Security review'], pick: 1 },
    asks: ['Seats and team size', 'Must have integrations', 'Buying timeline'],
    whatsapp: {
      ask: 'Can we bring our IT lead to the demo?',
      reply: 'Hi Alex, of course. I have your details from the website chat: a team of 11 to 50, focused on integrations. I have let the team know your IT lead is joining the demo on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'wholesale',
    group: 'b2b',
    slug: 'manufacturing-and-wholesale',
    agent: 'Wholesale',
    topics: ['product', 'volume', 'order'],
    services: "I can help you explore bulk pricing, custom printing, samples, lead times, and delivery.",
    ready: "Thanks, that's what the team needs to prepare your quote.",
    event: 'Quote Call',
    label: 'Wholesale',
    name: 'Manufacturing and wholesale',
    who: 'Bulk orders, distributors and custom quotes.',
    company: 'Harbor Foods',
    visitor: 'I need a bulk quote for packaging boxes',
    q1: { field: 'Volume', text: 'Happy to quote. Roughly how many boxes a month?', options: ['Under 5,000', '5,000 to 50,000', 'Over 50,000'], pick: 1 },
    q2: { field: 'Printing', text: 'Do you need custom printing on the boxes?', options: ['Plain boxes', 'Printed logo', 'Fully custom design'], pick: 1 },
    asks: ['Monthly volume', 'Specs and customisation', 'Delivery location'],
    whatsapp: {
      ask: 'Can you send samples before the call?',
      reply: 'Hi Alex, I have your brief from the website chat: 5,000 to 50,000 boxes a month with a printed logo. I have passed the sample request to the team, and they will confirm it before your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'agency',
    group: 'b2b',
    slug: 'agencies-and-consulting',
    agent: 'Studio',
    topics: ['business', 'goals', 'project'],
    services: "I can help you explore websites, SEO, paid ads, branding, and content.",
    ready: "Thanks, that's what the team needs to scope it.",
    event: 'Discovery Call',
    label: 'Agencies',
    name: 'Agencies and consulting',
    who: 'Marketing, design, development and advisory.',
    company: 'Oakridge Clinics',
    visitor: 'We want to redo our website and SEO',
    q1: { field: 'Scope', text: 'Sounds good. What would you like to start with?', options: ['New website', 'SEO', 'Both together'], pick: 2 },
    q2: { field: 'Start', text: 'And when would you like to start?', options: ['This month', 'Next quarter', 'Just exploring'], pick: 0 },
    asks: ['Scope of work', 'Budget range', 'Start date'],
    whatsapp: {
      ask: 'Here is our current site. Is a full rebuild needed?',
      reply: 'Hi Alex, thanks. I have your brief from the website chat: a new website and SEO, starting this month. I have added your site to it, and the team will answer that on your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'property',
    group: 'services',
    slug: 'real-estate',
    agent: 'Property',
    topics: ['home', 'budget', 'move'],
    services: "I can help you explore homes for sale, rentals, new projects, office space, and site visits.",
    ready: "Thanks, that's what the team needs to shortlist homes.",
    event: 'Site Visit Call',
    label: 'Real estate',
    name: 'Real estate',
    who: 'Homes, rentals, new developments and office space.',
    company: '',
    visitor: 'Looking for a 3 bedroom apartment',
    q1: { field: 'Buy or rent', text: 'Great. Are you looking to buy or rent?', options: ['Buy', 'Rent', 'Not sure yet'], pick: 0 },
    q2: { field: 'Move in', text: 'When do you want to move in?', options: ['Within 3 months', '3 to 6 months', 'Just exploring'], pick: 1 },
    asks: ['Buy or rent', 'Area and budget', 'Move in date'],
    whatsapp: {
      ask: 'Can I see the flats this weekend?',
      reply: 'Hi Alex, I have your brief from the website chat: a 3 bedroom apartment to buy, moving in 3 to 6 months. The team will offer viewing slots for this weekend on your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'retail',
    group: 'services',
    slug: 'offline-retail',
    agent: 'Store',
    topics: ['space', 'style', 'budget'],
    services: "I can help you explore sofas, beds, dining sets, store visits, and delivery.",
    ready: "Thanks, that's what the team needs to help you choose.",
    event: 'Product Consultation',
    label: 'Retail',
    name: 'Offline retail stores',
    who: 'Furniture, jewellery, eyewear and other stores with walk in shoppers.',
    company: '',
    visitor: 'Do you have the Aria sofa in grey?',
    q1: { field: 'Store', text: 'We do. Which store is closest to you?', options: ['City centre', 'North mall', 'Either one'], pick: 0 },
    q2: { field: 'Timeline', text: 'When are you planning to buy?', options: ['This week', 'This month', 'Just browsing'], pick: 1 },
    asks: ['Product and store', 'Budget', 'Buying timeline'],
    whatsapp: {
      ask: 'Can I see it in person this weekend?',
      reply: 'Hi Alex, I have your details from the website chat: the grey Aria sofa at the city centre store. I have let the store team know, and they will confirm a time for your visit on your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'education',
    group: 'services',
    slug: 'education',
    agent: 'Admissions',
    topics: ['course', 'goals', 'start date'],
    services: "I can help you explore courses, eligibility, fees, intakes, and campus visits.",
    ready: "Thanks, that's what the admissions team needs.",
    event: 'Admissions Counselling',
    label: 'Education',
    name: 'Schools, colleges and training',
    who: 'Admissions, courses and professional training.',
    company: '',
    visitor: 'I want to know about the MBA programme',
    q1: { field: 'Format', text: 'Happy to help. Would you study full time, part time or online?', options: ['Full time', 'Part time', 'Online'], pick: 1 },
    q2: { field: 'Intake', text: 'And when would you like to start?', options: ['Next intake', 'Later this year', 'Just exploring'], pick: 0 },
    asks: ['Course and format', 'Intake', 'Eligibility'],
    whatsapp: {
      ask: 'Can you send the fee structure?',
      reply: 'Hi Alex, I have your details from the website chat: the part time MBA, starting next intake. I have passed your fee question to the admissions team, and they will go through it on your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'events',
    group: 'services',
    slug: 'events-and-webinars',
    agent: 'Events',
    topics: ['event', 'guests', 'date'],
    services: "I can help you explore venues, packages, catering, sign ups, and dates.",
    ready: "Thanks, that's what the team needs to plan it.",
    event: 'Event Planning Call',
    label: 'Events',
    name: 'Events and webinars',
    who: 'Venues, event planners, conferences and webinars.',
    company: 'Lumen Freight',
    visitor: 'We want to host a product launch',
    q1: { field: 'Guests', text: 'Exciting! Roughly how many guests?', options: ['Under 50', '50 to 200', 'Over 200'], pick: 1 },
    q2: { field: 'Date', text: 'Do you have a date in mind?', options: ['This month', 'In 1 to 3 months', 'Not decided'], pick: 1 },
    asks: ['Event type', 'Guest count', 'Date and budget'],
    whatsapp: {
      ask: 'Can you also handle catering?',
      reply: 'Hi Alex, I have your brief from the website chat: a product launch for 50 to 200 guests in the next 1 to 3 months. I have added catering to it, and the team will cover options on your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'travel',
    group: 'services',
    slug: 'travel-and-hospitality',
    agent: 'Travel',
    topics: ['trip', 'group', 'dates'],
    services: "I can help you explore packages, stays, group trips, transfers, and dates.",
    ready: "Thanks, that's what the team needs to plan your trip.",
    event: 'Trip Planning Call',
    label: 'Travel',
    name: 'Travel and hospitality',
    who: 'Tour operators, hotels, resorts and group travel.',
    company: 'Brightline Legal',
    visitor: 'Planning a team offsite for 30 people',
    q1: { field: 'Dates', text: 'Lovely. When are you planning to travel?', options: ['This month', 'In 1 to 3 months', 'Later this year'], pick: 1 },
    q2: { field: 'Package', text: 'What should we take care of?', options: ['Stay only', 'Stay and transfers', 'Everything planned'], pick: 2 },
    asks: ['Group size', 'Travel dates', 'What to include'],
    whatsapp: {
      ask: 'Can we add a beach day to the plan?',
      reply: 'Hi Alex, I have your brief from the website chat: 30 people, travelling in 1 to 3 months, with everything planned. I have added the beach day, and the team will include it in the plan they share on your call on Wednesday at 2:00 pm.',
    },
  },
  {
    id: 'finance',
    group: 'services',
    slug: 'finance-and-insurance',
    agent: 'Advisor',
    topics: ['business', 'cover', 'goals'],
    services: "I can help you explore business insurance, health cover, loans, renewals, and advisor calls.",
    ready: "Thanks, that's what the advisor needs to prepare.",
    event: 'Advisor Call',
    label: 'Finance',
    name: 'Finance and insurance',
    who: 'Insurance brokers, lenders, advisers and fintech.',
    company: 'Harbor Foods',
    visitor: 'I need insurance for my company',
    q1: { field: 'Team size', text: 'Happy to help. How many employees do you have?', options: ['Under 10', '10 to 50', 'Over 50'], pick: 1 },
    q2: { field: 'Cover', text: 'Which cover are you looking for?', options: ['Property', 'Liability', 'Employee health'], pick: 2 },
    asks: ['Type of cover', 'Team or asset size', 'Renewal date'],
    whatsapp: {
      ask: 'Our current policy renews next month. Can you help?',
      reply: 'Hi Alex, I have your details from the website chat: employee health cover for 10 to 50 people. I have noted the renewal date, and the advisor will compare options with you on your call on Wednesday at 2:00 pm.',
    },
  },
];

export const B2B_STEPS = [
  { id: 'answer', title: 'Answer every enquiry', text: 'Replies to visitors in seconds, day or night, in the language they write in.' },
  { id: 'qualify', title: 'Ask your questions', text: 'Asks what your sales team needs to know, with tap options that answer in one tap.' },
  { id: 'capture', title: 'Collect contact details', text: 'Name, company, phone and work email, inside the chat. No separate form page.' },
  { id: 'book', title: 'Book the call', text: 'Offers open times and books the call. The invite lands in their email.' },
];

export const B2B_SWITCH = [
  { before: 'Button menus that break the moment someone types a real question.', after: 'Understands free text, then guides with tap options where they help.' },
  { before: 'The website chat and WhatsApp ask the same questions twice.', after: 'One memory of every lead across your website and WhatsApp.' },
  { before: 'Leads wait in a sheet until someone follows up by hand.', after: 'Details, answers and the booked call reach your team together.' },
];

export const B2B_FAQS = [
  {
    q: 'Does YourLio work if my website is not on Shopify?',
    a: 'Yes. The same agent that runs on Shopify stores also runs on custom built websites, WooCommerce, Magento and BigCommerce. Our team helps you add it to your site.',
  },
  {
    q: 'Can it ask our own qualifying questions?',
    a: 'Yes. You decide what the agent needs to know before a call, such as team size, budget, location or timeline. It asks with tap options, and visitors can still type freely.',
  },
  {
    q: 'Can visitors book a sales call inside the chat?',
    a: 'Yes. After collecting their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email and can reschedule from it.',
  },
  {
    q: 'Does it work on WhatsApp too?',
    a: 'Yes. Connect your WhatsApp Business number and the same agent answers enquiries there, with the same memory of each lead. You can also send WhatsApp campaigns and let the agent handle the replies.',
  },
  {
    q: 'Do I need to build chatbot or WhatsApp flows?',
    a: 'No flow trees to draw. You set the questions and the goal, such as a booked call or a quote request, and the agent runs the conversation. It still uses tap options and forms where they make answering faster.',
  },
  {
    q: 'Can my sales team take over a conversation?',
    a: 'Yes. Every conversation sits in the shared inbox, so a rep can step in at any point. Visitors can also ask to talk to an expert.',
  },
  {
    q: 'Which languages does it support?',
    a: 'Visitors can write in their own language and the agent replies in it.',
  },
  {
    q: 'How is YourLio priced for B2B?',
    a: 'Pricing depends on your conversation volume and the channels you use. Book a demo and we will quote for your setup.',
  },
];

/* One page per industry at /industries/<slug>, built from the same
   sections as the home page. Each carries its own search title and description, hero copy and
   three questions specific to that business, followed by the shared ones in
   B2B_SHARED_FAQS. `photo` is the team section picture and `og` the page's
   1200 x 630 share card; content/IMAGES.md says how both were made. */
export const B2B_PAGES = {
  security: {
    photo: { src: '/images/security-av-installer-lead-qualification.webp', alt: 'Security systems consultant with a tablet checking a ceiling CCTV camera in an office lobby' },
    og: '/images/security-av-installer-lead-qualification-og.jpg',
    audience: 'security and AV installers',
    title: 'AI Chatbot for Security and AV Installers | YourLio',
    description: 'Qualify CCTV, access control and AV enquiries on your website and WhatsApp. YourLio asks about the site, collects contact details and books the survey call.',
    h1: 'Turn CCTV and access control enquiries into booked survey calls.',
    lead: 'The agent asks about the site, coverage and features, collects contact details and books the call on your website and WhatsApp. Your estimators start the first call already knowing the job.',
    faqs: [
      { q: 'What does the agent ask security and CCTV leads?', a: 'The questions your estimators need before a survey: the type of site, which areas need coverage, whether they want recording or recognition features, and when they want it installed. You choose the questions, and visitors answer with one tap or in their own words.' },
      { q: 'Can it book a site survey call?', a: 'Yes. Once the visitor has shared their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email and can reschedule from it.' },
      { q: 'Can it handle alarm, access control and AV enquiries too?', a: 'Yes. Tell the agent about each service you offer, such as cameras, access control, alarms or meeting room AV, and it asks questions that fit the enquiry in front of it.' },
    ],
  },
  it: {
    photo: { src: '/images/it-managed-services-lead-qualification.webp', alt: 'IT account manager at a desk with two monitors and a network cabinet behind him' },
    og: '/images/it-managed-services-lead-qualification-og.jpg',
    audience: 'IT and managed service providers',
    title: 'AI Chatbot for IT and Managed Service Providers | YourLio',
    description: 'Qualify managed IT, cloud and cybersecurity enquiries on your website and WhatsApp. YourLio asks about team size and setup, then books the call.',
    h1: 'Qualify managed IT enquiries before the first call.',
    lead: 'The agent asks about team size, sites and current setup, collects contact details and books a call with your team, on your website and WhatsApp. Your first call starts with the brief, not the basics.',
    faqs: [
      { q: 'What does the agent ask IT services leads?', a: 'What your team needs to scope the work: how many people need support, how many sites, what they run today and whether they need help with devices, cloud and email, or security. You choose the questions.' },
      { q: 'Can existing clients use the same chat for support?', a: 'Yes. The agent answers questions from existing clients too, and your team can take over any conversation from the shared inbox.' },
      { q: 'Can it book a discovery call with our team?', a: 'Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the visitor by email.' },
    ],
  },
  software: {
    photo: { src: '/images/saas-demo-booking-chatbot.webp', alt: 'Software account executive presenting a product demo on a laptop video call' },
    og: '/images/saas-demo-booking-chatbot-og.jpg',
    audience: 'software and SaaS teams',
    title: 'AI Chatbot for SaaS Lead Qualification and Demos | YourLio',
    description: 'Qualify SaaS leads on your website and WhatsApp. YourLio answers product questions, asks about seats, integrations and timeline, then books the demo.',
    h1: 'Book demos with the accounts that fit.',
    lead: 'The agent answers product questions, asks about team size, must have integrations and timeline, and books the demo in the chat. Your sales team sees every answer before the call.',
    faqs: [
      { q: 'Can it answer product questions before booking a demo?', a: 'Yes. It answers from what you tell it about your product, plans and integrations, then moves the visitor toward a demo when they are ready.' },
      { q: 'What does it ask before a SaaS demo?', a: 'Whatever your team uses to qualify: how many people would use it, which integrations they need, what matters most right now and when they plan to decide. Visitors answer with one tap or in their own words.' },
      { q: 'Does it replace our demo request form?', a: 'It can sit alongside the form or replace it. The agent collects the same details in the chat and books the demo without a separate form page.' },
    ],
  },
  wholesale: {
    photo: { src: '/images/manufacturing-wholesale-bulk-quote-chatbot.webp', alt: 'Wholesale sales manager in a safety vest checking an order on a tablet beside boxes in a warehouse' },
    og: '/images/manufacturing-wholesale-bulk-quote-chatbot-og.jpg',
    audience: 'manufacturers and wholesalers',
    title: 'AI Chatbot for Manufacturers and Wholesalers | YourLio',
    description: 'Collect bulk quote requests on your website and WhatsApp. YourLio asks about volume, specs and delivery, captures contact details and books the quote call.',
    h1: 'Turn bulk enquiries into complete quote requests.',
    lead: 'The agent asks about volume, specifications and delivery, collects contact details and books a call with sales, on your website and WhatsApp. No more back and forth just to get the basics.',
    faqs: [
      { q: 'What does it ask before a bulk quote?', a: 'The details your sales team prices from: monthly volume, product specifications or customisation, delivery location and timeline. You choose the questions, and buyers answer with one tap or in their own words.' },
      { q: 'Can it reply to buyers on WhatsApp?', a: 'Yes. Connect your WhatsApp Business number and the same agent answers buyer enquiries there, with the same memory of each lead as your website chat.' },
      { q: 'Can it handle distributor and reseller enquiries?', a: 'Yes. Add the questions you ask distributors, such as region and expected volume, and the agent asks them when a visitor wants to resell your products.' },
    ],
  },
  agency: {
    photo: { src: '/images/agency-discovery-call-chatbot.webp', alt: 'Agency strategist thinking in front of a wall of website wireframe sketches' },
    og: '/images/agency-discovery-call-chatbot-og.jpg',
    audience: 'agencies and consultancies',
    title: 'AI Chatbot for Agencies and Consultancies | YourLio',
    description: 'Qualify project enquiries on your website and WhatsApp. YourLio asks about scope, budget and start date, then books the discovery call in the chat.',
    h1: 'Turn project briefs into booked discovery calls.',
    lead: 'The agent asks about scope, budget and timing, collects contact details and books a discovery call, on your website and WhatsApp. Your first call starts with the brief, not the basics.',
    faqs: [
      { q: 'Can it ask about budget without putting people off?', a: 'Yes. Offer budget ranges as tap options so visitors answer in one tap, or let them type an answer in their own words. The agent keeps the tone you set.' },
      { q: 'Can it qualify enquiries for different services?', a: 'Yes. Tell the agent about each service you offer, such as websites, SEO, paid ads or branding, and it asks questions that fit what the visitor needs.' },
      { q: 'Can it book a discovery call?', a: 'Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the visitor by email.' },
    ],
  },
  property: {
    photo: { src: '/images/real-estate-lead-qualification-chatbot.webp', alt: 'Real estate agent showing a couple around a bright apartment with a city view' },
    og: '/images/real-estate-lead-qualification-chatbot-og.jpg',
    audience: 'real estate teams',
    title: 'AI Chatbot for Real Estate Lead Qualification | YourLio',
    description: 'Qualify buyers, renters and office enquiries on your website and WhatsApp. YourLio asks about budget, area and move in date, then books the site visit call.',
    h1: 'Turn property enquiries into booked site visit calls.',
    lead: 'The agent asks whether they want to buy or rent, their area, budget and move in date, collects contact details and books a call with your team, on your website and WhatsApp.',
    faqs: [
      { q: 'What does it ask property leads?', a: 'What your team needs to shortlist: buy or rent, preferred area, budget and move in date. You choose the questions, and visitors answer with one tap or in their own words.' },
      { q: 'Can it book site visits?', a: 'It books a call with your team in the chat, and the visitor gets the invite by email. Your team confirms the site visit on that call.' },
      { q: 'Can it handle office and commercial enquiries too?', a: 'Yes. Tell the agent about each type of property you offer and it asks questions that fit what the visitor is looking for.' },
    ],
  },
  retail: {
    photo: { src: '/images/retail-store-whatsapp-chatbot.webp', alt: 'Furniture store assistant helping a shopper choose a grey sofa' },
    og: '/images/retail-store-whatsapp-chatbot-og.jpg',
    audience: 'retail stores',
    title: 'AI Chatbot and WhatsApp for Retail Stores | YourLio',
    description: 'Answer stock and store questions on your website and WhatsApp, book product consultations, and invite past shoppers back with WhatsApp campaigns.',
    h1: 'Turn store enquiries into visits and repeat buyers.',
    lead: 'The agent answers stock and store questions, collects contact details and books a call with your team, on your website and WhatsApp. Then bring shoppers back with WhatsApp campaigns that reply.',
    faqs: [
      { q: 'Can it answer questions about stock and store timings?', a: 'Yes. It answers from what you tell it about your products, stores and timings, and hands anything it cannot answer to your team.' },
      { q: 'Can it bring past shoppers back to the store?', a: 'Yes. Send WhatsApp campaigns to your contacts, such as new arrivals or a store event, and the agent handles every reply.' },
      { q: 'Can shoppers book a call with a product expert?', a: 'Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the shopper by email.' },
    ],
  },
  education: {
    photo: { src: '/images/education-admissions-chatbot.webp', alt: 'Admissions counsellor talking with a student and parent in a college office' },
    og: '/images/education-admissions-chatbot-og.jpg',
    audience: 'schools and colleges',
    title: 'AI Chatbot for Admissions and Education | YourLio',
    description: 'Answer admission questions on your website and WhatsApp. YourLio asks about the course and intake, collects contact details and books the counselling call.',
    h1: 'Answer admission questions and book counselling calls.',
    lead: 'The agent answers questions about courses, eligibility and fees, asks about format and intake, and books a call with your admissions team, on your website and WhatsApp.',
    faqs: [
      { q: 'Can it answer questions about courses and fees?', a: 'Yes. It answers from what you tell it about your courses, eligibility, fees and intakes, and hands anything it cannot answer to your admissions team.' },
      { q: 'Can it book counselling calls with our admissions team?', a: 'Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the student by email.' },
      { q: 'Can students and parents ask questions on WhatsApp?', a: 'Yes. Connect your WhatsApp Business number and the same agent answers there, with the same memory of each enquiry as your website chat.' },
    ],
  },
  events: {
    photo: { src: '/images/events-webinar-lead-chatbot.webp', alt: 'Event planner with a tablet walking through a conference hall set up for a launch' },
    og: '/images/events-webinar-lead-chatbot-og.jpg',
    audience: 'event and webinar teams',
    title: 'AI Chatbot for Events, Venues and Webinars | YourLio',
    description: 'Qualify event enquiries on your website and WhatsApp. YourLio asks about guests, date and budget, books the planning call, and helps you remind guests.',
    h1: 'Turn event enquiries into booked planning calls.',
    lead: 'The agent asks about the event, guest count and date, collects contact details and books a planning call, on your website and WhatsApp. Then keep guests informed with WhatsApp campaigns.',
    faqs: [
      { q: 'What does it ask before an event planning call?', a: 'What your planners need to quote: the type of event, guest count, date and budget. You choose the questions, and visitors answer with one tap or in their own words.' },
      { q: 'Can it send event reminders on WhatsApp?', a: 'Yes. Send WhatsApp campaigns to your guest list, such as reminders before the event, and the agent answers every reply.' },
      { q: 'Can it collect webinar sign ups?', a: 'Yes. The agent collects name, work email and phone in the chat, and the details land in your shared inbox for your team to follow up.' },
    ],
  },
  travel: {
    photo: { src: '/images/travel-hospitality-enquiry-chatbot.webp', alt: 'Resort concierge planning a trip with a guest over a map at the lobby desk' },
    og: '/images/travel-hospitality-enquiry-chatbot-og.jpg',
    audience: 'travel and hospitality teams',
    title: 'AI Chatbot for Travel and Hospitality | YourLio',
    description: 'Turn trip and stay enquiries into booked planning calls. YourLio asks about dates, group size and what to include, on your website and WhatsApp.',
    h1: 'Turn trip enquiries into booked planning calls.',
    lead: 'The agent asks about dates, group size and what to include, collects contact details and books a call with your travel team, on your website and WhatsApp.',
    faqs: [
      { q: 'What does it ask travellers before a planning call?', a: 'What your team needs to plan: travel dates, group size, destination and what to include, such as stays, transfers or activities. You choose the questions.' },
      { q: 'Can it answer questions about packages and stays?', a: 'Yes. It answers from what you tell it about your packages, stays and policies, and hands anything it cannot answer to your team.' },
      { q: 'Can travellers message on WhatsApp?', a: 'Yes. Connect your WhatsApp Business number and the same agent answers there, with the same memory of each traveller as your website chat.' },
    ],
  },
  finance: {
    photo: { src: '/images/finance-insurance-lead-qualification.webp', alt: 'Insurance adviser reviewing business cover options on a tablet with a client' },
    og: '/images/finance-insurance-lead-qualification-og.jpg',
    audience: 'finance and insurance teams',
    title: 'AI Chatbot for Finance and Insurance | YourLio',
    description: 'Qualify insurance and finance enquiries on your website and WhatsApp. YourLio asks about cover and size, collects contact details and books the advisor call.',
    h1: 'Qualify cover enquiries and book advisor calls.',
    lead: 'The agent asks about the type of cover, team size and renewal dates, collects contact details and books a call with an advisor, on your website and WhatsApp.',
    faqs: [
      { q: 'What does it ask before an advisor call?', a: 'What your advisors need to prepare: the type of cover or product, team or asset size, and renewal dates. You choose the questions.' },
      { q: 'Does the agent give financial advice?', a: 'No. It answers general questions from the information you provide, collects the details your advisors need and books the call. Advice stays with your licensed team.' },
      { q: 'Can it remind clients about renewals on WhatsApp?', a: 'Yes. Send WhatsApp campaigns to your clients, such as renewal reminders, and the agent answers every reply.' },
    ],
  },
};

/* Imagery for the home page. `photo` is the team section picture and `og`
   its 1200 x 630 share card; content/IMAGES.md says how both were made. */
export const B2B_HUB = {
  photo: { src: '/images/b2b-sales-team-lead-qualification.webp', alt: 'Sales manager with a headset reading a new lead on a laptop in a modern office' },
  og: '/images/b2b-sales-team-lead-qualification-og.jpg',
};

// The general answers every industry page repeats after its own three.
const SHARED_FAQ_QUESTIONS = [
  'Does YourLio work if my website is not on Shopify?',
  'Does it work on WhatsApp too?',
  'Do I need to build chatbot or WhatsApp flows?',
  'Can my sales team take over a conversation?',
  'How is YourLio priced for B2B?',
];
export const B2B_SHARED_FAQS = SHARED_FAQ_QUESTIONS.map(q => B2B_FAQS.find(faq => faq.q === q));

// The B2B businesses the home page demo's business picker offers.
export const B2B_HUB_INDUSTRIES = B2B_INDUSTRIES.filter(item => item.group === 'b2b');

export function getB2BIndustryPage(slug) {
  const industry = B2B_INDUSTRIES.find(item => item.slug === slug);
  if (!industry) return null;
  const page = B2B_PAGES[industry.id];
  return { industry, ...page, path: `/industries/${slug}`, faqs: [...page.faqs, ...B2B_SHARED_FAQS] };
}

/* Search title and description for the home page. */
export const HOME_SEO = {
  title: 'AI Chatbot and WhatsApp Lead Qualification for Business | YourLio',
  description: 'Qualify leads on your website and WhatsApp. YourLio asks your qualifying questions, collects contact details and books the sales call in the chat.',
};
