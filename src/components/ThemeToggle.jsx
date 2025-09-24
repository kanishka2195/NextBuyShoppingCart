import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        setTheme(prev => (prev == "light" ? "dark" : "light"));
    };

    return (
        <div className="relative">
            {/* Main Toggle Button */}
            <button
                className={`
                    group relative overflow-hidden
                    w-16 h-8 rounded-full p-1
                    transition-all duration-500 ease-in-out
                    transform hover:scale-110
                    focus:outline-none focus:ring-4 focus:ring-opacity-30
                    shadow-lg hover:shadow-xl
                    ${theme === "light" 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 focus:ring-purple-300' 
                        : 'bg-gradient-to-r from-amber-400 to-orange-500 focus:ring-amber-300'
                    }
                `}
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className={`w-full h-full rounded-full ${
                        theme === "light" 
                            ? 'bg-[radial-gradient(circle_at_30%_20%,_white,_transparent_50%)]' 
                            : 'bg-[radial-gradient(circle_at_70%_80%,_white,_transparent_50%)]'
                    }`}></div>
                </div>

                {/* Sliding Circle */}
                <div className={`
                    relative flex items-center justify-center
                    w-6 h-6 rounded-full
                    bg-white shadow-lg
                    transition-all duration-500 ease-in-out
                    transform ${theme === "light" ? 'translate-x-0' : 'translate-x-8'}
                    group-hover:shadow-xl
                `}>
                    {/* Icon Container */}
                    <div className="relative w-4 h-4">
                        {/* Sun Icon */}
                        <i className={`
                            fa-solid fa-sun absolute inset-0 flex items-center justify-center
                            text-amber-500 transition-all duration-300
                            ${theme === "light" 
                                ? 'opacity-100 rotate-0 scale-100' 
                                : 'opacity-0 rotate-180 scale-75'
                            }
                        `}></i>
                        
                        {/* Moon Icon */}
                        <i className={`
                            fa-solid fa-moon absolute inset-0 flex items-center justify-center
                            text-indigo-600 transition-all duration-300
                            ${theme === "dark" 
                                ? 'opacity-100 rotate-0 scale-100' 
                                : 'opacity-0 -rotate-180 scale-75'
                            }
                        `}></i>
                    </div>
                </div>

                {/* Glow Effect */}
                <div className={`
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    ${theme === "light" 
                        ? 'shadow-[0_0_20px_rgba(147,51,234,0.5)]' 
                        : 'shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                    }
                `}></div>
            </button>

            {/* Tooltip */}
            <div className={`
                absolute -bottom-10 left-1/2 transform -translate-x-1/2
                px-3 py-1 rounded-md text-xs font-medium
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200 pointer-events-none
                whitespace-nowrap z-20
                ${theme === "light" 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-white text-gray-800 shadow-lg'
                }
            `}>
                Switch to {theme === "light" ? "dark" : "light"} mode
                <div className={`
                    absolute -top-1 left-1/2 transform -translate-x-1/2
                    w-2 h-2 rotate-45
                    ${theme === "light" ? 'bg-gray-800' : 'bg-white'}
                `}></div>
            </div>
        </div>
    );
};

export default ThemeToggle;
