import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center my-5">
      <Image width={129} height={40} src="/Logo.png" alt="Image logo" />
      <p className="text-xs font-light text-slate-500">
        © 2024 LivroSaaS. Todos os direitos reservados.
      </p>
    </footer>
  );
}
