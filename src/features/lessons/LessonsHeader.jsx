import styled from "styled-components";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const StyledLessonsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function LessonsHeader() {
  return (
    <StyledLessonsHeader>
      <Filter
        filterField="status"
        options={[
          { value: "All", label: "All" },
          { value: "Early years", label: "early years" },
          { value: "Primary school", label: "primary school" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
        ]}
      />
    </StyledLessonsHeader>
  );
}

export default LessonsHeader;
