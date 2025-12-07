import ContactForm from './ContactForm';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaGlobe,
} from 'react-icons/fa';

export default function Contact() {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: 'Office Locations',
            details: ['Hyderabad, India', 'Vijayawada, India'],
        },
        {
            icon: <FaPhone className="text-3xl" />,
            title: 'Phone',
            details: ['+91 9963820823'],
        },
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: 'Email',
            details: ['bkranthinaidu@yahoo.com'],
        },
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin className="text-2xl" />,
            label: 'LinkedIn',
            href: '#',
        },
        {
            icon: <FaGithub className="text-2xl" />,
            label: 'GitHub',
            href: 'https://bkranthinaidu.github.io',
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

            {/* Contact Information */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center"
                            >
                                <div className="text-amber-400 mb-4 flex justify-center">{info.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
                                <div className="space-y-2">
                                    {info.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-gray-700">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="max-w-2xl mx-auto mt-12">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Connect With Us</h3>
                            <div className="flex justify-center space-x-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-slate-100 p-4 rounded-full text-slate-700 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
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

