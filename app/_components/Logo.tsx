import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/logo-light.webp";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        src={logo}
        alt="Rauha logo"
        priority
        className="rounded-full"
        height="60"
        width="60"
        quality={100}
      />
      <span className="text-xl font-semibold text-primary-100">Rauha</span>
    </Link>
  );
}

export default Logo
