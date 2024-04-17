import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section
      id="Projects"
      className=" flex flex-col justify-center items-center md:pt-[6rem] pt-[5rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5] text-gray-300">
        Projects
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {projectsData.map((project) => (
          <div className="md:w-1/4 w-full h-auto border-2 border-solid border-sky-500 shadow-inner shadow-sky-500 mt-[2rem] rounded-lg">
            <div className="px-5 py-4">
              <p className="text-xl font-bold bg-gradient-to-br from-blue-800 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
                {project.title}
              </p>
              <p className="m-2 text-gray-500">
                {project.from} - {project.to}
              </p>
              {project.title === "PortFolio" && (
                <img src="/Portfolio.png" className="pb-4" />
              )}
              <p className="text-gray-400">{project.description}</p>

              <div className="w-auto flex flex-wrap justify-center gap-2 p-3">
                {project.tags.map((tag) => (
                  <span className=" bg-gray-700 text-gray-200 rounded-full p-[10px] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
