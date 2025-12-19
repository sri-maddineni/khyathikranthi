import Link from 'next/link';
import { Metadata } from 'next';
import Statistics from '@/components/Statistics';
import { FaGavel, FaBalanceScale, FaHandshake, FaShieldAlt, FaTrophy, FaUsers, FaSmile, FaPhone } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Home - Expert Legal Services | Khyathi Associates",
  description: "Khyathi Associates - Expert legal representation in civil, criminal, corporate, and public law matters. 1100+ successful cases, 23+ expert advocates. Offices across India. Contact us for legal consultation.",
  keywords: "legal services, law firm, advocates, lawyers, legal consultation, Supreme Court, High Court, NCLT, civil litigation, criminal law, corporate law",
  openGraph: {
    title: "Khyathi Associates - Expert Legal Services",
    description: "Expert legal representation in civil, criminal, corporate, and public law matters. 1100+ successful cases.",
    url: "https://khyathiassociates.com",
  },
};

export default function Home() {
  const features = [
    {
      icon: <FaGavel className="text-4xl" />,
      title: 'Expert Litigation',
      description: 'Strategic representation in Supreme Court, High Courts, and lower courts across India.',
    },
    {
      icon: <FaBalanceScale className="text-4xl" />,
      title: 'Corporate Law',
      description: 'Comprehensive corporate governance, NCLT proceedings, and regulatory compliance.',
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Dispute Resolution',
      description: 'Arbitration, mediation, and negotiation for efficient conflict resolution.',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Cyber Law & Forensics',
      description: 'Specialized expertise in cyber laws, digital evidence, and data protection compliance.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* <div className="flex justify-center mb-6">
              <Image
                src="/images/khyathi.png"
                alt="Khyathi Associates Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Khyathi Associates
            </h1>
            <p className="text-xl sm:text-2xl text-amber-400 mb-4 font-semibold">
              Legal Excellence | Strategic Solutions
            </p>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              A group of advocates focused on taking up and solving legal issues in Indian courts.
              We provide strategic and result-oriented legal solutions across civil, criminal,
              corporate, and public law matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cases"
                className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg"
              >
                Our Practice Areas
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Track Record
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results and trusted expertise in delivering successful legal outcomes
            </p>
          </div>
          <Statistics
            stats={[
              {
                icon: <FaGavel className="text-4xl lg:text-5xl" />,
                value: 455,
                suffix: '+',
                label: 'Expert Attorneys Cases',
              },
              {
                icon: <FaTrophy className="text-4xl lg:text-5xl" />,
                value: 1100,
                suffix: '+',
                label: 'Successful Cases',
              },
              {
                icon: <FaUsers className="text-4xl lg:text-5xl" />,
                value: 23,
                suffix: '+',
                label: 'Expert Advocates',
              },
              {
                icon: <FaSmile className="text-4xl lg:text-5xl" />,
                value: 955,
                suffix: '+',
                label: 'Happy Clients',
              },
            ]}
          />
          <div className="mt-12 text-center">
            <Link
              href="/cases"
              className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg"
            >
              Explore Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              About Khyathi Associates
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Khyathi Associates is a legal association established with a commitment to providing
              comprehensive legal services across various domains. We are a group of dedicated
              advocates focused on taking up and solving legal issues in Indian courts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our team specializes in high-stakes litigation, arbitration, contract negotiation,
              regulatory compliance, and multi-jurisdictional advisory. We combine legal expertise
              with technological proficiency to deliver precise, outcome-driven solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With offices in New Delhi, Hyderabad, Amaravati, Mumbai, Kolkata, Kochi, Chennai, Dispur (Assam), Lucknow, Bengaluru, and Bhopal, we serve clients across India, representing
              them in Supreme Court, High Courts, and various tribunals including NCLT/NCLAT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg text-center"
              >
                Learn More About Us
              </Link>
              <a
                href="tel:+919963820823"
                className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200 shadow-lg text-center inline-flex items-center justify-center space-x-2"
              >
                <FaPhone />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine legal expertise with strategic thinking to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center"
              >
                <div className="text-amber-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/profile"
              className="text-amber-600 hover:text-amber-700 font-semibold text-lg inline-flex items-center"
            >
              Meet Our Expert Advocate →
            </Link>
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
            Contact us today for expert legal consultation and representation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-200 shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
