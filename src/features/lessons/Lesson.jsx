import styled from "styled-components";
const StyledLesson = styled.section`
  margin: 0.4rem 0;
`;
const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  align-items: center;
  transition: none;
  padding: 1.2rem 2.4rem;
`;
function Lesson({ lesson }) {
  const { id, name, createdAt, description, gradeId, subjectId, userId } =
    lesson;
  return (
    <CommonRow>
      <div>{name}</div>
      <div>{description}</div>
      <div>{gradeId}</div>
      <div>{subjectId}</div>
      <div>{createdAt}</div>
    </CommonRow>
  );
}

export default Lesson;
