// Personal content for the site, kept in one place.
// Anything still in [square brackets] is a placeholder waiting for a real answer.

export const site = {
  name: "karen deng",
  description:
    "Computing and Software Systems student at the University of Melbourne, building AI-flavoured tools for everyday problems.",
  url: "https://karendeng.com", // used for RSS links

  // Shown above the name, joined with ", "
  greetings: ["hello", "你好"],

  // The dictionary-style definitions under "noun"
  definitions: [
    "computing student at the university of melbourne; builds full-stack apps with AI at their core.",
    "chronically curious; usually halfway through building or exploring something.",
  ],

  links: {
    github: "https://github.com/keyuedeng",
    linkedin: "https://www.linkedin.com/in/karen-deng-795709322/",
    email: "mailto:keyuedeng6@gmail.com",
    cv: "/resume.pdf",
  },

  questions: [
    {
      label: "What are you working on?",
      answer:
        "Moire, a journal that remembers the promises you make to yourself. Its open loops resurface when they're due, so things you write down actually get done.",
    },
    {
      label: "What are you reading?",
      answer: "East of Eden, by John Steinbeck.",
    },
  ],

  // Experience timeline, newest first (it displays oldest-left, opening on the newest).
  // `current: true` gets the filled blue dot; `upcoming: true` gets a hollow blue dot and a dashed rail.
  experience: [
    {
      when: "Summer 2026–27 · soon",
      role: "Summer Vacationer",
      org: "Macquarie Group, Sydney",
      blurb: "Joining the summer internship program.",
      upcoming: true,
    },
    {
      when: "Mar – Sep 2026",
      role: "Systems Engineer Intern",
      org: "Cisco, Melbourne",
      blurb: "Built a production Splunk add-on streaming network health data, plus Python tooling that maps live network topologies.",
    },
    {
      when: "Jun – Aug 2025",
      role: "Python Developer",
      org: "AI @ DSCubed",
      blurb: "Built a tool-calling CLI assistant that cut new-member onboarding from over an hour to 15 minutes.",
    },
    {
      when: "2024",
      role: "Started Computing & Software Systems",
      org: "University of Melbourne",
      blurb: "Where it all began.",
    },
  ] as ExperienceItem[],

  beliefs: [
    "Whatever ceiling you have for yourself is the highest you can go in life.",
    "Do it even if you don't feel ready.",
    "The best projects solve a problem you've actually had yourself.",
  ],
  // Set to a URL to show a "the whole list ↗︎" link under the beliefs
  beliefsLink: null as string | null,

  // Playground collage. `x`/`y` are starting positions on a 1040×460 board;
  // add `src` (a file in /public) to replace an image placeholder with a photo.
  collage: [
    { id: "a", x: 40, y: 60, w: 170, rot: -5, style: "photo", imgH: 150, img: "[photo]", src: "/pottery.jpg", label: "three cups, fresh off the wheel" },
    { id: "b", x: 230, y: 150, w: 150, rot: 4, style: "sticky", label: "growth over comfort" },
    { id: "c", x: 400, y: 30, w: 220, rot: -2, style: "photo", imgH: 150, img: "[photo]", src: "/hackathonwin.jpg", label: "2nd place + track 2 at Forward, for Motif" },
    { id: "d", x: 590, y: 280, w: 200, rot: 6, style: "dashed", label: "ON REPEAT THIS MONTH · Without You — Oh Wonder" },
    { id: "e", x: 720, y: 70, w: 140, rot: -7, style: "photo", imgH: 110, img: "[pet / food]", src: "/saltbread.png", label: "a small joy: salt bread" },
    { id: "f", x: 860, y: 230, w: 170, rot: 3, style: "pill", label: "favourite language: python" },
    { id: "g", x: 120, y: 300, w: 180, rot: -3, style: "ticket", label: "TICKET · SB Hacks — first hackathon" },
  ] as CollageItem[],
}

export type ExperienceItem = {
  when: string
  role: string
  org: string
  blurb: string
  current?: boolean
  upcoming?: boolean
}

export type CollageItem = {
  id: string
  x: number
  y: number
  w: number
  rot: number
  style: "photo" | "sticky" | "dashed" | "pill" | "ticket"
  label: string
  imgH?: number
  img?: string
  src?: string
}
