import { experiencesData } from "@/lib/data";

const Experience = () => {
  return (
    <section
      id="Experience"
      className=" flex flex-col justify-center items-center pt-[6rem]"
    >
      <h1 className="text-center text-gray-300 text-4xl font-bold leading-[1.5]">
        Experience
      </h1>
      {experiencesData.map((experience) => (
        <div className="w-[50rem] h-auto border-2 border-solid border-sky-500 shadow-inner shadow-sky-500 mt-[2rem] rounded-lg">
          <div className="px-5 py-4">
            <p className="text-2xl font-bold bg-gradient-to-br from-blue-800 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
              {experience.title}
            </p>
            <p className="text-gray-400">{experience.company}</p>
            <p className="text-gray-500">
              {experience.from} - {experience.to}
            </p>
            <ul className="px-5 text-gray-400">
              {experience.description.map((points) => (
                <li className="list-disc">{points}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
