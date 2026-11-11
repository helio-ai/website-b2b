// Sample conversation per industry for the landing page industry picker.
// Sample lead details only; no customer is named.
export type IndustryQuestion = { field: string; text: string; options: string[]; pick: number };

export type IndustryCopy = {
  slug: string;
  name: string;
  group: string;
  icon: string;
  h1: string;
  lead: string;
  agentName: string;
  visitor: string;
  q1: IndustryQuestion;
  q2: IndustryQuestion;
  booked: string;
  asks: string[];
  followUp: { ask: string; reply: string };
};

export const INDUSTRY_COPY: IndustryCopy[] = [
  {
    slug: "retail",
    name: "Retail",
    group: "Retail",
    icon: "Store",
    h1: "Turn store enquiries into visits and repeat buyers.",
    lead: "The agent answers stock and store questions, collects contact details and books a call with your team, on your website and WhatsApp. Then bring shoppers back with WhatsApp campaigns that reply.",
    agentName: "Store",
    visitor: "Do you have the Aria sofa in grey?",
    q1: {
      field: "Store",
      text: "We do. Which store is closest to you?",
      options: [
        "City centre",
        "North mall",
        "Either one"
      ],
      pick: 0
    },
    q2: {
      field: "Timeline",
      text: "When are you planning to buy?",
      options: [
        "This week",
        "This month",
        "Just browsing"
      ],
      pick: 1
    },
    booked: "Product Consultation",
    asks: [
      "Product and store",
      "Budget",
      "Buying timeline"
    ],
    followUp: {
      ask: "Can I see it in person this weekend?",
      reply: "Hi Alex, I have your details from the website chat: the grey Aria sofa at the city centre store. I have let the store team know, and they will confirm a time for your visit on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "electronics",
    name: "Electronics",
    group: "Retail",
    icon: "Store",
    h1: "Turn spec and stock questions into booked product calls.",
    lead: "The agent answers questions about models, stock and warranty, asks what the shopper needs and their budget, and books a call with a product expert on your website and WhatsApp. Your team starts the call knowing what the shopper is looking for.",
    agentName: "Tech Store",
    visitor: "Which laptop is best for video editing?",
    q1: {
      field: "Budget",
      text: "Happy to help you choose. What budget do you have in mind?",
      options: [
        "Entry-level",
        "Mid-range",
        "High-end"
      ],
      pick: 1
    },
    q2: {
      field: "Pickup",
      text: "Would you like to collect it in store or have it delivered?",
      options: [
        "Collect in store",
        "Home delivery",
        "Not sure yet"
      ],
      pick: 0
    },
    booked: "Product Expert Call",
    asks: [
      "Use and budget",
      "Preferred models",
      "Pickup or delivery"
    ],
    followUp: {
      ask: "Do you take trade-ins for old laptops?",
      reply: "Hi Alex, I have your details from the website chat: a mid-range laptop for video editing, collected in store. I have added your old laptop to your request, and the team will go through trade-in options on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    group: "Retail",
    icon: "Store",
    h1: "Answer size and stock questions where shoppers already message you.",
    lead: "The agent answers questions about sizes, stock and stores on your website, WhatsApp and Instagram, and books a styling call with your team. Then bring shoppers back for each new collection with WhatsApp campaigns.",
    agentName: "Boutique",
    visitor: "Is the linen blazer still in stock in medium?",
    q1: {
      field: "Occasion",
      text: "It is, in medium. What are you shopping for?",
      options: [
        "Work",
        "A wedding or event",
        "Everyday"
      ],
      pick: 1
    },
    q2: {
      field: "Fitting",
      text: "Would you like to try it on in store or get styling help on a call?",
      options: [
        "Try on in store",
        "Styling call",
        "Just browsing"
      ],
      pick: 1
    },
    booked: "Styling Call",
    asks: [
      "Item and size",
      "Occasion",
      "Store or delivery"
    ],
    followUp: {
      ask: "Can you suggest trousers to match the blazer?",
      reply: "Hi Alex, I have your details from the website chat: the linen blazer in medium, for a wedding. I have added matching trousers to your request, and the stylist will bring options to your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "furniture",
    name: "Furniture",
    group: "Retail",
    icon: "Store",
    h1: "Turn furniture enquiries into booked design consultations.",
    lead: "The agent answers questions about stock, sizes and delivery, asks about the rooms and budget, and books a consultation with your team on your website and WhatsApp. Your designers start the call knowing what the shopper needs.",
    agentName: "Furniture",
    visitor: "I'm furnishing a new apartment. Can you help?",
    q1: {
      field: "Rooms",
      text: "Happy to help. Which rooms are you furnishing?",
      options: [
        "Living room",
        "Bedroom",
        "Whole home"
      ],
      pick: 2
    },
    q2: {
      field: "Delivery",
      text: "And when do you need the furniture delivered?",
      options: [
        "This month",
        "In 1 to 3 months",
        "Just exploring"
      ],
      pick: 1
    },
    booked: "Design Consultation",
    asks: [
      "Rooms and style",
      "Budget",
      "Delivery date"
    ],
    followUp: {
      ask: "Can someone measure the living room first?",
      reply: "Hi Alex, I have your brief from the website chat: furniture for the whole home, delivered in 1 to 3 months. I have added a home measure to your request, and the team will arrange a time on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "jewelry",
    name: "Jewelry and Watches",
    group: "Retail",
    icon: "Store",
    h1: "Turn ring and watch enquiries into booked consultations.",
    lead: "The agent answers questions about pieces, stock and store timings, asks about the occasion and budget, and books a consultation on your website and WhatsApp. Your team meets each client already knowing what they are looking for.",
    agentName: "Concierge",
    visitor: "I'm looking for an engagement ring",
    q1: {
      field: "Style",
      text: "Congratulations! Do you have a style in mind?",
      options: [
        "Solitaire",
        "Halo",
        "Custom design"
      ],
      pick: 2
    },
    q2: {
      field: "Date",
      text: "Lovely. When do you need the ring?",
      options: [
        "Within a month",
        "In 1 to 3 months",
        "Just exploring"
      ],
      pick: 1
    },
    booked: "Private Consultation",
    asks: [
      "Piece and style",
      "Budget range",
      "Date needed"
    ],
    followUp: {
      ask: "Can you also show me some wedding bands?",
      reply: "Hi Alex, I have your brief from the website chat: a custom engagement ring, needed in 1 to 3 months. I have added wedding bands to it, and the team will bring options to your consultation on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "education",
    name: "Education",
    group: "Education",
    icon: "GraduationCap",
    h1: "Answer admission questions and book counselling calls.",
    lead: "The agent answers questions about courses, eligibility and fees, asks about format and intake, and books a call with your admissions team, on your website and WhatsApp. Your counsellors start the call knowing the course and the intake.",
    agentName: "Admissions",
    visitor: "I want to know about the MBA programme",
    q1: {
      field: "Format",
      text: "Happy to help. Would you study full time, part time or online?",
      options: [
        "Full time",
        "Part time",
        "Online"
      ],
      pick: 1
    },
    q2: {
      field: "Intake",
      text: "And when would you like to start?",
      options: [
        "Next intake",
        "Later this year",
        "Just exploring"
      ],
      pick: 0
    },
    booked: "Admissions Counselling",
    asks: [
      "Course and format",
      "Intake",
      "Eligibility"
    ],
    followUp: {
      ask: "Can you send the fee structure?",
      reply: "Hi Alex, I have your details from the website chat: the part time MBA, starting next intake. I have passed your fee question to the admissions team, and they will go through it on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "academic-tutoring",
    name: "Academic Tutoring",
    group: "Education",
    icon: "GraduationCap",
    h1: "Answer parent enquiries and book the tutor matching call.",
    lead: "The agent asks about the subject, level and goals, answers questions about fees and timings, and books a call with your team on your website and WhatsApp. Your team knows what the student needs before the first conversation.",
    agentName: "Tutoring",
    visitor: "My daughter needs help with chemistry before her exams",
    q1: {
      field: "Level",
      text: "Happy to help. Which level is she studying at?",
      options: [
        "Middle school",
        "High school",
        "University"
      ],
      pick: 1
    },
    q2: {
      field: "Format",
      text: "Would she prefer lessons in person or online?",
      options: [
        "In person",
        "Online",
        "Either works"
      ],
      pick: 1
    },
    booked: "Tutor Matching Call",
    asks: [
      "Subject and level",
      "Goals and exam dates",
      "Lesson format"
    ],
    followUp: {
      ask: "Can she also get help with physics?",
      reply: "Hi Alex, I have your details from the website chat: high school chemistry, online lessons, ahead of her exams. I have added physics to the request, and the team will match tutors for both on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "afterschool-activities",
    name: "Afterschool Activities",
    group: "Education",
    icon: "GraduationCap",
    h1: "Turn parent enquiries into booked trial class calls.",
    lead: "The agent answers questions about classes, ages, timings and fees, asks what the child enjoys, and books a call with your team on your website and WhatsApp. Then keep families informed about new terms with WhatsApp campaigns.",
    agentName: "Classes",
    visitor: "What activities do you have for a 7 year old?",
    q1: {
      field: "Interest",
      text: "We have a few. What does your child enjoy most?",
      options: [
        "Art and music",
        "Coding and robotics",
        "Sport and dance"
      ],
      pick: 1
    },
    q2: {
      field: "Days",
      text: "Which days work best for you?",
      options: [
        "Weekdays",
        "Weekends",
        "Either"
      ],
      pick: 0
    },
    booked: "Trial Class Call",
    asks: [
      "Child's age",
      "Interests",
      "Preferred days"
    ],
    followUp: {
      ask: "Can my other child join the trial too?",
      reply: "Hi Alex, I have your details from the website chat: coding and robotics for your 7 year old, on weekdays. I have added your second child, and the team will offer trial class times for both on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "sports-fitness",
    name: "Sport & Fitness",
    group: "Education",
    icon: "GraduationCap",
    h1: "Answer membership questions and book the first consultation.",
    lead: "The agent answers questions about classes, memberships and timings, asks about goals and when people like to train, and books a consultation on your website and WhatsApp. Then share new classes and offers with members through WhatsApp campaigns.",
    agentName: "Membership",
    visitor: "Do you have beginner classes?",
    q1: {
      field: "Goal",
      text: "We do. What is your main goal?",
      options: [
        "Get fitter",
        "Build strength",
        "Train for a sport"
      ],
      pick: 0
    },
    q2: {
      field: "Time",
      text: "When do you usually like to train?",
      options: [
        "Mornings",
        "Evenings",
        "Weekends"
      ],
      pick: 1
    },
    booked: "Fitness Consultation",
    asks: [
      "Goals",
      "Preferred times",
      "Membership type"
    ],
    followUp: {
      ask: "Can I bring a friend to the first session?",
      reply: "Hi Alex, I have your details from the website chat: beginner classes to get fitter, training in the evenings. I have noted your friend, and the team will go through options for you both on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    group: "Healthcare",
    icon: "Stethoscope",
    h1: "Answer patient questions and book appointments, day or night.",
    lead: "The agent answers practical questions about services, timings, location and fees, and books appointments on your website, WhatsApp, Instagram and Facebook. It does not give medical advice, and your team can step in from the shared inbox at any point.",
    agentName: "Clinic",
    visitor: "Can I book a consultation this week?",
    q1: {
      field: "Service",
      text: "Of course. Which service do you need?",
      options: [
        "General consultation",
        "Dental",
        "Skin and beauty"
      ],
      pick: 0
    },
    q2: {
      field: "Time",
      text: "Which time of day suits you best?",
      options: [
        "Morning",
        "Afternoon",
        "Evening"
      ],
      pick: 1
    },
    booked: "Clinic Appointment",
    asks: [
      "Service needed",
      "New or returning patient",
      "Preferred time"
    ],
    followUp: {
      ask: "Do I need to bring anything?",
      reply: "Hi Alex, I have your booking from the website chat: a general consultation on Wednesday at 2:00 pm. The clinic asks new patients to bring a photo ID and any recent reports."
    }
  },
  {
    slug: "beauty-center",
    name: "Beauty Center",
    group: "Healthcare",
    icon: "Stethoscope",
    h1: "Answer treatment questions and book appointments in the chat.",
    lead: "The agent answers questions about treatments, prices and timings on your website, WhatsApp and Instagram, and books the appointment in the chat. Then bring clients back for their next visit with WhatsApp campaigns.",
    agentName: "Bookings",
    visitor: "Do you have any facial slots this week?",
    q1: {
      field: "Treatment",
      text: "We do. Which facial are you interested in?",
      options: [
        "Classic facial",
        "Hydrating facial",
        "Help me choose"
      ],
      pick: 1
    },
    q2: {
      field: "Time",
      text: "Which time suits you this week?",
      options: [
        "Weekday morning",
        "Weekday afternoon",
        "Weekend"
      ],
      pick: 1
    },
    booked: "Facial Appointment",
    asks: [
      "Treatment",
      "Preferred time",
      "First visit or returning"
    ],
    followUp: {
      ask: "Can I add a manicure after the facial?",
      reply: "Hi Alex, I have your booking from the website chat: a hydrating facial on Wednesday at 2:00 pm. I have passed the manicure request to the team, and they will confirm the extra time before your visit."
    }
  },
  {
    slug: "dental-clinic",
    name: "Dental Clinic",
    group: "Healthcare",
    icon: "Stethoscope",
    h1: "Answer patient questions and book dental appointments in the chat.",
    lead: "The agent answers practical questions about treatments, timings, location and fees, and books the appointment on your website and WhatsApp. Clinical questions go to your team, who can step in from the shared inbox at any point.",
    agentName: "Reception",
    visitor: "Do you offer teeth whitening?",
    q1: {
      field: "Visit",
      text: "We do. Have you visited us before?",
      options: [
        "First visit",
        "Returning patient",
        "Booking for family"
      ],
      pick: 0
    },
    q2: {
      field: "Payment",
      text: "Thanks. Will you pay yourself or use insurance?",
      options: [
        "Self pay",
        "Insurance",
        "Not sure yet"
      ],
      pick: 1
    },
    booked: "New Patient Appointment",
    asks: [
      "Treatment of interest",
      "New or returning",
      "Payment or insurance"
    ],
    followUp: {
      ask: "Can my partner book a check-up for the same day?",
      reply: "Hi Alex, I have your booking from the website chat: a first visit about teeth whitening, using insurance, on Wednesday at 2:00 pm. I can book your partner a check-up right after yours. What is their name?"
    }
  },
  {
    slug: "medical-clinic",
    name: "Medical Clinic",
    group: "Healthcare",
    icon: "Stethoscope",
    h1: "Book clinic appointments on your website and WhatsApp, day or night.",
    lead: "The agent answers practical questions about doctors, timings, location and fees, collects patient details and books the appointment in the chat. It does not give medical advice, and your front desk can step in from the shared inbox.",
    agentName: "Front Desk",
    visitor: "Is a doctor available on Wednesday?",
    q1: {
      field: "Patient",
      text: "Let me check. Is the appointment for you or someone else?",
      options: [
        "For me",
        "For my child",
        "For a family member"
      ],
      pick: 0
    },
    q2: {
      field: "Time",
      text: "Which time on Wednesday suits you?",
      options: [
        "Morning",
        "Afternoon",
        "Evening"
      ],
      pick: 1
    },
    booked: "Doctor Appointment",
    asks: [
      "Who the visit is for",
      "Reason for visit",
      "Preferred doctor"
    ],
    followUp: {
      ask: "Do I need to fast before the appointment?",
      reply: "Hi Alex, I have your booking from the website chat: an appointment for you on Wednesday at 2:00 pm. That is a question for the clinic team, so I have passed it on, and they will reply here before your visit."
    }
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    group: "Professional Services",
    icon: "Briefcase",
    h1: "Turn service enquiries into booked consultation calls.",
    lead: "The agent answers questions about your services, asks what the client needs and when, and books a consultation with your team on your website and WhatsApp. Your team knows the job before the first call.",
    agentName: "Client Desk",
    visitor: "Do you do bookkeeping for small businesses?",
    q1: {
      field: "Business size",
      text: "We do. How many people work in the business?",
      options: [
        "Just me",
        "2 to 10",
        "Over 10"
      ],
      pick: 1
    },
    q2: {
      field: "Start",
      text: "And when would you like to start?",
      options: [
        "This month",
        "Next quarter",
        "Just comparing"
      ],
      pick: 0
    },
    booked: "Consultation Call",
    asks: [
      "Service needed",
      "Business size",
      "Start date"
    ],
    followUp: {
      ask: "Can you also handle payroll?",
      reply: "Hi Alex, I have your details from the website chat: bookkeeping for a business of 2 to 10 people, starting this month. I have added payroll to your request, and the team will cover both on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "home-cleaning-maid-services",
    name: "Home Cleaning & Maid Services",
    group: "Professional Services",
    icon: "Briefcase",
    h1: "Answer cleaning enquiries and book the quote call, day or night.",
    lead: "The agent asks about the home, how often they need cleaning and when to start, collects contact details and books a call with your team on your website and WhatsApp. Your team quotes from a complete brief, not a one-line message.",
    agentName: "Cleaning",
    visitor: "Do you offer regular home cleaning?",
    q1: {
      field: "Home size",
      text: "We do. How big is your home?",
      options: [
        "Studio or 1 bedroom",
        "2 to 3 bedrooms",
        "4 bedrooms or more"
      ],
      pick: 1
    },
    q2: {
      field: "Frequency",
      text: "How often would you like a clean?",
      options: [
        "Weekly",
        "Every two weeks",
        "One-off deep clean"
      ],
      pick: 0
    },
    booked: "Cleaning Quote Call",
    asks: [
      "Home size",
      "How often",
      "Address and start date"
    ],
    followUp: {
      ask: "Can you also clean the windows?",
      reply: "Hi Alex, I have your details from the website chat: a 2 to 3 bedroom home, cleaned weekly. I have added windows to your request, and the team will include them in your quote on the call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "photography-videography",
    name: "Photography & Videography",
    group: "Professional Services",
    icon: "Briefcase",
    h1: "Turn shoot enquiries into booked planning calls.",
    lead: "The agent asks about the shoot, date and coverage, collects contact details and books a call on your website, WhatsApp and Instagram. You know the date and the brief before the call starts.",
    agentName: "Bookings",
    visitor: "Are you available for a wedding in June?",
    q1: {
      field: "Coverage",
      text: "Congratulations! What would you like covered?",
      options: [
        "Photos only",
        "Video only",
        "Photos and video"
      ],
      pick: 2
    },
    q2: {
      field: "Guests",
      text: "Roughly how many guests are you expecting?",
      options: [
        "Under 50",
        "50 to 150",
        "Over 150"
      ],
      pick: 1
    },
    booked: "Shoot Planning Call",
    asks: [
      "Event and date",
      "Coverage needed",
      "Location and budget"
    ],
    followUp: {
      ask: "Can you add an engagement shoot?",
      reply: "Hi Alex, I have your brief from the website chat: a June wedding for 50 to 150 guests, with photos and video. I have added the engagement shoot, and the team will include it in the packages on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "automotive",
    name: "Automotive",
    group: "Automotive",
    icon: "Car",
    h1: "Answer car and service enquiries and book the next step.",
    lead: "The agent answers questions about vehicles, parts and servicing, asks your qualifying questions and books a call with your team on your website and WhatsApp. Leads from your Facebook and Instagram ads go straight into the same conversation.",
    agentName: "Auto Service",
    visitor: "Can I book a service for my car?",
    q1: {
      field: "Service",
      text: "Of course. What does the car need?",
      options: [
        "Regular service",
        "Repair",
        "Inspection"
      ],
      pick: 0
    },
    q2: {
      field: "Drop off",
      text: "When would you like to drop it off?",
      options: [
        "This week",
        "Next week",
        "Not sure yet"
      ],
      pick: 0
    },
    booked: "Service Advisor Call",
    asks: [
      "Make and model",
      "Service needed",
      "Drop off date"
    ],
    followUp: {
      ask: "Can you check the air conditioning too?",
      reply: "Hi Alex, I have your details from the website chat: a regular service, dropping off this week. I have added the air conditioning check, and the service advisor will confirm both on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "auto-part-retailer",
    name: "Auto Part Retailer",
    group: "Automotive",
    icon: "Car",
    h1: "Get the vehicle details before your team quotes the part.",
    lead: "The agent asks for the make, model and year, answers stock and delivery questions, and books a call with your parts team on your website and WhatsApp. Workshops and trade customers get answers in the same chat.",
    agentName: "Parts",
    visitor: "Do you have brake pads for a 2019 hatchback?",
    q1: {
      field: "Buyer",
      text: "I can check that. Are they for your own car or a workshop?",
      options: [
        "My own car",
        "A workshop",
        "A fleet"
      ],
      pick: 1
    },
    q2: {
      field: "Delivery",
      text: "Would you like to collect them or have them delivered?",
      options: [
        "Collect in store",
        "Delivery",
        "Not sure yet"
      ],
      pick: 0
    },
    booked: "Parts Quote Call",
    asks: [
      "Make, model and year",
      "Parts needed",
      "Collect or delivery"
    ],
    followUp: {
      ask: "Can you add discs for the same car?",
      reply: "Hi Alex, I have your details from the website chat: brake pads for a 2019 hatchback, for a workshop, collected in store. I have added discs for the same car, and the parts team will confirm both on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "car-dealership",
    name: "Car Dealership",
    group: "Automotive",
    icon: "Car",
    h1: "Turn car enquiries into booked test drive calls.",
    lead: "The agent answers questions about stock, finance options and trade-ins, asks how the buyer plans to pay, and books a call with your sales team on your website and WhatsApp. Leads from your Facebook and Instagram ads go straight into the same conversation.",
    agentName: "Showroom",
    visitor: "Is the white hybrid SUV still available?",
    q1: {
      field: "Payment",
      text: "It is. How are you planning to pay?",
      options: [
        "Cash",
        "Finance",
        "Lease"
      ],
      pick: 1
    },
    q2: {
      field: "Trade-in",
      text: "Do you have a car to trade in?",
      options: [
        "Yes",
        "No",
        "Not sure yet"
      ],
      pick: 0
    },
    booked: "Test Drive Call",
    asks: [
      "Model and budget",
      "Finance or cash",
      "Trade-in details"
    ],
    followUp: {
      ask: "Can I test drive it on Saturday?",
      reply: "Hi Alex, I have your details from the website chat: the white hybrid SUV, on finance, with a trade-in. The sales team will hold a Saturday test drive and confirm the time on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "travel",
    name: "Travel",
    group: "Travel",
    icon: "Plane",
    h1: "Turn trip enquiries into booked planning calls.",
    lead: "The agent asks about dates, group size and what to include, collects contact details and books a call with your travel team, on your website and WhatsApp. Your team starts planning with the brief already in hand.",
    agentName: "Travel",
    visitor: "Planning a team offsite for 30 people",
    q1: {
      field: "Dates",
      text: "Lovely. When are you planning to travel?",
      options: [
        "This month",
        "In 1 to 3 months",
        "Later this year"
      ],
      pick: 1
    },
    q2: {
      field: "Package",
      text: "What should we take care of?",
      options: [
        "Stay only",
        "Stay and transfers",
        "Everything planned"
      ],
      pick: 2
    },
    booked: "Trip Planning Call",
    asks: [
      "Group size",
      "Travel dates",
      "What to include"
    ],
    followUp: {
      ask: "Can we add a beach day to the plan?",
      reply: "Hi Alex, I have your brief from the website chat: 30 people, travelling in 1 to 3 months, with everything planned. I have added the beach day, and the team will include it in the plan they share on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "travel-agency-tour-operator",
    name: "Travel Agency & Tour Operator",
    group: "Travel",
    icon: "Plane",
    h1: "Answer tour enquiries and book the planning call.",
    lead: "The agent answers questions about tours and packages, asks about the destination, dates and travellers, and books a call with your team on your website and WhatsApp. Your agents start the call ready to plan the trip.",
    agentName: "Tours",
    visitor: "Do you run family tours in Italy?",
    q1: {
      field: "Travellers",
      text: "We do. Who is travelling?",
      options: [
        "2 adults",
        "Family with kids",
        "Group of friends"
      ],
      pick: 1
    },
    q2: {
      field: "Length",
      text: "How long would you like the trip to be?",
      options: [
        "Under a week",
        "1 to 2 weeks",
        "Over 2 weeks"
      ],
      pick: 1
    },
    booked: "Tour Planning Call",
    asks: [
      "Destination and dates",
      "Travellers",
      "Budget and style"
    ],
    followUp: {
      ask: "Can we add a cooking class in Florence?",
      reply: "Hi Alex, I have your brief from the website chat: a family tour in Italy for 1 to 2 weeks. I have added the cooking class in Florence, and the team will build it into the itinerary they share on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "security-and-av",
    name: "Security and AV Installers",
    group: "B2B",
    icon: "Building2",
    h1: "Turn CCTV and access control enquiries into booked survey calls.",
    lead: "The agent asks about the site, coverage and features, collects contact details and books the call on your website and WhatsApp. Your estimators start the first call already knowing the job.",
    agentName: "Security",
    visitor: "We need CCTV for our office",
    q1: {
      field: "Coverage",
      text: "Happy to help with cameras for your office. Which areas need coverage?",
      options: [
        "Front entry",
        "Lobby & hallways",
        "Full perimeter + inside"
      ],
      pick: 2
    },
    q2: {
      field: "Features",
      text: "Got it. Do you want features like face or licence plate recognition, or just recording?",
      options: [
        "Just recording",
        "Face recognition",
        "Plate recognition"
      ],
      pick: 0
    },
    booked: "Site Survey Call",
    asks: [
      "Site size and coverage",
      "Features needed",
      "Install timeline"
    ],
    followUp: {
      ask: "Can you include pricing for 12 cameras?",
      reply: "Hi Alex, I have your brief from the website chat: full perimeter + inside, recording only. I have added 12 cameras to it, and the team will bring pricing to your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "it-services",
    name: "IT and Managed Services",
    group: "B2B",
    icon: "Building2",
    h1: "Qualify managed IT enquiries before the first call.",
    lead: "The agent asks about team size, sites and current setup, collects contact details and books a call with your team, on your website and WhatsApp. Your first call starts with the brief, not the basics.",
    agentName: "IT Support",
    visitor: "Do you offer IT support for small offices?",
    q1: {
      field: "Team size",
      text: "We do. How many people would need support?",
      options: [
        "Under 20",
        "20 to 100",
        "Over 100"
      ],
      pick: 1
    },
    q2: {
      field: "Scope",
      text: "Thanks. Do you need help with devices, cloud and email, or both?",
      options: [
        "Devices",
        "Cloud and email",
        "Both"
      ],
      pick: 2
    },
    booked: "General Consultation",
    asks: [
      "Team size and sites",
      "Current setup",
      "Support hours needed"
    ],
    followUp: {
      ask: "We also have a second office. Can that be covered?",
      reply: "Hi Alex, I have your details from the website chat: 20 to 100 people, devices plus cloud and email. I have added the second office to your request so the team can plan for both sites on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "software-and-saas",
    name: "Software and SaaS",
    group: "B2B",
    icon: "Building2",
    h1: "Book demos with the accounts that fit.",
    lead: "The agent answers product questions, asks about team size, must have integrations and timeline, and books the demo in the chat. Your sales team sees every answer before the call.",
    agentName: "Sales",
    visitor: "Can our sales team try this?",
    q1: {
      field: "Seats",
      text: "Of course. How many people would use it?",
      options: [
        "1 to 10",
        "11 to 50",
        "More than 50"
      ],
      pick: 1
    },
    q2: {
      field: "Priority",
      text: "What matters most to your team right now?",
      options: [
        "Pricing",
        "Integrations",
        "Security review"
      ],
      pick: 1
    },
    booked: "Product Demo",
    asks: [
      "Seats and team size",
      "Must have integrations",
      "Buying timeline"
    ],
    followUp: {
      ask: "Can we bring our IT lead to the demo?",
      reply: "Hi Alex, of course. I have your details from the website chat: a team of 11 to 50, focused on integrations. I have let the team know your IT lead is joining the demo on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "manufacturing-and-wholesale",
    name: "Manufacturing and Wholesale",
    group: "B2B",
    icon: "Building2",
    h1: "Turn bulk enquiries into complete quote requests.",
    lead: "The agent asks about volume, specifications and delivery, collects contact details and books a call with sales, on your website and WhatsApp. No more back and forth just to get the basics.",
    agentName: "Wholesale",
    visitor: "I need a bulk quote for packaging boxes",
    q1: {
      field: "Volume",
      text: "Happy to quote. Roughly how many boxes a month?",
      options: [
        "Under 5,000",
        "5,000 to 50,000",
        "Over 50,000"
      ],
      pick: 1
    },
    q2: {
      field: "Printing",
      text: "Do you need custom printing on the boxes?",
      options: [
        "Plain boxes",
        "Printed logo",
        "Fully custom design"
      ],
      pick: 1
    },
    booked: "Quote Call",
    asks: [
      "Monthly volume",
      "Specs and customisation",
      "Delivery location"
    ],
    followUp: {
      ask: "Can you send samples before the call?",
      reply: "Hi Alex, I have your brief from the website chat: 5,000 to 50,000 boxes a month with a printed logo. I have passed the sample request to the team, and they will confirm it before your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "agencies-and-consulting",
    name: "Agencies and Consulting",
    group: "B2B",
    icon: "Building2",
    h1: "Turn project briefs into booked discovery calls.",
    lead: "The agent asks about scope, budget and timing, collects contact details and books a discovery call, on your website and WhatsApp. Your first call starts with the brief, not the basics.",
    agentName: "Studio",
    visitor: "We want to redo our website and SEO",
    q1: {
      field: "Scope",
      text: "Sounds good. What would you like to start with?",
      options: [
        "New website",
        "SEO",
        "Both together"
      ],
      pick: 2
    },
    q2: {
      field: "Start",
      text: "And when would you like to start?",
      options: [
        "This month",
        "Next quarter",
        "Just exploring"
      ],
      pick: 0
    },
    booked: "Discovery Call",
    asks: [
      "Scope of work",
      "Budget range",
      "Start date"
    ],
    followUp: {
      ask: "Here is our current site. Is a full rebuild needed?",
      reply: "Hi Alex, thanks. I have your brief from the website chat: a new website and SEO, starting this month. I have added your site to it, and the team will answer that on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    group: "B2B",
    icon: "Building2",
    h1: "Turn property enquiries into booked site visit calls.",
    lead: "The agent asks whether they want to buy or rent, their area, budget and move in date, collects contact details and books a call with your team, on your website and WhatsApp. Your team starts the call knowing what to shortlist.",
    agentName: "Property",
    visitor: "Looking for a 3 bedroom apartment",
    q1: {
      field: "Buy or rent",
      text: "Great. Are you looking to buy or rent?",
      options: [
        "Buy",
        "Rent",
        "Not sure yet"
      ],
      pick: 0
    },
    q2: {
      field: "Move in",
      text: "When do you want to move in?",
      options: [
        "Within 3 months",
        "3 to 6 months",
        "Just exploring"
      ],
      pick: 1
    },
    booked: "Site Visit Call",
    asks: [
      "Buy or rent",
      "Area and budget",
      "Move in date"
    ],
    followUp: {
      ask: "Can I see the flats this weekend?",
      reply: "Hi Alex, I have your brief from the website chat: a 3 bedroom apartment to buy, moving in 3 to 6 months. The team will offer viewing slots for this weekend on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "events-and-webinars",
    name: "Events and Webinars",
    group: "B2B",
    icon: "Building2",
    h1: "Turn event enquiries into booked planning calls.",
    lead: "The agent asks about the event, guest count and date, collects contact details and books a planning call, on your website and WhatsApp. Then keep guests informed with WhatsApp campaigns.",
    agentName: "Events",
    visitor: "We want to host a product launch",
    q1: {
      field: "Guests",
      text: "Exciting! Roughly how many guests?",
      options: [
        "Under 50",
        "50 to 200",
        "Over 200"
      ],
      pick: 1
    },
    q2: {
      field: "Date",
      text: "Do you have a date in mind?",
      options: [
        "This month",
        "In 1 to 3 months",
        "Not decided"
      ],
      pick: 1
    },
    booked: "Event Planning Call",
    asks: [
      "Event type",
      "Guest count",
      "Date and budget"
    ],
    followUp: {
      ask: "Can you also handle catering?",
      reply: "Hi Alex, I have your brief from the website chat: a product launch for 50 to 200 guests in the next 1 to 3 months. I have added catering to it, and the team will cover options on your call on Wednesday at 2:00 pm."
    }
  },
  {
    slug: "finance-and-insurance",
    name: "Finance and Insurance",
    group: "B2B",
    icon: "Building2",
    h1: "Qualify cover enquiries and book advisor calls.",
    lead: "The agent asks about the type of cover, team size and renewal dates, collects contact details and books a call with an advisor, on your website and WhatsApp. Your advisors start the call with the details already in hand.",
    agentName: "Advisor",
    visitor: "I need insurance for my company",
    q1: {
      field: "Team size",
      text: "Happy to help. How many employees do you have?",
      options: [
        "Under 10",
        "10 to 50",
        "Over 50"
      ],
      pick: 1
    },
    q2: {
      field: "Cover",
      text: "Which cover are you looking for?",
      options: [
        "Property",
        "Liability",
        "Employee health"
      ],
      pick: 2
    },
    booked: "Advisor Call",
    asks: [
      "Type of cover",
      "Team or asset size",
      "Renewal date"
    ],
    followUp: {
      ask: "Our current policy renews next month. Can you help?",
      reply: "Hi Alex, I have your details from the website chat: employee health cover for 10 to 50 people. I have noted the renewal date, and the advisor will compare options with you on your call on Wednesday at 2:00 pm."
    }
  }
];
