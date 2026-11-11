/* Sample AI calls for the call demo. Illustrative only: the businesses, the
   agent names and the people are made up, and the page labels the transcript
   as a sample. Each call ends in an outcome the CRM records.

   The pattern (pick a call, a talking orb, a transcript beside it) follows
   how voice agent products demo calls; there is no audio, because a recording
   would have to be a real YourLio call. */
export const B2B_CALLS = [
  {
    id: 'callback',
    label: 'Website lead call back',
    channel: 'From a website chat',
    agent: 'Maya',
    business: 'Northwind Security',
    lead: 'Alex Morgan',
    lines: [
      ['agent', 'Hi Alex, this is Maya from Northwind Security. You asked about CCTV for your office on our website. Is now a good time?'],
      ['lead', 'Yes, go ahead.'],
      ['agent', 'Which areas do you need covered?'],
      ['lead', 'The entrance and the parking area.'],
      ['agent', 'Got it. Do you want recording only, or licence plate recognition for the parking too?'],
      ['lead', 'Plate recognition for the parking.'],
      ['agent', 'Thanks. Our engineer can do a site survey call on Wednesday at 2:00 pm. Does that work?'],
      ['lead', 'Wednesday works.'],
      ['agent', 'Booked. The invite is on its way to your email.'],
    ],
    outcome: { booked: 'Survey call booked, Wed 2:00 pm', stage: 'Qualified' },
  },
  {
    id: 'ads',
    label: 'Meta ad lead',
    channel: 'From a Facebook ad form',
    agent: 'Riya',
    business: 'Fieldstone Homes',
    lead: 'Priya',
    lines: [
      ['agent', 'Hi Priya, this is Riya from Fieldstone Homes. You filled in our form about 3 bedroom apartments. Do you have a minute?'],
      ['lead', 'Sure.'],
      ['agent', 'Are you looking to buy or rent?'],
      ['lead', 'Buy, ideally near the metro.'],
      ['agent', 'Great. When are you hoping to move in?'],
      ['lead', 'In about three months.'],
      ['agent', 'We have two projects that fit. Shall I book a site visit call with our advisor for Saturday morning?'],
      ['lead', 'Saturday at 11 is good.'],
      ['agent', 'Done. I have sent the details to your WhatsApp.'],
    ],
    outcome: { booked: 'Site visit call booked, Sat 11:00 am', stage: 'Qualified' },
  },
  {
    id: 'renewal',
    label: 'Renewal reminder',
    channel: 'Outbound to a client',
    agent: 'Dev',
    business: 'Harbor Insurance',
    lead: 'Rahul',
    lines: [
      ['agent', 'Hi Rahul, this is Dev from Harbor Insurance. Your team health cover renews at the end of this month.'],
      ['lead', 'Right, we have hired a few people since then.'],
      ['agent', 'Good to know. Roughly how many employees now?'],
      ['lead', 'About 40.'],
      ['agent', 'Thanks. An advisor can walk you through updated options. Would Thursday at 4:00 pm work?'],
      ['lead', 'Yes, Thursday is fine.'],
      ['agent', 'Booked. You will get the invite by email.'],
    ],
    outcome: { booked: 'Advisor call booked, Thu 4:00 pm', stage: 'Renewal' },
  },
];
