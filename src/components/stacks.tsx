export const StacksSection = () => {
  return (
    <section id="stacks" className="text-center pb-64">
      <h1 className="title">Tech Stacks</h1>
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
      </div>
      <h1 className="text-xl dark:text-neutral-400 mt-5">
        I&apos;ll learn more stacks soon
      </h1>
    </section>
  );
};
