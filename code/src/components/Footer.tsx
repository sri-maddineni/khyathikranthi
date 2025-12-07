import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/images/khyathi.png"
                                alt="Khyathi Associates Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <h3 className="text-xl font-bold text-amber-400">Khyathi Associates</h3>
                        </div>
                        <p className="text-sm leading-relaxed">
                            A group of advocates focused on taking up and solving legal issues in Indian courts.
                            Committed to providing strategic and result-oriented legal solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-amber-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-amber-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/cases" className="hover:text-amber-400 transition-colors">
                                    Cases Dealt
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-amber-400 mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                                <span>Hyderabad & Vijayawada, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-amber-400 flex-shrink-0" />
                                <a href="tel:+919963820823" className="hover:text-amber-400 transition-colors">
                                    +91 9963820823
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                                <a
                                    href="mailto:bkranthinaidu@yahoo.com"
                                    className="hover:text-amber-400 transition-colors break-all"
                                >
                                    bkranthinaidu@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p>&copy; {new Date().getFullYear()} Khyathi Associates. All rights reserved.</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400">Developed by</span>
                            <a
                                // href="tel:+917382891977"
                                className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                            >
                                Sreekanth Freelance
                            </a>
                            <span className="text-gray-400">|</span>
                            <a
                                href="tel:+917382891977"
                                className="text-amber-400 hover:text-amber-300 transition-colors"
                            >
                                +91 7382891977
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

