import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section
      id="Home"
      className="flex flex-wrap justify-center max-w-[50rem] relative pt-36"
    >
      <h1 className="text-4xl font-medium leading-[1.5] text-center">
        <span className="font-bold">Hello, I'm Aryan</span>. I'm a{" "}
        <span className="font-bold">React Js developer</span> with{" "}
        <span className="font-bold">2.5 years</span> of experience. My focus is
        React Js/Ts.
      </h1>
      <div className="flex justify-center items-center gap-3 mt-5">
        <a
          className="flex justify-center gap-2 text-white w-[12rem] py-4 rounded-full bg-slate-800"
          href="/CV.pdf"
        >
          Download CV
          <HiDownload style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
        <a className="bg-white rounded-full p-4" href="https://linkedin.com">
          <BsLinkedin style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
        <a className="bg-white rounded-full p-4" href="https://github.com">
          <FaGithubSquare style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
