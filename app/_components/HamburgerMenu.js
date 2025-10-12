"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HamburgerMenu({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex items-center p-2 ml-auto text-2xl"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      {/* Full-width Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 w-screen bg-white border-b border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
          <ul className="flex flex-col items-center gap-4 pt-16 pb-6 text-lg font-medium text-gray-800 dark:text-gray-100">
            <li>
              <Link
                href="/cabins"
                onClick={() => setIsOpen(false)}
                className="transition hover:text-accent-400"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="transition hover:text-accent-400"
              >
                About
              </Link>
            </li>
            <li>
              {session?.user?.image ? (
                <Link
                  href="/account"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 transition hover:text-accent-400"
                >
                  <img
                    className="w-6 h-6 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                    referrerPolicy="no-referrer"
                  />
                  Guest area
                </Link>
              ) : (
                <Link
                  href="/account"
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-accent-400"
                >
                  Guest area
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
