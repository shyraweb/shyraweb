import { ROUTES } from "@/constants/Routes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 max-w-[80%] border-t-4 flex justify-center items-center mx-auto mt-10">
      <div className="flex items-center justify-between gap-4 w-full text-[12px] sm:text-[14px]">
        <span>© 2025 SiRa AI. All rights reserved.</span>
        <div className="flex gap-4">
          <Link
            href={ROUTES.terms}
            className="text-sm text-[#5b5b5b] hover:text-black"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <a
            href={ROUTES.sitemap}
            className="text-sm text-[#5b5b5b] hover:text-black"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
