import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Joytun Nisa",
  lastName: "Joti",
  name: `Joytun Nisa Joti`,
  role: "Industrial Engineer | Supply Chain Analytics | Data Science",
  avatar: "/images/avatar.jpg",
  email: "",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on supply chain analytics, industrial engineering and applied data science.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // Contact URLs are omitted until provided; empty links are not rendered.
  {
    name: "GitHub",
    icon: "github",
    link: "",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Industrial Engineering, Supply Chain Analytics and Data Science`,
  description: `Academic and professional portfolio of ${person.name}, an industrial engineer working in supply chain analytics and data science.`,
  headline: <>Industrial engineering, supply chain analytics and data science for operational problems</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I am {person.name}, an industrial engineer combining supply chain knowledge and data science
      to analyse and improve real-world operational systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name}, industrial engineer working in supply chain analytics and data science, based in Bangladesh.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an industrial engineer with a background in production systems and professional
        experience across distribution planning, logistics, inventory management and supply chain
        optimization. My current academic work is in applied statistics and data science, with
        interests in predictive analytics, machine learning, operations research, forecasting and
        sustainable supply chains. I aim to connect engineering practice with quantitative methods
        to support clearer operational decisions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional experience",
    experiences: [
      {
        company: "Supply chain operations",
        timeframe: "",
        role: "Industrial Engineer",
        achievements: [
          <>
            Professional experience in distribution planning, logistics, inventory management and
            supply chain optimization.
          </>,
          <>
            Work is oriented toward applying industrial engineering and quantitative analysis to
            operational planning and improvement.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Jahangirnagar University",
        description: (
          <>
            Master's in Applied Statistics and Data Science (in progress).
          </>
        ),
      },
      {
        name: "Military Institute of Science and Technology (MIST), Bangladesh",
        description: <>B.Sc. in Industrial & Production Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Research interests and methods",
    skills: [
      {
        title: "Supply chain analytics",
        description: (
          <>
            Distribution planning, logistics, inventory management and supply chain optimization,
            including questions of sustainability in supply networks.
          </>
        ),
        tags: [
          {
            name: "Supply chain",
          },
          {
            name: "Operations",
          },
        ],
        images: [],
      },
      {
        title: "Data science and forecasting",
        description: (
          <>
            Applied statistics and data science for operational analysis, with a focus on
            predictive analytics, forecasting and machine learning.
          </>
        ),
        tags: [
          {
            name: "Statistics",
          },
          {
            name: "Machine learning",
          },
        ],
        images: [],
      },
      {
        title: "Operations research",
        description: (
          <>
            Quantitative modelling to support planning and decision-making in industrial and
            supply chain systems.
          </>
        ),
        tags: [
          {
            name: "Operations research",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on engineering, analytics and research",
  description: `Selected writing by ${person.name} on industrial engineering, supply chain analytics and data science.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected projects in industrial engineering, supply chain analytics and data science by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
