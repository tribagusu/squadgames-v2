import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Hotline() {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center">
        <Link
          href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
          target="_blank"
          className="btn-md-orange"
        >
          <span className="text-white text-xl mr-2">
            <IoLogoWhatsapp />
          </span>
          WhatsApp Kami
        </Link>
      </div>
    </div>
  );
}
