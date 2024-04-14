const Contact = () => {
  return (
    <section
      id="Contact"
      className=" flex flex-col justify-center items-center pt-[6rem]"
    >
      <h1 className="text-center text-4xl font-bold leading-[1.5]">Contact</h1>
      <p>
        Please contact me directly at example@gmail.com or through this form.
      </p>
      <div className="border border-solid border-black m-6 bg-slate-500">
        <form className="p-6 flex flex-col gap-8">
          <input
            className="h-14 rounded-xl w-[30rem] p-2"
            type="text"
            placeholder="Your email"
          />
          <textarea
            className="max-h-[30rem] min-h-[10rem] rounded-xl w-[30rem] p-2"
            placeholder="Your Message"
          />
          <button className="h-14 rounded-xl w-[30rem] p-2 bg-gray-800 text-white text-lg">
            Send
          </button>
        </form>
      </div>
      <footer className="flex flex-col text-center m-[5rem]">
        <span>© 2030 Ricardo. All rights reserved.</span>
        <span>
          About this website: built with React & Next.js (App Router & Server
          Actions), TypeScript, Tailwind CSS, Framer Motion, React Email &
          Resend, Vercel hosting
        </span>
      </footer>
    </section>
  );
};

export default Contact;
