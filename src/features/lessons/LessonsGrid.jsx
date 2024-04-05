import styled from "styled-components";
import LessonCard from "./LessonCard";

const StyledLessonGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
`;
function LessonsGrid({ lessons }) {
  return (
    <StyledLessonGrid>
      {lessons.map((lesson) => (
        <LessonCard lesson={lesson} key={lesson.id} />
      ))}
    </StyledLessonGrid>
  );
}

export default LessonsGrid;
