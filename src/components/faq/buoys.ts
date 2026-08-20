/**
faq buoy data 

every number is a ratio of the faq width (1024px in
figma) eventuyally will have to add the mobile and widecreen stuff, but i dont think this is the way that i was supposed to do things anyways
 
each buoy needs three boxes
art ->  the artwork box, plus a "bleed" inset because the exported svg is larger than its frame. IF sized to the frame it would make it would change the actual svg
q ->    the question, on its centr.
a ->    the answer
 */

export type Segment = {
  text: string;
  semibold?: boolean;
  href?: string;
};

export type Box = {
  left: number;
  top: number;
  width: number;
  height: number;
  /** top, right, bottom, left percentage stuff */
  bleed: [number, number, number, number];
};

export type TextBox = {
  /** put in centr for each buoy */
  cx: number;
  top: number;
  width: number;
};

export type Buoy = {
  slug: string;
  question: string;
  answer: Segment[][];
  art: Box;
  q: TextBox & { size: number };
  a: TextBox;
};

export const BUOYS: Buoy[] = [
  {
    slug: "deadline",
    question: "When is the deadline to apply?",
    answer: [
      [
        { text: "The deadline for registration is " },
        { text: "October 11 at 11:59 PM.", semibold: true },
        {
          text: " Applications are considered on a rolling basis, so please try to apply early!",
        },
      ],
    ],
    art: {
      left: 0.595459,
      top: 0.716797,
      width: 0.278532,
      height: 0.340205,
      bleed: [-1.58, -8.02, -11.55, -8.02],
    },
    q: { cx: 0.73291, top: 0.785156, width: 0.21582, size: 20 },
    a: { cx: 0.734014, top: 0.894941, width: 0.220563 },
  },
  {
    slug: "experience",
    question: "How much experience do I need?",
    answer: [
      [
        {
          text: "Absolutely zero! We want you here because you have a passion for creating, not because you're the most experienced hacker on the block. We'll have a bunch of resources including workshops and mentors to help beginners get started.",
        },
      ],
    ],
    art: {
      left: 0.203809,
      top: 0.951494,
      width: 0.279945,
      height: 0.458613,
      bleed: [-4.79, -12.43, -10.4, -12.43],
    },
    q: { cx: 0.343789, top: 1.063193, width: 0.248841, size: 20 },
    a: { cx: 0.340918, top: 1.160283, width: 0.235995 },
  },
  {
    slug: "attend",
    question: "Who can attend?",
    answer: [
      [
        {
          text: "Any Texas A&M undergraduate or graduate student who is at least 18. Regardless of your experience, education, or background, as long as you are excited about learning, building, and having fun, we'd love for you to attend.",
        },
      ],
    ],
    art: {
      left: 0.538896,
      top: 1.109854,
      width: 0.291257,
      height: 0.526371,
      bleed: [-4.33, -12.42, -9.41, -12.42],
    },
    q: { cx: 0.682402, top: 1.254063, width: 0.323775, size: 20 },
    a: { cx: 0.688271, top: 1.364258, width: 0.241771 },
  },
  {
    slug: "cost",
    question: "How much does it cost?",
    answer: [
      [
        {
          text: "Nothing. Nada. Zilch. It's completely free for all accepted hackers. To make it even better, we'll be giving out a ton of swag to every in-person hacker, and prizes to our winners.",
        },
      ],
    ],
    art: {
      left: 0.171299,
      top: 1.471807,
      width: 0.285601,
      height: 0.428401,
      bleed: [-5, -11.91, -10.87, -11.91],
    },
    q: { cx: 0.314941, top: 1.567383, width: 0.178711, size: 20 },
    a: { cx: 0.316406, top: 1.657021, width: 0.247817 },
  },
  {
    slug: "workshops",
    question: "Will there be workshops or talks?",
    answer: [
      [
        {
          text: "Of course! We will have workshops running throughout the whole event. We will release the complete schedule on the website closer to the event.",
        },
      ],
    ],
    art: {
      left: 0.545967,
      top: 1.695195,
      width: 0.21915,
      height: 0.418505,
      bleed: [-6.02, -18.24, -13.08, -18.24],
    },
    q: { cx: 0.660156, top: 1.779297, width: 0.189453, size: 20 },
    a: { cx: 0.65625, top: 1.899414, width: 0.189453 },
  },
  {
    slug: "msc",
    question: "Do I need to stay at the MSC the entire time?",
    answer: [
      [
        {
          text: "No, but you must be present at check-in and the awards ceremony with your team to receive prizes. Extenuating circumstances will be considered on a case-by-case basis.",
        },
      ],
    ],
    art: {
      left: 0.114736,
      top: 1.993516,
      width: 0.350719,
      height: 0.441127,
      bleed: [-4.47, -8.91, -9.7, -8.91],
    },
    q: { cx: 0.289854, top: 2.086631, width: 0.303981, size: 20 },
    a: { cx: 0.290117, top: 2.235293, width: 0.316706 },
  },
  {
    slug: "teams",
    question: "How do teams work?",
    answer: [
      [
        {
          text: "Teams are limited to 4 hackers. You don't need to have a team before the event or have one at all, but hacking with friends is more fun! There will be plenty of time after the opening ceremony to form teams if you don't have one yet.",
        },
      ],
    ],
    art: {
      left: 0.545977,
      top: 2.174492,
      width: 0.295663,
      height: 0.560203,
      bleed: [-3.4, -10.21, -7.38, -10.31],
    },
    q: { cx: 0.693809, top: 2.290498, width: 0.323956, size: 20 },
    a: { cx: 0.695312, top: 2.392578, width: 0.257812 },
  },
  {
    slug: "plagiarism",
    question: "Plagiarism",
    answer: [
      [
        {
          text: "All projects must be original and created during the hackathon. Any team found to be in violation of this rule will be disqualified from the competition. Your codebase should no more than ~30% reused from existing projects on GitHub, Kaggle, etc. Use of AI such as ChatGPT or Copilot is completely fine.",
        },
      ],
    ],
    art: {
      left: 0.143018,
      top: 2.598652,
      width: 0.365207,
      height: 0.521889,
      bleed: [-5.18, -11.75, -11.26, -11.75],
    },
    q: { cx: 0.32752, top: 2.752939, width: 0.323775, size: 36 },
    a: { cx: 0.3254, top: 2.858809, width: 0.279945 },
  },
  {
    slug: "waitlist",
    question: "Waitlist",
    answer: [
      [
        {
          text: "We will have a waitlist line for students who are not accepted. After 10 AM, we will admit people from the waitlist line until the MSC capacity has been reached. Please come early for a higher chance of being admitted to the event as it is first come, first serve.",
        },
      ],
      [
        {
          text: "If you were not accepted or waitlisted, unfortunately, we will not be able to accommodate you at the event. However, we encourage you to apply to TAMUhack in the spring!",
        },
      ],
    ],
    art: {
      left: 0.562939,
      top: 2.806494,
      width: 0.356295,
      height: 0.600894,
      bleed: [-4.39, -11.75, -9.54, -11.75],
    },
    q: { cx: 0.740371, top: 2.956367, width: 0.323775, size: 36 },
    a: { cx: 0.740371, top: 3.055332, width: 0.298326 },
  },
  {
    slug: "moreQs",
    question: "More questions?",
    answer: [
      [
        { text: "Email us with questions, comments, or concerns at " },
        {
          text: "hello@tamuhack.com",
          href: "mailto:hello@tamuhack.com",
        },
      ],
    ],
    art: {
      left: 0.212295,
      top: 3.208027,
      width: 0.244599,
      height: 0.311051,
      bleed: [-6.23, -12.56, -13.53, -12.56],
    },
    q: { cx: 0.333184, top: 3.326797, width: 0.323775, size: 20 },
    a: { cx: 0.333086, top: 3.394658, width: 0.234375 },
  },
];
