"use client";
import React from "react";
import dynamic from "next/dynamic";

const HeaderSection = dynamic(
  () => import("@/components/LandingPage/HeaderSection"),
  {
    ssr: false,
  }
);

const HeroSection = dynamic(
  () => import("@/components/LandingPage/HeroSection"),
  {
    ssr: false,
  }
);

const FeaturesSection = dynamic(
  () => import("@/components/LandingPage/FeaturesSection"),
  {
    ssr: false,
  }
);

import Footer from "./Footer";
import FAQ from "./FAQ";
import Templates from "./Templates";
import CallToAction from "./CallToAction";
import WebsiteFlow from "./WebsiteFlow";
import Streamline from "./Streamline";
import { InfiniteMovingCardsDemo } from "./TemplatesWrapper";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 font-inter">
      <HeaderSection />
      <HeroSection />
      <WebsiteFlow />
      <InfiniteMovingCardsDemo />
      <Streamline />
      <FeaturesSection />
      <Templates />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
