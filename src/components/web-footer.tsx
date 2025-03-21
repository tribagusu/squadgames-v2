import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../public/logo-white.png";
import { footerConfigData } from "../config/footer.config";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="space-y-6 pt-[3rem] lg:pt-[5rem] bg-[#8A40F5]">
      <div className="container flex flex-col lg:flex-row text-white pb-0 md:pb-[2rem]">
        <div className="mr-[5rem] mb-[2rem]">
          <Image src={logoWhite} alt="squadgames" className="w-[200px]" />
        </div>
        <div className="flex flex-col md:flex-row">
          {footerConfigData?.map((data, i) => (
            <div key={i} className="flex flex-col mr-[3rem] mb-[1rem]">
              <h4 className="mb-1 md:mb-3 font-extrabold">{data.title}</h4>
              {data?.items?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <Link
                    href={`${item.link}`}
                    target={`${item.blank ? "_blank" : "_self"}`}
                    className="hover:text-[#FFA313] md:mt-[3px]"
                  >
                    {item.name}{" "}
                    <span className="text-[#FFA313]">{item.add}</span>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container flex flex-col md:flex-row text-white border-t border-t-[#D9BCFF] py-[1rem]">
        <div className="flex gap-3 text-white text-3xl mr-[10rem] mb-[2rem]">
          <Link
            href="https://www.linkedin.com/company/peopleshift"
            target="_blank"
            className=""
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/squadgames.id"
            target="_blank"
            className=""
          >
            <AiFillInstagram />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="">
            <AiFillFacebook />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="">
            <AiFillYoutube />
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p>
            <strong>Operational office </strong>: Perum Timah Blok AA No. 54B,
            Tugu, Cimanggis, Kota Depok, Jawa Barat, 16451
          </p>
          <p>
            <strong>Head Office</strong> : Ruko Moscow Square Jl Gading Serpong
            Boulevard No. A6, Pakulonan Barat, Kelapa Dua, Tangerang - Banten,
            15810
          </p>
          <p>+62 821-1557-0991 (Puti)</p>
        </div>
      </div>
      <div className="text-center text-white bg-darkPurple2 py-4">
        &copy; Copyright 2025 PT Edukasi Talenta Indonesia.
      </div>
    </footer>
  );
}
