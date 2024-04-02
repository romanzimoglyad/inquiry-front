import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Select from "./Select";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get(filterField || "");
  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <Select
        options={options}
        type="white"
        value={filter}
        onChange={handleChange}
      />
      {/* <StyledFilter>
        {options.map((option) => (
          <FilterButton
            key={option.id}
            active={option.id === searchParams.get(filterField)}
            onClick={() => handleClick(option.id)}
            disabled={option.id === searchParams.get(filterField)}
          >
            {option.name}
          </FilterButton>
        ))}
      </StyledFilter> */}
    </>
  );
}

export default Filter;
