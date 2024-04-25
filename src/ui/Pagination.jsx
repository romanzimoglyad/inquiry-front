import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-llg);
  gap: 2rem;
`;

const P = styled.p`
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-0)"};
  color: ${(props) => (props.active ? " var(--color-brand-0)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchPrarms] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = curPage === pageCount ? curPage : curPage + 1;
    searchParams.set("page", next);
    setSearchPrarms({ page: next });
  }

  function previousPage() {
    const prev = curPage === 1 ? curPage : curPage - 1;
    searchParams.set("page", prev);
    setSearchPrarms({ page: prev });
  }
  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <P>
        Showing <span>{curPage * PAGE_SIZE - PAGE_SIZE + 1}</span> to{" "}
        <span>{curPage === pageCount ? count : curPage * PAGE_SIZE}</span> of{" "}
        <span>{count}</span> lessons
      </P>
      <Buttons>
        <PaginationButton disabled={curPage === 1} onClick={previousPage}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton disabled={curPage === pageCount} onClick={nextPage}>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
