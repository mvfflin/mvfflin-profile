import Link from "next/link";

export const HomeSection = () => {
  return (
    <section id="home" className="text-center h-screen pt-48">
      <h1 className="text-xl font-ubuntu_sans">Hi everyone! I&apos;m</h1>
      <a
        href="https://github.com/mvfflin"
        target="_blank"
        className=" block font-heycomic text-5xl lg:text-7xl font-bold p-5 my-5 bg-zinc-900 dark:bg-white w-max mx-auto text-white dark:text-blue-900 rounded-md cursor-pointer hover:rotate-6 hover:scale-110 hover:shadow-md dark:hover:shadow-neutral-400 hover:shadow-zinc-800 transition-all dark:hover:text-blue-400"
      >
        Mvfflin
      </a>
      <h1 className="text-2xl font-poppins">Welcome to my portfolio!</h1>
      <div className="grid grid-rows-1 lg:grid-cols-3 w-max mx-auto gap-5 lg:gap-10 mb-10 my-5 font-ubuntu_sans">
        <h1 className="p-2 px-10 rounded-md shadow-md bg-slate-200 dark:bg-[#212933] ga1">
          Intermediate Fullstack
        </h1>
        <h1 className="p-2 px-10 rounded-md shadow-md bg-slate-200 dark:bg-[#212933] ga2">
          Minecraft server dev
        </h1>
        <h1 className="p-2 px-10 rounded-md shadow-md bg-slate-200 dark:bg-[#212933] ga3">
          Very small content creator
        </h1>
      </div>
      <Link
        href={"#about"}
        className="font-ubuntu_sans block w-max hover:shadow-md hover:shadow-red-500 dark:hover:shadow-blue-800 mx-auto p-2 px-10 rounded-md hover:scale-110 text-2xl active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]"
      >
        Learn More
      </Link>
    </section>
  );
};
