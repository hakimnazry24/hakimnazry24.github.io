import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  displayDropdownMenu: boolean;
  setDisplayDropdownMenu: (value: boolean) => void;
}

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#cv", label: "Curriculum Vitae" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  displayDropdownMenu,
  setDisplayDropdownMenu,
}: NavbarProps) {
  return (
    <>
      {/* Mobile menu toggle button */}
      <div className="fixed left-0 top-0 w-full z-20 md:hidden">
        <div className="flex justify-between items-center bg-cream border-b-4 border-navy px-4 py-3">
          <a href="/" className="text-xl font-display font-bold text-navy">
            Hakim Nazri
          </a>
          <button
            className="p-2 border-4 border-navy rounded-[4px] bg-white"
            onClick={() => setDisplayDropdownMenu(!displayDropdownMenu)}
            aria-label="Toggle menu"
          >
            {displayDropdownMenu ? (
              <IoClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <header
        className={`fixed top-0 left-0 w-full h-screen bg-terracotta z-10 border-r-4 border-navy transition-transform duration-300 ease-in-out md:hidden ${
          displayDropdownMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 border-4 border-navy rounded-[4px] bg-white"
            onClick={() => setDisplayDropdownMenu(false)}
            aria-label="Close menu"
          >
            <IoClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16">
          <ul className="space-y-8 text-center">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setDisplayDropdownMenu(false)}
                  className="text-4xl font-display font-bold text-white border-4 border-navy bg-navy px-8 py-4 inline-block rounded-[4px] shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-200 ease-out"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Desktop navbar */}
      <header className="hidden md:flex justify-between items-center bg-cream border-b-4 border-navy px-8 py-4 fixed top-0 left-0 w-full z-20">
        <a
          href="/"
          className="text-2xl font-display font-bold text-navy bg-mustard border-4 border-navy px-4 py-2 rounded-[4px] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-sm transition-all duration-200 ease-out"
        >
          Hakim Nazri
        </a>
        <nav>
          <ul className="flex gap-6">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-display font-semibold text-navy text-lg border-4 border-transparent px-4 py-2 rounded-[4px] hover:border-navy hover:bg-white transition-all duration-200 ease-out"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
