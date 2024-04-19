import styled, { css, keyframes } from "styled-components";
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
import { StyledMaterialItem } from "../../ui/Icon";
import { useState } from "react";
import Button from "../../ui/Button";

const StyledLessonCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;

  min-height: 40rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-extra);
  background-color: var(--color-grey-0);
  transition: all 0.4s;
  position: relative;
  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  }
  grid-template-rows: 150px auto;
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

  padding: 1.6rem 1rem;
`;

const CardPair = styled.div`
  font-size: 2rem;
  display: flex;
  gap: 0.4rem;
  color: var(--color-brand-600);
  font-size: ${({ hover, scale }) => (hover ? scale + "rem" : "2rem")};
  transition: font-size 0.3s ease;
`;
const CardPairValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-grey-700);
`;
const LeftFooter = styled.div;

const CardName = styled.div`
  font-size: var(--font-size-extra);
  font-weight: 400;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1.6rem 2.4rem;
  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 0.5s;
    `}
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const CardDescription = styled.div`
  font-weight: 600;
  grid-column: 1/-1;
  align-items: center;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--color-brand-200);
  padding: 1.6rem 2.4rem;
  font-size: ${({ hover }) =>
    hover ? "var(--font-size-llg)" : "var(--font-size-lg)"};
  transition: font-size 0.3s ease;
`;
const CardImg = styled.div`
  padding: 1rem 1rem;
  font-size: var(--font-size-md);
  font-weight: 500;

  max-height: 15rem;
`;
const StyleItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const CardButton = styled.div`
  opacity: ${({ hover }) => (hover ? 1 : 0)};
`;

function LessonCard({ lesson }) {
  const [isHover, setIsHover] = useState(false);
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
  const stringHover = isHover ? "true" : "";

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
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Duration duration={duration} top="-0.3" left="-0.3"></Duration>

        <CardName shaking={isHover ? "true" : ""}>
          <Fancy color="gray-900">{name}</Fancy>
        </CardName>

        <CardImg>
          <Img
            src={image && image?.url != "" ? image.url : "../img_demo.jpeg"}
          />
        </CardImg>

        <CardDescription hover={stringHover}>
          <span>{description}</span>
        </CardDescription>
        <CardFooter>
          <CardPair hover={stringHover} scale="5">
            <StyleItem>
              <MdOutlineSubject />
            </StyleItem>
            <CardPairValue>{subject.name}</CardPairValue>
          </CardPair>
          <CardPair hover={stringHover} scale="4.5">
            <StyleItem>
              <HiOutlineWrenchScrewdriver />
            </StyleItem>
            <CardPairValue>{concept.name}</CardPairValue>
          </CardPair>
          <CardPair hover={stringHover} scale="4">
            <StyleItem>
              <CiMonitor />
            </StyleItem>
            <CardPairValue>{unit.name}</CardPairValue>
          </CardPair>
          <CardPair hover={stringHover} scale="3.5">
            <StyleItem>
              <GiSkills />
            </StyleItem>
            <CardPairValue>{skill.name}</CardPairValue>
          </CardPair>
          <CardPair hover={stringHover} scale="3">
            <StyleItem>
              <FaChildReaching />
            </StyleItem>
            <CardPairValue>Grade {gradeId}</CardPairValue>
          </CardPair>
        </CardFooter>
        <Materials>
          {files?.map((file) => (
            <MaterialItem hover={stringHover} file={file} key={file.name} />
          ))}
        </Materials>
        <CardButton hover={stringHover}>
          <Button
            variation="circle"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/lessons/${id}`);
              window.scrollTo({
                top: 0,
                behavior: "instant", // Optional: Add smooth scrolling behavior
              });
            }}
          >
            View
          </Button>
        </CardButton>
      </StyledLessonCard>
    </motion.div>
  );
}

export default LessonCard;
