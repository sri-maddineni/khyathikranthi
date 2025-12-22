import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// import ContactForm from './ContactForm'; // Commented out - will be enabled when API is configured
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    // FaGithub,
    FaTwitter,
    FaGlobe,
    FaUserTie,
    FaFacebook,
    FaYoutube,
} from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Contact Us - Khyathi Associates",
    description: "Contact Khyathi Associates for legal consultation and representation. Offices in New Delhi, Hyderabad, Amaravati, Mumbai, Kolkata, Kochi, Chennai, Dispur, Lucknow, Bengaluru, and Bhopal. Phone: +91 9963820823",
    keywords: "contact Khyathi Associates, legal consultation, law firm contact, lawyer contact, legal services contact",
    openGraph: {
        title: "Contact Khyathi Associates - Legal Services",
        description: "Contact us for legal consultation and representation. Offices across India.",
        url: "https://khyathiassociates.com/contact",
    },
};

export default function Contact() {
    const offices = [
        'New Delhi',
        'Hyderabad',
        'Amaravati',
        'Mumbai',
        'Kolkata',
        'Kochi',
        'Chennai',
        'Dispur (Assam)',
        'Lucknow',
        'Bengaluru',
        'Bhopal',
        'Jaipur'
    ];

    const contactInfo = [
        {
            icon: <FaPhone className="text-3xl" />,
            title: 'Phone',
            details: [
                '+91 9963820823',
                '+91 94401 76986 (Valmiki Arjun Yellarthi)',
            ],
        },
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: 'Email',
            details: ['advkranthinaidu@yahoo.com'],
        },
    ];

    const socialLinks = [
        {
            icon: <FaFacebook className="text-2xl" />,
            label: 'Facebook',
            href: 'https://www.facebook.com/share/14VbnAKfmXY/',
        },
        {
            icon: <FaYoutube className="text-2xl" />,
            label: 'YouTube',
            href: 'https://youtube.com/@kranthirebel5?si=dPhIkowcq5wnUSh2',
        },
        {
            icon: <FaLinkedin className="text-2xl" />,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/kranthirebel5',
        },
        {
            icon: <FaTwitter className="text-2xl" />,
            label: 'Twitter',
            href: 'https://twitter.com/kranthirebel5',
        },
        {
            icon: <FaGlobe className="text-2xl" />,
            label: 'Website',
            href: 'https://bkranthinaidu.github.io',
        },
    ];

    return (
        <div className="w-full">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Get in touch with us for legal consultation and representation
                    </p>
                </div>
            </section>


            {/* Managing Director Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 rounded-lg shadow-xl text-white">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                                <div className="flex-shrink-0">
                                    <div className="relative w-64 h-64 sm:w-40 sm:h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg">
                                        <Image
                                            src="/images/kranthi.jpg"
                                            alt="Kranthi Naidu Boya - Managing Director"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                                        <FaUserTie className="text-amber-400 text-2xl" />
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">
                                                Managing Director
                                            </h2>
                                            <p className="text-gray-300 text-sm sm:text-base">
                                                Khyathi Associates
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Kranthi Naidu Boya</h3>
                                    <p className="text-amber-400 font-semibold text-base sm:text-lg mb-4">Advocate & Managing Director</p>
                                    <div className="mb-4">
                                        <p className="text-gray-300 font-semibold text-sm sm:text-base mb-2">Qualifications:</p>
                                        <ul className="text-gray-300 text-sm sm:text-base space-y-1 ml-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>B.Tech (Computer Science Engineering)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>M.A. Political Science and Public Administration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>LL.B from National Law School Bangalore (NLSIU)</span>
                                            </li>

                                           


                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Cyber Laws and Cyber Forensics (NLU DELHI)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span> Legislative Drafting (ICPS & NLU Delhi)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                                        Advocate Kranthi Naidu Boya serves as the Managing Director of Khyathi Associates,
                                        leading the firm with extensive expertise in litigation, corporate law, and government cases.
                                        He brings a unique combination of legal expertise and technological proficiency to the firm.
                                    </p>
                                    <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-amber-400">
                                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base italic">
                                            Skilled in high-stakes litigation, arbitration, contract negotiation, regulatory compliance, and multi-jurisdictional advisory. Adept in policy advocacy, digital evidence, and cyber forensics, with a proven record of delivering precise, outcome-driven legal solutions across civil, criminal, corporate, and public law matters. Recognized for strategic thinking, stakeholder negotiation, and leadership in both legal and community-focused initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-slate-700 pt-6">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link
                                        href="/profile"
                                        className="bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 text-center"
                                    >
                                        View Full Profile
                                    </Link>
                                    <a
                                        href="tel:+919963820823"
                                        className="bg-transparent border-2 border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200 text-center"
                                    >
                                        Contact MD
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center"
                            >
                                <div className="text-amber-400 mb-4 flex justify-center">{info.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
                                <div className="space-y-2">
                                    {info.details.map((detail, detailIndex) => {
                                        // Check if it's a phone number and make it clickable
                                        const isPhone = detail.includes('+91');
                                        if (isPhone) {
                                            // Extract phone number (remove spaces and get digits after +91)
                                            const phoneMatch = detail.match(/\+91[\s-]*(\d{10})/);
                                            const phoneNumber = phoneMatch ? `+91${phoneMatch[1]}` : null;

                                            return (
                                                <div key={detailIndex}>
                                                    {phoneNumber ? (
                                                        <a
                                                            href={`tel:${phoneNumber}`}
                                                            className="text-gray-700 hover:text-amber-600 transition-colors block"
                                                        >
                                                            {detail}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-700">{detail}</p>
                                                    )}
                                                </div>
                                            );
                                        }
                                        return (
                                            <p key={detailIndex} className="text-gray-700">
                                                {detail}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form - Commented out until API is configured */}
                    {/* 
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                    */}

                    {/* Alternative: Direct contact methods */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Please contact us directly via phone or email for legal consultation and representation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+919963820823"
                                    className="bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-2"
                                >
                                    <FaPhone />
                                    <span>Call Us</span>
                                </a>
                                <a
                                    href="mailto:advkranthinaidu@yahoo.com"
                                    className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-2"
                                >
                                    <FaEnvelope />
                                    <span>Email Us</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="max-w-4xl mx-auto mt-12 mb-8">
                        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg">
                            <div className="text-center">
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-8">Connect With Us</h3>
                                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                                    Follow us on social media for legal updates and insights
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-slate-100 p-5 sm:p-6 rounded-full text-slate-700 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-xl group"
                                            aria-label={social.label}
                                        >
                                            <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                                                {social.icon}
                                            </div>
                                            <span className="sr-only">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <FaMapMarkerAlt className="text-5xl text-amber-400" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Office Locations</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We have offices across India to serve you better
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {offices.map((city, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border-l-4 border-amber-400 hover:border-amber-500 group"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:bg-amber-500 transition-colors"></div>
                                    <p className="text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {city}
                                    </p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 ml-4">India</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Office Hours */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Office Hours</h2>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="space-y-4 text-lg text-gray-700">
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="font-semibold">Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="font-semibold">Saturday</span>
                                <span>10:00 AM - 2:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="font-semibold">Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                        <p className="mt-6 text-gray-600">
                            For urgent matters, please call us directly at{' '}
                            <a href="tel:+919963820823" className="text-amber-600 hover:text-amber-700 font-semibold">
                                +91 9963820823
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

