export const ProjectSection = () => {
  return (
    <section id="projects" className="text-center pb-48">
      <h1 className="title">Projects</h1>
      <hr className="line"></hr>
      <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-1 gap-6">
        <div className="project-item">
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
            AskMe Website is a website where you can ask your friends with just
            1 link, and your friends can answer it from the link, then you can
            view the answer in a page where you can screenshoot it and upload it
            to social media stories.
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
            src="./learning-ejs.png"
            className="aspect-auto mx-auto mb-5"
          ></img>
          <h1 className="project-title">EJS Simple Auth</h1>
          <div className="project-stacks">
            <h1>EJS (Embedded JS)</h1>
            <h1>ExpressJS</h1>
            <h1>MongoDB</h1>
          </div>
          <h1 className="project-description">
            EJS Simple Auth, simple like its name, i made this website when i
            just found out javascript language, so i wanna make a little
            project. I do this with the help of my friend WillisRH. Thank you
            bro 🤝.
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
      </div>
    </section>
  );
};
