"use client";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    label: "Buy",
    submenu: {
      "Homes for sale": [
        { label: "Homes for sale", href: "#" },
        { label: "Foreclosures", href: "#" },
        { label: "For sale by owner", href: "#" },
        { label: "Open houses", href: "#" },
        { label: "New construction", href: "#" },
        { label: "Coming soon", href: "#" },
        { label: "Recent home sales", href: "#" },
        { label: "All homes", href: "#" },
      ],
      Resources: [
        { label: "Home Buying Guide", href: "#" },
        { label: "Foreclosure center", href: "#" },
        { label: "Real estate app", href: "#" },
        { label: "Down payment assistance", href: "#" },
      ],
    },
  },
  { label: "Rent", href: "#" },
  { label: "Sell", href: "#" },
  { label: "Get a mortgage", href: "#" },
  { label: "Find an Agent", href: "#" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="relative bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold text-yellow-500">Buildentory</span>

          {/* Main Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium ">
            {menuItems.map((item, idx) =>
              item.submenu ? (
                <div
                  key={idx}
                  className=""
                  onMouseEnter={() => setActiveMenu(item.label)}
                  // onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="hover:text-blue-600">{item.label}</button>

                  {/* Submenu */}
                  {activeMenu === item.label && (
                    <div className="absolute left-0 top-full w-full bg-white shadow-lg border-gray-100 border-t grid grid-cols-2 gap-6 p-6 z-50" onMouseLeave={() => setActiveMenu(null)}>
                      {Object.entries(item.submenu).map(([section, links], i) => (
                        <div key={i}>
                          <h4 className="font-semibold mb-2">{section}</h4>
                          <ul className="space-y-1">
                            {(links as { label: string; href: string }[]).map(
                              (link, j) => (
                                <li key={j}>
                                  <Link
                                    href={link.href}
                                    className="text-blue-600 hover:underline text-sm"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href ?? "#"}
                  className="hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Right Menu */}
        <div className="flex space-x-4 text-sm font-medium">
          <a href="#">Manage Rentals</a>
          <a href="#">Advertise</a>
          <a href="#">Help</a>
          <a href="#" className="text-blue-600">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
