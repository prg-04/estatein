import Image from "next/image";
import NavBar from "../components/NavBar";
import { Home, About, Contact, Properties, Services } from "./(navigations)";

export default function Page() {
  return (
    <main className="container mx-8 px-4 py-8 md:px-8 lg:px-16">
      <Home />
    </main>
  );
}
