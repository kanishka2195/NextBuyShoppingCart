import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`relative overflow-hidden pt-16 ${
            theme === "light" ? 'bg-gray-50' : 'bg-gray-900'
        }`}>
            {/* Main Hero Section */}
            <section className={`relative py-16 sm:py-20 lg:py-24 ${
                theme === "light" 
                    ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700' 
                    : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'
            }`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <i className="fas fa-fire mr-2 text-amber-400 animate-pulse"></i>
                                <span className="animate-pulse">Limited Time Offer</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                                <span className="block animate-fadeInUp">Shop Smart,</span>
                                <span className="block animate-fadeInUp animation-delay-200">
                                    Save <span className="text-amber-400 drop-shadow-lg relative">
                                        Big
                                        <span className="absolute -inset-1 bg-amber-400/20 blur-lg rounded-full animate-pulse"></span>
                                    </span>
                                </span>
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fadeInUp animation-delay-400">
                                Discover amazing deals on thousands of premium products. Quality items, 
                                unbeatable prices, and lightning-fast delivery.
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 animate-fadeInUp animation-delay-600">
                                <Link 
                                    to="/"
                                    className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    <span className="flex items-center justify-center">
                                        <i className="fas fa-shopping-cart mr-2 group-hover:animate-bounce"></i>
                                        Shop Now
                                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                                    </span>
                                </Link>
                                
                                <button className="group bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                                    <span className="flex items-center justify-center">
                                        <i className="fas fa-play mr-2 group-hover:text-amber-400 transition-colors duration-300"></i>
                                        Learn More
                                    </span>
                                </button>
                            </div>
                            
                            {/* Feature Tags */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fadeInUp animation-delay-800">
                                <span className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                                    <i className="fas fa-shipping-fast mr-2 text-green-400 group-hover:scale-110 transition-transform duration-300"></i>
                                    Free Shipping
                                </span>
                                <span className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                                    <i className="fas fa-shield-alt mr-2 text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                                    Secure Payment
                                </span>
                                <span className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                                    <i className="fas fa-undo mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-300"></i>
                                    Easy Returns
                                </span>
                            </div>
                        </div>

                        {/* Right Content - Visual Elements */}
                        <div className="relative hidden lg:block">
                            {/* Main Visual Card */}
                            <div className={`relative p-8 rounded-2xl shadow-2xl backdrop-blur-sm border ${
                                theme === "light" 
                                    ? 'bg-white/10 border-white/20' 
                                    : 'bg-gray-800/30 border-gray-700/50'
                            }`}>
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div className="animate-fadeInUp animation-delay-1000">
                                        <div className="text-3xl font-bold text-white mb-1">50K+</div>
                                        <div className="text-gray-300 text-sm">Happy Customers</div>
                                    </div>
                                    <div className="animate-fadeInUp animation-delay-1200">
                                        <div className="text-3xl font-bold text-white mb-1">10K+</div>
                                        <div className="text-gray-300 text-sm">Products</div>
                                    </div>
                                    <div className="animate-fadeInUp animation-delay-1400">
                                        <div className="text-3xl font-bold text-white mb-1">99%</div>
                                        <div className="text-gray-300 text-sm">Satisfaction</div>
                                    </div>
                                    <div className="animate-fadeInUp animation-delay-1600">
                                        <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                        <div className="text-gray-300 text-sm">Support</div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -top-6 -left-6 animate-bounce">
                                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                    <i className="fas fa-percent mr-1"></i>
                                    UP TO 70% OFF
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-6 -right-6 animate-pulse">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    <i className="fas fa-star mr-1 animate-spin"></i>
                                    Trending Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-ping"></div>
                    <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-amber-400 rounded-full opacity-30 animate-ping animation-delay-1000"></div>
                    <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-25 animate-ping animation-delay-2000"></div>
                </div>
            </section>

            {/* Bottom Transition */}
            <div className="relative">
                <svg 
                    className="w-full h-12 fill-current text-white" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
                </svg>
            </div>
        </div>
    )
}

export default Header
 