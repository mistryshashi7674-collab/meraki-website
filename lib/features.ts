import {
  FaPalette,
  FaPaintBrush,
  FaRegHeart,
  FaShippingFast,
  FaHome,
  FaMedal,
} from "react-icons/fa";

export type Feature = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: FaPalette,
    title: "100% Handmade",
    description:
      "Every artwork is carefully handcrafted, ensuring no two pieces are exactly alike.",
  },
  {
    icon: FaPaintBrush,
    title: "Custom Designs",
    description:
      "Choose your preferred colours, size and style to perfectly match your interiors.",
  },
  {
    icon: FaRegHeart,
    title: "Made with Love",
    description:
      "Every brushstroke reflects passion, creativity and attention to every detail.",
  },
  {
    icon: FaShippingFast,
    title: "Pan India Shipping",
    description:
      "Secure packaging and reliable delivery across India.",
  },
  {
    icon: FaHome,
    title: "Perfect Home Décor",
    description:
      "Designed to transform living rooms, bedrooms and offices.",
  },
  {
    icon: FaMedal,
    title: "Premium Quality",
    description:
      "Crafted using high-quality materials for long-lasting beauty.",
  },
];