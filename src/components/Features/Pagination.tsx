interface PaginationProps {
  currPage: number;
  totalPages: number;
  setCurrPage: (newValue: number) => void;
}

const Pagination = ({ currPage, totalPages, setCurrPage }: PaginationProps) => {
  const changePage = (newPage: number) => {
    setCurrPage(newPage);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    if (totalPages > 1) {
      return (
        <div className="bg-gray-50 flex rounded mt-auto mx-auto mb-6 border border-solid border-gray-900">
          <button
            className="px-4 py-3 text-[20px] underline-offset-4 hover:underline disabled:pointer-events-none disabled:bg-transparent"
            onClick={() => changePage(currPage - 1)}
            disabled={currPage <= 1}
          >
            Prev
          </button>
          {pages.map((page, index) => (
            <button
              className={`px-4 py-3 text-[20px] underline-offset-4 hover:underline disabled:pointer-events-none disabled:bg-transparent ${
                currPage === index + 1 && 'bg-gray-200 pointer-events-none'
              }`}
              onClick={() => changePage(index + 1)}
              key={page}
            >
              {page}
            </button>
          ))}
          <button
            className="px-4 py-3 text-[20px] underline-offset-4 hover:underline disabled:pointer-events-none disabled:bg-transparent"
            disabled={currPage === totalPages}
            onClick={() => changePage(currPage + 1)}
          >
            Next
          </button>
        </div>
      );
    }
  };
  return <>{renderPagination()}</>;
};

export default Pagination;
