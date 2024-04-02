import styled from "styled-components";
import LessonCart from "./LessonCard";

const StyledLessonGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
function LessonsGrid({ lessons }) {
  return (
    <StyledLessonGrid>
      {lessons.map((lesson) => (
        <LessonCart lesson={lesson} key={lesson.id} />
      ))}
    </StyledLessonGrid>
  );
}

export default LessonsGrid;
