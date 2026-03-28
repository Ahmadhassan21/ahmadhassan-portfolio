'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROLES = ['MERN STACK DEV', 'SHOPIFY EXPERT', 'FULL STACK DEV'];

const STATS = [
    { value: '1.5+', label: 'Years of Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '30+', label: 'Shopify Stores' },
];

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    /* Typewriter effect cycling through ROLES */
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayText.length < currentRole.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
            }, 80);
        } else if (!isDeleting && displayText.length === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
            }, 45);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    /* Staggered entrance animation */
    useGSAP(
        () => {
            const tl = gsap.timeline({ delay: 0.2 });
            tl.fromTo('.banner-greeting', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
                .fromTo('.banner-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
                .fromTo('.banner-role', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
                .fromTo('.banner-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
                .fromTo('.banner-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
                .fromTo('.banner-stat', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out' }, '-=0.2');
        },
        { scope: containerRef },
    );

    /* Scroll-out parallax */
    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: { trigger: containerRef.current, start: 'bottom 70%', end: 'bottom 10%', scrub: 1 },
            }).fromTo('.slide-up-and-fade', { y: 0, opacity: 1 }, { y: -150, opacity: 0, stagger: 0.02 });
        },
        { scope: containerRef },
    );

    /* Smooth scroll to a section by id */
    const scrollTo = (id: string) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[580px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[680px] lg:max-w-[750px]">
                    <div className="banner-greeting slide-up-and-fade flex items-center gap-2 mb-4">
                        <span className="w-8 h-[2px] bg-primary inline-block" />
                        <span className="text-sm text-muted-foreground tracking-widest uppercase">
                            Hello, I&apos;m Ahmad Hassan
                        </span>
                    </div>

                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-anton">
                        <span className="text-primary">MERN STACK &amp;</span>
                        <br />
                        <span className="italic text-muted-foreground">Shopify Expert</span>
                    </h1>

                    <div className="banner-role slide-up-and-fade mt-5 flex items-center gap-2 h-8">
                        <span className="text-primary font-mono text-base sm:text-lg font-semibold">
                            {displayText}
                        </span>
                        <span className="w-[2px] h-5 bg-primary animate-pulse inline-block" />
                    </div>

                    <p className="banner-description slide-up-and-fade mt-4 text-base sm:text-lg text-muted-foreground max-w-[580px] lg:max-w-[640px]">
                        I build fast, reliable web applications with{' '}
                        <span className="text-foreground font-medium">MongoDB, Express, React &amp; Node.js</span>
                        {' '}— and craft high-converting{' '}
                        <span className="text-foreground font-medium">Shopify stores</span>
                        {' '}that help businesses convert more visitors into customers.
                    </p>

                    {/* CTA buttons */}
                    <div className="banner-buttons slide-up-and-fade mt-9 flex gap-4 flex-wrap">
                        <Button as="link" href="/#selected-projects" variant="primary" className="min-w-[140px]">
                            View Projects
                        </Button>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-foreground text-background hover:bg-foreground/80 min-w-[140px]"
                        >
                            <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                            <span className="z-[1]">Contact Me</span>
                        </button>
                    </div>
                </div>

                {/* Stats column */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    {STATS.map((stat, i) => (
                        <div key={i} className="banner-stat slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">{stat.value}</h5>
                            <p className="text-muted-foreground text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
