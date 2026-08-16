/**
 * EDIT THIS FILE to change the words, links, email address, and photo filenames.
 * The page layout and cursor illustrations live in page.tsx.
 * Colours and responsive spacing live at the top and bottom of globals.css.
 */

export const portfolio = {
  name: "Puja Dahal",
  roleLine: "Writer · researcher · cultural communicator",
  location: "Kathmandu, Nepal",
  email: "workwithpuzz@gmail.com",

  hero: {
    eyebrow: "Writer · researcher · cultural communicator",
    titleStart: "I turn close attention into",
    titleEmphasis: "clear communication.",
    description:
      "I write, research, guide and teach. Most of my work begins with the same thing: noticing what a person, place or piece of information needs before deciding how to explain it.",
    qualities: ["Curious", "Observant", "People-centred"],
    photo: "/puja-profile.jpeg",
    photoAlt: "Puja Dahal smiling beneath prayer flags",
    photoNote: "Always looking closer",
    sideNote: "Curious about people, places and the details that explain them.",
  },

  highlights: {
    education: "MA English · 3.76 CGPA",
    profileLabel: "Published writing · NATHM-trained guide ↗",
    profileLink: "https://globalecotrails.com/meet-the-team",
    location: "Kathmandu, Nepal",
  },

  about: {
    photo: "/puja-editorial.jpeg",
    photoAlt: "Black and white portrait of Puja in a leafy courtyard",
    photoCaption: "A quiet corner in Kathmandu.",
    heading: "A little about me.",
    paragraphs: [
      "I tend to notice the smaller things: what people skip, which story is missing, and how the same place changes depending on who is speaking.",
      "That is partly why I studied literature, became a guide, taught different kinds of learners and began writing.",
      "My MA trained me to read closely, research carefully and build an argument. Guiding taught me to change an explanation while speaking. Teaching taught me that information is only useful when it reaches the person in front of it.",
      "I now want to bring those habits into communications, documentation and project support for organisations working with people and communities. I am especially interested in nature, culture and the stories through which we understand the world, but I am open to social-impact work across sectors.",
    ],
    signature: "Puja",
  },

  workIntro:
    "These are a few pieces I wrote for Global Eco Trails. Each one asks for a different kind of attention: practical, cultural or research-based.",

  cases: {
    khopra: {
      number: "01",
      kind: "Travel and practical writing",
      title: "A Practical Guide for First-Time Trekkers",
      teaser:
        "A beginner-focused trekking guide combining practical preparation with attention to pace, comfort and the different ways people experience difficulty.",
      brief:
        "A beginner-focused trekking guide combining practical preparation with attention to pace, comfort and the different ways people experience difficulty.",
      contribution: "I wrote this piece for Global Eco Trails.",
      outcome: "Written for Global Eco Trails.",
      link: "https://globalecotrails.com/blog/beginner-friendly-treks-khopra-trekking-tips",
    },

    monasteries: {
      number: "02",
      kind: "Cultural and research-based writing",
      title: "Monasteries Along the Everest Base Camp Trail",
      teaser:
        "An introduction to monasteries along the route, written to help travellers encounter them as living cultural and spiritual spaces rather than scenic stops.",
      brief:
        "An introduction to monasteries along the route, written to help travellers encounter them as living cultural and spiritual spaces rather than scenic stops.",
      contribution: "I wrote this piece for Global Eco Trails.",
      outcome: "Written for Global Eco Trails.",
      link: "https://globalecotrails.com/blog/exploring-the-monasteries-of-the-ebc-trek",
    },

    mustang: {
      number: "03",
      kind: "Research and destination writing",
      title: "A Guide to Festivals in Upper Mustang",
      teaser:
        "A researched guide organising festivals, rituals and community practices into clear, accessible information for travellers.",
      brief:
        "A researched guide organising festivals, rituals and community practices into clear, accessible information for travellers.",
      contribution: "I wrote this piece for Global Eco Trails.",
      outcome: "Written for Global Eco Trails.",
      link: "https://globalecotrails.com/blog/festival-in-upper-mustang",
    },
  },

  testimonial: {
    quote: "“Our guides, Netra and Puja, were fantastic.”",
    source: "Global Eco Trails client review",
    link: "https://globalecotrails.com/client-reviews",
  },

  strengths: [
    {
      number: "01",
      title: "Independent city guide",
      text:
        "I conduct personalised English-language city tours in Kathmandu Valley, explaining history, culture, religion, architecture and the environment according to the interests of the person in front of me.",
    },
    {
      number: "02",
      title: "Adaptive teaching",
      text:
        "I prepared lesson plans and curriculum materials, supported a visually impaired Grade 11–12 learner, worked with two literacy learners and completed a limited number of formal progress reports.",
    },
    {
      number: "03",
      title: "Close reading and argument",
      text:
        "My academic work combines literary analysis, environmental thought, research and clear argument.",
    },
  ],

  method: [
    {
      number: "01",
      title: "Communications and content",
      text:
        "Articles, website copy, public information and audience-focused writing.",
    },
    {
      number: "02",
      title: "Research and documentation",
      text:
        "Background research, summaries, reports, case documentation and information organisation.",
    },
    {
      number: "03",
      title: "Learning and project support",
      text:
        "Lesson planning, curriculum materials, progress notes, bilingual communication and adapting information for different learners and audiences.",
    },
  ],

  contact: {
    heading: "Let’s talk about useful work.",
    description:
      "I am open to communications, content, documentation and project-support opportunities with NGOs, INGOs and other organisations working across social, cultural, educational, environmental and development sectors. I am also interested in research guidance and thoughtful collaborations.",
  },

  quickScan: {
    heading: "A writer, researcher and cultural communicator.",
    items: [
      ["She offers", "Writing, research, documentation and cultural communication"],
      ["She has", "Published travel writing, MA research, adaptive teaching and certified guide training"],
      ["She is interested in", "Social-impact communications, documentation and project support"],
      ["Based in", "Kathmandu, Nepal"],
    ],
  },
} as const;
