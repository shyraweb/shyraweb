import { Metadata } from "next";
import HeaderSection from "@/components/Navigation/HeaderSection";
import Footer from "@/components/Navigation/Footer";

export const metadata: Metadata = {
  title: "Contact Me | Khushbu Asati",
  description:
    "Get in touch with Khushbu Asati for collaboration, freelance opportunities, or just to say hello. Fill out the contact form or connect on social media.",
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
