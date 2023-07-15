import React, { useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  //Limit the page numbers shown
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  //Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Go to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    //show next set of page numbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  //Go to previous page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    //show prev set of page numbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //populate pages
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className={styles.pagination}>
        <li
          onClick={paginatePrev}
          className={currentPage === pageNumbers[0] ? `${styles.hidden}` : null}
        >
          Prev
        </li>

        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                className={currentPage === number ? `${styles.active}` : null}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            );
          }
        })}

        <li
          onClick={paginateNext}
          className={
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? `${styles.hidden}`
              : null
          }
        >
          Next
        </li>
        <p>
          <b className={styles.page}>{`Page ${currentPage}`}</b>
          <span>{` of `}</span>
          <b>{`${totalPages}`}</b>
        </p>
      </ul>
    </>
  );
};

export default Pagination;
