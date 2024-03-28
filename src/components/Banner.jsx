import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-fit bg-base-200 rounded-md overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row-reverse">
        <div className="w-[90%] md:w-[50%] h-[350px] py-3 md:h-[500px] mx-auto  bg-base-200">
          <img
            src="https://m.media-amazon.com/images/I/71V1cA2fiZL._SL1500_.jpg"
            className="h-full w-fit rounded-lg shadow-2xl mx-auto"
          />
        </div>

        <div className="flex flex-col items-start justify-center pl-16">
          <h1 className="text-5xl font-bold w-full md:w-[70%] mb-8">
            Books to freshen up your bookshelf
          </h1>

          <Link to={"/listed-books"}>
            <button className="btn text-white bg-primary-green mb-4">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
