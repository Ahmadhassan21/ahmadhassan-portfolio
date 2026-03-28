'use client';
import Button from '@/components/Button';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
    project: IProject;
}

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ delay: 0.3 });

            tl.fromTo(
                '.detail-hero',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            )
                .fromTo(
                    '.detail-meta',
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power3.out',
                    },
                    '-=0.3',
                )
                .fromTo(
                    '.detail-content',
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power3.out',
                    },
                    '-=0.2',
                );
        },
        { scope: containerRef },
    );

    return (
        <div className="min-h-screen pt-20 pb-section" ref={containerRef}>
            <div className="container max-w-4xl">
                <TransitionLink
                    href="/"
                    back
                    className="detail-hero inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </TransitionLink>

                <div className="detail-hero">
                    <p className="text-sm text-primary uppercase tracking-widest mb-3">
                        {project.role} · {project.year}
                    </p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-anton leading-[.95] mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        {project.tagline}
                    </p>
                </div>

                <div className="detail-meta flex flex-wrap gap-3 mb-10">
                    {project.liveUrl && (
                        <Button
                            as="link"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            className="!h-10 !text-sm"
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </Button>
                    )}
                    {project.sourceCode && (
                        <Button
                            as="link"
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="dark"
                            className="!h-10 !text-sm"
                        >
                            <Github size={14} />
                            Source Code
                        </Button>
                    )}
                </div>

                <div className="detail-meta flex flex-wrap gap-2 mb-12">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 text-sm rounded-full border border-border text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.images.length > 0 && (
                    <div className="detail-content mb-12">
                        <div className="grid gap-4">
                            {project.images.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    width={900}
                                    height={500}
                                    className="w-full rounded-lg object-cover"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="detail-content">
                    <h2 className="text-2xl font-anton mb-4">About This Project</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {project.bullets.length > 0 && (
                    <div className="detail-content">
                        <h2 className="text-2xl font-anton mb-4">Key Highlights</h2>
                        <ul className="space-y-3 mb-12">
                            {project.bullets.map((bullet, idx) => (
                                <li
                                    key={idx}
                                    className="text-muted-foreground flex gap-3"
                                >
                                    <span className="text-primary mt-0.5 shrink-0">
                                        ▸
                                    </span>
                                    <span className="text-lg">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="detail-content pt-8 border-t border-border">
                    <TransitionLink
                        href="/"
                        back
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to all projects
                    </TransitionLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
