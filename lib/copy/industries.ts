/* Copy for the industry pages of YourLio for business (business.yourlio.com),
   for businesses that sell through a conversation: a call, a quote, a site
   visit or an appointment.

   Every entry drives the same sample chat: the visitor asks, the agent asks
   two qualifying questions with tap options, collects contact details in the
   chat and books the call. The WhatsApp follow up shows the shared memory:
   the lead is not asked again.

   The B2B entries, and the retail, education and travel overviews, reuse the
   copy from the earlier site (src/data/industries.js on main). Healthcare
   entries book appointments and answer practical questions only; they never
   give medical advice. Sample details only: no customer or brand is named. */

export type IndustryCopy = {
  slug: string;
  name: string;
  parent?: string;
  group: "Retail" | "Education" | "Healthcare" | "Professional Services" | "Automotive" | "Travel" | "B2B";
  icon: "Store" | "GraduationCap" | "Stethoscope" | "Briefcase" | "Car" | "Plane" | "Building2";
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  agentName: string;
  visitor: string;
  q1: { field: string; text: string; options: string[]; pick: number };
  q2: { field: string; text: string; options: string[]; pick: number };
  booked: string;
  asks: string[];
  followUp: { ask: string; reply: string };
  stages: { capture: string; convert: string; retain: string };
  faqs: { q: string; a: string }[];
  photo?: string;
};

