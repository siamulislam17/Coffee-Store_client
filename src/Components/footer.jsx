import React from 'react';
import Logo from '../assets/more/logo1.png';
import coffeeBeanImg from '../assets/more/28.jpg';

const Footer = () => {
    return (
        <footer className="bg-[#331A15] text-white pt-12 relative">
            {/* Background Coffee Beans */}
            <div 
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${coffeeBeanImg})` }}
            ></div>

            <div className="relative  z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Left Side */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
                        <h2 className="text-2xl font-bold rancho">Espresso Emporium</h2>
                    </div>
                    <p className="mb-4 text-sm">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, 
                        to share with your best companion.
                    </p>
                    <div className="flex gap-4 mb-6 text-xl">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="text-sm space-y-2">
                        <p><i className="fas fa-phone-alt mr-2"></i>+88 01533 333 333</p>
                        <p><i className="fas fa-envelope mr-2"></i>info@gmail.com</p>
                        <p><i className="fas fa-map-marker-alt mr-2"></i>72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 rancho">Connect with Us</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-base-100 px-4 py-2 rounded text-black"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-base-100 px-4 py-2 rounded text-black"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full bg-base-100 px-4 py-2 rounded text-black"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-white text-[#331A15] font-semibold py-2 px-6 rounded hover:bg-gray-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative z-10 mt-12 text-center text-sm py-4 border-t border-[#442B24]">
                <p>Copyright © Espresso Emporium | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
