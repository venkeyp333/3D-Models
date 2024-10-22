import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import lightSwitchSound from "../assets/Audio/light-switch-81967.mp3";

export const NavBar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [flash, setFlash] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const soundRef = useRef(null);

  const handleToggleTheme = () => {
    soundRef.current.play();
    setFlash(true);
    dispatch(toggleTheme());
    setTimeout(() => setFlash(false), 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [darkMode]);

  const sections = ["about me"];

  return (
    <nav className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} fixed w-full top-0 left-0 shadow-lg transition-all duration-300 ease-in-out z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Venkey</div>

        <div className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <a
              key={section}
              href="https://venkeyp333.github.io/Venkatesh-Pujari/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          {/* Theme Toggle Icon for Desktop */}
          <button onClick={handleToggleTheme} className="focus:outline-none">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none p-2 rounded-full ${darkMode ? "bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 text-white" : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900"}`}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`fixed inset-x-0 mt-2 flex flex-col items-center justify-start md:hidden ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
        >
          {sections.map((section) => (
            <a
              key={section}
              href="https://venkeyp333.github.io/Venkatesh-Pujari/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:underline"
              onClick={toggleMenu} // Close menu on link click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          {/* Theme Toggle Icon for Mobile */}
          <button onClick={handleToggleTheme} className="mt-4 focus:outline-none">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
          </button>
        </motion.div>
      )}
      <audio ref={soundRef} src={lightSwitchSound} preload="auto" />
    </nav>
  );
};
