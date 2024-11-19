/*  */
"use client";

import { SquareMenu } from "lucide-react";
import { Drawer } from "vaul";

interface DrawerProps {
  links: string[];
}

export default function VaulDrawer({ links }: DrawerProps) {
  return (
    /*  <Drawer.Root direction="right">
      <Drawer.Trigger>
        <SquareMenu />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-zinc-800/90" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none w-full flex"
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="">
            <li className="flex justify-center items-center pb-3">
              <a
                href="javascript:onclick=scrollToElement('#howItsWorks')"
                className="text-xl text-white hover:text-gray-400"
              >
                Funcionamento
              </a>
            </li>
            <li className="flex justify-center items-center pb-3">
              <a
                href="javascript:onclick=scrollToElement('#price') "
                className="text-xl text-white hover:text-gray-400"
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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root> */
    <Drawer.Root direction="left">
      <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
        Open Drawer
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="left-0 top-0 bottom-0 fixed z-10 outline-none w-4/5 flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-800/90 h-full w-full grow p-5 flex flex-col">
            <div className="mx-auto h-full">
              <Drawer.Title className=""></Drawer.Title>

              <div className="flex flex-col h-full items-center justify-center">
                {links.map((l) => (
                  <li className="flex justify-center items-center pb-3">
                    <a
                      id={l === "Login" ? "login" : ""}
                      href="javascript:onclick=scrollToElement('#howItsWorks')"
                      // className=' text-xl text-white hover:text-gray-400'
                      className={`text-xl ${
                        l === "Login" ? "text-black" : "text-white"
                      }`}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
