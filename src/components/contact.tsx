export const ContactSection = () => {
  return (
    <section id="contact" className="text-center pb-64">
      <h1 className="title font-ubuntu_sans">Contact Me</h1>
      <hr className="line"></hr>
      <h1 className="text-xl my-2 font-poppins">
        Contact me for commissions, i will try my best to reach your
        expectations at building the best software you would ever imagine!
      </h1>
      <h1 className="mt-5 lg:mt-0 text-lg lg:text-2xl font-ubuntu_sans">
        <span className="font-logo">Q</span> @fthihsn_ // @mvfflinn_
        <br className="mt-5" />
        <span className="font-logo">Y</span> mvfflin
        <br className="my-5" />
        <span className="font-logo">k</span> mynameisfatihul@gmail.com
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
        <a
          href="mailto:mynameisfatihul@gmail.com"
          target="_blank"
          className="mx-auto lg:m-0 ring-link hover:scale-110 transition-all"
        >
          k
        </a>
      </div>
      <h1 className="mt-12 text-xl font-typedry">
        <span className="font-logo">W</span> my fav playlist
      </h1>
      <iframe
        style={{ borderRadius: 12 }}
        className="mx-auto mt-5"
        src="https://open.spotify.com/embed/playlist/0sgnhxfA0KtafLr7xVUUps?utm_source=generator"
        width="90%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <h1 className="mt-2 text-lg font-poppins italic">
        P.S. If you&apos;re a strokers too let me know, lets cover a song
        together, i will play the guitar.
      </h1>
    </section>
  );
};
