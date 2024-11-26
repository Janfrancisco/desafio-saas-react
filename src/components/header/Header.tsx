"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function Header() {
  const [isMobileMenuOpened, setIsMobileOpened] = useState(false);

  // to avoid the scrolling top bug
  const Drawer = dynamic(() => import("../ui/wrapper-drawer"), {
    ssr: false,
  });

  function toggleMobileMenu() {
    setIsMobileOpened((state) => !state);
  }

  return (
    <header className="flex py-5 px-11">
      <nav className="flex justify-between items-center w-full h-10">
        <div className="logo cursor-pointer">
          {/* <img src="/Logo.png" alt="" /> */}
          <Image width={129} height={40} src="/Logo.png" alt="Image logo" />
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-8">
            <li>
              <Link href={"#howItsWorks"}>Funcionamento</Link>
            </li>
            <li>
              <Link href={"#price"}>Preço</Link>
            </li>
            <li>
              <a id="login" className="text-black hover:text-gray-600" href="*">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="toggle-btn block sm:hidden cursor-pointer">
          <div className="flex justify-center">
            <Drawer
              isMobileMenuOpened={isMobileMenuOpened}
              toggleMobileMenu={toggleMobileMenu}
            ></Drawer>
          </div>
        </div>
      </nav>
    </header>
  );
}
