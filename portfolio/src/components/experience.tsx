import { experiencesData } from "@/lib/data";

const Experience = () => {
  return (
    <section
      id="Experience"
      className=" flex flex-col justify-center items-center pt-[6rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5]">
        Experience
      </h1>
      {experiencesData.map((experience) => (
        <div className="w-[50rem] h-auto border-2 border-solid border-sky-500 mt-[2rem]">
          <div className="px-5 py-4">
            <p className="text-xl font-bold">{experience.title}</p>
            <p>{experience.company}</p>
            <p>
              {experience.from} - {experience.to}
            </p>
            <ul className="px-5">
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
