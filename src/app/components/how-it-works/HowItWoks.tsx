import { forwardRef } from "react";
import Explains from "./explains";

export default function HowItWorks() {
  return (
    <section
      id="howItsWorks"
      className="como-funciona flex flex-col justify-center items-center min-h-screen py-1"
    >
      <h1 className="text-[40px] font-bold">Como funciona?</h1>
      <Explains />
    </section>
  );
}

/* 
const HowItWorks = forwardRef<HTMLElement>((prop, ref) => {
  return (
    <section
      ref={ref}
      id="howItsWorks"
      className="como-funciona flex flex-col justify-center items-center min-h-screen py-1"
    >
      <h1 className="text-[40px] font-bold">Como funciona?</h1>
      <Explains />
    </section>
  );
});
export default HowItWorks;
 */
