import { Check } from "lucide-react";
import Item from "./items";
import Image from "next/image";

export default function Explains() {
  return (
    <div className="explains flex flex-col sm:flex-row justify-center items-center sm:w-4/5 gap-4">
      <div className="image w-[46%]">
        <Image src="/woman.svg" width={392} height={392} alt="Woman image" />
      </div>
      <div className="text-explains flex flex-col text-slate-500 w-4/5 sm:w-1/2 gap-12">
        <Item text="Acesso a 1 ebook por mês"></Item>
        <Item text="Curadoria especia"></Item>
        <Item text="Cancelamento a qualquer momento"></Item>
      </div>
    </div>
  );
}
