"use client"

import {GreetingsBlock} from "@/app/pages/main/greetingsBlock";
import {ServicesBlock} from "@/app/pages/main/servicesBlock";
import {HelpSection} from "@/app/pages/main/helpSection";
import {WhyWeSection} from "@/app/pages/main/whyWeSection";
import {LastSection} from "@/app/pages/main/lastSection";
import {useEffect} from "react";
import { useBearStore } from "@/store/store";

export const MainSections = () => {
    const { setActiveSection } = useBearStore()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px', threshold: 0.5 }
        );

        // Начните отслеживание для каждой секции с использованием querySelector
        const sectionElements = document.querySelectorAll('section');

        sectionElements.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            // Перестать наблюдать за секциями при размонтировании
            sectionElements.forEach((section) => {
                observer.unobserve(section);
            });

            observer.disconnect()
        };
    }, [setActiveSection]);

    return (
        <>
            <GreetingsBlock/>
            <ServicesBlock/>
            <HelpSection/>
            <WhyWeSection/>
            <LastSection/>
        </>
    )
}