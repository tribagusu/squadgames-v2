import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex mr-10">
      <Image
        src={logo}
        alt="squadgames logo"
        className="w-auto h-[25px] md:h-[35px]"
      />
    </Link>
  );
}
