import { RxHamburgerMenu } from "react-icons/rx";

interface NavbarProps {
  displayDropdownMenu: boolean;
  setDisplayDropdownMenu: (value: boolean) => void;
}

const NAV_ITEMS = [
  { href: "#about", label: "About" },
//   { href: "#experience", label: "Experience" },
//   { href: "#past-projects", label: "Past Projects" },
  { href: "#cv", label: "Curriculum Vitae" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  displayDropdownMenu,
  setDisplayDropdownMenu,
}: NavbarProps) {
  return (
    <>
      {/* Mobile hamburger toggle */}
      <div className="bg-white p-4 fixed left-0 top-0 w-full block md:hidden z-10">
        <button className="p-2 border rounded-md">
          <RxHamburgerMenu
            onClick={() => setDisplayDropdownMenu(!displayDropdownMenu)}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <header
        className={`p-6 fixed top-0 left-0 w-full h-screen bg-white z-10 ${
          displayDropdownMenu ? "block" : "hidden"
        }`}
      >
        <button className="p-2 border rounded-md block md:hidden">
          <RxHamburgerMenu
            onClick={() => setDisplayDropdownMenu(!displayDropdownMenu)}
          />
        </button>
        <div className="flex flex-col space-x-5">
          <ul>
            {NAV_ITEMS.map(({ href, label }) => (
              <li
                key={href}
                className="border-b-2 p-2"
                onClick={() => setDisplayDropdownMenu(false)}
              >
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Desktop navbar */}
      <header className="hidden md:flex justify-between p-6">
        <a href="/" className="text-xl font-semibold">
          Hakim Nazri
        </a>
        <div className="flex space-x-5">
          {NAV_ITEMS.map(({ href, label }) => (
            <ul key={href}>
              <a href={href} className="hover:underline">
                <li>{label}</li>
              </a>
            </ul>
          ))}
        </div>
      </header>
    </>
  );
}
