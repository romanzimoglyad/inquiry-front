import styled from "styled-components";
import Img from "../../ui/Img";
import Fancy from "../../ui/Fancy";
import { FaChildReaching } from "react-icons/fa6";

import { MdOutlineSubject } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

import { CiMonitor } from "react-icons/ci";

import { motion } from "framer-motion";
import { TbTimeDuration60 } from "react-icons/tb";
import { TbTimeDuration45 } from "react-icons/tb";
import { TbTimeDuration30 } from "react-icons/tb";
import { TbTimeDuration90 } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const StyledLessonCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  transition: all 0.4s;
  position: relative;
  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  }
`;
const Duration = styled.div`
  position: absolute;
  font-size: 3rem;
  top: 3%;
  left: 3%;
  color: var(--color-brand-500);
`;

const CardFooter = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1.6rem 2.4rem;
`;

const CardPair = styled.div`
  font-size: 2rem;
  display: flex;
  gap: 0.4rem;
  color: var(--color-brand-600);
`;
const CardPairValue = styled.div``;
const LeftFooter = styled.div;

const CardHeader = styled.div`
  padding: 1.6rem 2.4rem;
  padding-bottom: 1rem;
  display: grid;
  grid-auto-rows: minmax(2rem, auto);
  gap: 1.6rem;
  grid-template-columns: 1fr 1fr;
  border-bottom: 2px solid var(--color-brand-200);
`;
const CardName = styled.div`
  font-size: var(--font-size-llg);
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const CardDescription = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 600;
  grid-column: 1/-1;
`;
const CardImg = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  font-size: var(--font-size-md);
  font-weight: 500;
`;
function LessonCard({ lesson }) {
  const {
    id,
    name,
    duration,
    createdAt,
    description,
    gradeId,
    subject,
    userId,
    concept,
    unit,
    skill,
  } = lesson;

  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: id % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      <StyledLessonCard>
        <Duration>
          {duration == 60 && <TbTimeDuration60 />}
          {duration == 45 && <TbTimeDuration45 />}
          {duration == 30 && <TbTimeDuration30 />}
          {duration == 90 && <TbTimeDuration90 />}
        </Duration>
        <CardHeader>
          <CardName>
            <Fancy color="gray-400">{name}</Fancy>
          </CardName>
          <CardDescription>{description}</CardDescription>
          <CardImg>
            <Img src="img_demo.jpeg" />
          </CardImg>
        </CardHeader>
        <CardFooter>
          <CardPair>
            <MdOutlineSubject />
            <CardPairValue>{subject.name}</CardPairValue>
          </CardPair>
          <CardPair>
            <HiOutlineWrenchScrewdriver />
            <CardPairValue>{concept.name}</CardPairValue>
          </CardPair>
          <CardPair>
            <CiMonitor />
            <CardPairValue>{unit.name}</CardPairValue>
          </CardPair>
          <CardPair>
            <GiSkills />
            <CardPairValue>{skill.name}</CardPairValue>
          </CardPair>
          <CardPair>
            <FaChildReaching />
            <CardPairValue>Grade {gradeId}</CardPairValue>
          </CardPair>
        </CardFooter>
      </StyledLessonCard>
    </motion.div>
  );
}

export default LessonCard;
