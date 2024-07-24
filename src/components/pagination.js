import React, { useState, useEffect } from "react";

export default function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [pageNumberLimit] = useState(5);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setCurrentPage(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(currentPage));
  }, [currentPage]);

  const pages = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
    window.location.href = `/page/${number}`;
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
        >
          <a
            className="page-link"
            href="#"
            onClick={(event) => handleClick(event, number)}
          >
            {number}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = (event) => {
    event.preventDefault();
    if (currentPage + 1 <= pages.length) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      if (nextPage > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
      window.location.href = `/page/${nextPage}`;
    }
  };

  const handlePrevBtn = (event) => {
    event.preventDefault();
    if (currentPage - 1 >= 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      if ((prevPage) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
      window.location.href = `/page/${prevPage}`;
    }
  };

  return (
    <div>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={handlePrevBtn}
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {renderPageNumbers}
        <li className={`page-item ${currentPage === pages[pages.length - 1] ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={handleNextBtn}
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

