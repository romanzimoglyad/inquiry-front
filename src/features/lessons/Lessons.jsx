import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useLessons } from "./useLessons";
import LessonsGrid from "./LessonsGrid";
import styled from "styled-components";
import Pagination from "../../ui/Pagination";

const StyledLessons = styled.div`
  display: flex;
  flex-direction: column;
`;
function Lessons() {
  const { lessons, isLoading, count } = useLessons();

  if (isLoading) return <Spinner />;

  if (!lessons.lessons.length) return <Empty resource="lessons" />;

  return (
    <StyledLessons>
      <LessonsGrid lessons={lessons.lessons} />

      <Pagination count={count} />
    </StyledLessons>
  );
}

export default Lessons;
