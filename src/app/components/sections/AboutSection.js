import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="section flex items-center justify-center flex-col gap-10">
      <h2 className="section-title">About Me</h2>
      <div className="container-page grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/me.png"
            alt="Aman Verma"
            className="rounded-full h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 object-cover shadow-lg"
            width={320}
            height={320}
            sizes="(min-width: 768px) 320px, 80vw"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mt-2 md:mt-0">
            Hello, I&apos;m Aman!
          </h3>
          <p className="section-body">
            I&apos;ve been building for the web since I was 12. What started with HTML and CSS is now full-stack projects with React, Next.js, Node.js, and MongoDB.
          </p>
          <p className="section-body">
            My focus is building things that solve real problems - not tutorial reproductions. Currently in 11th grade (PCM) and targeting CS at top universities for 2028.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
