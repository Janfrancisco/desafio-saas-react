export default function DropDownMenu() {
  return (
    <section className="dropdown">
      <div className="dropdown-menu absolute left-[-100%] top-0 right-0 w-4/5 h-full bg-zinc-800/90 block sm:hidden duration-500">
        <div className="close-btn">
          <i className="fa-solid fa-xmark text-gray-400 w-full py-1 px-6 text-3xl text-right cursor-pointer"></i>
        </div>

        <div className="flex flex-col h-full items-center justify-center">
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
      </div>
    </section>
  );
}
