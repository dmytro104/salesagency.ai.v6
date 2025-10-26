import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/logo_light.svg"
      alt="SalesAgency.ai"
      width={230}
      height={30}
      className="h-7 w-auto block dark:hidden"
      priority
    />
    <Image
      src="/logo_dark.svg"
      alt="SalesAgency.ai"
      width={230}
      height={30}
      className="h-7 w-auto hidden dark:block"
      priority
    />
  </Link>
);
