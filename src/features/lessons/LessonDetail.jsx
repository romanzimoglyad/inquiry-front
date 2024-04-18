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
import { useDeleteLesson } from "./useDeleteLesson";
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
import MaterialItem from "../../ui/MaterialItem";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useEffect } from "react";

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 1rem;
`;

function LessonDetail() {
  const { isDeleting, deleteLesson } = useDeleteLesson();
  const { isLoading, lesson } = useLesson();
  const moveBack = useMoveBack();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [moveBack]);

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
    image,
    materials: files,
  } = lesson.lesson;

  console.log(lesson.lesson);
  return (
    <StyledLesson>
      <Modal>
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
            <Img
              src={image && image.url != "" ? image.url : "../img_demo.jpeg"}
            />
          </LessonImg>

          <StyledDesc>
            {description}
            <Line tx="-5"></Line>
          </StyledDesc>

          <MainText>{text}</MainText>
          <Materials>
            {files?.map((file) => (
              <MaterialItem file={file} key={file.name} />
            ))}
          </Materials>
          <Footer>
            <CiCalendarDate />
            <StyledDate>
              {" "}
              {format(new Date(createdAt), "MM/dd/yyyy")}
            </StyledDate>
          </Footer>
        </StyledMain>
        <Buttons type="horizontal">
          <Button variation="secondary" onClick={moveBack}>
            Edit
          </Button>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>
        </Buttons>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="lesson"
            disabled={isDeleting}
            onConfirm={() => deleteLesson(id)}
          />
        </Modal.Window>
      </Modal>
    </StyledLesson>
  );
}

export default LessonDetail;
