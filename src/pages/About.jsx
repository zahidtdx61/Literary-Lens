import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full lg:w-[60%] text-center mx-auto">
        <h1 className="text-4xl font-bold mb-4 ">About Us</h1>
        <p className="mb-4">
          Welcome to Literary Lens! We're passionate about books and believe in
          the power of literature to inspire, educate, and entertain. Here's a
          bit about who we are and what we stand for:
        </p>
      </div>

      <div className="mt-16 p-4 lg:p-8 flex flex-col lg:flex-row bg-zinc-100 rounded-lg items-center gap-4">
        <div className="w-full lg:w-[50%] text-center">
          <h2 className="text-4xl font-bold mb-2">Our Mission</h2>
          <p className="mb-4  text-left text-light-ash">
            At Literary Lens, our mission is to make the world of books more
            accessible and enjoyable for everyone. We strive to connect readers
            with the stories and knowledge that enrich their lives.
          </p>
        </div>
        <div className="w-full lg:w-[50%] rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-16 p-8 flex flex-col lg:flex-row-reverse bg-zinc-100 rounded-lg items-center gap-4">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-4xl font-bold mb-2">What We Do</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 mt-4">
              <strong>Book Discovery:</strong> We curate a diverse collection of
              books across genres, providing readers with a platform to explore
              new titles and authors.
            </li>
            <li className="mb-2">
              <strong>Reading Community:</strong> We foster a vibrant community
              of readers who share their thoughts, recommendations, and insights
              on the books they love.
            </li>
            <li>
              <strong>Enhanced Reading Experience:</strong> We offer features
              such as wishlists, read lists, and visualization tools to help
              readers organize their reading journeys and gain deeper insights
              into their preferences.
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[50%] rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="my-16 w-full flex flex-col items-center bg-zinc-100 p-4 lg:py-8 rounded-lg">
        <div className="h-72 w-full rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-fit h-full object-cover mx-auto rounded-lg"
          />
        </div>
        <p className="mt-8 text-xl w-full lg:w-[40%] text-center font-medium">
          We'd love to hear from you! Whether you have feedback, suggestions, or
          just want to say hello, feel free to{" "}
          <Link to={"/contact"} className="text-blue-500">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
