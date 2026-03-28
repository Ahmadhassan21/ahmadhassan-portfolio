'use client';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ICON_MAP: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
};

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 60%',
                    scrub: 0.5,
                },
            }).from('.contact-item', {
                y: 40,
                opacity: 0,
                stagger: 0.15,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="contact">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Get In Touch" />

                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-5">
                        <p className="contact-item text-4xl sm:text-5xl font-anton leading-tight">
                            Let&apos;s work
                            <br />
                            together.
                        </p>
                        <p className="contact-item text-muted-foreground mt-4 max-w-[400px]">
                            Have a project in mind or want to collaborate? Drop
                            me a message — I&apos;m always open to discussing
                            new opportunities.
                        </p>
                    </div>

                    <div className="md:col-span-7 flex flex-col gap-6">
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="contact-item group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all"
                        >
                            <div className="size-10 rounded-full bg-background-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Email
                                </p>
                                <p className="text-lg">{GENERAL_INFO.email}</p>
                            </div>
                        </a>

                        <a
                            href={`tel:${GENERAL_INFO.phone}`}
                            className="contact-item group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition-all"
                        >
                            <div className="size-10 rounded-full bg-background-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Phone
                                </p>
                                <p className="text-lg">{GENERAL_INFO.phone}</p>
                            </div>
                        </a>

                        <div className="contact-item flex gap-4 mt-2">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-border hover:border-primary transition-all"
                                >
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                        {ICON_MAP[link.name]}
                                    </span>
                                    <span className="capitalize">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
