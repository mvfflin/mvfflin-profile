export const ProjectSection = () => {
  return (
    <section id="projects" className="text-center py-40">
      <div className="m-auto">
        <h1 className="title font-ubuntu_sans">Projects</h1>
        <hr className="line"></hr>
        <h2 className="text-xl dark:text-neutral-400 text-zinc-600 my-5 font-helvetica">
          Projects that im involved in, or i made myself. More projects soon...
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-6">
          <div className="project-item">
            <img
              src="./muffin-forum.png"
              className="aspect-auto mx-auto mb-5"
            ></img>
            <h1 className="project-title">Muffin Forum</h1>
            <div className="project-stacks">
              <h1>NextJS</h1>
              <h1>TailwindCSS</h1>
              <h1>
                Supabase {"("}Maybe will change to MongoDB{")"}
              </h1>
            </div>
            <h1 className="project-description">
              Muffin Forum is a forum website where you can discuss about
              anything with everyone. Still in development state, not done yet.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 text-lg gap-4">
              <a
                href="https://github.com/mvfflin/muffin-forum"
                className="btn-github"
              >
                Github
              </a>
              <a
                href="https://muffin-forum-remake.vercel.app/"
                target="_blank"
                className="btn-preview"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
