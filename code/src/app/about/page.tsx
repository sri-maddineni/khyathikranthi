import { FaAward, FaUsers, FaMapMarkerAlt, FaBullseye } from 'react-icons/fa';

export default function About() {
    const values = [
        {
            icon: <FaAward className="text-3xl" />,
            title: 'Excellence',
            description: 'We strive for excellence in every case, ensuring the highest quality legal representation.',
        },
        {
            icon: <FaUsers className="text-3xl" />,
            title: 'Client Focus',
            description: 'Our clients are at the heart of everything we do. We prioritize their needs and goals.',
        },
        {
            icon: <FaBullseye className="text-3xl" />,
            title: 'Strategic Approach',
            description: 'We combine legal expertise with strategic thinking to achieve optimal outcomes.',
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: 'Accessibility',
            description: 'With offices in Hyderabad and Vijayawada, we are accessible to clients across India.',
        },
    ];

    return (
        <div className="w-full">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Khyathi Associates</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Dedicated to providing strategic and result-oriented legal solutions
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p>
                                Khyathi Associates is a legal association established with a vision to provide
                                comprehensive and strategic legal services across various domains. We are a group of
                                dedicated advocates focused on taking up and solving legal issues in Indian courts.
                            </p>
                            <p>
                                Our association brings together experienced legal professionals who specialize in
                                different areas of law, enabling us to offer a wide range of legal services to our
                                clients. We combine traditional legal expertise with modern technological
                                proficiency to deliver precise, outcome-driven solutions.
                            </p>
                            <p>
                                With a strong presence in Hyderabad and Vijayawada, we serve clients across India,
                                representing them in Supreme Court, High Courts, and various tribunals including
                                NCLT/NCLAT. Our team is committed to providing strategic and result-oriented legal
                                representation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            To provide exceptional legal services that combine strategic thinking, legal expertise,
                            and client-focused solutions. We aim to:
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-3 font-bold">•</span>
                                <span>
                                    Deliver strategic and result-oriented legal representation across all practice
                                    areas
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-3 font-bold">•</span>
                                <span>
                                    Provide comprehensive legal solutions that address complex legal challenges
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-3 font-bold">•</span>
                                <span>
                                    Maintain the highest standards of professionalism and ethical practice
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-400 mr-3 font-bold">•</span>
                                <span>
                                    Build long-term relationships with clients based on trust and excellence
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center"
                            >
                                <div className="text-amber-400 mb-4 flex justify-center">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practice Areas Overview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Expertise</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Litigation & Advocacy</h3>
                            <p className="text-gray-300">
                                High-stakes litigation in Supreme Court, High Courts, and lower courts
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Corporate Law</h3>
                            <p className="text-gray-300">
                                Corporate governance, NCLT proceedings, and regulatory compliance
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Cyber Law</h3>
                            <p className="text-gray-300">
                                Cyber laws, digital evidence, and data protection compliance
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Dispute Resolution</h3>
                            <p className="text-gray-300">
                                Arbitration, mediation, and alternative dispute resolution
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Environmental Law</h3>
                            <p className="text-gray-300">
                                Environmental compliance, land-use violations, and public interest litigation
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Public Law</h3>
                            <p className="text-gray-300">
                                Public welfare, land rights, and policy advocacy
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

