import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BooksSection from "../components/BooksSection";

const Home = () => {
  const booksData = useLoaderData();
  console.log(booksData);

  return (
    <div className="w-[90%] md:w-full mx-auto mt-8">
      <Banner />
      <BooksSection booksData={booksData} />
    </div>
  );
};

export default Home;
