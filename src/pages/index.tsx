import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HomeSection } from "@/components/home";
import { AboutSection } from "@/components/about";
import { StacksSection } from "@/components/stacks";
import { ProjectSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";
import HistorySection from "@/components/history";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`maxw-screen transition-all`}>
        <div className="dark:bg-zinc-900 bg-white px-5 xl:px-52 text-zinc-900 dark:text-neutral-100 transition-all">
          <ThemeSwitcher />
          <HomeSection />
          <AboutSection />
          <StacksSection />
          <ProjectSection />
          <HistorySection />
          <ContactSection />
        </div>
        <footer className="bottom-0 fixed font-bold p-5 dark:text-white font-ubuntu_sans">
          Copyright Mvfflin &copy; 2025
        </footer>
      </main>
    </>
  );
}
