
import React from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalPages, onPageChange }) => {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // Calculate pagination window:
  // Show max 7 pages around currentPage
  const windowSize = 7;
  let startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
  let endPage = startPage + windowSize - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - windowSize + 1);
  }

  const pages = range(startPage, endPage);
  const showLeftEllipsis = startPage > 2;
  const showRightEllipsis = endPage < totalPages - 1;

  return (
    <div className="pagination flex gap-2 items-center justify-center">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Prev
      </button>

      {/* First page */}
      {startPage > 1 && (
        <>
          <button
            className="pagination-btn"
            onClick={() => onPageChange(1)}
            aria-label={`Page 1`}
          >
            1
          </button>
          {showLeftEllipsis && <span className="pagination-ellipsis">...</span>}
        </>
      )}

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}

      {/* Last page */}
      {endPage < totalPages && (
        <>
          {showRightEllipsis && <span className="pagination-ellipsis">...</span>}
          <button
            className="pagination-btn"
            onClick={() => onPageChange(totalPages)}
            aria-label={`Page ${totalPages}`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className="pagination-btn"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
