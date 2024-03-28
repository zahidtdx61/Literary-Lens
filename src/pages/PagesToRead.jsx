import Chart from "../components/Chart";
import { getFromLocalStorage } from "../utils";

const PagesToRead = () => {
  const pagesToRead = getFromLocalStorage("read");
  console.log(pagesToRead);

  if (!pagesToRead) return <></>;
  return <div>
    <Chart data={pagesToRead}/>
  </div>;
};

export default PagesToRead;
