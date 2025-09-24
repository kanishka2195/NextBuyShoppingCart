import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../features/CartSlice";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id) => {
        dispatch(incrementQty(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQty(id));
    };

    // Calculate total
    const total = items.reduce((acc, i) => acc + (i.qty * i.item.price), 0);

    return (
        <div className={`min-h-screen transition-all duration-300 pt-16 ${
            theme === "light" ? 'bg-gray-50' : 'bg-gray-900'
        }`}>
            {/* Hero Section */}
            <section className={`py-12 ${
                theme === "light" 
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700' 
                    : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black'
            }`}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Shopping <span className="text-amber-400">Cart</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Review your selected items and proceed to checkout
                    </p>
                    
                    {/* Cart Summary Badge */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full mt-6">
                        <i className="fas fa-shopping-cart mr-2 text-amber-400"></i>
                        <span className="font-semibold">{items.reduce((acc, i) => acc + i.qty, 0)} Items in Cart</span>
                    </div>
                </div>
            </section>

            {/* Cart Content Section - Scroll Target */}
            <section id="cart-section" className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {items.length === 0 ? (
                        /* Empty Cart State */
                        <div className="text-center py-16">
                            <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 ${
                                theme === "light" ? 'bg-gray-200' : 'bg-gray-700'
                            }`}>
                                <i className={`fas fa-shopping-cart text-6xl ${
                                    theme === "light" ? 'text-gray-400' : 'text-gray-500'
                                }`}></i>
                            </div>
                            <h2 className={`text-3xl font-bold mb-4 ${
                                theme === "light" ? 'text-gray-800' : 'text-white'
                            }`}>Your Cart is Empty</h2>
                            <p className={`text-xl mb-8 ${
                                theme === "light" ? 'text-gray-600' : 'text-gray-300'
                            }`}>Looks like you haven't added any items to your cart yet</p>
                            
                            <Link 
                                to="/" 
                                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div>
                            {/* Enhanced cartWrapper */}
                            <div id="cartWrapper" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                                {items.map((i) => (
                                    <div key={i.item.id} className={`cartCard p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                                        theme === "light" ? 'bg-white' : 'bg-gray-800'
                                    }`}>
                                        {/* Product Image */}
                                        <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                            <img 
                                                src={i.item.image} 
                                                alt='img' 
                                                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>

                                        {/* Product Title */}
                                        <h4 className={`font-semibold text-lg mb-3 line-clamp-2 ${
                                            theme === "light" ? 'text-gray-800' : 'text-white'
                                        }`}>
                                            {i.item.title}
                                        </h4>

                                        {/* Product Price */}
                                        <h5 className="text-2xl font-bold text-green-600 mb-4">
                                            ${i.item.price}
                                        </h5>
                                        
                                        {/* Enhanced Quantity Controls */}
                                        <div className="quantity-controls flex items-center justify-center space-x-3 mb-4 bg-gray-100 rounded-lg p-2">
                                            <button 
                                                className="qty-btn w-10 h-10 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 transform hover:scale-110" 
                                                onClick={() => handleDecrement(i.item.id)}
                                                disabled={i.qty <= 1}
                                            >
                                                -
                                            </button>
                                            <span className={`qty-display font-bold text-lg px-4 py-2 rounded-lg min-w-[100px] text-center ${
                                                theme === "light" ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'
                                            }`}>
                                                Qty: {i.qty}
                                            </span>
                                            <button 
                                                className="qty-btn w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 transform hover:scale-110" 
                                                onClick={() => handleIncrement(i.item.id)}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Item Subtotal */}
                                        <h5 className={`text-xl font-semibold mb-4 text-center p-3 rounded-lg ${
                                            theme === "light" ? 'bg-green-50 text-green-700' : 'bg-green-900 text-green-300'
                                        }`}>
                                            Subtotal: ${(i.qty * i.item.price).toFixed(2)}
                                        </h5>
                                        
                                        {/* Remove Button */}
                                        <button 
                                            className='btn w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg' 
                                            onClick={() => handleRemove(i.item.id)}
                                        >
                                            <i className="fas fa-trash mr-2"></i>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Divider */}
                            <hr className={`border-2 rounded-full mb-8 ${
                                theme === "light" ? 'border-gray-300' : 'border-gray-600'
                            }`} />

                            {/* Enhanced Totals Section */}
                            <div className={`max-w-md mx-auto p-8 rounded-2xl shadow-xl ${
                                theme === "light" ? 'bg-white' : 'bg-gray-800'
                            }`}>
                                <div className="text-center space-y-4">
                                    <div className={`p-4 rounded-xl ${
                                        theme === "light" ? 'bg-blue-50' : 'bg-blue-900'
                                    }`}>
                                        <p className={`text-xl font-bold ${
                                            theme === "light" ? 'text-blue-700' : 'text-blue-300'
                                        }`}>
                                            <i className="fas fa-shopping-bag mr-2"></i>
                                            Total Items: {items.reduce((acc, i) => acc + i.qty, 0)}
                                        </p>
                                    </div>
                                    
                                    <div className={`p-4 rounded-xl ${
                                        theme === "light" ? 'bg-green-50' : 'bg-green-900'
                                    }`}>
                                        <p className={`text-2xl font-bold ${
                                            theme === "light" ? 'text-green-700' : 'text-green-300'
                                        }`}>
                                            <i className="fas fa-dollar-sign mr-2"></i>
                                            Total Amount: ${total.toFixed(2)}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-6 space-y-3">
                                        <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                            <i className="fas fa-credit-card mr-2"></i>
                                            Proceed to Checkout
                                        </button>

                                        <Link 
                                            to="/" 
                                            className={`block text-center py-3 px-6 rounded-lg border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                                                theme === "light" 
                                                    ? 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50' 
                                                    : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800'
                                            }`}
                                        >
                                            <i className="fas fa-arrow-left mr-2"></i>
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Cart;
