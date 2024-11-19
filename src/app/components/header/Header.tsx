"use client";
import { SquareMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VaulDrawer from "../ui/drawer";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { login} from './hooks/useLogin'

export default function Header() {
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
          <VaulDrawer links={["Funcionamento", "Preço", "Login"]} />
          <SquareMenu />
          {/* <VaulDrawer /> */}
        </div>
      </nav>
    </header>
  );
}
