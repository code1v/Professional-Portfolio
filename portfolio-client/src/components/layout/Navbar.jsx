import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-black tracking-widest text-white">
          VC<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300">

          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>

        {/* Resume Button */}

        <button className="hidden md:block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white">
          Resume
        </button>

        {/* Mobile Icon */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl md:hidden"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">

          {navItems.map((item) => (

            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 text-gray-300 hover:bg-gray-900 cursor-pointer"
            >
              {item}
            </Link>

          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;