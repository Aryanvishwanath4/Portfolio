import { skills } from "@/lib/data";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="flex flex-col justify-center items-center md:pt-[6rem] pt-[5rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5] text-gray-300">
        Skills
      </h1>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-6 md:w-2/3 w-full">
        {skills.map((skills) => (
          <div className="w-full h-auto border-2 border-solid border-sky-500 shadow-inner shadow-sky-500 mt-[2rem] py-4 rounded-lg">
            <p className="text-center font-bold text-2xl bg-gradient-to-br from-blue-800 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
              {skills.title}
            </p>
            <div className="flex flex-wrap gap-4 p-3 justify-center">
              {skills.skills.map((skill) => (
                <div className="w=[5rem] h-[3rem] flex flex-row justify-center items-center p-3 border border-solid border-black">
                  <img className="w-7 h-7 m-2" src={skill.image} />
                  <p className="text-gray-400">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
