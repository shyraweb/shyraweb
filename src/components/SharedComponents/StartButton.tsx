import { ROUTES } from "@/constants/Routes";
import Link from "next/link";

export default function StartButton({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <Link
      href={ROUTES.editor}
      className={`btnBg w-fit rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 ${className}`}
      aria-label="ShyRa Web"
    >
      {title ?? "Get Started"}
    </Link>
  );
}
