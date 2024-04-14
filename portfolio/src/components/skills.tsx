import { skills } from "@/lib/data";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="w-[100rem] flex flex-col justify-center items-center pt-[6rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5]">Skills</h1>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skills) => (
          <div className="w-[30rem] h-auto border border-solid border-black mt-[2rem]">
            <p className="text-center font-bold text-xl">{skills.title}</p>
            <div className="flex flex-wrap gap-4 p-3 justify-center">
              {skills.skills.map((skill) => (
                <div className="w=[5rem] h-[3rem] flex flex-row justify-center items-center p-3 border border-solid border-black">
                  <img className="w-7 h-7 m-2" src={skill.image} />
                  <p>{skill.name}</p>
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
