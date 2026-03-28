'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experience" />

                <div className="grid gap-16">
                    {MY_EXPERIENCE.map((item) => (
                        <div
                            key={item.company}
                            className="experience-item grid md:grid-cols-12 gap-6"
                        >
                            <div className="md:col-span-4">
                                <a
                                    href={item.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                                >
                                    {item.company}
                                    <ExternalLink size={14} />
                                </a>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {item.duration}
                                </p>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-4xl sm:text-5xl font-anton leading-none mb-4">
                                    {item.title}
                                </p>
                                <ul className="space-y-2">
                                    {item.bullets.map((bullet, idx) => (
                                        <li
                                            key={idx}
                                            className="text-muted-foreground flex gap-3"
                                        >
                                            <span className="text-primary mt-1.5 shrink-0">
                                                ▸
                                            </span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
