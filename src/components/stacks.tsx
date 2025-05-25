export const StacksSection = () => {
  const stacks = ["React", "NextJS", "TypeScript", "MongoDB", "Studying"];

  return (
    <section id="stacks" className="text-center flex py-40">
      <div className="m-auto">
        <h1 className="title font-ubuntu_sans">
          <span className="font-logo">Ø</span> Skills
        </h1>
        <hr className="line"></hr>
        <div className="grid grid-cols-1 lg:flex lg:text-center lg:justify-center gap-5">
          {stacks.map((stack, index) => {
            return (
              <div className="stack-item" key={index}>
                <h1>{stack}</h1>
              </div>
            );
          })}
        </div>
        <h1 className="text-xl dark:text-neutral-400 text-zinc-600 mt-5 font-helvetica">
          I&apos;ll learn more stacks soon
        </h1>
      </div>
    </section>
  );
};
