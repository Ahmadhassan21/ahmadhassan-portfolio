'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I turn ideas into fast, reliable web applications and
                    revenue-focused eCommerce stores that load quickly, feel
                    great to use, and convert.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About Me
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Ahmad Hassan.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a MERN Stack Developer and Shopify
                                Expert with 1.5 years of hands-on experience. I
                                focus on building secure, well-structured
                                backends and Shopify experiences that help
                                businesses convert more visitors into customers.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Comfortable working end-to-end — from
                                interpreting Figma designs to deploying and
                                iterating on live products. I collaborate closely
                                with stakeholders and use real user feedback to
                                keep improving results.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I don&apos;t just write code — I solve problems,
                                meet deadlines, and build things that actually
                                work in the real world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
