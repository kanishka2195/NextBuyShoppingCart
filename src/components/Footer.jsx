import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <footer className={`relative overflow-hidden transition-all duration-300 ${
            theme === "light" 
                ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white' 
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800'
        }`}>
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>
            
            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Top Section with Links */}
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <h3 className="text-3xl font-bold">
                                    Next<span className={`${
                                        theme === "light" ? 'text-amber-400' : 'text-amber-500'
                                    } drop-shadow-lg`}>BUY</span>
                                    <span className="text-2xl ml-2">🛒</span>
                                </h3>
                            </div>
                            <p className={`text-center md:text-left mb-6 max-w-md ${
                                theme === "light" ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                Your trusted online shopping destination. Quality products, 
                                great prices, and exceptional service - that's our promise.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex justify-center md:justify-start space-x-4">
                                <a href="#" className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${
                                    theme === "light" 
                                        ? 'bg-white/10 hover:bg-blue-500 text-gray-300 hover:text-white' 
                                        : 'bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white'
                                }`}>
                                    <i className="fab fa-facebook-f text-lg"></i>
                                </a>
                                <a href="#" className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${
                                    theme === "light" 
                                        ? 'bg-white/10 hover:bg-pink-500 text-gray-300 hover:text-white' 
                                        : 'bg-gray-200 hover:bg-pink-500 text-gray-600 hover:text-white'
                                }`}>
                                    <i className="fab fa-instagram text-lg"></i>
                                </a>
                                <a href="#" className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${
                                    theme === "light" 
                                        ? 'bg-white/10 hover:bg-blue-400 text-gray-300 hover:text-white' 
                                        : 'bg-gray-200 hover:bg-blue-400 text-gray-600 hover:text-white'
                                }`}>
                                    <i className="fab fa-twitter text-lg"></i>
                                </a>
                                <a href="#" className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${
                                    theme === "light" 
                                        ? 'bg-white/10 hover:bg-red-500 text-gray-300 hover:text-white' 
                                        : 'bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white'
                                }`}>
                                    <i className="fab fa-youtube text-lg"></i>
                                </a>
                            </div>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h4 className={`font-semibold text-lg mb-4 ${
                                theme === "light" ? 'text-white' : 'text-gray-800'
                            }`}>Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Home</a></li>
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>About Us</a></li>
                                <li><a href="/about" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Products</a></li>
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Contact</a></li>
                            </ul>
                        </div>
                        
                        {/* Customer Service */}
                        <div className="text-center md:text-left">
                            <h4 className={`font-semibold text-lg mb-4 ${
                                theme === "light" ? 'text-white' : 'text-gray-800'
                            }`}>Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Help Center</a></li>
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Shipping Info</a></li>
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Returns</a></li>
                                <li><a href="#" className={`hover:text-amber-400 transition-colors duration-200 ${
                                    theme === "light" ? 'text-gray-300' : 'text-gray-600'
                                }`}>Track Order</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Divider */}
                <div className={`border-t ${
                    theme === "light" ? 'border-gray-700' : 'border-gray-300'
                }`}></div>
                
                {/* Bottom Section - Original Content Enhanced */}
                <div className="px-6 py-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Main Brand */}
                        <div className="text-center mb-6">
                            <p className="text-2xl font-bold mb-2">
                                Next<b className={`${
                                    theme === "light" ? 'text-amber-400' : 'text-amber-500'
                                } drop-shadow-lg`}>BUY</b>
                                <span className="ml-2">✨</span>
                            </p>
                        </div>
                        
                        {/* Copyright and Credits */}
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-copyright text-amber-400"></i>
                                <small className={theme === "light" ? 'text-gray-400' : 'text-gray-500'}>
                                    Rights Reserved.
                                </small>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-code text-amber-400"></i>
                                <small className={theme === "light" ? 'text-gray-400' : 'text-gray-500'}>
                                    Design & Develop by 
                                    <span className={`font-semibold ml-1 ${
                                        theme === "light" ? 'text-white' : 'text-gray-800'
                                    }`}>Kanishka Sharma</span>
                                </small>
                            </div>
                        </div>
                        
                        {/* Additional Features */}
                        <div className="flex justify-center mt-6 space-x-6">
                            <div className="flex items-center space-x-2">
                                <i className={`fas fa-shield-alt ${
                                    theme === "light" ? 'text-green-400' : 'text-green-500'
                                }`}></i>
                                <small className={theme === "light" ? 'text-gray-400' : 'text-gray-500'}>
                                    Secure Shopping
                                </small>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className={`fas fa-truck ${
                                    theme === "light" ? 'text-blue-400' : 'text-blue-500'
                                }`}></i>
                                <small className={theme === "light" ? 'text-gray-400' : 'text-gray-500'}>
                                    Fast Delivery
                                </small>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className={`fas fa-heart ${
                                    theme === "light" ? 'text-red-400' : 'text-red-500'
                                }`}></i>
                                <small className={theme === "light" ? 'text-gray-400' : 'text-gray-500'}>
                                    Customer Love
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Decorative Line */}
            <div className={`h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent`}></div>
        </footer>
    )
}

export default Footer
