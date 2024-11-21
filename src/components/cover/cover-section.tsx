import Header from "../header/Header";
import Main from "./main-section";

export default function Cover() {
  return (
    <section className="cover min-h-screen bg-[url('/background.png')]">
      <Header></Header>
      <Main />
    </section>
  );
}
