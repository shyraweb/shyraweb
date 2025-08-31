import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { ROUTES } from "@/constants/Routes";
import Logo from "@/icons/Logo";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function LogoWrapper(props: {
  width?: string;
  height?: string;
  fontSizeClass?: string;
}) {
  return (
    <Link
      href={ROUTES.default}
      className={`cursor-pointer flex items-center ${dancingScript.className}`}
      aria-label="ShyRa web"
    >
      <Logo {...props} />
      <span className={`text-text-primary font-bold w-max ${props.fontSizeClass}`}>
        ShyRa Web
      </span>
    </Link>
  );
}
