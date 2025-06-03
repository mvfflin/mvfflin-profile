export const ProjectSection = () => {
  return (
    <section id="projects" className="text-center py-40">
      <div className="m-auto">
        <h1 className="title font-ubuntu_sans">Projects</h1>
        <hr className="line"></hr>
        <h2 className="text-xl dark:text-neutral-400 text-zinc-600 my-5 font-helvetica">
          Projects that im involved in, or i made myself. More projects soon...
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-1 gap-6">
          {/* <div className="project-item">
            <img
              src="./askme-website.png"
              className="aspect-auto mx-auto mb-5"
            ></img>
            <h1 className="project-title">AskMe Website</h1>
            <div className="project-stacks">
              <h1>React</h1>
              <h1>ExpressJS</h1>
              <h1>MongoDB</h1>
            </div>
            <h1 className="project-description">
              AskMe Website is a website where you can ask your friends with
              just 1 link, and your friends can answer it from the link, then
              you can view the answer in a page where you can screenshoot it and
              upload it to social media stories.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 text-lg gap-4">
              <a
                href="https://github.com/mvfflin/AskMe-React"
                className="btn-github"
              >
                Frontend Github
              </a>
              <a
                href="https://github.com/WillisRH/AskMeAPI"
                className="btn-github"
              >
                Backend Github
              </a>
              <a
                href="https://askme-react.vercel.app"
                target="_blank"
                className="btn-preview"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="project-item">
            <img src="./confess.png" className="aspect-auto mx-auto mb-5"></img>
            <h1 className="project-title">Menfess Website</h1>
            <div className="project-stacks">
              <h1>EJS (Embedded JS)</h1>
              <h1>ExpressJS</h1>
              <h1>MongoDB</h1>
            </div>
            <h1 className="project-description">
              Confess and post it to instagram! or so called &quot;Menfess&quot;
              by the peeps. A website where you can submit your confession in a
              form, after that the admin will approve it first from &quot;behind
              the scene&quot; and it will show up as an instagram post!
            </h1>
            <div className="grid grid-cols-1 text-lg gap-4">
              <a
                href="https://github.com/mvfflin/express-autopost-ig"
                target="_blank"
                className="btn-github"
              >
                Github
              </a>
            </div>
          </div>
          <div className="project-item">
            <img
              src="./quranweb.png"
              className="aspect-auto mx-auto mb-5"
            ></img>
            <h1 className="project-title">Simple Al-Qur&apos;an Website</h1>
            <div className="project-stacks">
              <h1>Next JS</h1>
              <h1>React</h1>
            </div>
            <h1 className="project-description">
              Simple Al-Qur&apos;an website, where you can read al-qur&apos;an
              here with a simple ui, and more update coming soon!
            </h1>
            <div className="grid grid-cols-1 text-lg gap-4">
              <a
                href="https://github.com/mvfflin/simple-quran"
                target="_blank"
                className="btn-github"
              >
                Github
              </a>
              <a
                href="https://alquran.mvffin.my.id"
                target="_blank"
                className="btn-preview"
              >
                Preview
              </a>
            </div>
          </div> */}
          <div className="project-item">
            <img src="./rttweb.png" className="aspect-auto mx-auto mb-5"></img>
            <h1 className="project-title">Rasa Tak Terbuang</h1>
            <div className="project-stacks">
              <h1>
                NextJS {"("}Web{")"},
              </h1>
              <h1>
                Expo App React Native {"("}App{")"}
              </h1>
            </div>
            <h1 className="project-description">
              Rasa Tak Terbuang is an application for my high school group
              project. It is focused on selling leftover products that can still
              be consumed with lower price {"(Prototype only)"}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 text-lg gap-4">
              <a
                href="https://github.com/mvfflin/web-rasa-tak-terbuang"
                target="_blank"
                className="btn-github"
              >
                Web Github
              </a>
              <a
                href="https://github.com/mvfflin/rasa-tak-terbuang-app"
                target="_blank"
                className="btn-github"
              >
                App Github
              </a>
              <a
                href="https://rasatakterbuang.mvffin.my.id"
                target="_blank"
                className="btn-preview"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
