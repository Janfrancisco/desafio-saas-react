export default function Main() {
  return (
    <main>
      <section className="hero flex flex-col gap-6 items-center w-5/6 sm:w-3/5 h-[calc(100%-70px)] m-auto text-center">
        <h1 className="text-[46px] sm:text-[56px] font-bold mt-14">
          Simplifique Seus Estudos
        </h1>
        <p className="text-slate-500 text-lg font-light">
          Deixe que nós fazemos a curadoria para você.Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
        <form action="" className="flex flex-col items-center my-4 w-full">
          <div className="subsc flex flex-col sm:flex-row gap-3">
            <input
              className="border border-x-slate-300 rounded-lg sm:w-60 w-72 pl-2 py-2 outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Coloque seu email"
            />
            <button
              type="button"
              className="border rounded-lg bg-black text-white p-2 border-none"
            >
              Assine Agora
            </button>
          </div>
          <p className="text-[0.65rem] text-slate-500 pt-2">
            Comece sua assinatura agora mesmo.Cancele quando quiser.
          </p>
        </form>
      </section>
    </main>
  );
}
