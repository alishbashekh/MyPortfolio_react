import React, { useState } from "react";
import { Home, User, Folder, Mail, Moon, Sun, Menu, X, Layers } from "lucide-react";
import { NavLink } from "react-router-dom";
import { GiSkills } from "react-icons/gi";

const Navbar = ({ dark, toggledark }) => {
  const [open, setOpen] = useState(false);
  const primaryColor = dark ? "#22C55E" : "#2563EB";

  return (
    <>
      {/* for dekstop */}
      <nav
        className={`hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-50
        flex-col gap-4 p-3 rounded-2xl shadow-lg
        ${dark ? "bg-[#020617] border border-slate-800" : "bg-[#f8fafc] border border-slate-200"}`}
      >
         <NavLink to="/">
         <NavItem icon={<Home color={primaryColor} />} label="Home" dark={dark} />
         </NavLink>

         <NavLink to="/about">
         <NavItem icon={<User color={primaryColor} />} label="About" dark={dark} />
         </NavLink>

         <NavLink to="/project">
         <NavItem icon={<Folder color={primaryColor} />} label="Projects" dark={dark} />
         </NavLink>

         <NavLink to="/skill">
         <NavItem icon={<Layers color={primaryColor} />} label="Skills" dark={dark} />
         </NavLink>

         <NavLink to="/contact">
         <NavItem icon={<Mail color={primaryColor} />} label="Contact" dark={dark} />
         </NavLink>

        <NavItem
          icon={dark ? <Sun color={primaryColor} /> : <Moon color={primaryColor} />}
          label={dark ? "Light Mode" : "Dark Mode"}
          dark={dark}
          onClick={toggledark}
        />
      </nav>

      {/*for mobiles */}
      <nav className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className={`p-2 rounded-xl shadow-lg transition
            ${dark ? "bg-[#020617] border border-slate-800" : "bg-[#f8fafc] border border-slate-200"}
          `}
        >
          {open ? <X color={primaryColor} /> : <Menu color={primaryColor} />}
        </button>
        {open && (
          <div
            className={`mt-2 flex flex-col gap-3 p-3 rounded-2xl shadow-lg
              ${dark ? "bg-[#020617] border border-slate-800" : "bg-[#f8fafc] border border-slate-200"}
            `}
          >
            <NavLink to="/" onClick={() => setOpen(false)}>
           <NavItemMobile icon={<Home color={primaryColor} />} />
            </NavLink>

           <NavLink to="/about" onClick={() => setOpen(false)}>
           <NavItemMobile icon={<User color={primaryColor} />} />
           </NavLink>

           <NavLink to="/project" onClick={() => setOpen(false)}>
           <NavItemMobile icon={<Folder color={primaryColor} />} />
           </NavLink>

          <NavLink to="/skill" onClick={() => setOpen(false)}>
          <NavItemMobile icon={<Layers color={primaryColor} />} />
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
          <NavItemMobile icon={<Mail color={primaryColor} />} />
          </NavLink>
            <NavItemMobile
              icon={dark ? <Sun color={primaryColor} /> : <Moon color={primaryColor} />}
              onClick={toggledark}
            />
          </div>
        )}
      </nav>
    </>
  );
};

const NavItem = ({ icon, label, dark, onClick }) => (
  <div className="relative group flex items-center">
    <span
      className={`absolute right-14 whitespace-nowrap px-3 py-1 text-sm rounded-lg opacity-0
        group-hover:opacity-100 transition
        ${dark ? "bg-slate-800" : "bg-slate-200"}`}
    >
      {label}
    </span>
    <button
      onClick={onClick}
      className={`p-2 rounded-xl transition hover:scale-110
        ${dark ? "hover:bg-slate-800" : "hover:bg-slate-200"}`}
    >
      {icon}
    </button>
  </div>
);

const NavItemMobile = ({ icon, onClick }) => (
  <button onClick={onClick} className="p-2 rounded-xl transition hover:scale-105">
    {icon}
  </button>
);

export default Navbar;
