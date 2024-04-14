import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section
      id="Projects"
      className=" flex flex-col justify-center items-center pt-[6rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5]">Projects</h1>
      <div className="flex flex-wrap gap-6">
        {projectsData.map((project) => (
          <div className="w-[25rem] h-auto border-2 border-solid border-sky-500 mt-[2rem]">
            <div className="px-5 py-4">
              <p className="text-xl font-bold">{project.title}</p>
              <p className="m-2">
                {project.from} - {project.to}
              </p>
              <p>{project.description}</p>

              <div className="w-auto flex flex-wrap justify-center gap-2 p-3">
                {project.tags.map((tag) => (
                  <span className=" bg-gray-700 rounded-full p-[10px] text-sm text-white">
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
