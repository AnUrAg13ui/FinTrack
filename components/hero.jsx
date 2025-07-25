"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";


const HeroSection = () => {

    const imageRef = useRef();
    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);



  return (
    <div className="pb-20 px-4">
    <div className="container mx-auto text-center">
        <h1
        className="text-4xl md:text-6xl lg:text-[85px] pb-1 gradient-title">Manage Your Finances <br /> with Intelligence 
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        FinTrack is an AI-powered financial management tool designed to help you make informed decisions about your budget, investments, and expenses.
        </p>

        <div >
            <Link href="/dashboard">
            <Button size = "lg" className="px-8 cursor-pointer">
                Get Started
            </Button>
            </Link>
        </div>
        <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
                <Image src="/banner.jpeg" width={1100} height={720} alt="Dashboard preview"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
                />
            </div>
        </div>
        </div>
    </div>
  );
};

export default HeroSection;