import { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { FaHeading } from "react-icons/fa";
import Heading from "./Heading";
import Fancy from "./Fancy";
const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  gap: 2rem;
`;
const NumberOfStudents = styled.div``;
const NumberOfLessons = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-lllg);
`;

const Item = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-extra);
  font-size: 1rem;
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  width: 20rem;
`;

const Text = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 2.5rem;
  color: var(--color-brand-600);
`;

function Stats() {
  const [lessons, setLessons] = useState(1234);
  const [students, setStudents] = useState(123);
  const [plus, setPlus] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLessons(15000);
      setStudents(500);
    }, 100);
    const timeout2Id = setTimeout(() => {
      setPlus("+");
    }, 2100);
    return () => {
      clearTimeout(timeout2Id);
    };
  }, []);

  return (
    <StyledStats>
      <Item>
        <Heading>Lessons taught</Heading>
        <Text>
          <Odometer value={lessons} format="dddd" /> {plus}
        </Text>
      </Item>
      <Item>
        <Heading>Students taught</Heading>
        <Text>
          <Odometer value={students} format="dddd" /> {plus}
        </Text>
      </Item>
    </StyledStats>
  );
}

export default Stats;
