export type NavigationItem = {
  name: string;
  href: string;
  status: "live" | "coming-soon" | "hidden";
};

export const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    status: "live",
  },
  {
    name: "Mandala Art",
    href: "/mandala-art",
    status: "live",
  },
  {
    name: "Lippan Art",
    href: "/lippan-art",
    status: "coming-soon",
  },
  {
    name: "Shop",
    href: "/shop",
    status: "coming-soon",
  },
  {
    name: "About",
    href: "/about",
    status: "coming-soon",
  },
];