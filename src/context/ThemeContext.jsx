import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Initialize theme with localStorage or system preference
    const getInitialTheme = () => {
        // Check localStorage first
        const savedTheme = localStorage.getItem('nextbuy-theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        // Default to light
        return 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Enhanced setTheme function with transition handling
    const setThemeWithTransition = (newTheme) => {
        setIsTransitioning(true);
        
        // Store in localStorage
        localStorage.setItem('nextbuy-theme', newTheme);
        
        // Update theme state
        setTheme(newTheme);
        
        // Add transition class to body for smooth theme changes
        document.body.classList.add('theme-transitioning');
        
        // Remove transition class after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
            document.body.classList.remove('theme-transitioning');
        }, 300);
    };

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = (e) => {
            // Only auto-switch if user hasn't manually set a preference
            const savedTheme = localStorage.getItem('nextbuy-theme');
            if (!savedTheme) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Apply theme class to document root for global styling
    useEffect(() => {
        const root = document.documentElement;
        
        // Remove existing theme classes
        root.classList.remove('light-theme', 'dark-theme');
        
        // Add current theme class
        root.classList.add(`${theme}-theme`);
        
        // Update CSS custom properties for smooth transitions
        if (theme === 'light') {
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#f8fafc');
            root.style.setProperty('--text-primary', '#1f2937');
            root.style.setProperty('--text-secondary', '#6b7280');
            root.style.setProperty('--border-color', '#e5e7eb');
            root.style.setProperty('--accent-color', '#f59e0b');
        } else {
            root.style.setProperty('--bg-primary', '#111827');
            root.style.setProperty('--bg-secondary', '#1f2937');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#d1d5db');
            root.style.setProperty('--border-color', '#374151');
            root.style.setProperty('--accent-color', '#fbbf24');
        }
    }, [theme]);

    // Context value with additional utilities
    const contextValue = {
        theme,
        setTheme: setThemeWithTransition,
        isTransitioning,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        toggleTheme: () => {
            setThemeWithTransition(theme === 'light' ? 'dark' : 'light');
        },
        // Utility functions for conditional styling
        themeClasses: (lightClasses, darkClasses) => {
            return theme === 'light' ? lightClasses : darkClasses;
        },
        getThemeValue: (lightValue, darkValue) => {
            return theme === 'light' ? lightValue : darkValue;
        }
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook for easier theme usage
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
