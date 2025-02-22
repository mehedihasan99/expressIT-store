import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../assets/ExpressITbd-Logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-pink-300 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="ExpressITbd" className="w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-violet-600">
              Create Store
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-violet-600">
              Products
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden  bg-gray-800 text-center p-4 absolute z-20 w-full top-16 left-0">
          <li className="py-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Create Store
            </Link>
          </li>
          <li className="py-2">
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
