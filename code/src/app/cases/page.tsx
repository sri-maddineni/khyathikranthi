import Link from 'next/link';
import {
    FaGavel,
    FaBuilding,
    FaLaptop,
    FaHandshake,
    FaLeaf,
    FaShieldAlt,
    FaFileContract,
    FaBalanceScale,
} from 'react-icons/fa';

export default function Cases() {
    const practiceAreas = [
        {
            icon: <FaGavel className="text-4xl" />,
            title: 'Civil Litigation',
            description:
                'Comprehensive representation in civil disputes including property matters, contract disputes, family law, and inheritance issues.',
            cases: [
                'Property disputes and land rights',
                'Contractual disputes and breach of contract',
                'Family law matters',
                'Inheritance and succession disputes',
                'Tort claims and compensation',
            ],
        },
        {
            icon: <FaShieldAlt className="text-4xl" />,
            title: 'Criminal Law',
            description:
                'Expert defense and prosecution services in criminal matters, ensuring fair representation and protection of rights.',
            cases: [
                'Bail applications and criminal defense',
                'White-collar crimes',
                'Financial frauds',
                'Cybercrimes',
                'Appeals and revisions',
            ],
        },
        {
            icon: <FaBuilding className="text-4xl" />,
            title: 'Corporate & Commercial Law',
            description:
                'Strategic corporate legal services including governance, compliance, M&A, and corporate disputes.',
            cases: [
                'Corporate governance and compliance',
                'M&A transactions and due diligence',
                'Shareholder disputes',
                'Corporate restructuring',
                'Commercial contracts and agreements',
            ],
        },
        {
            icon: <FaBalanceScale className="text-4xl" />,
            title: 'Insolvency & Bankruptcy',
            description:
                'Specialized representation in NCLT/NCLAT proceedings, CIRP disputes, and resolution processes.',
            cases: [
                'Corporate Insolvency Resolution Process (CIRP)',
                'NCLT/NCLAT proceedings',
                'Fraudulent transaction claims',
                'Resolution appeals',
                'Liquidation matters',
            ],
        },
        {
            icon: <FaLaptop className="text-4xl" />,
            title: 'Cyber Law & Digital Forensics',
            description:
                'Expertise in cyber laws, data protection, digital evidence, and cyber forensics investigations.',
            cases: [
                'Data protection and privacy compliance (GDPR, IT Act)',
                'Cybercrime investigations',
                'Digital evidence analysis',
                'Cybersecurity compliance',
                'E-commerce and digital contracts',
            ],
        },
        {
            icon: <FaHandshake className="text-4xl" />,
            title: 'Arbitration & ADR',
            description:
                'Efficient dispute resolution through arbitration, mediation, and negotiation services.',
            cases: [
                'Commercial arbitration',
                'Mediation and conciliation',
                'Contract negotiations',
                'Settlement agreements',
                'Enforcement of arbitral awards',
            ],
        },
        {
            icon: <FaFileContract className="text-4xl" />,
            title: 'Contracts & Negotiation',
            description:
                'Drafting, reviewing, and negotiating domestic and cross-border contracts and agreements.',
            cases: [
                'Service agreements',
                'Employment contracts',
                'Partnership agreements',
                'Cross-border contracts',
                'Bonds and guarantees',
            ],
        },
        {
            icon: <FaLeaf className="text-4xl" />,
            title: 'Environmental & Public Interest Law',
            description:
                'Advocacy for environmental protection, public welfare, and policy matters affecting communities.',
            cases: [
                'Environmental compliance and violations',
                'Land-use disputes',
                'Industrial pollution cases',
                'Public interest litigation (PIL)',
                'Rural development and rights',
            ],
        },
    ];

    return (
        <div className="w-full">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cases We Deal With</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive legal services across diverse practice areas
                    </p>
                </div>
            </section>

            {/* Practice Areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        {practiceAreas.map((area, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } gap-8 items-center`}
                            >
                                <div className="flex-1">
                                    <div className="bg-slate-50 p-8 rounded-lg shadow-md">
                                        <div className="text-amber-400 mb-4">{area.icon}</div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                                            {area.title}
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-6">{area.description}</p>
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-slate-900 mb-3">Types of Cases:</h3>
                                            <ul className="space-y-2">
                                                {area.cases.map((caseType, caseIndex) => (
                                                    <li key={caseIndex} className="flex items-start text-gray-700">
                                                        <span className="text-amber-400 mr-2 font-bold">•</span>
                                                        <span>{caseType}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg text-white h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4 text-amber-400 opacity-20">
                                                {area.icon}
                                            </div>
                                            <p className="text-gray-300 text-lg">
                                                Expert representation and strategic solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Need Legal Assistance?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Our team is ready to help you with your legal matters. Contact us for a consultation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

