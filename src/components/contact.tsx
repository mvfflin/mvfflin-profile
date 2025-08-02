export const ContactSection = () => {
  return (
    <section id="contact" className="text-center py-64">
      <h1 className="title font-ubuntu_sans">Contact Me</h1>
      <hr className="line"></hr>
      <h1 className="text-xl my-2 font-poppins">
        You can contact me to ask me something, maybe you want me to make you a
        website? I can do that, but i&apos;ll look for it first. And join my
        discord okay? :D
      </h1>
      <h1 className="text-2xl font-poppins">
        IG : @mvfflinn_ | Discord : mvfflin | Email : mynameisfatihul@gmail.com
      </h1>
      <div className="flex justify-center mt-12 gap-10 text-5xl font-logo">
        <a
          href="https://github.com/mvfflin"
          target="_blank"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          {")"}
        </a>
        <a
          href="https://discord.gg/QqKAP9AfYA"
          target="_blank"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          Y
        </a>
        <a
          href="https://instagram.com/mvfflinn_"
          target="_blank"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          Q
        </a>
      </div>
      <h1 className="mt-12 text-xl font-typedry">
        <span className="font-logo">W</span> My current fav album
      </h1>
      <iframe
        style={{ borderRadius: 15 }}
        className="mx-auto mt-5"
        src="https://open.spotify.com/embed/album/2yNaksHgeMQM9Quse463b5?utm_source=generator&theme=0"
        width="50%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};
