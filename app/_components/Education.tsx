'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { GraduationCap } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 60%',
                    scrub: 0.5,
                },
            }).from('.education-item', {
                y: 60,
                opacity: 0,
                stagger: 0.2,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            }).to(containerRef.current, {
                y: -100,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />

                <div className="grid gap-10">
                    {MY_EDUCATION.map((item) => (
                        <div
                            key={item.degree}
                            className="education-item group relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                        >
                            <div className="absolute -left-[13px] top-0 size-6 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center">
                                <GraduationCap
                                    size={12}
                                    className="text-muted-foreground group-hover:text-primary transition-colors"
                                />
                            </div>
                            <p className="text-4xl sm:text-5xl font-anton leading-none mb-3">
                                {item.degree}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.institution}
                            </p>
                            {item.year && (
                                <p className="text-sm text-muted-foreground mt-1">
                                    {item.year}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
