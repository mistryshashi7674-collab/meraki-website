import Link from "next/link";

type Props = {
  title: string;
};

export default function ProductBreadcrumb({ title }: Props) {
  return (
    <nav className="mb-10 text-sm text-white-500">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            href="/mandala-art"
            className="hover:text-yellow-500 transition"
          >
            Mandala Art
          </Link>
        </li>

        <li>/</li>

        <li className="text-white font-medium">
          {title}
        </li>
      </ol>
    </nav>
  );
}