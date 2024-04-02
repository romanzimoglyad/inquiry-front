import { useState } from "react";

import {
  useSkills,
  useSubjects,
  useUnits,
  useConcepts,
} from "../subjects/useDictionary";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import Filter from "../../ui/Filter";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";

const StyledLessonsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;
const Clear = styled.div`
  display: flex;

  align-items: end;
`;

const StyledLI = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  gap: 1rem;
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
`;

const Text = styled.div`
  text-align: left;
  font-weight: 800;
  font-size: var(--font-size-lg);
`;
export default function LessonsHeader() {
  // create the animations that will be applied
  // whenever the open state is toggled
  const { subjects, isLoading: subjectsLoading } = useSubjects();
  const { units, isLoading: unitsLoading } = useUnits();
  const { skills, isLoading: skillsLoading } = useSkills();
  const { concepts, isLoading: conceptsLoading } = useConcepts();
  const [searchParams, setSearchParams] = useSearchParams();
  if (subjectsLoading || unitsLoading || skillsLoading || conceptsLoading)
    return <Spinner />;
  return (
    // <div ref={scope}>
    //   <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
    //     Click Me!
    //   </motion.button>
    //   <ul>
    //     {items.map((item, index) => (
    //       <motion.li key={index}>{item}</motion.li>
    //     ))}
    //   </ul>
    // </div>
    <StyledLessonsHeader>
      <StyledLI>
        <Text>Unit</Text>
        <Filter filterField="unit" options={units.pairs} />
      </StyledLI>
      <StyledLI>
        <Text>Concept</Text>
        <Filter filterField="concept" options={concepts.pairs} />
      </StyledLI>
      <StyledLI>
        <Text>Subject</Text>
        <Filter filterField="subject" options={subjects.pairs} />
      </StyledLI>
      <StyledLI>
        <Text>Skill</Text>
        <Filter filterField="skill" options={skills.pairs} />
      </StyledLI>
      <Clear>
        <div></div>
        <Button onClick={() => setSearchParams({})} variation="secondary">
          Clear all
        </Button>
      </Clear>
      {/* <SortBy
      options={[
        { value: "startDate-desc", label: "Sort by date (recent first)" },
        { value: "startDate-asc", label: "Sort by date (earlier first)" },
      ]}
    /> */}
    </StyledLessonsHeader>
  );
}
