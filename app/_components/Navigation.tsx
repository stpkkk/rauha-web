import Link from "next/link";
import Guest from "./Guest";

export default function Navigation() {
  return (
    <nav className="text-md z-10 md:text-xl">
      <ul className="flex items-center gap-4 lg:gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Домики
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            О нас
          </Link>
        </li>
        <li>
          <Guest />
        </li>
      </ul>
    </nav>
  );
}
