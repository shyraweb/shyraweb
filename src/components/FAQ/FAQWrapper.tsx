import dynamic from "next/dynamic";
const FAQList = dynamic(() => import("@/components/FAQ/FAQList"));

export default function FAQWrapper() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="md:w-1/2 text-left">
          <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s Answer to All <br className="hidden md:inline" /> Your
            Questions
          </h2>
          <p className="text-gray-600 text-base 2xl:text-lg mb-8">
            Find in-depth answers to common questions and gain a deeper
            understanding of our solution&apos;s features, functionality, and
            support.
          </p>
        </div>
        <FAQList />
      </div>
    </section>
  );
}
