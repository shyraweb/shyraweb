import dynamic from "next/dynamic";

const HeaderSection = dynamic(
  () => import("@/components/Navigation/HeaderSection")
);
const HeroSection = dynamic(
  () => import("@/components/HeroSection/HeroSection")
);
const WebsiteFlow = dynamic(
  () => import("@/components/LandingPage/WebsiteFlow")
);
// const Templates = dynamic(() => import("@/components/Templates/Templates"));
const FAQWrapper = dynamic(() => import("@/components/FAQ/FAQWrapper"));
const CallToAction = dynamic(
  () => import("@/components/LandingPage/CallToAction")
);
const Footer = dynamic(() => import("@/components/Navigation/Footer"));

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 font-inter">
      <HeaderSection />
      <HeroSection />
      <WebsiteFlow />
      {/* <Templates /> */}
      <FAQWrapper />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
