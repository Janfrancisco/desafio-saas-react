import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import Image from "next/image";
import Link from "next/link";

interface WrapperDrawerProps {
  isMobileMenuOpened: boolean;
  toggleMobileMenu(): void;
}
export default function WrapperDrawer({ ...props }: WrapperDrawerProps) {
  return (
    <Drawer
      open={props.isMobileMenuOpened}
      direction="left"
      disablePreventScroll={true}
      noBodyStyles={true}
    >
      <DrawerTrigger onClick={props.toggleMobileMenu}>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle>
              <Image width={129} height={40} src="/Logo.png" alt="Image logo" />
            </DrawerTitle>
            <X
              size={30}
              className="cursor-pointer text-zinc-400"
              onClick={props.toggleMobileMenu}
            />
          </div>
        </DrawerHeader>
        <div className="flex flex-col h-full items-center justify-center">
          <li className="flex justify-center items-center pb-3">
            <Link
              onClick={props.toggleMobileMenu}
              className="text-2xl text-zinc-400"
              href={"#howItsWorks"}
            >
              Funcionamento
            </Link>
          </li>
          <li className="flex justify-center items-center pb-3">
            <Link
              onClick={props.toggleMobileMenu}
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
  );
}
