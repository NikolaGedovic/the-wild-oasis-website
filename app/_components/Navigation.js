// app/components/Navigation.js
import Link from "next/link";
import { auth } from "../_lib/auth";
import HamburgerMenu from "./HamburgerMenu";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="relative z-10">
      {/* Desktop Navigation */}
      <ul className="items-center hidden gap-16 text-xl md:flex">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile Navigation */}
      <HamburgerMenu session={session} />
    </nav>
  );
}
