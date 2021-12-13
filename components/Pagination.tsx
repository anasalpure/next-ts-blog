import Link from "next/link";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div>
      <nav>
        {!prevPage && (
          <a rel="previous" disabled={!prevPage}>
            Previous
          </a>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            }
          >
            <a rel="previous">Previous</a>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <a rel="next" disabled={!nextPage}>
            Next
          </a>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <a rel="next">Next</a>
          </Link>
        )}
      </nav>
    </div>
  );
}
