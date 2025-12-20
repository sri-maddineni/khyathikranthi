'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface GalleryProps {
    images: string[];
    altPrefix?: string;
}

export default function Gallery({ images, altPrefix = 'Gallery image' }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
        }
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
            } else if (e.key === 'ArrowRight') {
                setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
            }
        };

        if (selectedIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [selectedIndex, images.length]);

    // Touch/swipe support
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && selectedIndex !== null) {
            setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
        }
        if (isRightSwipe && selectedIndex !== null) {
            setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
        }
    };

    return (
        <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((imageName, index) => (
                    <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={`/images/gallery/${imageName}`}
                            alt={`${altPrefix} ${index + 1} - Advocate Kranthi Naidu Boya`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200"></div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeModal}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10 p-2"
                        aria-label="Close gallery"
                    >
                        <FaTimes className="text-3xl" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 p-3 bg-black/50 rounded-full hover:bg-black/70"
                        aria-label="Previous image"
                    >
                        <FaChevronLeft className="text-2xl" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 p-3 bg-black/50 rounded-full hover:bg-black/70"
                        aria-label="Next image"
                    >
                        <FaChevronRight className="text-2xl" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold z-10 bg-black/50 px-4 py-2 rounded-full">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                        <Image
                            src={`/images/gallery/${images[selectedIndex]}`}
                            alt={`${altPrefix} ${selectedIndex + 1} - Advocate Kranthi Naidu Boya`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    );
}

