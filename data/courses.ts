export type Course = {
  id: string;
  title: string;
  creator: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  students: string;
  image: string;
  categories: string[];
};

export const FEATURED_COURSES: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-figma.webp",
    categories: [
      "UI/UX Design",
      "Graphic Design",
      "Drawing & Painting",
      "Digital Illustration",
    ],
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-asset.webp",
    categories: [
      "Digital Illustration",
      "Graphic Design",
      "Creative Marketing",
      "Animation",
    ],
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-bigdata.webp",
    categories: ["Data Science", "Web Development"],
  },
  {
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-productivity.webp",
    categories: ["Productivity", "Crafts"],
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-money.webp",
    categories: [
      "Marketing",
      "Freelance & Entrepreneurship",
      "Social Media",
    ],
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-startup.webp",
    categories: [
      "Freelance & Entrepreneurship",
      "Social Media",
      "Creative Marketing",
      "Marketing",
      "Film & Video",
    ],
  },
];

const EXTRA_COURSES: Course[] = [
  {
    id: "animation-design",
    title: "Intro to Animation Design",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-asset.webp",
    categories: ["Animation", "Digital Illustration", "Drawing & Painting"],
  },
  {
    id: "photography-foundations",
    title: "Photography Foundations",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-figma.webp",
    categories: ["Photography", "Drawing & Painting"],
  },
  {
    id: "music-production",
    title: "Music Production Basics",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-bigdata.webp",
    categories: ["Music"],
  },
  {
    id: "social-media-strategy",
    title: "Social Media Strategy",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-money.webp",
    categories: ["Social Media", "Marketing", "Creative Marketing"],
  },
  {
    id: "culinary-arts",
    title: "Culinary Arts at Home",
    creator: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image: "/images/course-productivity.webp",
    categories: ["Cooking", "Crafts"],
  },
];

export const ALL_COURSES: Course[] = [...FEATURED_COURSES, ...EXTRA_COURSES];

export const CATEGORY_ROWS: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

export function filterCourses(
  courses: Course[],
  category: string,
  query: string
): Course[] {
  let result = courses;
  if (category && category !== "Featured") {
    result = result.filter((c) => c.categories.includes(category));
  }
  const q = query.trim().toLowerCase();
  if (q) {
    result = result.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.creator.toLowerCase().includes(q)
    );
  }
  return result;
}
