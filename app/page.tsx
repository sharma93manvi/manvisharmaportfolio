"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import("./components/particles"), {
  ssr: false,
});

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-move pointer-events-none"></div>
      
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6 md:gap-8" style={{ gap: '1.5rem' }}>
          <li>
            <Link
              href="/about"
              className="text-base md:text-lg duration-500 text-zinc-500 hover:text-zinc-300 whitespace-nowrap"
            >
              About Me
            </Link>
          </li>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-base md:text-lg duration-500 text-zinc-500 hover:text-zinc-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Manvi Sharma
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-base md:text-lg text-zinc-500 ">
          Transforming data into insights, and insights into experiences.
        </h2>
      </div>
    </div>
  );
}
