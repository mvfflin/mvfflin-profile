export const ContactSection = () => {
  return (
    <section id="contact" className="text-center pb-64">
      <h1 className="title font-ubuntu_sans">
        <span className="font-logo">m</span> Contact Me
      </h1>
      <hr className="line"></hr>
      <h1 className="text-xl my-2 font-poppins">
        You can contact me to ask me something, maybe you want me to make you a
        website? I can do that, but i&apos;ll look for it first. And join my
        discord okay? :D
      </h1>
      <h1 className="text-2xl font-poppins">
        IG : @mvfflinn_ | Discord : mvfflin | Email : mynameisfatihul@gmail.com
      </h1>
      <div className="grid grid-cols-1 lg:flex lg:justify-center mt-12 gap-10 text-5xl font-logo">
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
        <span className="font-logo">W</span> My fav playlist (currently)
      </h1>
      <iframe
        style={{ borderRadius: 15 }}
        src="https://open.spotify.com/embed/playlist/0QPF2Ddzj935zvXy7DtAJG?utm_source=generator&theme=0"
        width="50%"
        className="mx-auto mt-5"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};
