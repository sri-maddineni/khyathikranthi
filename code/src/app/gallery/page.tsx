import { Metadata } from 'next';
import GalleryComponent from '@/components/Gallery';

export const metadata: Metadata = {
    title: "Gallery - Advocate Kranthi Naidu Boya | Khyathi Associates",
    description: "Gallery showcasing moments from professional engagements, court appearances, and community initiatives of Advocate Kranthi Naidu Boya.",
    keywords: "gallery, advocate gallery, legal events, court appearances, community initiatives, Kranthi Naidu Boya",
    openGraph: {
        title: "Gallery - Advocate Kranthi Naidu Boya",
        description: "Moments from professional engagements, court appearances, and community initiatives",
        url: "https://khyathiassociates.com/gallery",
    },
};

export default function Gallery() {
    const galleryImages = [
        '1 president.jpg',
        '2 cji gradutation.jpg',
        '3.jpg',
        '4 priyanka.jpg',
        '44 img.jpg',
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
        '16 img.jpg',
        '17 img.jpg',
        '18 img.jpg'
    ];

    return (
        <div className="w-full">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Moments from professional engagements, court appearances, and community initiatives
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <GalleryComponent images={galleryImages} altPrefix="Gallery image" />
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Gallery</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        This gallery showcases various professional engagements, court appearances, meetings with dignitaries,
                        community initiatives, and significant moments in the legal career of Advocate Kranthi Naidu Boya,
                        Managing Director of Khyathi Associates.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        These images reflect our commitment to legal excellence, community service, and active participation
                        in important legal and social causes.
                    </p>
                </div>
            </section>
        </div>
    );
}

