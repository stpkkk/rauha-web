import Link from "next/link";
import User from "./User";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
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
          <User />
        </li>
      </ul>
    </nav>
  );
}
