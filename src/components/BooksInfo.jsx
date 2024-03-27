const BooksInfo = ({ info }) => {
  const { totalPages, rating, publisher, yearOfPublishing } = info;
  return (
    <div className="overflow-x-auto">
      <table className="table font-medium">
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="text-[#131313B2] w-fit lg:w-[30%]">
              Number of Pages :
            </td>
            <td>{totalPages}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td className="text-[#131313B2] ">Publisher :</td>
            <td>{publisher}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td className="text-[#131313B2]">Year of Publishing :</td>
            <td>{yearOfPublishing}</td>
          </tr>
          {/* row 4 */}
          <tr>
            <td className="text-[#131313B2]">Rating :</td>
            <td>{rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BooksInfo;
