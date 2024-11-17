import Image from "next/image";

export function PriceSection() {
  return (
    <section
      id="price"
      className="preco flex min-h-screen bg-[url('/background.png')] bg-cover"
    >
      <div className="info flex flex-col justify-center items-center text-center w-4/5 sm:w-3/5 pt-10 m-auto gap-8">
        <h1 className="text-[46px] sm:text-[56px] font-bold">
          Preço Simples e Transparente
        </h1>
        <p className="text-slate-500 text-lg font-light">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.
        </p>
        <Image src="/Plan Card.png" width={418} height={490} alt="Plan card" />
      </div>
    </section>
  );
}
