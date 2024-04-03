import styled from "styled-components";

export const StyledLesson = styled.section`
  margin: 0.4rem 0;
`;

export const StyledDesc = styled.section`
  grid-column: 1/-1;
  margin-top: 1rem;
  font-size: var(--font-size-llg);
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  padding: 1rem 4rem;
`;

export const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  position: relative;
`;

export const MainText = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4 / span 2;
  padding: 1rem 4rem;
`;
export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
`;

export const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2rem 4rem;
  justify-content: space-between;
  grid-column: 1 / span 2;
`;

export const LessonImg = styled.div`
  grid-column: 3 / -1;
  grid-row: 1 / span 2;
`;
export const Materials = styled.div`
  font-size: 10rem;
  grid-column: 3 / -1;
  grid-row: 4 / span 2;
  padding: 1rem 4rem;
`;
export const StyledLessonHeader = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

export const IconsItem = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-brand-600);
  font-size: var(--font-size-llg);
`;
export const IconsItemTop = styled.div`
  display: flex;
  gap: 1rem;
`;
export const IconsItemText = styled.div`
  color: var(--color-grey-700);
`;

export const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  align-items: center;
  transition: none;
  padding: 1.2rem 2.4rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  grid-column: 4 / 5;
  grid-row: 6 / span 1;
  color: var(--color-brand-600);
  margin-right: 1rem;
`;
export const StyledDate = styled.div`
  font-size: var(--font-size-sm);
`;
