import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={`min-h-[calc(100vh-120px)] flex flex-col  justify-center  items-center `}
    >
      <HashLoader color="#23BE0A" />
    </div>
  );
};

export default Loader;
