import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-fit bg-base-200 rounded-md overflow-hidden">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="w-[90%] md:w-[40%] h-[350px] md:h-[500px] mx-auto  bg-base-200">
          <img
            src="https://m.media-amazon.com/images/I/71V1cA2fiZL._SL1500_.jpg"
            className="h-full w-fit rounded-lg shadow-2xl mx-auto"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold w-full md:w-[70%] mb-8">
            Books to freshen up your bookshelf
          </h1>

          <Link to={"/listed-books"}>
            <button className="btn text-white bg-primary-green">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
