import { useSearch } from "../../context/SearchContext";
import {
  useSkills,
  useSubjects,
  useUnits,
  useConcepts,
  useAll,
} from "../dictionary/useDictionary";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import Filter from "../../ui/Filter";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import Input from "../../ui/Input";
import { TYPE_SUBJECT } from "../../utils/constants";

const StyledLessonsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;
const Flex = styled.div`
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

  const { search, setSearch } = useSearch("");
  const { dictionaries, isLoading: dictionariesLoading } = useAll();

  const [searchParams, setSearchParams] = useSearchParams();
  if (dictionariesLoading) return <Spinner />;

  const anyFilter = searchParams.toString() === "" && search === "";

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
      <Flex>
        <Input
          type="text"
          placeholder="Search lessons"
          id="search"
          autoComplete="username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Flex>
      <StyledLI>
        <Text>Unit</Text>
        <Filter
          filterField="unit"
          options={
            dictionaries.dictionaries.filter((el) => el.type === "TYPE_UNIT")[0]
              .pairs
          }
        />
      </StyledLI>
      <StyledLI>
        <Text>Concept</Text>
        <Filter
          filterField="concept"
          options={
            dictionaries.dictionaries.filter(
              (el) => el.type === "TYPE_CONCEPT"
            )[0].pairs
          }
        />
      </StyledLI>
      <StyledLI>
        <Text>Subject</Text>
        <Filter
          filterField="subject"
          options={
            dictionaries.dictionaries.filter(
              (el) => el.type === "TYPE_SUBJECT"
            )[0].pairs
          }
        />
      </StyledLI>
      <StyledLI>
        <Text>Skill</Text>
        <Filter
          filterField="skill"
          options={
            dictionaries.dictionaries.filter(
              (el) => el.type === "TYPE_SKILL"
            )[0].pairs
          }
        />
      </StyledLI>
      <StyledLI>
        <Text>Grade</Text>
        <Filter
          filterField="grade"
          options={
            dictionaries.dictionaries.filter(
              (el) => el.type === "TYPE_GRADE"
            )[0].pairs
          }
        />
      </StyledLI>
      <Flex>
        <Button
          onClick={() => {
            setSearchParams({});
            setSearch("");
          }}
          variation={anyFilter ? "secondary" : "primary"}
        >
          Clear all
        </Button>
      </Flex>
      {/* <SortBy
      options={[
        { value: "startDate-desc", label: "Sort by date (recent first)" },
        { value: "startDate-asc", label: "Sort by date (earlier first)" },
      ]}
    /> */}
    </StyledLessonsHeader>
  );
}
