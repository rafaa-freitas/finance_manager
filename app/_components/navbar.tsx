"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="./logo.svg" alt="Finance Manager" width={200} height={28} />
        <Link
          href="/"
          className={
            (pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground") + " pt-[6px]"
          }
        >
          Dashboard
        </Link>

        <Link
          href="/transactions"
          className={
            (pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground") + " pt-[6px]"
          }
        >
          Transações
        </Link>

        <Link
          href="/subscription"
          className={
            (pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground") + " pt-[6px]"
          }
        >
          Assinatura
        </Link>
      </div>

      <UserButton showName />
    </nav>
  );
}

export default Navbar;
