"use client";

import Link from "next/link";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/" className="btn-md-orange px-3 text-white hover:bg-grey mt-5">
      {children}
    </Link>
  );
}
