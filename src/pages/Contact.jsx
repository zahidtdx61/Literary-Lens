import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-16 mb-8 grid mx-4 lg:mx-auto max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Please give us your valuable feedback to improve us.
          </div>
        </div>
        <img
          src="https://mambaui.com/assets/svg/doodle.svg"
          alt=""
          className="p-6 h-52 md:h-64"
        />
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded-md bg-zinc-50 border border-slate-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded-md bg-zinc-50 border border-slate-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded-md bg-zinc-50 border border-slate-300"
          ></textarea>
        </div>
        <Link
          type="submit"
          className="w-full text-center p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary-green text-white hover:opacity-70"
        >
          Send Message
        </Link>
      </form>
    </div>
  );
};

export default Contact;
