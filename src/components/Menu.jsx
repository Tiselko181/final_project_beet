import { NavLink } from "react-router-dom";

const navClass = "text-white uppercase font-normal tracking-[1px] hover:text-[#ff3700]";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Menu() {
    return (
        <nav className="flex flex-col lg:flex-row mt-48 lg:ml-16 lg:mt-0 gap-10 text-center">
            <NavLink className={getNavClasses} to="/">Home</NavLink>
            <NavLink className={getNavClasses} to={"games"}>Games</NavLink>
            <NavLink className={getNavClasses} to={"blog"}>Blog</NavLink>
        </nav>
    );
}

export default Menu;
