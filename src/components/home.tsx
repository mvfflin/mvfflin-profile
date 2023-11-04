export const HomeSection = () => {
  return (
    <section id="home" className="text-center h-screen pt-48">
      <h1 className="text-xl">Hi everyone! I'm</h1>
      <a href="https://github.com/mvfflin" target="_blank">
        <h1 className="text-5xl lg:text-7xl font-bold p-5 my-5 bg-zinc-900 dark:bg-white w-max mx-auto text-white dark:text-blue-900 rounded-md cursor-pointer hover:rotate-6 hover:scale-110 hover:shadow-md dark:hover:shadow-neutral-400 hover:shadow-zinc-800 transition-all dark:hover:text-blue-400">
          Mvfflin
        </h1>
      </a>
      <h1 className="text-2xl">pronounced muff-leen, my real name is fatih</h1>
      <h1 className="text-xl pt-2">
        Junior Fullstack - Minecraft server developer - Mini content creator
      </h1>
      <h1 className="text-xl pt-5">Scroll for more!</h1>
    </section>
  );
};
