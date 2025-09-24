import { useDispatch, useSelector } from 'react-redux'  
import { useEffect, useContext } from 'react' 
import { fetchProducts, STATUS } from '../features/ProductSlice'
import { ThemeContext } from "../context/ThemeContext";
import { addToCart } from '../features/CartSlice'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const { theme } = useContext(ThemeContext);
    
    useEffect(() => {
       dispatch(fetchProducts());  
    }, [dispatch]);

     const handleCart=(product)=>{
        dispatch(addToCart(product));
    }
    // Enhanced Loading Component
    if (status === STATUS.LOADING) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${
                theme === "light" ? 'bg-gray-50' : 'bg-gray-900'
            }`}>
                <div className="text-center">
                    {/* Animated Loading Spinner */}
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-amber-200 rounded-full animate-spin border-t-amber-500 mx-auto mb-4"></div>
                        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500 absolute top-2 left-1/2 transform -translate-x-1/2 animate-reverse-spin"></div>
                    </div>
                    
                    <h2 className={`text-2xl font-bold mb-2 ${
                        theme === "light" ? 'text-gray-800' : 'text-white'
                    }`}>Loading Amazing Products...</h2>
                    
                    <p className={`${
                        theme === "light" ? 'text-gray-600' : 'text-gray-300'
                    }`}>Please wait while we fetch the best deals for you</p>
                    
                    {/* Loading Animation Dots */}
                    <div className="flex justify-center space-x-1 mt-4">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-all duration-300 ${
            theme === "light" ? 'bg-gray-50' : 'bg-gray-900'
        }`}>
            {/* Header Section */}
            <section className={`py-12 ${
                theme === "light" 
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700' 
                    : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black'
            }`}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Discover Amazing <span className="text-amber-400">Products</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Shop from our curated collection of premium products at unbeatable prices
                    </p>
                    
                    {/* Product Count Badge */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full mt-6">
                        <i className="fas fa-box-open mr-2 text-amber-400"></i>
                        <span className="font-semibold">{products.length} Products Available</span>
                    </div>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl font-bold mb-4 ${
                            theme === "light" ? 'text-gray-800' : 'text-white'
                        }`}>Featured Products</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div 
                                key={product.id}
                                className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                                    theme === "light" ? 'bg-white' : 'bg-gray-800'
                                }`}
                            >
                                {/* Product Image Container */}
                                <div className="relative overflow-hidden aspect-square bg-gray-100">
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 p-4"
                                    />
                                    
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Quick View Button */}
                                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 shadow-lg">
                                        <i className="fas fa-eye text-gray-700 text-sm"></i>
                                    </button>
                                    
                                    {/* Wishlist Button */}
                                    <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 shadow-lg">
                                        <i className="fas fa-heart text-red-500 text-sm"></i>
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    {/* Product Title */}
                                    <h4 className={`font-semibold text-lg mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors duration-200 ${
                                        theme === "light" ? 'text-gray-800' : 'text-white'
                                    }`}>
                                        {product.title}
                                    </h4>
                                    
                                    {/* Rating Stars (placeholder) */}
                                    <div className="flex items-center mb-3">
                                        {[...Array(5)].map((_, index) => (
                                            <i 
                                                key={index}
                                                className={`fas fa-star text-sm mr-1 ${
                                                    index < 4 ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                            ></i>
                                        ))}
                                        <span className={`text-sm ml-2 ${
                                            theme === "light" ? 'text-gray-500' : 'text-gray-400'
                                        }`}>(4.0)</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <h5 className="text-2xl font-bold text-green-600">
                                                ${product.price}
                                            </h5>
                                            <span className={`text-sm line-through ${
                                                theme === "light" ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                                ${(product.price * 1.2).toFixed(2)}
                                            </span>
                                        </div>
                                        
                                        {/* Discount Badge */}
                                        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                            20% OFF
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button onClick={()=>handleCart(product)} className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                                        <span className="flex items-center justify-center">
                                            <i className="fas fa-shopping-cart mr-2"></i>
                                            Add to Cart
                                        </span>
                                    </button>
                                </div>

                                {/* Sale Badge */}
                                <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-br-lg rounded-tl-2xl text-sm font-bold">
                                    SALE
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Products Message (if empty) */}
                    {products.length === 0 && status !== STATUS.LOADING && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className={`fas fa-box-open text-4xl ${
                                    theme === "light" ? 'text-gray-400' : 'text-gray-600'
                                }`}></i>
                            </div>
                            <h3 className={`text-2xl font-semibold mb-2 ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>No Products Found</h3>
                            <p className={`${
                                theme === "light" ? 'text-gray-500' : 'text-gray-400'
                            }`}>Please check back later for new arrivals!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className={`py-16 ${
                theme === "light" ? 'bg-gray-100' : 'bg-gray-800'
            }`}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className={`text-3xl font-bold mb-4 ${
                        theme === "light" ? 'text-gray-800' : 'text-white'
                    }`}>Stay Updated</h3>
                    <p className={`text-lg mb-8 ${
                        theme === "light" ? 'text-gray-600' : 'text-gray-300'
                    }`}>Subscribe to get notified about new products and exclusive deals!</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                theme === "light" 
                                    ? 'bg-white border-gray-300 text-gray-800' 
                                    : 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            }`}
                        />
                        <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
