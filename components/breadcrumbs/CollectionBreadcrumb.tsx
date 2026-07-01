import Link from "next/link";

export default function CollectionBreadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 text-sm text-gray-500"
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="hover:text-pink-600 transition"
          >
            Home
          </Link>
        </li>

        <li>/</li>

        <li
          className="font-medium text-gray-900"
          aria-current="page"
        >
          Mandala Art
        </li>
      </ol>
    </nav>
  );
}