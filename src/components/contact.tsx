const Contact = () => {
  return (
    <section
      id="Contact"
      className=" flex flex-col justify-center items-center md:pt-[6rem] pt-[5rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5] text-gray-300">
        Contact
      </h1>
      <p className="text-gray-300">
        Please contact me directly at aryanvaryan16@gmail.com (this form is
        disabled).
      </p>
      <div className="border border-solid border-black m-6 bg-slate-500 rounded-lg md:w-1/3 w-full">
        <form className="p-6 flex flex-col gap-8">
          <input
            className="h-8 md:h-14 rounded-xl w-full p-2 bg-gray-300"
            type="text"
            placeholder="Your email"
          />
          <textarea
            className="max-h-screen md:min-h-[10rem] h-20 rounded-xl w-full p-2  bg-gray-300"
            placeholder="Your Message"
          />
          <button
            className="h-11 md:h-14 rounded-xl w-full p-2 bg-gray-800 text-white text-lg"
            disabled
          >
            Send
          </button>
        </form>
      </div>
      <footer className="flex flex-col text-center md:m-[5rem]">
        <span>
          About this website: built with React & Next.js (App Router),
          TypeScript, Tailwind CSS, Vercel hosting
        </span>
      </footer>
    </section>
  );
};

export default Contact;
