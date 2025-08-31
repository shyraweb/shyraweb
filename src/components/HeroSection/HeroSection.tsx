import dynamic from "next/dynamic";
import Image from "next/image";

const MainHeading = dynamic(
  () => import("@/components/HeroSection/MainHeading")
);
const StartButton = dynamic(
  () => import("@/components/SharedComponents/StartButton")
);

export default function HeroSection() {
  return (
    <section className="pb-16 md:pb-24 pt-48">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex w-full flex-row justify-center gap-20 max-w-7xl mb-16">
          <div className="flex flex-col gap-4">
            <MainHeading />
            <span className="text-sm md:text-lg text-gray-600 mb-6 max-w-2xl">
              Build your dream website, no coding needed. Simply choose a
              template and make it your own.
            </span>
            <StartButton />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/homepage.webp"
              alt="Hero Image"
              width={480}
              height={200}
              // sizes="(max-width: 768px) 100vw, 336px"
              // className="object-cover object-center rounded-[14px] shadow-md w-full"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
