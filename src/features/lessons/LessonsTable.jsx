import styled from "styled-components";
import Empty from "../../ui/Empty";
import Lesson from "./Lesson";

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;
const StyledHeader = styled.section`
  padding: 1.6rem 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;
// id, name, createdAt, description, gradeId, subjectId
function LessonsTable({ lessons }) {
  console.log(lessons);

  if (!lessons.length) return <Empty>No data</Empty>;
  return (
    <StyledTable>
      <StyledHeader>
        <div>Name</div>
        <div>Decription</div>
        <div>Grade</div>
        <div>Subject</div>
        <div>Created</div>
      </StyledHeader>
      <StyledBody>
        {lessons.map((lesson) => (
          <Lesson lesson={lesson} key={lesson.id} />
        ))}
      </StyledBody>
    </StyledTable>
  );
}

export default LessonsTable;
