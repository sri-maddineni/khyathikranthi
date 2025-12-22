import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import {
    FaGraduationCap,
    FaAward,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    // FaGithub,
    FaTwitter,
    FaGlobe,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
} from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Kranthi Naidu Boya - Advocate Profile | Khyathi Associates",
    description: "Kranthi Naidu Boya - Accomplished Advocate with LL.B, PGD in Cyber Laws & Cyber Forensics, and B.Tech in CSE. Expert in litigation, arbitration, corporate law, and government cases. Contact: +91 9963820823",
    keywords: "Kranthi Naidu Boya, advocate, lawyer, legal expert, cyber law, corporate law, litigation, NCLT, Supreme Court advocate",
    openGraph: {
        title: "Kranthi Naidu Boya - Advocate | Khyathi Associates",
        description: "Accomplished Advocate with expertise in litigation, arbitration, corporate law, and government cases.",
        url: "https://khyathiassociates.com/profile",
    },
};

export default function Profile() {
    const experiences = [
        {
            title: 'Advocate - Supreme Court & High Court of AP & TG',
            company: 'Khyathi Associates',
            period: '01/2023 – Present',
            location: 'Hyderabad, India',
            responsibilities: [
                'Represent clients in civil, criminal, corporate, contractual, and NCLT matters',
                'Specialize in land rights, public welfare, and corporate disputes',
                'Draft legal notices, petitions, contracts, affidavits, and regulatory submissions',
                'Negotiate settlements, contracts, and partnerships',
                'Collaborate with government bodies and regulatory agencies',
                'Conduct legal research, case analysis, and due diligence',
            ],
        },
        {
            title: 'Independent Counsel',
            company: 'Self Practice',
            period: '08/2023 – Present',
            location: 'Hyderabad & Vijayawada, India',
            responsibilities: [
                'Advise clients on corporate governance, Insolvency disputes, and financial frauds',
                'Actively represent clients in NCLT/NCLAT proceedings',
                'Lead environmental and industrial litigation',
                'Provide legal risk assessments and compliance frameworks',
            ],
        },
        {
            title: 'President',
            company: 'HELPS Society & EEEHW Mission (Govt Registered Body)',
            period: '08/2014 – Present',
            location: 'Kurnool, India',
            responsibilities: [
                'Direct legal initiatives on land-use projects and environmental law',
                'Manage compliance and documentation for rural development programs',
                'Spearhead strategic projects to enhance organizational performance',
                'Advocate at community forums and policy platforms',
            ],
        },
        {
            title: 'National Secretary',
            company: 'National BC Welfare Association',
            period: '02/2020 – Present',
            location: 'Hyderabad, India',
            responsibilities: [
                'Support legal education campaigns',
                'Draft policy recommendations for backward classes',
                'Advise on welfare organisation and rights awareness',
            ],
        },
        {
            title: 'National Coordinator',
            company: 'Indian National Congress (INC)',
            period: '04/2019 – Present',
            location: 'New Delhi, India',
            responsibilities: [
                'Lead legal and policy advocacy on resource allocation and social justice',
                'Coordinate institutions-level campaigns and negotiations',
                'Guide outreach activities including public forums and webinars',
            ],
        },
        {
            title: 'State President',
            company: 'Andhra Pradesh Valmiki Boya Sangam (APVBS)',
            period: '09/2018 – Present',
            location: 'Amaravati, India',
            responsibilities: [
                'Advocate for ST status Inclusion and community rights',
                'Coordinate outreach initiatives and research policy issues',
                'Engage with legislators to promote progressive reforms',
            ],
        },
    ];

    const education = [
        {
            degree: 'LL.B - Bachelor of Legislative Law',
            institution: 'National Law School of India University - Bangalore',
        },
        {
            degree: 'PGD in Cyber Laws & Cyber Forensics',
            institution: 'National Law University – Delhi',
        },
        {
            degree: 'Legislative Drafting',
            institution: 'ICPS & National Law University - Delhi',
        },
        {
            degree: 'M.A. in Public Administration & Political Science',
            institution: 'Sri Venkateswara University – Tirupati',
        },
        {
            degree: 'B.Tech - Computer Science Engineering',
            institution: 'Sri Krishnadevaraya University, Anantapur',
        },
    ];

    const competencies = [
        {
            category: 'Litigation & Advocacy',
            items: [
                'Corporate, Commercial, Civil, Criminal & Environmental Law',
                'High-stakes Litigation',
                'IDC Proceedings (NCLT/NCLAT)',
            ],
        },
        {
            category: 'Cyber & Digital Law',
            items: [
                'Cybersecurity & Data Protection Compliance (GDPR, IT Act)',
                'Digital Evidence & Cyber Forensics',
            ],
        },
        {
            category: 'Dispute Resolution',
            items: [
                'Arbitration, Mediation, Negotiation',
                'Alternative Dispute Resolution Mechanisms',
            ],
        },
        {
            category: 'Contracts & Negotiation',
            items: [
                'Drafting, Reviewing & Negotiation of Domestic & Cross-border Contracts',
                'Bonds, Employment Agreements, Service Agreements',
                'M&A Support',
            ],
        },
        {
            category: 'Regulatory & Policy',
            items: [
                'Legal Risk Assessment',
                'ESG Legal Advisory',
                'Policy Evaluation',
                'Statutory Filings (RDI, SEDI, Companies Act)',
            ],
        },
        {
            category: 'Leadership & Advisory',
            items: [
                'Public Speaking',
                'Legal Education',
                'Government Liaison',
                'Community Advocacy',
                'Strategic Planning & Execution',
            ],
        },
    ];

    const languages = [
        { name: 'Telugu', level: 'Native / First Language' },
        { name: 'Hindi', level: 'Advanced (C1)' },
        { name: 'English', level: 'Advanced (C1)' },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Images Section */}
                        <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/highcourt.jpeg"
                                    alt="Kranthi Naidu Boya"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/supremecourt.jpg"
                                    alt="Kranthi Naidu Boya at Supreme Court"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/groupk.jpg"
                                    alt="Group Photo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl bg-white">
                                <Image
                                    src="/images/vcard.jpg"
                                    alt="Visiting Card - Kranthi Naidu Boya"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left w-full">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Kranthi Naidu Boya</h1>
                            <p className="text-2xl text-amber-400 mb-6 font-semibold">Advocate</p>
                            <div className="w-24 h-1 bg-amber-400 mx-auto lg:mx-0 mb-6"></div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Accomplished Advocate with LL.B, PGD in Cyber Laws & Cyber Forensics, and B.Tech in
                                CSE, uniquely integrating legal expertise with technological proficiency. Skilled in
                                high-stakes litigation, arbitration, contract negotiation, regulatory compliance, and
                                multi-jurisdictional advisory.
                            </p>
                            {/* Contact Details */}
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm justify-center lg:justify-start">
                                <a
                                    href="mailto:advkranthinaidu@yahoo.com"
                                    className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
                                >
                                    <FaEnvelope className="text-amber-400 flex-shrink-0" />
                                    <span className="break-all">advkranthinaidu@yahoo.com</span>
                                </a>
                                <a
                                    href="tel:+919963820823"
                                    className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
                                >
                                    <FaPhone className="text-amber-400 flex-shrink-0" />
                                    <span>+91 9963820823</span>
                                </a>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <FaMapMarkerAlt className="text-amber-400 flex-shrink-0" />
                                    <span>Offices across India: New Delhi, Hyderabad, Amaravati, Mumbai, Kolkata, Kochi, Chennai, Dispur (Assam), Lucknow, Bengaluru, Bhopal, Jaipur.</span>
                                </div>
                                {/* <a
                                    href="https://bkranthinaidu.github.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
                                >
                                    <FaGlobe className="text-amber-400 flex-shrink-0" />
                                    <span className="break-all">bkranthinaidu.github.io</span>
                                </a> */}
                            </div>
                            <div className="flex justify-center lg:justify-start gap-4 mt-4">
                                <a
                                    href="https://www.facebook.com/share/14VbnAKfmXY/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-amber-400 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="text-2xl" />
                                </a>
                                <a
                                    href="https://youtube.com/@kranthirebel5?si=dPhIkowcq5wnUSh2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-amber-400 transition-colors"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube className="text-2xl" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/kranthirebel5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-amber-400 transition-colors"
                                    aria-label="Website"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a
                                    href="https://twitter.com/kranthirebel5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-amber-400 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter className="text-2xl" />
                                </a>
                                <a
                                    href="https://bkranthinaidu.github.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-amber-400 transition-colors"
                                    aria-label="Website"
                                >
                                    <FaGlobe className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Professional Summary */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Summary</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            Accomplished Advocate with LL.B from National Law School Bangalore (NLSIU), PGD in Cyber Laws & Cyber Forensics, M.A. in Political Science and Public Administration, and B.Tech in CSE, uniquely integrating legal expertise with technological proficiency.
                        </p>
                        <p>
                            Skilled in high-stakes litigation, arbitration, contract negotiation, regulatory compliance, and multi-jurisdictional advisory. Adept in policy advocacy, digital evidence, and cyber forensics, with a proven record of delivering precise, outcome-driven legal solutions across civil, criminal, corporate, and public law matters. Recognized for strategic thinking, stakeholder negotiation, and leadership in both legal and community-focused initiatives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Experience</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                                        <p className="text-lg text-amber-600 font-semibold">{exp.company}</p>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2 sm:mt-0 sm:text-right">
                                        <p>{exp.period}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 mt-4">
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex} className="flex items-start text-gray-700">
                                            <span className="text-amber-400 mr-2 font-bold">•</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                        <FaGraduationCap className="text-amber-400 mr-3" />
                        Education & Training
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{edu.degree}</h3>
                                <p className="text-gray-700">{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                        <FaAward className="text-amber-400 mr-3" />
                        Core Competencies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {competencies.map((comp, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 text-amber-600">
                                    {comp.category}
                                </h3>
                                <ul className="space-y-2">
                                    {comp.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                                            <span className="text-amber-400 mr-2 font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Languages */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Languages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {languages.map((lang, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{lang.name}</h3>
                                <p className="text-gray-700">{lang.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Publications</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                <span>Legal & developmental analysis of rural challenges</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                <span>Rights of a de-notified tribe</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                <span>Policy-focused comparative study of Andhra regions</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications</h2>
                    <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-700">
                            <span className="font-semibold">PGD In Cyber Laws & Cyber Forensics:</span> –
                            Specialized in digital evidence, cyber law, and regulatory frameworks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Gallery</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Moments from professional engagements, court appearances, and community initiatives
                        </p>
                    </div>
                    <Gallery
                        images={[
                            '1 president.jpg',
                            '2 cji gradutation.jpg',
                            '3.jpg',
                            '4 priyanka.jpg',
                            '5 cbn.jpg',
                            '6 lokesh.jpg',
                            '7 aviation 2.jpg',
                            '8 dgp.jpg',
                            '9 bar council.jpg',
                            '9 kurnool sp.jpg',
                            '10 np.jpg',
                            '11 immg.jpg',
                            '12 img.jpg',
                            '13 restore st status.jpg',
                            '14 img.jpg',
                            '15 img.jpg',
                        ]}
                        altPrefix="Gallery image"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Legal Consultation?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Contact Kranthi Naidu Boya for expert legal advice and representation
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}

