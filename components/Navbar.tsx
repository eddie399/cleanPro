"use client";
import {useEffect, useState} from "react";




const Navbar: React.FC = () => {

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMobileOpen(false);
        }    
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
    }, []);



  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-600">CleanPro</span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-green-600 font-medium">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">
            About
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-green-600 font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">
            Contact
          </a>
        </div>
        {/* Call to Action */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Book Now
          </a>
        </div>
        {/* Mobile Menu Button */}

       
        <div className="md:hidden">
          <button
            type="button"
            
            className="text-gray-700 focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (

              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (  
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            )}
          </button>
        </div>
      </div>
        {mobileOpen && (
          <nav>
            <div
              className={`absolute top-0 left-0 w-full bg-white z-50 shadow-md md:hidden
                transition-all duration-300 transform
                ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
              `}
            >
              {/* Close button inside mobile menu */}
              <div className="flex justify-end p-4">
                <button
                  type="button"
                  className="text-gray-700 focus:outline-none"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4 pb-4">
                <a href="#services" className="text-gray-700 hover:text-green-600 font-medium">
                  Services
                </a>
                <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">
                  About
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-green-600 font-medium">
                  Pricing
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">
                  Contact
                </a>
                <a
                  href="#book"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </nav>
        )}
      
    </nav>
  );
};

export default Navbar;