import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className="bg-gray-900 p-4">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex flex-wrap flex-col md:flex-row gap-4 text-white justify-evenly items-center">
                        <NavLink to="/home" className="hover:text-blue-400">LOKI</NavLink>
                        <NavLink to="/conversations" className="hover:text-blue-400">Conversations</NavLink>
                        <NavLink to="/common-patterns" className="hover:text-blue-400">Common-Patterns</NavLink>
                        <NavLink to="/phrasal-verbs" className="hover:text-blue-400">Phrasal-Verbs</NavLink>
                        <NavLink to="/idioms" className="hover:text-blue-400">Idioms</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;