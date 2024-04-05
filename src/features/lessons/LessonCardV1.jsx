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
import { useNavigate } from "react-router-dom";
import Duration from "../../ui/Duration";
import { BsFileEarmarkText } from "react-icons/bs";
import MaterialItem from "../../ui/MaterialItem";

const StyledLessonCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
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

const DownSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1.6rem 2.4rem;
`;

const Materials = styled.div`
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
const CardPairValue = styled.div`
  color: var(--color-grey-700);
`;
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
  max-height: 20rem;
`;

function LessonCardV1({ lesson }) {
  const navigate = useNavigate();
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
    image,
    materials: files,
  } = lesson;
  console.log(files);
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
      <StyledLessonCard
        onClick={() => {
          navigate(`/lessons/${id}`);
          window.scrollTo({
            top: 0,
            behavior: "instant", // Optional: Add smooth scrolling behavior
          });
        }}
      >
        <Duration duration={duration}></Duration>
        <CardHeader>
          <CardName>
            <Fancy color="gray-400">{name}</Fancy>
          </CardName>
          <CardDescription>
            <span>{description}</span>
          </CardDescription>
          <CardImg>
            <Img
              src={image && image?.url != "" ? image.url : "../img_demo.jpeg"}
            />
          </CardImg>
        </CardHeader>
        <DownSide>
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
          <Materials>
            {files?.map((file) => (
              <MaterialItem file={file} key={file.name} />
            ))}
          </Materials>
        </DownSide>
      </StyledLessonCard>
    </motion.div>
  );
}

export default LessonCardV1;
