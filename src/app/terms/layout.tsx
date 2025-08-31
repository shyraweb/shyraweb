import { Metadata } from "next";
import HeaderSection from "@/components/Navigation/HeaderSection";
import Footer from "@/components/Navigation/Footer";

export const metadata: Metadata = {
  title: "Terms and policies | ShyRa Web | Free Website Builder | No Code | website templates",
  description:
    "Review the terms of service, privacy policy, and other legal agreements for using ShyRa Web's free website builder. Understand your rights and responsibilities when using our no-code platform and website templates.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <HeaderSection />
      {children}
      <Footer />
    </main>
  );
}