export const INDUSTRY_COPY: IndustryCopy[] = [
  /* ---------------------------------------------------------------- */
  /* Retail                                                            */
  /* ---------------------------------------------------------------- */
  {
    slug: "retail",
    name: "Retail",
    group: "Retail",
    icon: "Store",
    seoTitle: "AI Chatbot and WhatsApp for Retail Stores | YourLio",
    seoDescription:
      "Answer stock and store questions on your website and WhatsApp, book product consultations, and invite past shoppers back with WhatsApp campaigns.",
    h1: "Turn store enquiries into visits and repeat buyers.",
    lead: "The agent answers stock and store questions, collects contact details and books a call with your team, on your website and WhatsApp. Then bring shoppers back with WhatsApp campaigns that reply.",
    agentName: "Store",
    visitor: "Do you have the Aria sofa in grey?",
    q1: { field: "Store", text: "We do. Which store is closest to you?", options: ["City centre", "North mall", "Either one"], pick: 0 },
    q2: { field: "Timeline", text: "When are you planning to buy?", options: ["This week", "This month", "Just browsing"], pick: 1 },
    booked: "Product Consultation",
    asks: ["Product and store", "Budget", "Buying timeline"],
    followUp: {
      ask: "Can I see it in person this weekend?",
      reply: "Hi Alex, I have your details from the website chat: the grey Aria sofa at the city centre store. I have let the store team know, and they will confirm a time for your visit on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Shoppers ask about stock, prices and store timings on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks which store suits them and when they plan to buy, collects contact details and books a product consultation with your team.",
      retain: "Send WhatsApp campaigns for new arrivals or a store event, and the agent answers every reply. It remembers what each shopper asked on your website, so nobody is asked twice.",
    },
    faqs: [
      { q: "Can it answer questions about stock and store timings?", a: "Yes. It answers from what you tell it about your products, stores and timings, and hands anything it cannot answer to your team." },
      { q: "Can it bring past shoppers back to the store?", a: "Yes. Send WhatsApp campaigns to your contacts, such as new arrivals or a store event, and the agent handles every reply." },
      { q: "Can shoppers book a call with a product expert?", a: "Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the shopper by email." },
    ],
    photo: "/images/retail-store-whatsapp-chatbot.webp",
  },
  {
    slug: "electronics",
    name: "Electronics",
    parent: "retail",
    group: "Retail",
    icon: "Store",
    seoTitle: "AI Chatbot and WhatsApp for Electronics Stores | YourLio",
    seoDescription:
      "Answer model, stock and warranty questions on your website and WhatsApp. YourLio asks about budget and use, then books a call with a product expert.",
    h1: "Turn spec and stock questions into booked product calls.",
    lead: "The agent answers questions about models, stock and warranty, asks what the shopper needs and their budget, and books a call with a product expert on your website and WhatsApp. Your team starts the call knowing what the shopper is looking for.",
    agentName: "Tech Store",
    visitor: "Which laptop is best for video editing?",
    q1: { field: "Budget", text: "Happy to help you choose. What budget do you have in mind?", options: ["Entry-level", "Mid-range", "High-end"], pick: 1 },
    q2: { field: "Pickup", text: "Would you like to collect it in store or have it delivered?", options: ["Collect in store", "Home delivery", "Not sure yet"], pick: 0 },
    booked: "Product Expert Call",
    asks: ["Use and budget", "Preferred models", "Pickup or delivery"],
    followUp: {
      ask: "Do you take trade-ins for old laptops?",
      reply: "Hi Alex, I have your details from the website chat: a mid-range laptop for video editing, collected in store. I have added your old laptop to your request, and the team will go through trade-in options on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Shoppers compare models and ask about stock and prices on your website, WhatsApp, Instagram and Facebook, often late at night. The agent answers day or night.",
      convert: "The agent asks about budget and use, collects contact details and books a call with a product expert, so the shopper gets a clear answer before they buy.",
      retain: "Existing customers ask about warranty, setup and orders in the same chat. WhatsApp campaigns tell past buyers about new launches and accessories.",
    },
    faqs: [
      { q: "Can it answer spec and compatibility questions?", a: "Yes. It answers from what you tell it about your products, specs and stock, and hands anything it cannot answer to your team in the shared inbox." },
      { q: "Can customers ask about warranty and repairs in the same chat?", a: "Yes. Existing customers get answers in the same chat, from the warranty and repair details you provide, and your team can step in from the shared inbox at any point." },
      { q: "Can it tell past buyers about new launches?", a: "Yes. Send WhatsApp campaigns to your contacts, such as a new model or an accessory offer, and the agent handles every reply." },
    ],
  },
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    parent: "retail",
    group: "Retail",
    icon: "Store",
    seoTitle: "AI Chatbot and WhatsApp for Fashion Stores | YourLio",
    seoDescription:
      "Answer size, stock and store questions on your website, WhatsApp and Instagram. YourLio books styling calls and brings shoppers back with WhatsApp campaigns.",
    h1: "Answer size and stock questions where shoppers already message you.",
    lead: "The agent answers questions about sizes, stock and stores on your website, WhatsApp and Instagram, and books a styling call with your team. Then bring shoppers back for each new collection with WhatsApp campaigns.",
    agentName: "Boutique",
    visitor: "Is the linen blazer still in stock in medium?",
    q1: { field: "Occasion", text: "It is, in medium. What are you shopping for?", options: ["Work", "A wedding or event", "Everyday"], pick: 1 },
    q2: { field: "Fitting", text: "Would you like to try it on in store or get styling help on a call?", options: ["Try on in store", "Styling call", "Just browsing"], pick: 1 },
    booked: "Styling Call",
    asks: ["Item and size", "Occasion", "Store or delivery"],
    followUp: {
      ask: "Can you suggest trousers to match the blazer?",
      reply: "Hi Alex, I have your details from the website chat: the linen blazer in medium, for a wedding. I have added matching trousers to your request, and the stylist will bring options to your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Shoppers ask about sizes and stock in Instagram DMs, on WhatsApp and on your website. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent replies in the shopper's language, asks about size and occasion, collects contact details and books a styling call with your team.",
      retain: "Send WhatsApp campaigns for new collections and store events, and the agent answers every reply.",
    },
    faqs: [
      { q: "Can it answer size and fit questions?", a: "Yes. It answers from the size guides, stock and store details you provide, and hands anything it cannot answer to your team in the shared inbox." },
      { q: "Does it reply to Instagram DMs?", a: "Yes. The same agent answers on Instagram, Facebook, WhatsApp and your website, so a shopper who asks in a DM gets the same help as one on your site." },
      { q: "Can it tell shoppers about new collections?", a: "Yes. Send WhatsApp campaigns to your contacts, such as a new collection or a store event, and the agent handles every reply." },
    ],
  },
  {
    slug: "furniture",
    name: "Furniture",
    parent: "retail",
    group: "Retail",
    icon: "Store",
    seoTitle: "AI Chatbot and WhatsApp for Furniture Stores | YourLio",
    seoDescription:
      "Answer stock, size and delivery questions on your website and WhatsApp. YourLio asks about the rooms and budget, then books a design consultation.",
    h1: "Turn furniture enquiries into booked design consultations.",
    lead: "The agent answers questions about stock, sizes and delivery, asks about the rooms and budget, and books a consultation with your team on your website and WhatsApp. Your designers start the call knowing what the shopper needs.",
    agentName: "Furniture",
    visitor: "I'm furnishing a new apartment. Can you help?",
    q1: { field: "Rooms", text: "Happy to help. Which rooms are you furnishing?", options: ["Living room", "Bedroom", "Whole home"], pick: 2 },
    q2: { field: "Delivery", text: "And when do you need the furniture delivered?", options: ["This month", "In 1 to 3 months", "Just exploring"], pick: 1 },
    booked: "Design Consultation",
    asks: ["Rooms and style", "Budget", "Delivery date"],
    followUp: {
      ask: "Can someone measure the living room first?",
      reply: "Hi Alex, I have your brief from the website chat: furniture for the whole home, delivered in 1 to 3 months. I have added a home measure to your request, and the team will arrange a time on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Shoppers ask about sizes, materials and delivery on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the rooms, style and budget, collects contact details and books a design consultation, so your team plans before the shopper arrives.",
      retain: "Customers ask about delivery and care in the same chat. WhatsApp campaigns bring them back for new ranges and sale events.",
    },
    faqs: [
      { q: "Can it answer questions about sizes, materials and delivery?", a: "Yes. It answers from what you tell it about your products, delivery areas and timings, and hands anything it cannot answer to your team." },
      { q: "Can shoppers book a design consultation?", a: "Yes. After collecting contact details, the agent offers open times and books the consultation in the chat. The shopper gets a calendar invite by email and can reschedule from it." },
      { q: "Can it follow up with shoppers who have not bought yet?", a: "Yes. Send WhatsApp follow ups and campaigns, such as a sale or a new range, and the agent answers every reply with the memory of what each shopper asked before." },
    ],
    photo: "/images/retail-store-whatsapp-chatbot.webp",
  },
  {
    slug: "jewelry",
    name: "Jewelry and Watches",
    parent: "retail",
    group: "Retail",
    icon: "Store",
    seoTitle: "AI Chatbot and WhatsApp for Jewelry Stores | YourLio",
    seoDescription:
      "Answer questions about rings, watches and custom pieces on your website and WhatsApp. YourLio asks about the occasion and budget, then books a consultation.",
    h1: "Turn ring and watch enquiries into booked consultations.",
    lead: "The agent answers questions about pieces, stock and store timings, asks about the occasion and budget, and books a consultation on your website and WhatsApp. Your team meets each client already knowing what they are looking for.",
    agentName: "Concierge",
    visitor: "I'm looking for an engagement ring",
    q1: { field: "Style", text: "Congratulations! Do you have a style in mind?", options: ["Solitaire", "Halo", "Custom design"], pick: 2 },
    q2: { field: "Date", text: "Lovely. When do you need the ring?", options: ["Within a month", "In 1 to 3 months", "Just exploring"], pick: 1 },
    booked: "Private Consultation",
    asks: ["Piece and style", "Budget range", "Date needed"],
    followUp: {
      ask: "Can you also show me some wedding bands?",
      reply: "Hi Alex, I have your brief from the website chat: a custom engagement ring, needed in 1 to 3 months. I have added wedding bands to it, and the team will bring options to your consultation on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Shoppers ask about rings, watches and custom pieces on your website, WhatsApp, Instagram and Facebook, day or night.",
      convert: "The agent asks about the piece, the occasion and the budget, collects contact details and books a private consultation with your team.",
      retain: "Clients ask about sizing, servicing and repairs in the same chat. WhatsApp campaigns invite them back for new collections and store events.",
    },
    faqs: [
      { q: "Can it handle custom and bespoke enquiries?", a: "Yes. Add the questions your team asks about custom pieces, such as style, metal and budget, and the agent asks them when a client wants something made." },
      { q: "Can clients book a private consultation?", a: "Yes. After collecting contact details, the agent offers open times and books the consultation in the chat. The client gets a calendar invite by email and can reschedule from it." },
      { q: "Can existing clients ask about servicing and repairs?", a: "Yes. Existing clients get answers in the same chat, from the servicing and repair details you provide, and your team can step in from the shared inbox." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Education                                                         */
  /* ---------------------------------------------------------------- */
  {
    slug: "education",
    name: "Education",
    group: "Education",
    icon: "GraduationCap",
    seoTitle: "AI Chatbot for Admissions and Education | YourLio",
    seoDescription:
      "Answer admission questions on your website and WhatsApp. YourLio asks about the course and intake, collects contact details and books the counselling call.",
    h1: "Answer admission questions and book counselling calls.",
    lead: "The agent answers questions about courses, eligibility and fees, asks about format and intake, and books a call with your admissions team, on your website and WhatsApp. Your counsellors start the call knowing the course and the intake.",
    agentName: "Admissions",
    visitor: "I want to know about the MBA programme",
    q1: { field: "Format", text: "Happy to help. Would you study full time, part time or online?", options: ["Full time", "Part time", "Online"], pick: 1 },
    q2: { field: "Intake", text: "And when would you like to start?", options: ["Next intake", "Later this year", "Just exploring"], pick: 0 },
    booked: "Admissions Counselling",
    asks: ["Course and format", "Intake", "Eligibility"],
    followUp: {
      ask: "Can you send the fee structure?",
      reply: "Hi Alex, I have your details from the website chat: the part time MBA, starting next intake. I have passed your fee question to the admissions team, and they will go through it on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Students and parents ask about courses, fees and intakes on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the course, format and intake, collects contact details and books a counselling call with your admissions team.",
      retain: "Enrolled students get answers in the same chat. WhatsApp campaigns share intake dates, open days and reminders.",
    },
    faqs: [
      { q: "Can it answer questions about courses and fees?", a: "Yes. It answers from what you tell it about your courses, eligibility, fees and intakes, and hands anything it cannot answer to your admissions team." },
      { q: "Can it book counselling calls with our admissions team?", a: "Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the student by email." },
      { q: "Can students and parents ask questions on WhatsApp?", a: "Yes. Connect your WhatsApp Business number and the same agent answers there, with the same memory of each enquiry as your website chat." },
    ],
    photo: "/images/education-admissions-chatbot.webp",
  },
  {
    slug: "academic-tutoring",
    name: "Academic Tutoring",
    parent: "education",
    group: "Education",
    icon: "GraduationCap",
    seoTitle: "AI Chatbot and WhatsApp for Tutoring Businesses | YourLio",
    seoDescription:
      "Answer questions about subjects, levels and fees on your website and WhatsApp. YourLio asks about the student and goals, then books a tutor matching call.",
    h1: "Answer parent enquiries and book the tutor matching call.",
    lead: "The agent asks about the subject, level and goals, answers questions about fees and timings, and books a call with your team on your website and WhatsApp. Your team knows what the student needs before the first conversation.",
    agentName: "Tutoring",
    visitor: "My daughter needs help with chemistry before her exams",
    q1: { field: "Level", text: "Happy to help. Which level is she studying at?", options: ["Middle school", "High school", "University"], pick: 1 },
    q2: { field: "Format", text: "Would she prefer lessons in person or online?", options: ["In person", "Online", "Either works"], pick: 1 },
    booked: "Tutor Matching Call",
    asks: ["Subject and level", "Goals and exam dates", "Lesson format"],
    followUp: {
      ask: "Can she also get help with physics?",
      reply: "Hi Alex, I have your details from the website chat: high school chemistry, online lessons, ahead of her exams. I have added physics to the request, and the team will match tutors for both on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Parents and students ask about subjects, fees and timings on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the subject, level and goals, collects contact details and books a call to match the right tutor.",
      retain: "Enrolled families ask about schedules and fees in the same chat. WhatsApp campaigns share new terms, exam prep courses and reminders.",
    },
    faqs: [
      { q: "What does it ask parents before a tutor matching call?", a: "What your team needs to match a tutor: the subject, level, goals or exam dates, and whether lessons are in person or online. You choose the questions, and parents answer with one tap or in their own words." },
      { q: "Can it answer questions about fees and timings?", a: "Yes. It answers from what you tell it about your subjects, fees and schedules, and hands anything it cannot answer to your team." },
      { q: "Can parents message us on WhatsApp?", a: "Yes. Connect your WhatsApp Business number and the same agent answers there, with the same memory of each family as your website chat." },
    ],
  },
  {
    slug: "afterschool-activities",
    name: "Afterschool Activities",
    parent: "education",
    group: "Education",
    icon: "GraduationCap",
    seoTitle: "AI Chatbot for Afterschool Clubs and Classes | YourLio",
    seoDescription:
      "Answer parent questions about classes, ages and fees on your website and WhatsApp. YourLio books the trial class call and keeps families updated on WhatsApp.",
    h1: "Turn parent enquiries into booked trial class calls.",
    lead: "The agent answers questions about classes, ages, timings and fees, asks what the child enjoys, and books a call with your team on your website and WhatsApp. Then keep families informed about new terms with WhatsApp campaigns.",
    agentName: "Classes",
    visitor: "What activities do you have for a 7 year old?",
    q1: { field: "Interest", text: "We have a few. What does your child enjoy most?", options: ["Art and music", "Coding and robotics", "Sport and dance"], pick: 1 },
    q2: { field: "Days", text: "Which days work best for you?", options: ["Weekdays", "Weekends", "Either"], pick: 0 },
    booked: "Trial Class Call",
    asks: ["Child's age", "Interests", "Preferred days"],
    followUp: {
      ask: "Can my other child join the trial too?",
      reply: "Hi Alex, I have your details from the website chat: coding and robotics for your 7 year old, on weekdays. I have added your second child, and the team will offer trial class times for both on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Parents ask about classes, ages and fees on your website, WhatsApp, Instagram and Facebook, often in the evening. The agent answers day or night.",
      convert: "The agent asks about the child's age, interests and preferred days, collects contact details and books a call to arrange a trial class.",
      retain: "Enrolled families get answers about schedules and holidays in the same chat. WhatsApp campaigns share new terms, holiday camps and reminders.",
    },
    faqs: [
      { q: "What does it ask parents before a trial class?", a: "What your team needs to place the child: age, interests, preferred days and any questions about the class. You choose the questions, and parents answer with one tap or in their own words." },
      { q: "Can it answer questions about timings and fees?", a: "Yes. It answers from what you tell it about your classes, timings, fees and locations, and hands anything it cannot answer to your team." },
      { q: "Can it remind families about new terms and camps?", a: "Yes. Send WhatsApp campaigns to your families, such as a new term or a holiday camp, and the agent answers every reply." },
    ],
  },
  {
    slug: "sports-fitness",
    name: "Sport & Fitness",
    parent: "education",
    group: "Education",
    icon: "GraduationCap",
    seoTitle: "AI Chatbot for Gyms and Fitness Studios | YourLio",
    seoDescription:
      "Answer class, membership and timing questions on your website and WhatsApp. YourLio asks about goals and training times, then books the consultation.",
    h1: "Answer membership questions and book the first consultation.",
    lead: "The agent answers questions about classes, memberships and timings, asks about goals and when people like to train, and books a consultation on your website and WhatsApp. Then share new classes and offers with members through WhatsApp campaigns.",
    agentName: "Membership",
    visitor: "Do you have beginner classes?",
    q1: { field: "Goal", text: "We do. What is your main goal?", options: ["Get fitter", "Build strength", "Train for a sport"], pick: 0 },
    q2: { field: "Time", text: "When do you usually like to train?", options: ["Mornings", "Evenings", "Weekends"], pick: 1 },
    booked: "Fitness Consultation",
    asks: ["Goals", "Preferred times", "Membership type"],
    followUp: {
      ask: "Can I bring a friend to the first session?",
      reply: "Hi Alex, I have your details from the website chat: beginner classes to get fitter, training in the evenings. I have noted your friend, and the team will go through options for you both on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "People ask about classes, memberships and prices on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about goals and preferred times, collects contact details and books a consultation with your team.",
      retain: "Members ask about timetables and memberships in the same chat. WhatsApp campaigns share new classes, challenges and renewal reminders.",
    },
    faqs: [
      { q: "Can it answer questions about classes and memberships?", a: "Yes. It answers from what you tell it about your classes, timetables, memberships and locations, and hands anything it cannot answer to your team." },
      { q: "Can it reply to Instagram and Facebook messages?", a: "Yes. The same agent answers on Instagram, Facebook, WhatsApp and your website, and asks the same questions wherever the enquiry starts." },
      { q: "Can it remind members about renewals?", a: "Yes. Send WhatsApp campaigns to your members, such as renewal reminders or a new class, and the agent answers every reply." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Healthcare: practical answers and appointments, no medical advice */
  /* ---------------------------------------------------------------- */
  {
    slug: "healthcare",
    name: "Healthcare",
    group: "Healthcare",
    icon: "Stethoscope",
    seoTitle: "AI Chatbot and WhatsApp for Healthcare Clinics | YourLio",
    seoDescription:
      "Answer questions about services, timings, location and fees on your website and WhatsApp. YourLio books appointments in the chat, day or night.",
    h1: "Answer patient questions and book appointments, day or night.",
    lead: "The agent answers practical questions about services, timings, location and fees, and books appointments on your website, WhatsApp, Instagram and Facebook. It does not give medical advice, and your team can step in from the shared inbox at any point.",
    agentName: "Clinic",
    visitor: "Can I book a consultation this week?",
    q1: { field: "Service", text: "Of course. Which service do you need?", options: ["General consultation", "Dental", "Skin and beauty"], pick: 0 },
    q2: { field: "Time", text: "Which time of day suits you best?", options: ["Morning", "Afternoon", "Evening"], pick: 1 },
    booked: "Clinic Appointment",
    asks: ["Service needed", "New or returning patient", "Preferred time"],
    followUp: {
      ask: "Do I need to bring anything?",
      reply: "Hi Alex, I have your booking from the website chat: a general consultation on Wednesday at 2:00 pm. The clinic asks new patients to bring a photo ID and any recent reports.",
    },
    stages: {
      capture: "Patients ask about services, timings and fees on your website, WhatsApp, Instagram and Facebook. The agent answers in their language, day or night.",
      convert: "The agent asks your clinic's own intake questions, collects contact details and books the appointment. The patient gets a calendar invite by email.",
      retain: "Patients ask practical questions in the same chat after their visit. WhatsApp campaigns send check-up reminders and clinic updates.",
    },
    faqs: [
      { q: "Does the agent give medical advice?", a: "No. It answers practical questions from the information your clinic provides, such as services, timings, location and fees, and books appointments. Clinical questions go to your team." },
      { q: "Can patients book and reschedule appointments in the chat?", a: "Yes. The agent offers open times and books the appointment in the chat. The patient gets a calendar invite by email and can reschedule from it." },
      { q: "Can our front desk take over a conversation?", a: "Yes. Every conversation sits in the shared inbox, so your team can step in at any point." },
    ],
  },
  {
    slug: "beauty-center",
    name: "Beauty Center",
    parent: "healthcare",
    group: "Healthcare",
    icon: "Stethoscope",
    seoTitle: "AI Chatbot and WhatsApp for Beauty Centers | YourLio",
    seoDescription:
      "Answer questions about treatments, prices and timings on your website, WhatsApp and Instagram. YourLio books appointments and brings clients back.",
    h1: "Answer treatment questions and book appointments in the chat.",
    lead: "The agent answers questions about treatments, prices and timings on your website, WhatsApp and Instagram, and books the appointment in the chat. Then bring clients back for their next visit with WhatsApp campaigns.",
    agentName: "Bookings",
    visitor: "Do you have any facial slots this week?",
    q1: { field: "Treatment", text: "We do. Which facial are you interested in?", options: ["Classic facial", "Hydrating facial", "Help me choose"], pick: 1 },
    q2: { field: "Time", text: "Which time suits you this week?", options: ["Weekday morning", "Weekday afternoon", "Weekend"], pick: 1 },
    booked: "Facial Appointment",
    asks: ["Treatment", "Preferred time", "First visit or returning"],
    followUp: {
      ask: "Can I add a manicure after the facial?",
      reply: "Hi Alex, I have your booking from the website chat: a hydrating facial on Wednesday at 2:00 pm. I have passed the manicure request to the team, and they will confirm the extra time before your visit.",
    },
    stages: {
      capture: "Clients ask about treatments and prices in Instagram DMs, on WhatsApp and on your website. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent answers from your treatment menu, asks what the client wants and when, collects contact details and books the appointment.",
      retain: "Clients ask about their next visit in the same chat. WhatsApp campaigns share seasonal offers and reminders to rebook.",
    },
    faqs: [
      { q: "Can it answer questions about treatments and prices?", a: "Yes. It answers from the treatment menu, prices and timings you provide, and hands anything it cannot answer to your team. It does not give medical advice." },
      { q: "Can clients book appointments in the chat?", a: "Yes. The agent offers open times and books the appointment in the chat. The client gets a calendar invite by email and can reschedule from it." },
      { q: "Can it bring clients back for their next visit?", a: "Yes. Send WhatsApp campaigns to your clients, such as a seasonal offer or a reminder to rebook, and the agent handles every reply." },
    ],
  },
  {
    slug: "dental-clinic",
    name: "Dental Clinic",
    parent: "healthcare",
    group: "Healthcare",
    icon: "Stethoscope",
    seoTitle: "AI Chatbot and WhatsApp for Dental Clinics | YourLio",
    seoDescription:
      "Answer questions about treatments, timings and fees on your website and WhatsApp. YourLio collects patient details and books dental appointments in the chat.",
    h1: "Answer patient questions and book dental appointments in the chat.",
    lead: "The agent answers practical questions about treatments, timings, location and fees, and books the appointment on your website and WhatsApp. Clinical questions go to your team, who can step in from the shared inbox at any point.",
    agentName: "Reception",
    visitor: "Do you offer teeth whitening?",
    q1: { field: "Visit", text: "We do. Have you visited us before?", options: ["First visit", "Returning patient", "Booking for family"], pick: 0 },
    q2: { field: "Payment", text: "Thanks. Will you pay yourself or use insurance?", options: ["Self pay", "Insurance", "Not sure yet"], pick: 1 },
    booked: "New Patient Appointment",
    asks: ["Treatment of interest", "New or returning", "Payment or insurance"],
    followUp: {
      ask: "Can my partner book a check-up for the same day?",
      reply: "Hi Alex, I have your booking from the website chat: a first visit about teeth whitening, using insurance, on Wednesday at 2:00 pm. I can book your partner a check-up right after yours. What is their name?",
    },
    stages: {
      capture: "Patients ask about treatments, fees and timings on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks whether they are new, how they will pay and when suits them, collects contact details and books the appointment.",
      retain: "Patients ask practical questions in the same chat. WhatsApp campaigns send check-up and cleaning reminders.",
    },
    faqs: [
      { q: "Does the agent give dental advice?", a: "No. It answers practical questions from what your clinic provides, such as treatments offered, timings, location and fees, and books the appointment. Clinical questions go to your dentists." },
      { q: "Can patients book and reschedule in the chat?", a: "Yes. The agent offers open times and books the appointment in the chat. The patient gets a calendar invite by email and can reschedule from it." },
      { q: "Can it remind patients about check-ups?", a: "Yes. Send WhatsApp campaigns to your patients, such as a check-up or cleaning reminder, and the agent answers every reply and books the next visit." },
    ],
  },
  {
    slug: "medical-clinic",
    name: "Medical Clinic",
    parent: "healthcare",
    group: "Healthcare",
    icon: "Stethoscope",
    seoTitle: "AI Chatbot and WhatsApp for Medical Clinics | YourLio",
    seoDescription:
      "Answer questions about doctors, timings, location and fees on your website and WhatsApp. YourLio collects patient details and books the appointment.",
    h1: "Book clinic appointments on your website and WhatsApp, day or night.",
    lead: "The agent answers practical questions about doctors, timings, location and fees, collects patient details and books the appointment in the chat. It does not give medical advice, and your front desk can step in from the shared inbox.",
    agentName: "Front Desk",
    visitor: "Is a doctor available on Wednesday?",
    q1: { field: "Patient", text: "Let me check. Is the appointment for you or someone else?", options: ["For me", "For my child", "For a family member"], pick: 0 },
    q2: { field: "Time", text: "Which time on Wednesday suits you?", options: ["Morning", "Afternoon", "Evening"], pick: 1 },
    booked: "Doctor Appointment",
    asks: ["Who the visit is for", "Reason for visit", "Preferred doctor"],
    followUp: {
      ask: "Do I need to fast before the appointment?",
      reply: "Hi Alex, I have your booking from the website chat: an appointment for you on Wednesday at 2:00 pm. That is a question for the clinic team, so I have passed it on, and they will reply here before your visit.",
    },
    stages: {
      capture: "Patients ask about doctors, timings and fees on your website, WhatsApp, Instagram and Facebook, in their own language, day or night.",
      convert: "The agent asks who the visit is for and when suits them, collects contact details and books the appointment.",
      retain: "Patients get practical answers in the same chat after their visit. WhatsApp campaigns share appointment reminders and clinic updates.",
    },
    faqs: [
      { q: "What happens when a patient asks a medical question?", a: "The agent does not give medical advice. It passes the question to your team in the shared inbox, and only answers practical questions from what your clinic provides, such as timings, location and fees." },
      { q: "Can patients book for a family member?", a: "Yes. The agent asks who the appointment is for, collects the details your clinic needs and books it. The calendar invite goes out by email, and the patient can reschedule from it." },
      { q: "Can patients message the clinic on WhatsApp?", a: "Yes. Connect your WhatsApp Business number and the same agent answers there, with the same memory of each patient as your website chat." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Professional Services                                             */
  /* ---------------------------------------------------------------- */
  {
    slug: "professional-services",
    name: "Professional Services",
    group: "Professional Services",
    icon: "Briefcase",
    seoTitle: "AI Chatbot and WhatsApp for Professional Services | YourLio",
    seoDescription:
      "Qualify service enquiries on your website and WhatsApp. YourLio asks your qualifying questions, collects contact details and books the consultation call.",
    h1: "Turn service enquiries into booked consultation calls.",
    lead: "The agent answers questions about your services, asks what the client needs and when, and books a consultation with your team on your website and WhatsApp. Your team knows the job before the first call.",
    agentName: "Client Desk",
    visitor: "Do you do bookkeeping for small businesses?",
    q1: { field: "Business size", text: "We do. How many people work in the business?", options: ["Just me", "2 to 10", "Over 10"], pick: 1 },
    q2: { field: "Start", text: "And when would you like to start?", options: ["This month", "Next quarter", "Just comparing"], pick: 0 },
    booked: "Consultation Call",
    asks: ["Service needed", "Business size", "Start date"],
    followUp: {
      ask: "Can you also handle payroll?",
      reply: "Hi Alex, I have your details from the website chat: bookkeeping for a business of 2 to 10 people, starting this month. I have added payroll to your request, and the team will cover both on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Enquiries come in on your website, WhatsApp, Instagram and Facebook, and an AI voice agent can talk to leads on the phone. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the service, scope and timing, collects contact details and books a consultation, so your team scopes the work from a complete brief.",
      retain: "Existing clients get answers in the same chat. WhatsApp campaigns remind them about deadlines and renewals.",
    },
    faqs: [
      { q: "What does the agent ask before a consultation?", a: "What your team needs to scope the work: the service, the size of the job or business, and when they want to start. You choose the questions, and clients answer with one tap or in their own words." },
      { q: "Can it talk to leads on the phone?", a: "Yes. With AI calls, a voice agent talks to leads on the phone and qualifies them the same way it does in chat." },
      { q: "Can my team take over a conversation?", a: "Yes. Every conversation sits in the shared inbox, so anyone on your team can step in at any point." },
    ],
  },
  {
    slug: "home-cleaning-maid-services",
    name: "Home Cleaning & Maid Services",
    parent: "professional-services",
    group: "Professional Services",
    icon: "Briefcase",
    seoTitle: "AI Chatbot and WhatsApp for Cleaning Services | YourLio",
    seoDescription:
      "Answer cleaning enquiries on your website and WhatsApp. YourLio asks about home size and how often, collects contact details and books the quote call.",
    h1: "Answer cleaning enquiries and book the quote call, day or night.",
    lead: "The agent asks about the home, how often they need cleaning and when to start, collects contact details and books a call with your team on your website and WhatsApp. Your team quotes from a complete brief, not a one-line message.",
    agentName: "Cleaning",
    visitor: "Do you offer regular home cleaning?",
    q1: { field: "Home size", text: "We do. How big is your home?", options: ["Studio or 1 bedroom", "2 to 3 bedrooms", "4 bedrooms or more"], pick: 1 },
    q2: { field: "Frequency", text: "How often would you like a clean?", options: ["Weekly", "Every two weeks", "One-off deep clean"], pick: 0 },
    booked: "Cleaning Quote Call",
    asks: ["Home size", "How often", "Address and start date"],
    followUp: {
      ask: "Can you also clean the windows?",
      reply: "Hi Alex, I have your details from the website chat: a 2 to 3 bedroom home, cleaned weekly. I have added windows to your request, and the team will include them in your quote on the call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Homeowners ask about prices and availability on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about home size, frequency and start date, collects contact details and books a quote call with your team.",
      retain: "Regular clients ask questions in the same chat. WhatsApp campaigns offer deep cleans and seasonal extras to past clients.",
    },
    faqs: [
      { q: "What does it ask before a cleaning quote?", a: "What your team prices from: home size, how often they want cleaning, any extras such as windows or ovens, and the start date. You choose the questions." },
      { q: "Can regular clients message the same number?", a: "Yes. Existing clients get answers in the same chat, and your team can step in from the shared inbox for anything that needs a person." },
      { q: "Can it bring back one-off clients?", a: "Yes. Send WhatsApp campaigns to past clients, such as a seasonal deep clean, and the agent answers every reply." },
    ],
  },
  {
    slug: "photography-videography",
    name: "Photography & Videography",
    parent: "professional-services",
    group: "Professional Services",
    icon: "Briefcase",
    seoTitle: "AI Chatbot for Photographers and Videographers | YourLio",
    seoDescription:
      "Qualify shoot enquiries on your website, WhatsApp and Instagram. YourLio asks about the event, date and coverage, then books the planning call.",
    h1: "Turn shoot enquiries into booked planning calls.",
    lead: "The agent asks about the shoot, date and coverage, collects contact details and books a call on your website, WhatsApp and Instagram. You know the date and the brief before the call starts.",
    agentName: "Bookings",
    visitor: "Are you available for a wedding in June?",
    q1: { field: "Coverage", text: "Congratulations! What would you like covered?", options: ["Photos only", "Video only", "Photos and video"], pick: 2 },
    q2: { field: "Guests", text: "Roughly how many guests are you expecting?", options: ["Under 50", "50 to 150", "Over 150"], pick: 1 },
    booked: "Shoot Planning Call",
    asks: ["Event and date", "Coverage needed", "Location and budget"],
    followUp: {
      ask: "Can you add an engagement shoot?",
      reply: "Hi Alex, I have your brief from the website chat: a June wedding for 50 to 150 guests, with photos and video. I have added the engagement shoot, and the team will include it in the packages on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Couples and brands ask about dates and packages in Instagram DMs, on WhatsApp and on your website. The agent answers day or night.",
      convert: "The agent asks about the shoot, date, coverage and budget, collects contact details and books a planning call.",
      retain: "Past clients ask about their photos and videos in the same chat. WhatsApp campaigns share mini sessions and seasonal shoots.",
    },
    faqs: [
      { q: "Can it reply to Instagram DMs about bookings?", a: "Yes. The same agent answers on Instagram, Facebook, WhatsApp and your website, and asks the same questions wherever the enquiry starts." },
      { q: "Can it ask about budget without putting people off?", a: "Yes. Offer budget ranges as tap options so visitors answer in one tap, or let them type an answer in their own words. The agent keeps the tone you set." },
      { q: "Can it handle commercial and event shoots too?", a: "Yes. Tell the agent about each type of shoot you offer, such as weddings, events, products or brand videos, and it asks questions that fit the enquiry." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Automotive                                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "automotive",
    name: "Automotive",
    group: "Automotive",
    icon: "Car",
    seoTitle: "AI Chatbot and WhatsApp for Automotive Businesses | YourLio",
    seoDescription:
      "Answer car, parts and service enquiries on your website and WhatsApp. YourLio asks your qualifying questions, collects contact details and books the call.",
    h1: "Answer car and service enquiries and book the next step.",
    lead: "The agent answers questions about vehicles, parts and servicing, asks your qualifying questions and books a call with your team on your website and WhatsApp. Leads from your Facebook and Instagram ads go straight into the same conversation.",
    agentName: "Auto Service",
    visitor: "Can I book a service for my car?",
    q1: { field: "Service", text: "Of course. What does the car need?", options: ["Regular service", "Repair", "Inspection"], pick: 0 },
    q2: { field: "Drop off", text: "When would you like to drop it off?", options: ["This week", "Next week", "Not sure yet"], pick: 0 },
    booked: "Service Advisor Call",
    asks: ["Make and model", "Service needed", "Drop off date"],
    followUp: {
      ask: "Can you check the air conditioning too?",
      reply: "Hi Alex, I have your details from the website chat: a regular service, dropping off this week. I have added the air conditioning check, and the service advisor will confirm both on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Drivers ask about cars, parts and servicing on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the car and what it needs, collects contact details and books a call with your sales or service team.",
      retain: "Owners ask questions in the same chat. WhatsApp campaigns send service reminders and offers.",
    },
    faqs: [
      { q: "Can one agent handle sales, parts and service enquiries?", a: "Yes. Tell the agent about each part of your business and it asks questions that fit the enquiry in front of it. Every lead lands in the shared inbox for your team to pick up." },
      { q: "Can it send service reminders on WhatsApp?", a: "Yes. Send WhatsApp campaigns to your customers, such as a service reminder or a seasonal check, and the agent answers every reply." },
      { q: "Can it talk to leads on the phone?", a: "Yes. With AI calls, a voice agent talks to leads on the phone and qualifies them the same way it does in chat." },
    ],
  },
  {
    slug: "auto-part-retailer",
    name: "Auto Part Retailer",
    parent: "automotive",
    group: "Automotive",
    icon: "Car",
    seoTitle: "AI Chatbot and WhatsApp for Auto Parts Stores | YourLio",
    seoDescription:
      "Answer part, fitment and stock questions on your website and WhatsApp. YourLio collects the vehicle details, then books a quote call with your parts team.",
    h1: "Get the vehicle details before your team quotes the part.",
    lead: "The agent asks for the make, model and year, answers stock and delivery questions, and books a call with your parts team on your website and WhatsApp. Workshops and trade customers get answers in the same chat.",
    agentName: "Parts",
    visitor: "Do you have brake pads for a 2019 hatchback?",
    q1: { field: "Buyer", text: "I can check that. Are they for your own car or a workshop?", options: ["My own car", "A workshop", "A fleet"], pick: 1 },
    q2: { field: "Delivery", text: "Would you like to collect them or have them delivered?", options: ["Collect in store", "Delivery", "Not sure yet"], pick: 0 },
    booked: "Parts Quote Call",
    asks: ["Make, model and year", "Parts needed", "Collect or delivery"],
    followUp: {
      ask: "Can you add discs for the same car?",
      reply: "Hi Alex, I have your details from the website chat: brake pads for a 2019 hatchback, for a workshop, collected in store. I have added discs for the same car, and the parts team will confirm both on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Drivers and workshops ask about parts, fitment and stock on your website, WhatsApp, Instagram and Facebook, day or night.",
      convert: "The agent collects the vehicle details and the parts needed, then collects contact details and books a quote call with your parts team.",
      retain: "Trade customers ask about orders in the same chat. WhatsApp campaigns share new stock and trade offers.",
    },
    faqs: [
      { q: "Can it collect the vehicle details before a quote?", a: "Yes. The agent asks for the make, model, year or any detail your team uses to check fitment, and saves it on the lead with the rest of the conversation." },
      { q: "Can workshops and trade customers use the same chat?", a: "Yes. Existing customers get answers in the same chat, and your team can step in from the shared inbox for anything that needs a person." },
      { q: "Can it answer stock questions?", a: "Yes. It answers from what you tell it about your parts, stock and delivery areas, and hands anything it cannot answer to your team." },
    ],
  },
  {
    slug: "car-dealership",
    name: "Car Dealership",
    parent: "automotive",
    group: "Automotive",
    icon: "Car",
    seoTitle: "AI Chatbot and WhatsApp for Car Dealerships | YourLio",
    seoDescription:
      "Qualify car buyers on your website, WhatsApp and Facebook. YourLio asks about budget, finance and trade-in, then books the test drive call with sales.",
    h1: "Turn car enquiries into booked test drive calls.",
    lead: "The agent answers questions about stock, finance options and trade-ins, asks how the buyer plans to pay, and books a call with your sales team on your website and WhatsApp. Leads from your Facebook and Instagram ads go straight into the same conversation.",
    agentName: "Showroom",
    visitor: "Is the white hybrid SUV still available?",
    q1: { field: "Payment", text: "It is. How are you planning to pay?", options: ["Cash", "Finance", "Lease"], pick: 1 },
    q2: { field: "Trade-in", text: "Do you have a car to trade in?", options: ["Yes", "No", "Not sure yet"], pick: 0 },
    booked: "Test Drive Call",
    asks: ["Model and budget", "Finance or cash", "Trade-in details"],
    followUp: {
      ask: "Can I test drive it on Saturday?",
      reply: "Hi Alex, I have your details from the website chat: the white hybrid SUV, on finance, with a trade-in. The sales team will hold a Saturday test drive and confirm the time on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Buyers ask about stock and prices on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about budget, finance and trade-in, collects contact details and books a call with your sales team to arrange the test drive.",
      retain: "Owners ask about servicing in the same chat. WhatsApp campaigns share service reminders and new arrivals.",
    },
    faqs: [
      { q: "What does it ask car buyers?", a: "What your sales team needs before a test drive: the model, budget, how they plan to pay and whether they have a trade-in. You choose the questions, and buyers answer with one tap or in their own words." },
      { q: "Can it book test drives?", a: "It books a call with your sales team in the chat, and the buyer gets the invite by email. Your team confirms the test drive on that call." },
      { q: "Can it handle leads from Facebook and Instagram ads?", a: "Yes. Leads from your Facebook and Instagram ads go straight into a conversation with the agent, which asks your questions and books the call." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Travel                                                            */
  /* ---------------------------------------------------------------- */
  {
    slug: "travel",
    name: "Travel",
    group: "Travel",
    icon: "Plane",
    seoTitle: "AI Chatbot for Travel and Hospitality | YourLio",
    seoDescription:
      "Turn trip and stay enquiries into booked planning calls. YourLio asks about dates, group size and what to include, on your website and WhatsApp.",
    h1: "Turn trip enquiries into booked planning calls.",
    lead: "The agent asks about dates, group size and what to include, collects contact details and books a call with your travel team, on your website and WhatsApp. Your team starts planning with the brief already in hand.",
    agentName: "Travel",
    visitor: "Planning a team offsite for 30 people",
    q1: { field: "Dates", text: "Lovely. When are you planning to travel?", options: ["This month", "In 1 to 3 months", "Later this year"], pick: 1 },
    q2: { field: "Package", text: "What should we take care of?", options: ["Stay only", "Stay and transfers", "Everything planned"], pick: 2 },
    booked: "Trip Planning Call",
    asks: ["Group size", "Travel dates", "What to include"],
    followUp: {
      ask: "Can we add a beach day to the plan?",
      reply: "Hi Alex, I have your brief from the website chat: 30 people, travelling in 1 to 3 months, with everything planned. I have added the beach day, and the team will include it in the plan they share on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Travellers ask about packages, stays and dates on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about dates, group size and what to include, collects contact details and books a trip planning call.",
      retain: "Guests ask about their booking in the same chat. WhatsApp campaigns share new packages and seasonal offers with past travellers.",
    },
    faqs: [
      { q: "What does it ask travellers before a planning call?", a: "What your team needs to plan: travel dates, group size, destination and what to include, such as stays, transfers or activities. You choose the questions." },
      { q: "Can it answer questions about packages and stays?", a: "Yes. It answers from what you tell it about your packages, stays and policies, and hands anything it cannot answer to your team." },
      { q: "Can travellers message on WhatsApp?", a: "Yes. Connect your WhatsApp Business number and the same agent answers there, with the same memory of each traveller as your website chat." },
    ],
    photo: "/images/travel-hospitality-enquiry-chatbot.webp",
  },
  {
    slug: "travel-agency-tour-operator",
    name: "Travel Agency & Tour Operator",
    parent: "travel",
    group: "Travel",
    icon: "Plane",
    seoTitle: "AI Chatbot for Travel Agencies and Tour Operators | YourLio",
    seoDescription:
      "Qualify trip enquiries on your website, WhatsApp and Instagram. YourLio asks about destination, dates and travellers, then books the planning call.",
    h1: "Answer tour enquiries and book the planning call.",
    lead: "The agent answers questions about tours and packages, asks about the destination, dates and travellers, and books a call with your team on your website and WhatsApp. Your agents start the call ready to plan the trip.",
    agentName: "Tours",
    visitor: "Do you run family tours in Italy?",
    q1: { field: "Travellers", text: "We do. Who is travelling?", options: ["2 adults", "Family with kids", "Group of friends"], pick: 1 },
    q2: { field: "Length", text: "How long would you like the trip to be?", options: ["Under a week", "1 to 2 weeks", "Over 2 weeks"], pick: 1 },
    booked: "Tour Planning Call",
    asks: ["Destination and dates", "Travellers", "Budget and style"],
    followUp: {
      ask: "Can we add a cooking class in Florence?",
      reply: "Hi Alex, I have your brief from the website chat: a family tour in Italy for 1 to 2 weeks. I have added the cooking class in Florence, and the team will build it into the itinerary they share on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Travellers ask about tours and packages on your website, WhatsApp, Instagram and Facebook, in their own language. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about destination, dates, travellers and budget, collects contact details and books a planning call with your team.",
      retain: "Booked travellers ask about their trip in the same chat. WhatsApp campaigns share new tours with past guests.",
    },
    faqs: [
      { q: "What does it ask before a tour planning call?", a: "What your agents need to plan and quote: destination, dates, who is travelling, trip length and budget. You choose the questions, and travellers answer with one tap or in their own words." },
      { q: "Can it reply in the traveller's language?", a: "Yes. Travellers can write in their own language and the agent replies in it, on your website, WhatsApp, Instagram and Facebook." },
      { q: "Can booked travellers ask questions in the same chat?", a: "Yes. Existing clients get answers in the same chat, from the details you provide, and your team can step in from the shared inbox." },
    ],
    photo: "/images/travel-hospitality-enquiry-chatbot.webp",
  },

  /* ---------------------------------------------------------------- */
  /* B2B                                                               */
  /* ---------------------------------------------------------------- */
  {
    slug: "security-and-av",
    name: "Security and AV Installers",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for Security and AV Installers | YourLio",
    seoDescription:
      "Qualify CCTV, access control and AV enquiries on your website and WhatsApp. YourLio asks about the site, collects contact details and books the survey call.",
    h1: "Turn CCTV and access control enquiries into booked survey calls.",
    lead: "The agent asks about the site, coverage and features, collects contact details and books the call on your website and WhatsApp. Your estimators start the first call already knowing the job.",
    agentName: "Security",
    visitor: "We need CCTV for our office",
    q1: { field: "Coverage", text: "Happy to help with cameras for your office. Which areas need coverage?", options: ["Front entry", "Lobby & hallways", "Full perimeter + inside"], pick: 2 },
    q2: { field: "Features", text: "Got it. Do you want features like face or licence plate recognition, or just recording?", options: ["Just recording", "Face recognition", "Plate recognition"], pick: 0 },
    booked: "Site Survey Call",
    asks: ["Site size and coverage", "Features needed", "Install timeline"],
    followUp: {
      ask: "Can you include pricing for 12 cameras?",
      reply: "Hi Alex, I have your brief from the website chat: full perimeter + inside, recording only. I have added 12 cameras to it, and the team will bring pricing to your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Office and facility managers ask about cameras, access control and AV on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the site, coverage and features, collects contact details and books a site survey call with your estimators.",
      retain: "Existing clients ask about maintenance and support in the same chat. WhatsApp campaigns share service plans and upgrades.",
    },
    faqs: [
      { q: "What does the agent ask security and CCTV leads?", a: "The questions your estimators need before a survey: the type of site, which areas need coverage, whether they want recording or recognition features, and when they want it installed. You choose the questions, and visitors answer with one tap or in their own words." },
      { q: "Can it book a site survey call?", a: "Yes. Once the visitor has shared their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email and can reschedule from it." },
      { q: "Can it handle alarm, access control and AV enquiries too?", a: "Yes. Tell the agent about each service you offer, such as cameras, access control, alarms or meeting room AV, and it asks questions that fit the enquiry in front of it." },
    ],
    photo: "/images/security-av-installer-lead-qualification.webp",
  },
  {
    slug: "it-services",
    name: "IT and Managed Services",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for IT and Managed Service Providers | YourLio",
    seoDescription:
      "Qualify managed IT, cloud and cybersecurity enquiries on your website and WhatsApp. YourLio asks about team size and setup, then books the call.",
    h1: "Qualify managed IT enquiries before the first call.",
    lead: "The agent asks about team size, sites and current setup, collects contact details and books a call with your team, on your website and WhatsApp. Your first call starts with the brief, not the basics.",
    agentName: "IT Support",
    visitor: "Do you offer IT support for small offices?",
    q1: { field: "Team size", text: "We do. How many people would need support?", options: ["Under 20", "20 to 100", "Over 100"], pick: 1 },
    q2: { field: "Scope", text: "Thanks. Do you need help with devices, cloud and email, or both?", options: ["Devices", "Cloud and email", "Both"], pick: 2 },
    booked: "General Consultation",
    asks: ["Team size and sites", "Current setup", "Support hours needed"],
    followUp: {
      ask: "We also have a second office. Can that be covered?",
      reply: "Hi Alex, I have your details from the website chat: 20 to 100 people, devices plus cloud and email. I have added the second office to your request so the team can plan for both sites on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Office managers and founders ask about support, cloud and security on your website, WhatsApp, Instagram and Facebook, day or night.",
      convert: "The agent asks about team size, sites and current setup, collects contact details and books a consultation with your team.",
      retain: "Existing clients get answers in the same chat, and your team takes over any conversation from the shared inbox.",
    },
    faqs: [
      { q: "What does the agent ask IT services leads?", a: "What your team needs to scope the work: how many people need support, how many sites, what they run today and whether they need help with devices, cloud and email, or security. You choose the questions." },
      { q: "Can existing clients use the same chat for support?", a: "Yes. The agent answers questions from existing clients too, and your team can take over any conversation from the shared inbox." },
      { q: "Can it book a discovery call with our team?", a: "Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the visitor by email." },
    ],
    photo: "/images/it-managed-services-lead-qualification.webp",
  },
  {
    slug: "software-and-saas",
    name: "Software and SaaS",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for SaaS Lead Qualification and Demos | YourLio",
    seoDescription:
      "Qualify SaaS leads on your website and WhatsApp. YourLio answers product questions, asks about seats, integrations and timeline, then books the demo.",
    h1: "Book demos with the accounts that fit.",
    lead: "The agent answers product questions, asks about team size, must have integrations and timeline, and books the demo in the chat. Your sales team sees every answer before the call.",
    agentName: "Sales",
    visitor: "Can our sales team try this?",
    q1: { field: "Seats", text: "Of course. How many people would use it?", options: ["1 to 10", "11 to 50", "More than 50"], pick: 1 },
    q2: { field: "Priority", text: "What matters most to your team right now?", options: ["Pricing", "Integrations", "Security review"], pick: 1 },
    booked: "Product Demo",
    asks: ["Seats and team size", "Must have integrations", "Buying timeline"],
    followUp: {
      ask: "Can we bring our IT lead to the demo?",
      reply: "Hi Alex, of course. I have your details from the website chat: a team of 11 to 50, focused on integrations. I have let the team know your IT lead is joining the demo on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Visitors ask about features, pricing and integrations on your website and WhatsApp. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about seats, integrations and timeline, collects company and work email, and books the demo with your sales team.",
      retain: "Customers ask product questions in the same chat. WhatsApp campaigns share new features and renewal reminders.",
    },
    faqs: [
      { q: "Can it answer product questions before booking a demo?", a: "Yes. It answers from what you tell it about your product, plans and integrations, then moves the visitor toward a demo when they are ready." },
      { q: "What does it ask before a SaaS demo?", a: "Whatever your team uses to qualify: how many people would use it, which integrations they need, what matters most right now and when they plan to decide. Visitors answer with one tap or in their own words." },
      { q: "Does it replace our demo request form?", a: "It can sit alongside the form or replace it. The agent collects the same details in the chat and books the demo without a separate form page." },
    ],
    photo: "/images/saas-demo-booking-chatbot.webp",
  },
  {
    slug: "manufacturing-and-wholesale",
    name: "Manufacturing and Wholesale",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for Manufacturers and Wholesalers | YourLio",
    seoDescription:
      "Collect bulk quote requests on your website and WhatsApp. YourLio asks about volume, specs and delivery, captures contact details and books the quote call.",
    h1: "Turn bulk enquiries into complete quote requests.",
    lead: "The agent asks about volume, specifications and delivery, collects contact details and books a call with sales, on your website and WhatsApp. No more back and forth just to get the basics.",
    agentName: "Wholesale",
    visitor: "I need a bulk quote for packaging boxes",
    q1: { field: "Volume", text: "Happy to quote. Roughly how many boxes a month?", options: ["Under 5,000", "5,000 to 50,000", "Over 50,000"], pick: 1 },
    q2: { field: "Printing", text: "Do you need custom printing on the boxes?", options: ["Plain boxes", "Printed logo", "Fully custom design"], pick: 1 },
    booked: "Quote Call",
    asks: ["Monthly volume", "Specs and customisation", "Delivery location"],
    followUp: {
      ask: "Can you send samples before the call?",
      reply: "Hi Alex, I have your brief from the website chat: 5,000 to 50,000 boxes a month with a printed logo. I have passed the sample request to the team, and they will confirm it before your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Buyers and distributors send bulk enquiries on your website, WhatsApp, Instagram and Facebook, in their own language.",
      convert: "The agent asks about volume, specs and delivery, collects contact details and books a quote call with sales.",
      retain: "Repeat buyers ask about orders in the same chat. WhatsApp campaigns share new products and price lists.",
    },
    faqs: [
      { q: "What does it ask before a bulk quote?", a: "The details your sales team prices from: monthly volume, product specifications or customisation, delivery location and timeline. You choose the questions, and buyers answer with one tap or in their own words." },
      { q: "Can it reply to buyers on WhatsApp?", a: "Yes. Connect your WhatsApp Business number and the same agent answers buyer enquiries there, with the same memory of each lead as your website chat." },
      { q: "Can it handle distributor and reseller enquiries?", a: "Yes. Add the questions you ask distributors, such as region and expected volume, and the agent asks them when a visitor wants to resell your products." },
    ],
    photo: "/images/manufacturing-wholesale-bulk-quote-chatbot.webp",
  },
  {
    slug: "agencies-and-consulting",
    name: "Agencies and Consulting",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for Agencies and Consultancies | YourLio",
    seoDescription:
      "Qualify project enquiries on your website and WhatsApp. YourLio asks about scope, budget and start date, then books the discovery call in the chat.",
    h1: "Turn project briefs into booked discovery calls.",
    lead: "The agent asks about scope, budget and timing, collects contact details and books a discovery call, on your website and WhatsApp. Your first call starts with the brief, not the basics.",
    agentName: "Studio",
    visitor: "We want to redo our website and SEO",
    q1: { field: "Scope", text: "Sounds good. What would you like to start with?", options: ["New website", "SEO", "Both together"], pick: 2 },
    q2: { field: "Start", text: "And when would you like to start?", options: ["This month", "Next quarter", "Just exploring"], pick: 0 },
    booked: "Discovery Call",
    asks: ["Scope of work", "Budget range", "Start date"],
    followUp: {
      ask: "Here is our current site. Is a full rebuild needed?",
      reply: "Hi Alex, thanks. I have your brief from the website chat: a new website and SEO, starting this month. I have added your site to it, and the team will answer that on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Founders and marketing leads ask about your services on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about scope, budget and start date, collects contact details and books a discovery call.",
      retain: "Clients ask questions in the same chat, and your team steps in from the shared inbox whenever a project needs a person.",
    },
    faqs: [
      { q: "Can it ask about budget without putting people off?", a: "Yes. Offer budget ranges as tap options so visitors answer in one tap, or let them type an answer in their own words. The agent keeps the tone you set." },
      { q: "Can it qualify enquiries for different services?", a: "Yes. Tell the agent about each service you offer, such as websites, SEO, paid ads or branding, and it asks questions that fit what the visitor needs." },
      { q: "Can it book a discovery call?", a: "Yes. After collecting contact details, the agent offers open times and books the call in the chat. The invite goes to the visitor by email." },
    ],
    photo: "/images/agency-discovery-call-chatbot.webp",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for Real Estate Lead Qualification | YourLio",
    seoDescription:
      "Qualify buyers, renters and office enquiries on your website and WhatsApp. YourLio asks about budget, area and move in date, then books the site visit call.",
    h1: "Turn property enquiries into booked site visit calls.",
    lead: "The agent asks whether they want to buy or rent, their area, budget and move in date, collects contact details and books a call with your team, on your website and WhatsApp. Your team starts the call knowing what to shortlist.",
    agentName: "Property",
    visitor: "Looking for a 3 bedroom apartment",
    q1: { field: "Buy or rent", text: "Great. Are you looking to buy or rent?", options: ["Buy", "Rent", "Not sure yet"], pick: 0 },
    q2: { field: "Move in", text: "When do you want to move in?", options: ["Within 3 months", "3 to 6 months", "Just exploring"], pick: 1 },
    booked: "Site Visit Call",
    asks: ["Buy or rent", "Area and budget", "Move in date"],
    followUp: {
      ask: "Can I see the flats this weekend?",
      reply: "Hi Alex, I have your brief from the website chat: a 3 bedroom apartment to buy, moving in 3 to 6 months. The team will offer viewing slots for this weekend on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Buyers and renters ask about listings on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about buy or rent, area, budget and move in date, collects contact details and books a site visit call.",
      retain: "Past clients get answers in the same chat. WhatsApp campaigns share new projects and listings.",
    },
    faqs: [
      { q: "What does it ask property leads?", a: "What your team needs to shortlist: buy or rent, preferred area, budget and move in date. You choose the questions, and visitors answer with one tap or in their own words." },
      { q: "Can it book site visits?", a: "It books a call with your team in the chat, and the visitor gets the invite by email. Your team confirms the site visit on that call." },
      { q: "Can it handle office and commercial enquiries too?", a: "Yes. Tell the agent about each type of property you offer and it asks questions that fit what the visitor is looking for." },
    ],
    photo: "/images/real-estate-lead-qualification-chatbot.webp",
  },
  {
    slug: "events-and-webinars",
    name: "Events and Webinars",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for Events, Venues and Webinars | YourLio",
    seoDescription:
      "Qualify event enquiries on your website and WhatsApp. YourLio asks about guests, date and budget, books the planning call, and helps you remind guests.",
    h1: "Turn event enquiries into booked planning calls.",
    lead: "The agent asks about the event, guest count and date, collects contact details and books a planning call, on your website and WhatsApp. Then keep guests informed with WhatsApp campaigns.",
    agentName: "Events",
    visitor: "We want to host a product launch",
    q1: { field: "Guests", text: "Exciting! Roughly how many guests?", options: ["Under 50", "50 to 200", "Over 200"], pick: 1 },
    q2: { field: "Date", text: "Do you have a date in mind?", options: ["This month", "In 1 to 3 months", "Not decided"], pick: 1 },
    booked: "Event Planning Call",
    asks: ["Event type", "Guest count", "Date and budget"],
    followUp: {
      ask: "Can you also handle catering?",
      reply: "Hi Alex, I have your brief from the website chat: a product launch for 50 to 200 guests in the next 1 to 3 months. I have added catering to it, and the team will cover options on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "Event enquiries arrive on your website, WhatsApp, Instagram and Facebook. Leads from your Facebook and Instagram ads go straight into a conversation.",
      convert: "The agent asks about the event, guest count, date and budget, collects contact details and books a planning call.",
      retain: "WhatsApp campaigns send reminders to your guest list, and the agent answers every reply before and after the event.",
    },
    faqs: [
      { q: "What does it ask before an event planning call?", a: "What your planners need to quote: the type of event, guest count, date and budget. You choose the questions, and visitors answer with one tap or in their own words." },
      { q: "Can it send event reminders on WhatsApp?", a: "Yes. Send WhatsApp campaigns to your guest list, such as reminders before the event, and the agent answers every reply." },
      { q: "Can it collect webinar sign ups?", a: "Yes. The agent collects name, work email and phone in the chat, and the details land in your shared inbox for your team to follow up." },
    ],
    photo: "/images/events-webinar-lead-chatbot.webp",
  },
  {
    slug: "finance-and-insurance",
    name: "Finance and Insurance",
    group: "B2B",
    icon: "Building2",
    seoTitle: "AI Chatbot for Finance and Insurance | YourLio",
    seoDescription:
      "Qualify insurance and finance enquiries on your website and WhatsApp. YourLio asks about cover and size, collects contact details and books the advisor call.",
    h1: "Qualify cover enquiries and book advisor calls.",
    lead: "The agent asks about the type of cover, team size and renewal dates, collects contact details and books a call with an advisor, on your website and WhatsApp. Your advisors start the call with the details already in hand.",
    agentName: "Advisor",
    visitor: "I need insurance for my company",
    q1: { field: "Team size", text: "Happy to help. How many employees do you have?", options: ["Under 10", "10 to 50", "Over 50"], pick: 1 },
    q2: { field: "Cover", text: "Which cover are you looking for?", options: ["Property", "Liability", "Employee health"], pick: 2 },
    booked: "Advisor Call",
    asks: ["Type of cover", "Team or asset size", "Renewal date"],
    followUp: {
      ask: "Our current policy renews next month. Can you help?",
      reply: "Hi Alex, I have your details from the website chat: employee health cover for 10 to 50 people. I have noted the renewal date, and the advisor will compare options with you on your call on Wednesday at 2:00 pm.",
    },
    stages: {
      capture: "People and businesses ask about cover, loans and renewals on your website, WhatsApp, Instagram and Facebook, day or night.",
      convert: "The agent asks about the type of cover, team or asset size and renewal date, collects contact details and books an advisor call.",
      retain: "Clients ask practical questions in the same chat. WhatsApp campaigns send renewal reminders, and the agent answers every reply.",
    },
    faqs: [
      { q: "What does it ask before an advisor call?", a: "What your advisors need to prepare: the type of cover or product, team or asset size, and renewal dates. You choose the questions." },
      { q: "Does the agent give financial advice?", a: "No. It answers general questions from the information you provide, collects the details your advisors need and books the call. Advice stays with your licensed team." },
      { q: "Can it remind clients about renewals on WhatsApp?", a: "Yes. Send WhatsApp campaigns to your clients, such as renewal reminders, and the agent answers every reply." },
    ],
    photo: "/images/finance-insurance-lead-qualification.webp",
  },
];
