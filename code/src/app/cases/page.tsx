import Link from 'next/link';
import { Metadata } from 'next';
import {
    FaGavel,
    FaBuilding,
    FaLaptop,
    FaHandshake,
    FaLeaf,
    FaShieldAlt,
    FaFileContract,
    FaBalanceScale,
    FaLandmark,
    FaMoneyBillWave,
    // FaIndustry,
    // FaPlane,
    // FaShoppingCart,
    FaFileInvoiceDollar,
    FaShieldVirus,
    FaBriefcase,
    FaChartLine,
    FaMapMarkedAlt,
    FaCity,
    FaUserTie,
    FaUniversity,
    FaHospital,
    FaRoad,
    FaUsers,
    FaVoteYea,
    // FaFileAlt,
    FaBalanceScale as FaConstitution,
} from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Practice Areas & Cases - Khyathi Associates",
    description: "Comprehensive legal services across diverse practice areas including civil litigation, criminal law, corporate law, government cases, insolvency, cyber law, and more. Expert representation in Supreme Court, High Courts, and tribunals.",
    keywords: "practice areas, legal services, civil litigation, criminal law, corporate law, government cases, NCLT, arbitration, dispute resolution, cyber law, insolvency",
    openGraph: {
        title: "Practice Areas & Cases - Khyathi Associates",
        description: "Comprehensive legal services across diverse practice areas. Expert representation in Supreme Court, High Courts, and tribunals.",
        url: "https://khyathiassociates.com/cases",
    },
};

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
        {
            icon: <FaMoneyBillWave className="text-4xl" />,
            title: 'Banking and Finance',
            description:
                'Comprehensive banking law services including loan recovery, regulatory compliance, and financial disputes.',
            cases: [
                'Loan recovery and debt restructuring',
                'Banking regulatory compliance',
                'Financial fraud investigations',
                'Secured transactions and mortgages',
                'Banking litigation and appeals',
            ],
        },
        {
            icon: <FaChartLine className="text-4xl" />,
            title: 'Anti-trust and Competition',
            description:
                'Expert guidance on competition law, anti-trust matters, and regulatory compliance.',
            cases: [
                'Competition Commission of India (CCI) matters',
                'Anti-competitive agreements',
                'Abuse of dominant position',
                'Merger and acquisition clearances',
                'Competition law compliance',
            ],
        },
        {
            icon: <FaLaptop className="text-4xl" />,
            title: 'Intellectual Property Rights',
            description:
                'Protection and enforcement of intellectual property including patents, trademarks, and copyrights.',
            cases: [
                'Patent registration and enforcement',
                'Trademark disputes and protection',
                'Copyright infringement cases',
                'IP licensing and agreements',
                'IP litigation and appeals',
            ],
        },
        {
            icon: <FaLandmark className="text-4xl" />,
            title: 'Real Estate',
            description:
                'Comprehensive real estate legal services including transactions, disputes, and regulatory compliance.',
            cases: [
                'Property transactions and due diligence',
                'Real estate development agreements',
                'Land acquisition and compensation',
                'Real estate regulatory compliance (RERA)',
                'Property disputes and title verification',
            ],
        },
        {
            icon: <FaFileInvoiceDollar className="text-4xl" />,
            title: 'Direct Tax & Indirect Tax',
            description:
                'Expert tax advisory and litigation services for direct and indirect tax matters.',
            cases: [
                'Income tax disputes and appeals',
                'GST matters and compliance',
                'Tax planning and advisory',
                'Tax assessment and reassessment',
                'Customs and excise matters',
            ],
        },
        {
            icon: <FaShieldVirus className="text-4xl" />,
            title: 'Prevention of Money Laundering (PMLA)',
            description:
                'Specialized representation in PMLA matters, financial crimes, and regulatory compliance.',
            cases: [
                'PMLA investigations and proceedings',
                'Asset attachment and confiscation',
                'Financial crime defense',
                'PMLA compliance and advisory',
                'Appeals before PMLA Appellate Tribunal',
            ],
        },
        {
            icon: <FaBriefcase className="text-4xl" />,
            title: 'Labour and Employment',
            description:
                'Comprehensive employment law services including labor disputes, compliance, and advisory.',
            cases: [
                'Labor disputes and conciliation',
                'Employment contracts and agreements',
                'Industrial relations and disputes',
                'Labor law compliance and advisory',
                'Workers compensation matters',
            ],
        },
        {
            icon: <FaBalanceScale className="text-4xl" />,
            title: 'Governance, Risk and Compliance',
            description:
                'Strategic compliance and governance advisory for corporate entities and organizations.',
            cases: [
                'Corporate governance advisory',
                'Regulatory compliance frameworks',
                'Risk assessment and mitigation',
                'Internal audit and compliance',
                'ESG compliance and reporting',
            ],
        },
        {
            icon: <FaHandshake className="text-4xl" />,
            title: 'Joint Ventures, M&A/ Private Equity',
            description:
                'Expert legal support for mergers, acquisitions, joint ventures, and private equity transactions.',
            cases: [
                'Merger and acquisition transactions',
                'Joint venture agreements',
                'Private equity investments',
                'Due diligence and structuring',
                'Post-merger integration support',
            ],
        },
    ];

    const sectors = [
        {
            name: 'Insurance',
            description: 'Legal services for insurance companies and policyholders',
        },
        {
            name: 'Mining',
            description: 'Mining law, regulatory compliance, and environmental matters',
        },
        {
            name: 'Aviation',
            description: 'Aviation law, regulatory compliance, and dispute resolution',
        },
        {
            name: 'Defence',
            description: 'Defense contracts, procurement, and regulatory matters',
        },
        {
            name: 'E-commerce',
            description: 'E-commerce regulations, data protection, and digital transactions',
        },
        {
            name: 'Customs',
            description: 'Customs law, import-export regulations, and disputes',
        },
        {
            name: 'Advertising',
            description: 'Advertising law, consumer protection, and regulatory compliance',
        },
        {
            name: 'Media and Entertainment',
            description: 'Media law, entertainment contracts, and intellectual property',
        },
        {
            name: 'Retail and Franchising',
            description: 'Retail law, franchise agreements, and commercial disputes',
        },
        {
            name: 'Information Technology',
            description: 'IT law, software licensing, and technology transactions',
        },
        {
            name: 'Pharmaceutical, Food & Drug',
            description: 'Pharma regulations, drug approvals, and compliance matters',
        },
        {
            name: 'Construction, Infrastructure and Energy',
            description: 'Construction law, infrastructure projects, and energy regulations',
        },
        {
            name: 'Telecommunication and Broadcasting',
            description: 'Telecom regulations, broadcasting licenses, and disputes',
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

            {/* Government & Public Law Practice Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Government & Public Law Practice
                        </h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                <strong>Khyathi Associates</strong> is a full-service law firm with strong expertise in handling Government, Public Authority, and Statutory Body litigation across various judicial and quasi-judicial forums.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                We represent and advise individuals, contractors, employees, institutions, and organizations in disputes involving State and Central Government departments, local bodies, and public sector undertakings.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                                Our firm regularly appears before Supreme Court of India, High Courts, Tribunals, Sessions Courts, Magistrate Courts, and Special Courts.
                            </p>
                        </div>
                    </div>

                    {/* Key Practice Areas */}
                    <div className="mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
                            Our Key Practice Areas
                        </h3>
                        <div className="space-y-8">
                            {/* Practice Area 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaMapMarkedAlt className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            1. Revenue & Land Administration Matters
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We handle disputes relating to Government land and revenue records, including:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Land acquisition and compensation cases</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Government land protection & encroachment matters</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Patta, assignment, DKT land disputes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>ROR, pahani, mutation & survey issues</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Ceiling, Inams & resumption proceedings</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Eviction and restoration cases</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Authorities involved: Revenue Department, Tahsildar, RDO, Collectorate
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaShieldAlt className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            2. Criminal Cases Involving Government Authorities
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            Our criminal law practice includes matters prosecuted by the State:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>IPC / BNS offences</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>NDPS Act cases</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>SC/ST (Prevention of Atrocities) Act cases</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Preventive Detention (PD Act) matters</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Arms Act & special enactments</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Criminal appeals, revisions & quash petitions</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Courts: JFMC, Sessions Courts, High Court
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaCity className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            3. Municipal & Local Body Litigation
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We advise and represent clients in disputes involving:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Municipal tax and assessment disputes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Unauthorized constructions & demolition notices</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Town planning and zoning violations</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Building permissions and regularization</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Panchayat & local authority disputes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Bodies: Municipal Corporations, Municipalities, Gram Panchayats
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaUserTie className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            4. Service & Employment Law (Government Employees)
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We provide legal assistance to Government employees and departments in:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Suspension, dismissal & disciplinary proceedings</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Transfers, postings & promotions</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Seniority and pay fixation disputes</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Pension, gratuity & retirement benefits</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Contractual and outsourced employment issues</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Forums: CAT, Administrative Tribunals, High Court
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 5 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaBuilding className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            5. Public Sector Undertakings (PSUs) & Government Corporations
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We handle litigation and advisory matters for disputes involving PSUs, including:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Contractual and commercial disputes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Arbitration and recovery proceedings</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Tender & procurement disputes</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Blacklisting & termination cases</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Employment disputes within PSUs</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Entities: Banks, Transport Corporations, Power Utilities, Insurance Companies, Railways
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 6 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaUniversity className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            6. Education & Institutional Matters
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            Our firm represents stakeholders in disputes related to Government and aided institutions:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Teacher appointments, transfers & promotions</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>University and college service matters</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Student disciplinary and examination issues</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Admissions, reservations & affiliation disputes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Institutions: Schools, Colleges, Universities, Education Departments
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 7 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaHospital className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            7. Health & Medical Law (Government Sector)
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We deal with legal issues arising from public healthcare administration:
                                        </p>
                                        <ul className="space-y-2 text-gray-700 mb-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Medical negligence claims involving Government hospitals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Service matters of doctors and medical staff</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Procurement & tender disputes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Compensation and policy-related claims</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 8 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaRoad className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            8. Infrastructure, Contracts & Public Works
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We represent contractors and authorities in:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Road, irrigation & infrastructure disputes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Contractor payment & billing claims</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Termination and penalty proceedings</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Arbitration under Government contracts</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-amber-400 mr-2 font-bold">•</span>
                                                    <span>Blacklisting and debarment matters</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Departments: PWD, R&B, Irrigation, Housing Boards
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 9 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaUsers className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            9. Welfare, Social Justice & Special Laws
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We handle matters arising under welfare legislations and schemes:
                                        </p>
                                        <ul className="space-y-2 text-gray-700 mb-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>SC/ST welfare and atrocity-related litigation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Minority & BC welfare disputes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Government compensation and pension schemes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Social security benefit claims</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 10 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaVoteYea className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            10. Election & Political Law
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            Our election law practice includes:
                                        </p>
                                        <ul className="space-y-2 text-gray-700 mb-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Election petitions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Disqualification proceedings</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Model Code of Conduct violations</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Local body election disputes</span>
                                            </li>
                                        </ul>
                                        <p className="text-sm text-gray-600 font-semibold">
                                            Forums: High Court, Election Tribunals
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 11 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaFileInvoiceDollar className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            11. Taxation & Financial Litigation
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We represent clients in Government tax and revenue disputes:
                                        </p>
                                        <ul className="space-y-2 text-gray-700 mb-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>GST litigation and appeals</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Income Tax matters</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Stamp duty and registration disputes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Excise, customs & regulatory proceedings</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 12 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaLeaf className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            12. Environmental & Regulatory Law
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We handle cases involving statutory regulators:
                                        </p>
                                        <ul className="space-y-2 text-gray-700 mb-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Pollution control disputes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Mining & quarry lease issues</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Forest & environmental clearance matters</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Proceedings before NGT and High Court</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Area 13 */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400">
                                <div className="flex items-start space-x-4">
                                    <div className="text-amber-400 flex-shrink-0 mt-1">
                                        <FaConstitution className="text-3xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                                            13. Constitutional & Writ Jurisdiction
                                        </h4>
                                        <p className="text-gray-700 mb-4">
                                            We regularly appear in constitutional matters involving Government action:
                                        </p>
                                        <ul className="space-y-2 text-gray-700 mb-4">
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Writ petitions under Articles 226 & 32</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Challenges to Government orders & policies</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Public Interest Litigations (PILs)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-amber-400 mr-2 font-bold">•</span>
                                                <span>Fundamental rights enforcement</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Sectors</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We serve clients across diverse industry sectors with specialized legal expertise
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-l-4 border-amber-400"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{sector.name}</h3>
                                <p className="text-sm text-gray-600">{sector.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Our experienced team is ready to help you with your legal matters. Contact us today for expert consultation and representation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg"
                        >
                            Contact Us Now
                        </Link>
                        <a
                            href="tel:+919963820823"
                            className="inline-block bg-transparent border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200"
                        >
                            Call +91 9963820823
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

