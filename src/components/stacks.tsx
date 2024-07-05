export const StacksSection = () => {
  return (
    <section id="stacks" className="text-center py-64">
      <h1 className="title font-ubuntu_sans">
        <span className="font-logo">Ø</span> Tech Stacks
      </h1>
      <hr className="line"></hr>
      <div className="grid grid-cols-1 lg:flex lg:text-center lg:justify-center gap-10">
        <a href="https://react.dev" target="_blank" className="mx-auto lg:m-0">
          <img
            src="./react.png"
            alt="React logo"
            className="w-[100px] h-[100px]"
          />
        </a>
        <a
          href="https://expressjs.com"
          target="_blank"
          className="mx-auto lg:m-0"
        >
          <img
            src="./express.webp"
            alt="ExpressJS logo"
            className=" h-[100px]"
          />
        </a>
        <a
          href="https://mongodb.com"
          target="_blank"
          className="mx-auto lg:m-0"
        >
          <img
            src="./mongodb.png"
            alt="MongoDB logo"
            className="w-[100px] h-[100px]"
          />
        </a>
        <a href="https://nextjs.org" target="_blank" className="mx-auto lg:m-0">
          <img
            id="nextjs"
            src="./nextjs.png"
            alt="NextJS logo"
            className="w-[100px] h-[100px] object-cover"
          />
        </a>
        <a href="https://nextjs.org" target="_blank" className="mx-auto lg:m-0">
          <img
            id="nextjs"
            src="https://media.discordapp.net/attachments/866552863264997376/1258774294578855936/java.png?ex=6689446a&is=6687f2ea&hm=b22e6ef90bd287f9d437d2586587f8e9afc7be7821f80702b43b5441d5b9852b&=&format=webp&quality=lossless"
            alt="NextJS logo"
            className="w-[100px] h-[100px] object-cover"
          />
        </a>
        <a href="https://nextjs.org" target="_blank" className="mx-auto lg:m-0">
          <img
            id="nextjs"
            src="https://media.discordapp.net/attachments/866552863264997376/1258776418687516704/mysql.png?ex=66894665&is=6687f4e5&hm=915e7c56893c257948c7f4ae4fc6c970474ed6ade04d11558c43be329e174ee4&=&format=webp&quality=lossless&width=661&height=661"
            alt="NextJS logo"
            className="w-[100px] h-[100px] object-cover"
          />
        </a>
      </div>
      <h1 className="text-xl dark:text-neutral-400 mt-5 font-helvetica">
        I&apos;ll learn more stacks soon
      </h1>
    </section>
  );
};
