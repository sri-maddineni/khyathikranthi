export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Khyathi Associates",
        "description": "A group of advocates focused on taking up and solving legal issues in Indian courts. Expert legal representation in civil, criminal, corporate, and public law matters.",
        "url": "https://khyathiassociates.com", // Update with your actual domain
        "logo": "https://khyathiassociates.com/images/khyathi.png",
        "image": "https://khyathiassociates.com/images/khyathi.png",
        "telephone": "+91-9963820823",
        "email": "bkranthinaidu@yahoo.com",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressLocality": ["New Delhi", "Hyderabad", "Amaravati", "Mumbai", "Kolkata", "Kochi", "Chennai", "Dispur", "Lucknow", "Bengaluru", "Bhopal"],
            "addressRegion": "India"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "serviceType": [
            "Civil Litigation",
            "Criminal Law",
            "Corporate Law",
            "Government Cases",
            "Public Law",
            "Arbitration",
            "Dispute Resolution",
            "Cyber Law",
            "Insolvency & Bankruptcy"
        ],
        "priceRange": "$$",
        "sameAs": [
            "https://twitter.com/kranthirebel5",
            "https://linkedin.com/in/kranthirebel5",
            "https://bkranthinaidu.github.io"
        ]
    };

    const lawyerSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kranthi Naidu Boya",
        "jobTitle": "Advocate",
        "worksFor": {
            "@type": "LegalService",
            "name": "Khyathi Associates"
        },
        "email": "bkranthinaidu@yahoo.com",
        "telephone": "+91-9963820823",
        "url": "https://khyathiassociates.com/profile",
        "sameAs": [
            "https://twitter.com/kranthirebel5",
            "https://bkranthinaidu.github.io"
        ],
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Degree",
                "name": "LL.B - Bachelor of Legislative Law"
            },
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Postgraduate Diploma",
                "name": "PGD in Cyber Laws & Cyber Forensics"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(lawyerSchema) }}
            />
        </>
    );
}

