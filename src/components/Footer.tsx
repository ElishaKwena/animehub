import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer:React.FC  = () => {
  return (
    <footer className="dark:bg-black bg-frost text-gray-300 border-t border-pink-900/50 w-full mt-20">
      {/* Main Footer Content */}
      <div className="lg:w-[95%] w-full md:w-full mx-auto place-items-center px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Logo & Description */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center mb-4">
            <Link to="" className="flex items-baseline justify-between ">
                <h1 className='text-neon_purple font-bold text-xl font-privus'>ANIME</h1>
                <h1 className="text-fashion_pink font-extrabold text-4xl font-mareno">HUB</h1>
            </Link>
          </div>
          <p className="text-sm mb-4 text-neon_purple">
            Your ultimate anime streaming platform with zero ads, instant simulcasts, and 4K quality.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaDiscord size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Popular Anime</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">New Seasons</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Genres</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Simulcasts</a></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-4">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">About Us</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Contact us</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Help</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">DMCA</a></li>
            <li><a href="#" className="hover:text-pink-500 text-carbon dark:hover:text-fashion_pink dark:text-chrome transition">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4 text-carbon">
            Get notified about new releases and exclusive content.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
            />
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-carbon">
            © 2025 AnimeHub. All rights reserved. Not affiliated with any studio.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-pink-500 text-neon_purple transition">Status</a>
            <a href="#" className="text-sm hover:text-pink-500 text-neon_purple transition">Contact</a>
            <a href="#" className="text-sm hover:text-pink-500 text-neon_purple transition">Careers</a>
            <div className='lg:hidden md:hidden'>
              <ThemeToggleButton/>
            </div>
          </div>
        </div>
      </div>

      {/* Easter Egg - Hidden Coupon */}
      <div className="text-center py-2 bg-black/10 text-xs text-transparent hover:text-gray-500 transition">
        Use code <span className="font-bold">"ANIME2023"</span> for 10% off Premium!
      </div>
    </footer>
  );
};

export default Footer;