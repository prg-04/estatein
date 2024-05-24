import Image from "next/image";
import NavBar from "../components/NavBar";
import { Home, About, Contact, Properties, Services } from "./(navigations)";

export default function Page() {
  return (
    <main className="">
      <Home />
    </main>
  );
}
