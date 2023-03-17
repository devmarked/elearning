"use client";

import Image from "next/image";
import styles from "./page.module.css";
import type { NextPage } from "next";
import Hero from "./components/Hero";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";
import Download from "./components/Download";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.fullLanding}>
      <Hero />
      <Courses />
      <CTA />
      <HowItWork />
      <Download />
      <Feedback />
      <Blog />
      <Footer />
    </div>
  );
}
