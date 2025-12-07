'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/cases', label: 'Cases Dealt' },
        { href: '/profile', label: 'Our Advocate' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/images/khyathi.png"
                            alt="Khyathi Associates Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                            priority
                        />
                        <span className="text-xl font-bold text-amber-400">Khyathi Associates</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-amber-400 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-gray-300 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

