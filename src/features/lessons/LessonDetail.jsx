import styled from "styled-components";
import { useLesson } from "./useLesson";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";
import { IoIosDocument } from "react-icons/io";

import { useMoveBack } from "../../hooks/useMoveBack";
import Duration from "../../ui/Duration";
import { MdOutlineSubject } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CiCalendarDate, CiMonitor } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import Img from "../../ui/Img";
import Line from "../../ui/Line";
import { format } from "date-fns";
import {
  StyledLesson,
  StyledLessonHeader,
  StyledMain,
  StyledIcons,
  IconsItem,
  IconsItemTop,
  IconsItemText,
  Footer,
  StyledDate,
  Materials,
  MainText,
  StyledDesc,
  LessonImg,
  HeadingGroup,
} from "../../ui/Lesson";

function LessonDetail() {
  const { isLoading, lesson } = useLesson();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  if (!lesson) return <Empty resource="lesson" />;
  const {
    id,
    name,
    createdAt,
    description,
    gradeId,
    subject,
    userId,
    concept,
    unit,
    skill,
    duration,
    text,
  } = lesson.lesson;
  console.log(lesson.lesson);
  return (
    <StyledLesson>
      <StyledLessonHeader>
        <HeadingGroup>
          <Heading as="h1">{name}</Heading>
          <Duration duration={duration} top={-35} left={-12}></Duration>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </StyledLessonHeader>
      <StyledMain>
        <StyledIcons>
          <IconsItem>
            <IconsItemTop>
              <MdOutlineSubject />
              Subject
            </IconsItemTop>
            <IconsItemText>{subject.name}</IconsItemText>
          </IconsItem>
          <IconsItem>
            <IconsItemTop>
              <HiOutlineWrenchScrewdriver />
              Concept
            </IconsItemTop>
            <IconsItemText>{concept.name}</IconsItemText>
          </IconsItem>
          <IconsItem>
            <IconsItemTop>
              <CiMonitor />
              Unit
            </IconsItemTop>
            <IconsItemText>{unit.name}</IconsItemText>
          </IconsItem>
          <IconsItem>
            <IconsItemTop>
              <GiSkills />
              Skill
            </IconsItemTop>
            <IconsItemText>{skill.name}</IconsItemText>
          </IconsItem>
        </StyledIcons>
        <LessonImg>
          <Img src="../img_demo.jpeg" />
        </LessonImg>

        <StyledDesc>
          {description}
          <Line tX="-5"></Line>
        </StyledDesc>

        <MainText>{text}</MainText>
        <Materials>
          <IoIosDocument />

          <IoIosDocument />

          <IoIosDocument />
        </Materials>
        <Footer>
          <CiCalendarDate />
          <StyledDate> {format(new Date(createdAt), "MM/dd/yyyy")}</StyledDate>
        </Footer>
      </StyledMain>
    </StyledLesson>
  );
}

export default LessonDetail;
