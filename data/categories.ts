export type CategoryCard = {
  id: string;
  label: string;
  icon: "design" | "development" | "software" | "business" | "marketing" | "photography";
  courses: number;
};

export const CATEGORY_CARDS: CategoryCard[] = [
  { id: "design", label: "Design", icon: "design", courses: 128 },
  { id: "development", label: "Development", icon: "development", courses: 96 },
  { id: "it-software", label: "IT & Software", icon: "software", courses: 74 },
  { id: "business", label: "Business", icon: "business", courses: 63 },
  { id: "marketing", label: "Marketing", icon: "marketing", courses: 58 },
  { id: "photography", label: "Photography", icon: "photography", courses: 41 },
];
