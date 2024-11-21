"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function Header() {
  const [isMobileMenuOpened, setIsMobileOpened] = useState(false);

  function toggleMobileMenu() {
    setIsMobileOpened((state) => !state);
  }
  // const [count, setCount] = useState(0);
  /* async function increment(){
    setCount(a => a +1);
    console.log('fbsrjs');
    const t = await login();
    console.log(t.data);
    login().then((data)=>{
      console.log('data ' +data);
      
    }); 
  } */

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
            <Drawer open={isMobileMenuOpened} direction="left">
              <DrawerTrigger onClick={toggleMobileMenu}>
                <Menu />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="flex items-center justify-between">
                    <DrawerTitle>
                      <Image
                        width={129}
                        height={40}
                        src="/Logo.png"
                        alt="Image logo"
                      />
                    </DrawerTitle>
                    <X
                      size={30}
                      className="cursor-pointer text-zinc-400"
                      onClick={toggleMobileMenu}
                    />
                  </div>
                </DrawerHeader>
                <div className="flex flex-col h-full items-center justify-center">
                  <li className="flex justify-center items-center pb-3">
                    <Link
                      onClick={toggleMobileMenu}
                      className="text-2xl text-zinc-400"
                      href={"#howItsWorks"}
                    >
                      Funcionamento
                    </Link>
                  </li>
                  <li className="flex justify-center items-center pb-3">
                    <Link
                      onClick={toggleMobileMenu}
                      className="text-2xl text-zinc-400"
                      href={"#price"}
                    >
                      Preço
                    </Link>
                  </li>
                  <li className="flex justify-center items-center pb-3">
                    <a
                      id="login"
                      className="text-black hover:text-gray-600 text-2xl"
                      href="*"
                    >
                      Login
                    </a>
                  </li>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </header>
  );
}
