import React from 'react';
import { NavLink } from "react-router-dom";

const navClass = "text-white uppercase font-normal tracking-[1px] duration-300 hover:text-scarlet hover:text-[#ff3700]";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Menu() {
    return (
        <nav className="flex gap-20 text-center">
            <NavLink className={getNavClasses} to="/">Home</NavLink>
            <NavLink className={getNavClasses} to={"games"}>Games</NavLink>
            <NavLink className={getNavClasses} to={"blog"}>Blog</NavLink>
        </nav>
    );
}

export default Menu;
