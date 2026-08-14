/**
 * EDIT THIS FILE to change the words, links, email address, and photo filenames.
 * The page layout and cursor illustrations live in page.tsx.
 * Colours and responsive spacing live at the top and bottom of globals.css.
 */
export const portfolio = {
  name: "Puja Dahal",
  roleLine: "Writer · cultural guide · curious listener",
  location: "Kathmandu, Nepal",
  email: "workwithpuzz@gmail.com",

  hero: {
    eyebrow: "Writer · cultural guide · curious listener",
    titleStart: "I turn close attention into",
    titleEmphasis: "clear communication.",
    description: "I write, research, guide and teach. Across each role, I listen carefully, understand the context and make information useful to other people.",
    qualities: ["Curious", "Observant", "People-centred"],
    photo: "/puja-profile.jpeg",
    photoAlt: "Puja Dahal smiling beneath prayer flags",
    photoNote: "Always looking closer",
    sideNote: "Curious about people, places and the details that explain them.",
  },

  highlights: {
    education: "MA English · 3.76 CGPA",
    profileLabel: "Published writer & verified guide ↗",
    profileLink: "https://globalecotrails.com/meet-the-team",
    location: "Based in Kathmandu",
  },

  about: {
    photo: "/puja-editorial.jpeg",
    photoAlt: "Black and white portrait of Puja in a leafy courtyard",
    photoCaption: "A quiet corner in Kathmandu.",
    heading: "Curiosity is how I work.",
    paragraphs: [
      "I pay attention to people, places and the small details that explain a larger situation. That habit helps me ask better questions, find connections and understand what an audience needs.",
      "My literature degree trained me to read closely and build an argument. Writing taught me to research and structure information. Guiding and teaching taught me to adapt—in real time—to the person in front of me.",
    ],
    signature: "Puja",
  },

  workIntro: "Each example shows the published outcome first. Open the context to see the problem, my contribution and the result.",
  cases: {
    khopra: {
      number: "01",
      kind: "Travel writing",
      title: "A practical guide for first-time trekkers",
      teaser: "Clear preparation advice for Khopra, organised around the decisions a beginner actually has to make.",
      brief: "Help first-time trekkers understand pace, preparation, rest and trail choice without turning the journey into a checklist.",
      contribution: "I shaped the article around the questions a nervous first-time trekker would actually ask, then paired practical advice with a strong sense of place.",
      outcome: "Published by Global Eco Trails in July 2026.",
      link: "https://globalecotrails.com/blog/beginner-friendly-treks-khopra-trekking-tips",
    },
    monasteries: {
      number: "02",
      kind: "Cultural writing",
      title: "Monasteries along the Everest Base Camp trail",
      teaser: "Cultural context that helps travellers understand these monasteries as living spaces, not scenic stops.",
      brief: "Introduce the monasteries along the Everest Base Camp route with enough context to help travellers meet them respectfully.",
      contribution: "I combined research, cultural framing and clear structure so readers could understand both the route and the meaning held along it.",
      outcome: "Published cultural travel article for Global Eco Trails.",
      link: "https://globalecotrails.com/blog/exploring-the-monasteries-of-the-ebc-trek",
    },
    mustang: {
      number: "03",
      kind: "Research & guide writing",
      title: "A guide to festivals in Upper Mustang",
      teaser: "Complex cultural information organised into a useful guide without losing its specificity.",
      brief: "Give interested travellers a useful way into Upper Mustang's seasonal, spiritual and community celebrations.",
      contribution: "I organised scattered cultural information into an accessible guide, keeping the language concise while preserving the specificity of each ritual.",
      outcome: "Published destination guide for Global Eco Trails in May 2026.",
      link: "https://globalecotrails.com/blog/festival-in-upper-mustang",
    },
  },

  testimonial: {
    quote: "“Our guides, Netra and Puja, were fantastic.”",
    source: "Alan S. · United Kingdom · after a two-week journey in Nepal",
    link: "https://globalecotrails.com/client-reviews",
  },

  strengths: [
    { number: "01", title: "I make culture understandable.", text: "I guide people through Kathmandu Valley heritage in English, adapting the story to the questions in front of me." },
    { number: "02", title: "I change the explanation.", text: "I supported a visually impaired Grade 11–12 learner across six subjects, adjusting pace and method around accessibility." },
    { number: "03", title: "I stay with the learner.", text: "I worked with two literacy learners over several months, moving from phonics toward independent reading." },
  ],

  method: [
    { number: "01", title: "Listen closely", text: "Find what the person, reader or place actually needs." },
    { number: "02", title: "Connect the dots", text: "Make the useful relationship visible inside scattered information." },
    { number: "03", title: "Shape the message", text: "Choose a structure and voice that let the idea move." },
  ],

  contact: {
    heading: "Let’s talk about the work.",
    description: "I am open to roles in writing, research, education and cultural communication—especially work that values care, context and clear thinking.",
  },

  quickScan: {
    heading: "Puja turns close attention into clear, human communication.",
    items: [
      ["She offers", "Writing, research, cultural communication and teaching"],
      ["You can verify", "Published work, a public guide profile and a client review"],
      ["Her strength", "Listening closely, connecting ideas and explaining with care"],
      ["Based in", "Kathmandu, Nepal"],
    ],
  },
} as const;
