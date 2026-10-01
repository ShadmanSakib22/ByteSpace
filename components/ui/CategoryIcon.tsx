type CategoryIconProps = {
  name:
    | "design"
    | "development"
    | "software"
    | "business"
    | "marketing"
    | "photography";
  size?: number;
};

const files: Record<CategoryIconProps["name"], string> = {
  design: "cat-design",
  development: "cat-development",
  software: "cat-it",
  business: "cat-business",
  marketing: "cat-marketing",
  photography: "cat-photography",
};

export function CategoryIcon({ name, size = 60 }: CategoryIconProps) {
  return (
    <img
      src={`/images/${files[name]}.svg`}
      alt=""
      width={size}
      height={size}
      className="block"
      style={{ width: size, height: size }}
    />
  );
}
