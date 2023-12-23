"use client"

import BestMenu from "./components/BestMenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import NavBar from "./components/NavBar";
import SubMenu from "./components/SubMenu";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-[#FEBA44] to-[#FFE2C8] w-full h-fit">
      <NavBar />
      <MainMenu />
      <SubMenu />
      <BestMenu />
      <Contact />
      <Footer />
    </main>
  )
}
