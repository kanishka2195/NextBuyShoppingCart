import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Signup() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [userType, setUserType] = useState('user'); // 'user' or 'admin'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    // Admin specific fields
    adminCode: '',
    businessName: '',
    businessAddress: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced scroll functionality
  useEffect(() => {
    const scrollToSignup = () => {
      const element = document.getElementById('signup-section');
      if (element) {
        const navbarHeight = 64; // Height of navbar (h-16 = 4rem = 64px)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    // Scroll when component mounts or location changes
    const timer = setTimeout(scrollToSignup, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]); // Added pathname dependency for better scroll triggering

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    // Clear errors when switching types
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Admin specific validations
    if (userType === 'admin') {
      if (!formData.adminCode) {
        newErrors.adminCode = 'Admin verification code is required';
      } else if (formData.adminCode !== 'ADMIN2024') {
        newErrors.adminCode = 'Invalid admin verification code';
      }
      
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'Business name is required';
      }
      
      if (!formData.businessAddress.trim()) {
        newErrors.businessAddress = 'Business address is required';
      }
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Prepare signup data based on user type
      const signupData = {
        ...formData,
        userType,
        registeredAt: new Date().toISOString()
      };
      
      // Replace this with your actual signup API call
      console.log('Signup attempt:', signupData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On successful signup, redirect to login
      navigate('/login', { 
        state: { 
          message: `${userType === 'admin' ? 'Admin' : 'User'} account created successfully! Please log in.`,
          email: formData.email 
        }
      });
      
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    }`}>
      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
      
      {/* Signup Section with ID for scrolling */}
      <section id="signup-section" className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="text-3xl font-bold text-white hover:text-amber-200 transition-colors duration-300">
              Next<span className="text-amber-400">BUY</span>
              <span className="text-xs text-purple-300 ml-1">✨</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Signup Form Container */}
          <div className={`space-y-8 p-8 rounded-2xl shadow-2xl backdrop-blur-lg ${
            theme === 'light' 
              ? 'bg-white/10 border border-purple-500/20' 
              : 'bg-gray-800/50 border border-gray-600/30'
          }`}>
            
            {/* User Type Selection */}
            <div className="flex space-x-4 mb-6">
              <button
                type="button"
                onClick={() => handleUserTypeChange('user')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  userType === 'user'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-gray-600'
                }`}
              >
                <i className="fa-solid fa-user mr-2"></i>
                User Account
              </button>
              <button
                type="button"
                onClick={() => handleUserTypeChange('admin')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  userType === 'admin'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-gray-600'
                }`}
              >
                <i className="fa-solid fa-crown mr-2"></i>
                Admin Account
              </button>
            </div>

            {/* Signup Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* General Error */}
              {errors.general && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                  <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                  {errors.general}
                </div>
              )}

              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user text-gray-400"></i>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <i className="fa-solid fa-circle-exclamation mr-1"></i>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-envelope text-gray-400"></i>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <i className="fa-solid fa-circle-exclamation mr-1"></i>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-phone text-gray-400"></i>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <i className="fa-solid fa-circle-exclamation mr-1"></i>
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Admin-specific fields */}
                {userType === 'admin' && (
                  <>
                    {/* Admin Verification Code */}
                    <div className="border-t border-amber-500/30 pt-4">
                      <h3 className="text-lg font-medium text-amber-400 mb-4 flex items-center">
                        <i className="fa-solid fa-crown mr-2"></i>
                        Admin Information
                      </h3>
                      
                      <div>
                        <label htmlFor="adminCode" className="block text-sm font-medium text-gray-300 mb-2">
                          Admin Verification Code
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fa-solid fa-key text-gray-400"></i>
                          </div>
                          <input
                            id="adminCode"
                            name="adminCode"
                            type="password"
                            value={formData.adminCode}
                            onChange={handleChange}
                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 ${
                              errors.adminCode 
                                ? 'border-red-500 focus:ring-red-500' 
                                : 'border-gray-600 hover:border-gray-500'
                            }`}
                            placeholder="Enter admin verification code"
                          />
                        </div>
                        {errors.adminCode && (
                          <p className="mt-1 text-sm text-red-400 flex items-center">
                            <i className="fa-solid fa-circle-exclamation mr-1"></i>
                            {errors.adminCode}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-gray-400">
                          <i className="fa-solid fa-info-circle mr-1"></i>
                          Contact your system administrator for the verification code
                        </p>
                      </div>
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                        Business Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fa-solid fa-building text-gray-400"></i>
                        </div>
                        <input
                          id="businessName"
                          name="businessName"
                          type="text"
                          value={formData.businessName}
                          onChange={handleChange}
                          className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 ${
                            errors.businessName 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                          placeholder="Enter your business name"
                        />
                      </div>
                      {errors.businessName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <i className="fa-solid fa-circle-exclamation mr-1"></i>
                          {errors.businessName}
                        </p>
                      )}
                    </div>

                    {/* Business Address */}
                    <div>
                      <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-300 mb-2">
                        Business Address
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <i className="fa-solid fa-location-dot text-gray-400"></i>
                        </div>
                        <textarea
                          id="businessAddress"
                          name="businessAddress"
                          rows={3}
                          value={formData.businessAddress}
                          onChange={handleChange}
                          className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none ${
                            errors.businessAddress 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                          placeholder="Enter your business address"
                        />
                      </div>
                      {errors.businessAddress && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <i className="fa-solid fa-circle-exclamation mr-1"></i>
                          {errors.businessAddress}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Password Field */}
                <div className={userType === 'admin' ? '' : 'border-t border-purple-500/30 pt-4'}>
                  {userType === 'user' && (
                    <h3 className="text-lg font-medium text-purple-400 mb-4 flex items-center">
                      <i className="fa-solid fa-lock mr-2"></i>
                      Security Information
                    </h3>
                  )}
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fa-solid fa-lock text-gray-400"></i>
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                          errors.password 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                        placeholder="Create a strong password"
                      />
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <i className="fa-solid fa-circle-exclamation mr-1"></i>
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-lock text-gray-400"></i>
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        errors.confirmPassword 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Confirm your password"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <i className="fa-solid fa-circle-exclamation mr-1"></i>
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start border-t border-gray-600/30 pt-6">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 bg-white/5 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the{' '}
                  <Link to="/terms" className="text-purple-400 hover:text-purple-300 underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                    userType === 'admin' 
                      ? 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500' 
                      : 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                >
                  {isLoading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                      Creating account...
                    </>
                  ) : (
                    <>
                      <i className={`fa-solid ${userType === 'admin' ? 'fa-crown' : 'fa-user-plus'} mr-2`}></i>
                      Create {userType === 'admin' ? 'Admin' : 'User'} Account
                    </>
                  )}
                </button>
              </div>

              {/* Social Signup (Optional - for users only) */}
              {userType === 'user' && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className={`px-2 text-gray-400 ${
                        theme === 'light' 
                          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
                          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
                      }`}>
                        Or sign up with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-white/5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 transform hover:scale-105"
                    >
                      <i className="fab fa-google mr-2"></i>
                      Google
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg bg-white/5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 transform hover:scale-105"
                    >
                      <i className="fab fa-facebook mr-2"></i>
                      Facebook
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
