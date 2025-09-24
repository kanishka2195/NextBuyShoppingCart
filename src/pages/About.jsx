import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const About = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`min-h-screen transition-all duration-300 pt-16 ${
            theme === "light" ? 'bg-gray-50' : 'bg-gray-900'
        }`}>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className={`${
                    theme === "light" 
                        ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700' 
                        : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'
                } text-white`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                About <span className="text-amber-400">NextBUY</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                Revolutionizing online shopping with innovative technology, 
                                exceptional service, and unbeatable value for every customer.
                            </p>
                        </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 opacity-20 animate-bounce">
                        <i className="fas fa-shopping-bag text-6xl text-amber-400"></i>
                    </div>
                    <div className="absolute bottom-20 right-10 opacity-20 animate-pulse">
                        <i className="fas fa-heart text-4xl text-red-400"></i>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section - This is the scroll target */}
            <section id="mission-section" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Mission */}
                        <div className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-800'
                        }`}>
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-bullseye text-white text-2xl"></i>
                                </div>
                                <h2 className={`text-3xl font-bold ${
                                    theme === "light" ? 'text-gray-800' : 'text-white'
                                }`}>Our Mission</h2>
                            </div>
                            <p className={`text-lg leading-relaxed ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>
                                To democratize online shopping by providing a seamless, secure, and 
                                enjoyable experience that connects customers with quality products 
                                from around the world at competitive prices.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-800'
                        }`}>
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-eye text-white text-2xl"></i>
                                </div>
                                <h2 className={`text-3xl font-bold ${
                                    theme === "light" ? 'text-gray-800' : 'text-white'
                                }`}>Our Vision</h2>
                            </div>
                            <p className={`text-lg leading-relaxed ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>
                                To become the world's most trusted and innovative e-commerce platform, 
                                setting new standards for customer satisfaction, technological excellence, 
                                and sustainable business practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={`py-20 ${
                theme === "light" ? 'bg-gray-100' : 'bg-gray-800'
            }`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold mb-4 ${
                            theme === "light" ? 'text-gray-800' : 'text-white'
                        }`}>Why Choose NextBUY?</h2>
                        <p className={`text-xl ${
                            theme === "light" ? 'text-gray-600' : 'text-gray-300'
                        }`}>Discover what makes us different</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-shipping-fast text-white text-2xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-3 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Fast Delivery</h3>
                            <p className={`text-center ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Lightning-fast delivery with real-time tracking and secure packaging.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-shield-alt text-white text-2xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-3 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Secure Shopping</h3>
                            <p className={`text-center ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Bank-level security with encrypted payments and data protection.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-headset text-white text-2xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-3 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>24/7 Support</h3>
                            <p className={`text-center ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Round-the-clock customer support with live chat and phone assistance.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-undo text-white text-2xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-3 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Easy Returns</h3>
                            <p className={`text-center ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Hassle-free returns with 30-day money-back guarantee.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-tags text-white text-2xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-3 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Best Prices</h3>
                            <p className={`text-center ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Competitive pricing with regular discounts and exclusive deals.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <i className="fas fa-mobile-alt text-white text-2xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold text-center mb-3 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Mobile Ready</h3>
                            <p className={`text-center ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Optimized for all devices with seamless mobile shopping experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold mb-4 ${
                            theme === "light" ? 'text-gray-800' : 'text-white'
                        }`}>Our Impact</h2>
                        <p className={`text-xl ${
                            theme === "light" ? 'text-gray-600' : 'text-gray-300'
                        }`}>Numbers that speak for themselves</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className={`text-5xl font-bold mb-2 ${
                                theme === "light" ? 'text-blue-600' : 'text-blue-400'
                            }`}>500K+</div>
                            <p className={`text-lg ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-5xl font-bold mb-2 ${
                                theme === "light" ? 'text-green-600' : 'text-green-400'
                            }`}>1M+</div>
                            <p className={`text-lg ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Orders Delivered</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-5xl font-bold mb-2 ${
                                theme === "light" ? 'text-purple-600' : 'text-purple-400'
                            }`}>50K+</div>
                            <p className={`text-lg ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Products Available</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-5xl font-bold mb-2 ${
                                theme === "light" ? 'text-amber-600' : 'text-amber-400'
                            }`}>99.9%</div>
                            <p className={`text-lg ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Uptime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={`py-20 ${
                theme === "light" ? 'bg-gray-100' : 'bg-gray-800'
            }`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold mb-4 ${
                            theme === "light" ? 'text-gray-800' : 'text-white'
                        }`}>Meet Our Team</h2>
                        <p className={`text-xl ${
                            theme === "light" ? 'text-gray-600' : 'text-gray-300'
                        }`}>The people behind NextBUY's success</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Developer Credit */}
                        <div className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-code text-white text-3xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold mb-2 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Rahul Chauhan</h3>
                            <p className={`text-amber-500 font-medium mb-3`}>Lead Developer</p>
                            <p className={`${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Full-stack developer and founder of INCAPP, passionate about creating innovative e-commerce solutions.</p>
                        </div>

                        {/* Placeholder Team Members */}
                        <div className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-chart-line text-white text-3xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold mb-2 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Sarah Johnson</h3>
                            <p className={`text-amber-500 font-medium mb-3`}>Product Manager</p>
                            <p className={`${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Driving product strategy and ensuring the best user experience for our customers.</p>
                        </div>

                        <div className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                            theme === "light" ? 'bg-white' : 'bg-gray-700'
                        }`}>
                            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-palette text-white text-3xl"></i>
                            </div>
                            <h3 className={`text-xl font-semibold mb-2 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Mike Chen</h3>
                            <p className={`text-amber-500 font-medium mb-3`}>UI/UX Designer</p>
                            <p className={`${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Creating beautiful and intuitive designs that delight our users every day.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className={`text-4xl font-bold mb-6 ${
                        theme === "light" ? 'text-gray-800' : 'text-white'
                    }`}>Ready to Start Shopping?</h2>
                    <p className={`text-xl mb-8 ${
                        theme === "light" ? 'text-gray-600' : 'text-gray-300'
                    }`}>Join thousands of satisfied customers and discover amazing deals today!</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <span className="flex items-center justify-center">
                                <i className="fas fa-shopping-cart mr-2 group-hover:animate-bounce"></i>
                                Start Shopping
                            </span>
                        </Link>
                        
                        <button className={`group font-semibold px-8 py-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                            theme === "light" 
                                ? 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50' 
                                : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800'
                        }`}>
                            <span className="flex items-center justify-center">
                                <i className="fas fa-envelope mr-2 group-hover:text-amber-500 transition-colors duration-300"></i>
                                Contact Us
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
