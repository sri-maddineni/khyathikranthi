'use client';

import { useEffect, useRef, useState } from 'react';
// import { FaGavel, FaTrophy, FaUsers, FaSmile } from 'react-icons/fa';

interface StatItem {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
}

interface StatisticsProps {
    stats: StatItem[];
}

export default function Statistics({ stats }: StatisticsProps) {
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasAnimated]);

    const animateCounters = () => {
        stats.forEach((stat, index) => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = stat.value;
                        return newCounts;
                    });
                    clearInterval(timer);
                } else {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.floor(current);
                        return newCounts;
                    });
                }
            }, duration / steps);
        });
    };

    return (
        <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center"
                >
                    <div className="text-amber-400 mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                        {counts[index].toLocaleString()}
                        {stat.suffix}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}

