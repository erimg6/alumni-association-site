"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { externalLinks, heroImages } from "@/lib/site-content";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 9000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-shell" aria-label="PMD Mu Sigma Alumni Association introduction">
      <div className="hero-media" aria-hidden="true">
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={index === activeIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Alumni. Impact. Brotherhood.</p>
        <h1>PMD Mu Sigma Alumni Association</h1>
        <p>
          A durable alumni network supporting chapter sustainability, service, scholarship, and lifelong connection.
        </p>
        <div className="button-row">
          <Link className="button primary" href="/impact-fund">
            Support the Impact Fund
          </Link>
          <a className="button secondary on-dark" href={externalLinks.alumniNetwork}>
            TODO: Join the Alumni Network
          </a>
        </div>
      </div>
      <div className="hero-dots" aria-label="Hero slide controls">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            className={index === activeIndex ? "active" : ""}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
