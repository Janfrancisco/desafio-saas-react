export default function CTA() {
  return (
    <section className="final flex flex-col justify-center items-center min-h-screen gap-8 text-center">
      <h1 className="text-[46px] sm:text-[56px] font-bold">
        Pronto Para Mudar Sua Vida?
      </h1>
      <p className="text-slate-500 text-lg font-light">
        Faça como milhares de outras pessoas. Assine nosso produto e<br />
        tenha garantido seus estudos
      </p>
      <div className="cta">
        <button
          type="button"
          className="border rounded-lg bg-black text-white p-2 border-none h-10 w-[320px] text-sm ml-2"
        >
          Assine Agora
        </button>
        <p className="text-[0.65rem] text-slate-500 pt-2">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
