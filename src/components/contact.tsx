export const ContactSection = () => {
  return (
    <section id="contact" className="text-center pb-64">
      <h1 className="title">Contact Me</h1>
      <hr className="line"></hr>
      <h1 className="text-xl my-2">
        You can contact me to ask me something, maybe you want me to make you a
        website? I can do that, but i'll look for it first. And join my discord
        okay? :D
      </h1>
      <h1 className="text-2xl">
        IG : @mvfflinn_ | Discord : mvfflin | Email : mynameisfatihul@gmail.com
      </h1>
      <div className="grid grid-cols-1 lg:flex lg:justify-center mt-12 gap-10">
        <a
          href="https://github.com/mvfflin"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          <img src="./githubwb.png" alt="Github Logo" className="rounded-lg" />
        </a>
        <a
          href="https://discord.gg/QqKAP9AfYA"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          <img
            src="./discordwb.png"
            alt="Discord Logo"
            className="rounded-lg"
          />
        </a>
        <a
          href="https://github.com/mvfflin"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          <img
            src="./instagram.png"
            alt="Instagram Logo"
            className="rounded-lg"
          />
        </a>
      </div>
      <h1 className="mt-12 text-xl">Join Muffin Co. Discord Server!</h1>
      <iframe
        src="https://discord.com/widget?id=875985392900382731&theme=dark"
        width="350"
        height="500"
        allowTransparency={true}
        className="mx-auto mt-5 rounded-lg lg:w-[500px] lg:h-[650px]"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </section>
  );
};
