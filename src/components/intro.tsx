import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  function calculateExperienceInYears(
    startDate: any,
    currentDate = new Date()
  ) {
    const start = new Date(startDate);

    let years = currentDate.getFullYear() - start.getFullYear();
    let months = currentDate.getMonth() - start.getMonth();
    let days = currentDate.getDate() - start.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate(); // Days in the previous month
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total years with fractional part for months
    const totalYears = years + months / 12;

    // Return result rounded to one decimal place
    return parseFloat(totalYears.toFixed(1));
  }

  // Example usage in the console:
  const startDate = "2021-06-01";
  const customCurrentDate = new Date(); // Simulate any date
  const experience = calculateExperienceInYears(startDate, customCurrentDate);

  return (
    <section
      id="Home"
      className="w-auto flex flex-col justify-center items-center  relative md:pt-36 pt-[5rem]"
    >
      <div className="md:w-5/6 w-full flex md:flex-row flex-col">
        <h1 className="text-4xl font-medium leading-[1.5] text-center">
          <span className="font-bold text-gray-300">
            Hello, I'm Aryan. I'm a{" "}
          </span>
          <span className="font-bold bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Front End developer.
          </span>
        </h1>
        <span className="flex items-center text-gray-300 text-xl font-light ml-4">
          Experienced React.js developer with over {experience} years of
          hands-on experience in building responsive web applications. Seeking
          to leverage expertise in React.js and related technologies to
          contribute to dynamic projects, collaborate with cross-functional
          teams, and drive innovation in growth-oriented organization.
        </span>
      </div>
      <div className="flex justify-center items-center gap-3 mt-5">
        <a
          className="flex justify-center gap-2 text-white w-[12rem] py-4 rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500"
          href="/CV.pdf"
          target="blank"
        >
          Download CV
          <HiDownload style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
        <a
          className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 rounded-full p-4"
          href="https://linkedin.com/in/aryan-v-421982267"
        >
          <BsLinkedin style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
        <a
          className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 rounded-full p-4"
          href="https://github.com/Aryanvishwanath4"
        >
          <FaGithubSquare style={{ width: "1.25rem", height: "1.5rem" }} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
