"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Component, Menu, X } from "lucide-react";
import WrapperDrawer from "../ui/wrapper-drawer";

export default function Header() {
  const [isMobileMenuOpened, setIsMobileOpened] = useState(false);
  const [isAnimationEnded, setisAnimationEnded] = useState(false);
  const dropDownRef = useRef(null);

  function toggleMobileMenu() {
    dropDownRef.current?.classList?.toggle("open");
    document.body.classList?.toggle("overflow-hidden");

    setIsMobileOpened((state) => !state);
  }
  function clicked(status: boolean) {
    console.log("status");
    setisAnimationEnded(status);

    /* if (status) {
      console.log("Clicked! " + status);
    } else {
      console.log("qqqq");
      // window.scrollTo(0, 500);
    } */
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
          <Menu onClick={toggleMobileMenu} />
        </div>
      </nav>
      <div
        className="dropdown-menu absolute left-[-100%] top-0 right-0 w-full h-full bg-zinc-800/90 block duration-500"
        ref={dropDownRef}
      >
        <div className="close-btn flex w-full h-16 justify-end items-center pr-4">
          <X
            onClick={toggleMobileMenu}
            size={28}
            className="cursor-pointer text-slate-200 hover:text-slate-400"
          />
        </div>
        <div className="flex flex-col h-full items-center justify-center">
          <li
            className="flex justify-center items-center pb-3"
            onClick={toggleMobileMenu}
          >
            <a
              href="#howItsWorks"
              className="text-xl text-slate-200 hover:text-slate-400"
            >
              Funcionamento
            </a>
          </li>
          <li
            className="flex justify-center items-center pb-3"
            onClick={toggleMobileMenu}
          >
            <a
              href="#price"
              className="text-xl text-slate-200 hover:text-slate-400"
            >
              Preço
            </a>
          </li>
          <li className="flex justify-center items-center pb-3">
            <a id="login" href="*" className="text-xl">
              Login
            </a>
          </li>
        </div>
      </div>
    </header>
  );
}
