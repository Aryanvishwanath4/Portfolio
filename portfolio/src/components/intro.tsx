import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center  relative pt-36"
    >
      <div className="w-[80rem] flex">
        <h1 className="text-4xl font-medium leading-[1.5] text-center">
          <span className="font-bold">Hello, I'm Aryan</span>. I'm a{" "}
          <span className="font-bold">Front End developer.</span>
        </h1>
        <span className="flex items-center text-gray-300 text-xl font-light">
          Experienced React.js developer with over 2.5 years of hands-on
          experience in building responsive web applications. Seeking to
          leverage expertise in React.js and related technologies to contribute
          to dynamic projects, collaborate with cross-functional teams, and
          drive innovation in o growth-oriented organization
        </span>
      </div>
      <div className="flex justify-center items-center gap-3 mt-5">
        <a
          className="flex justify-center gap-2 text-white w-[12rem] py-4 rounded-full bg-slate-800"
          href="/CV.pdf"
          target="blank"
        >
          Download CV
          <HiDownload style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
        <a
          className="bg-slate-800 rounded-full p-4"
          href="https://linkedin.com"
        >
          <BsLinkedin style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
        <a className="bg-slate-800 rounded-full p-4" href="https://github.com">
          <FaGithubSquare style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
