// import logo from "../assets/logo.svg";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
// <nav className="w-full h-[4rem] md:h-[5.5rem] shadow-sm py-1.5 flex items-center bg-bgcolor">
//   <div className="w-[80%] mx-auto flex justify-between items-center h-full">
//   <Link to="/">
//   <img
//     className="h-[1.5rem] w-[8rem] md:h-[2.413rem] md:w-[11rem]  lg:w-[12.8rem] cursor-pointer"
//     src={logo}
//     alt="VillaCrest"
//   />
// </Link>
//     <div className="md:hidden ml-auto flex items-center">☰</div>
//     <div className="hidden md:flex md:gap-3 justify-between lg:gap-10 items-center text-wrap">
//       {[
//         { to: "/", label: "Home" },
//         { to: "/about", label: "About Us" },
//         { to: "/villas", label: "Villas" },
//         { to: "/services", label: "Services" },
//         { to: "/partner", label: "Partner with us" },
//       ].map(({ to, label }) => (
//         <NavLink
//           key={to}
//           to={to}
//           className={({ isActive }) =>
//             `text-[0.85rem] font-semibold text-mulish transition-colors duration-300 ${
//               isActive
//                 ? "text-[#6d87cb] font-bold"
//                 : "text-navitomcolor hover:text-[#6d87cb]"
//             }`
//           }
//         >
//           {label}
//         </NavLink>
//       ))}
//       <div className="bg-btcolor py-[0.6rem] px-[1.9rem] text-[0.85rem] h-[1rem] w-[5rem] md:h-[2.65rem] md:w-[7.06rem] text-mulish font-bold text-white text-center flex items-center justify-center">
//         <Link to="/contact">Contact</Link>
//       </div>
//     </div>
//   </div>
// </nav>

//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { X, Menu } from "lucide-react"; // Icons for open & close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <nav className="w-full h-[4rem] md:h-[5.5rem] shadow-sm py-1.5 flex items-center bg-bgcolor relative">
      <div className="w-[80%] mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/">
          <img
            className="h-[1.5rem] w-[8rem] md:h-[2.413rem] md:w-[11rem] lg:w-[12.8rem] cursor-pointer"
            src={logo}
            alt="VillaCrest"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" lg:hidden ml-auto flex items-center text-2xl"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden lg:flex md:gap-3 lg:gap-10 items-center text-wrap">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/villas", label: "Villas" },
            { to: "/services", label: "Services" },
            { to: "/partner", label: "Partner with us" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[0.85rem] font-semibold text-mulish transition-colors duration-300 ${
                  isActive
                    ? "text-[#6d87cb] font-bold"
                    : "text-navitomcolor hover:text-[#6d87cb]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="bg-btcolor py-[0.6rem] px-[1.9rem] text-[0.85rem] h-[1rem] w-[5rem] md:h-[2.65rem] md:w-[7.06rem] text-mulish font-bold text-white text-center flex items-center justify-center">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <X size={28} />
        </button>

        {/* Side Menu Links */}
        <div className="flex flex-col mt-16 space-y-6 pl-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/villas", label: "Villas" },
            { to: "/services", label: "Services" },
            { to: "/partner", label: "Partner with us" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              className="text-lg font-semibold text-gray-700 hover:text-[#6d87cb] transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

