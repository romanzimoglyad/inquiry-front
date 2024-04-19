import Spinner from "../../ui/Spinner";

import Heading from "../../ui/Heading";
import ButtonText from "../../ui/ButtonText";

import { useForm } from "react-hook-form";
import {
  BsFileEarmarkImage,
  BsFileEarmarkText,
  BsFileEarmarkPdf,
} from "react-icons/bs";
import { useMoveBack } from "../../hooks/useMoveBack";
import Duration from "../../ui/Duration";
import { MdOutlineSubject } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CiCalendarDate, CiMonitor } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import Img from "../../ui/Img";
import Line from "../../ui/Line";
import Button from "../../ui/Button";
import { StyledSelect } from "../../ui/Select";
import { AiFillDelete } from "react-icons/ai";

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
  MainText,
  StyledDesc,
  LessonImg,
  HeadingGroup,
} from "../../ui/Lesson";
import {
  useConcepts,
  useSkills,
  useSubjects,
  useUnits,
} from "../subjects/useDictionary";

import Form from "../../ui/Form";
import { useCreateLesson } from "./useCreateLesson";
import Select from "../../ui/Select";

import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";
import { format } from "date-fns";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileInput from "../../ui/FileInput";
import { useLesson } from "./useLesson";
import { useUpdateLesson } from "./useUpdateLesson";

const StyledTrashBin = styled.div`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledHeader = styled.div`
  margin-bottom: 1rem;
`;

const Materials = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-llg);
  grid-column: 3 / -1;
  grid-row: 4 / span 2;
  padding: 1rem 1rem;
`;

const StyledFiles = styled.div`
  // padding: 1rem 1rem;
  /* border: 2px dashed #cccccc;
  border-radius: var(--border-radius-lg); */
`;
const StyledDrop = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  gap: 2rem;
  border: 2px dashed #cccccc;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--font-size-llg);
`;
const ClickableFile = styled.div`
  display: flex;
  gap: 1rem;
`;
function LessonCreate() {
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const { lessonId } = useParams();
  console.log(lessonId);
  const { createLesson, isCreating } = useCreateLesson();
  const { updateLesson, isUpdating } = useUpdateLesson();
  const isEditSession = lessonId != "" && lessonId != undefined;
  console.log(isEditSession);
  const { isLoading: lessonLoading, lesson } = useLesson();

  console.log(lesson);
  const [files, setFiles] = useState([]);

  const oldMaterials = lesson?.lesson?.materials ? lesson.lesson.materials : [];
  const [oldFiles, setOldFiles] = useState([...oldMaterials]);
  const onDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const handleFileInputChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  const { subjects, isLoading: subjectsLoading } = useSubjects();
  const { units, isLoading: unitsLoading } = useUnits();
  const { skills, isLoading: skillsLoading } = useSkills();
  const { concepts, isLoading: conceptsLoading } = useConcepts();
  let lessonForEdit;

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // Standard-compliant browsers will use the following message
      event.returnValue = ""; // This is necessary to support Chrome, Safari, and other browsers
      return ""; // This will be shown to the user as the confirmation message
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  if (isEditSession) {
    lessonForEdit = {
      description: lesson?.lesson?.description,
      name: lesson?.lesson?.name,
      unitId: lesson?.lesson?.unit?.id,
      text: lesson?.lesson?.text,
      conceptId: lesson?.lesson?.concept?.id,
      skillId: lesson?.lesson?.skill?.id,
      subjectId: lesson?.lesson?.subject?.id,
      imageUrl: lesson?.lesson?.image?.url,
    };
    // if (lesson?.lesson?.materials) {
    //   setOldFiles();
    //   console.log(oldfiles);
    // }
  }
  console.log(lessonForEdit);
  console.log(isEditSession);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? lessonForEdit : {},
  });

  const { errors } = formState;

  if (
    lessonLoading ||
    subjectsLoading ||
    unitsLoading ||
    skillsLoading ||
    conceptsLoading
  )
    return <Spinner />;

  const handleFileChange = (event) => {
    console.log("");
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target.result;
      setImgPreview(result);
    };

    reader.readAsDataURL(file);
    setImg(file);
  };
  function onSubmit(data) {
    if (isEditSession) {
      const image = img;
      console.log(image);
      updateLesson(
        {
          newLessonData: {
            ...data,
            oldFiles,
            files,
            image,
          },
          id: lessonId,
        },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
      navigate("/resources");
    } else {
      const image = img;
      console.log(image);
      createLesson(
        {
          ...data,
          files,
          image,
        },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
      navigate("/resources");
    }
  }
  function onError(errors) {
    //console.log(errors);
  }

  const handleDeleteFile = (index) => {
    event.stopPropagation();
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };
  const handleDeleteOldFile = (index) => {
    event.stopPropagation();
    const updatedFiles = oldFiles.filter((_, i) => i !== index);
    setOldFiles(updatedFiles);
  };

  const renderFileIcon = (file) => {
    if (!file) return null;
    const fileType = file.type;
    if (fileType.startsWith("image")) {
      return <BsFileEarmarkImage />;
    } else if (fileType === "application/pdf") {
      return <BsFileEarmarkPdf />;
    } else {
      return <BsFileEarmarkText />;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <StyledLesson>
        <StyledLessonHeader>
          <HeadingGroup>
            <StyledHeader>
              <Heading as="h1">
                <Input
                  disabled={isCreating}
                  type="text"
                  id="name"
                  defaultValue="Lesson name"
                  {...register("name", {
                    required: "This field is required",
                  })}
                />
              </Heading>
            </StyledHeader>
            <Duration duration={60} top={-35} left={-12}></Duration>
          </HeadingGroup>
          <ButtonText type="button" onClick={moveBack}>
            &larr; Back
          </ButtonText>
        </StyledLessonHeader>
        <StyledMain>
          <StyledIcons>
            <IconsItem>
              <IconsItemTop>
                <MdOutlineSubject />
                Subject
              </IconsItemTop>
              <IconsItemText>
                <StyledSelect
                  {...register("subjectId", {
                    required: "This field is required",
                    // validate: (value) => value !== "0",
                  })}
                >
                  {subjects.pairs.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </StyledSelect>
              </IconsItemText>
            </IconsItem>
            <IconsItem>
              <IconsItemTop>
                <HiOutlineWrenchScrewdriver />
                Concept
              </IconsItemTop>
              <IconsItemText>
                <StyledSelect
                  {...register("conceptId", {
                    required: "This field is required",
                    // validate: (value) => value !== "0",
                  })}
                >
                  {concepts.pairs.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </StyledSelect>
              </IconsItemText>
            </IconsItem>
            <IconsItem>
              <IconsItemTop>
                <CiMonitor />
                Unit
              </IconsItemTop>
              <IconsItemText>
                <StyledSelect
                  {...register("unitId", {
                    required: "This field is required",
                    // validate: (value) => value !== "0",
                  })}
                >
                  {units.pairs.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </StyledSelect>
              </IconsItemText>
            </IconsItem>
            <IconsItem>
              <IconsItemTop>
                <GiSkills />
                Skill
              </IconsItemTop>
              <IconsItemText>
                <StyledSelect
                  {...register("skillId", {
                    required: "This field is required",
                    // validate: (value) => value !== "0",
                  })}
                >
                  {skills.pairs.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </StyledSelect>
              </IconsItemText>
            </IconsItem>
          </StyledIcons>
          <LessonImg>
            <FileInput
              disabled={isCreating}
              id="image"
              accept="image/*"
              onChange={handleFileChange}
              // {...register("image", {
              //   // required: "This field is required",
              // })}
            />
            {isEditSession && !imgPreview && (
              <div>
                {
                  <img
                    src={
                      lessonForEdit &&
                      lessonForEdit.imageUrl &&
                      lessonForEdit.imageUrl != ""
                        ? lessonForEdit.imageUrl
                        : "../../img_demo.jpeg"
                    }
                  />
                }
              </div>
            )}
            {imgPreview && (
              <div>
                {img && (
                  <img
                    src={imgPreview}
                    alt="Preview"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                )}
              </div>
            )}
          </LessonImg>

          <StyledDesc>
            <Textarea
              size="medium"
              disabled={isCreating}
              type="text"
              id="description"
              defaultValue=""
              {...register("description", {
                // required: "This field is required",
              })}
            />
          </StyledDesc>

          <MainText>
            <Textarea
              size="big"
              disabled={isCreating}
              type="text"
              id="text"
              defaultValue=""
              {...register("text", {
                // required: "This field is required",
              })}
            />
          </MainText>
          <Materials>
            <StyledFiles>
              {oldFiles &&
                oldFiles.map((file, index) => {
                  const ind = file.name.indexOf("/");
                  let substring = file.name.substring(ind + 1);

                  return (
                    <ClickableFile key={index}>
                      <div>
                        {renderFileIcon(file)}
                        <span>{substring}</span>
                      </div>
                      <StyledTrashBin>
                        <AiFillDelete
                          onClick={() => handleDeleteOldFile(index)}
                        />
                      </StyledTrashBin>
                    </ClickableFile>
                  );
                })}
              {files &&
                files.map((file, index) => (
                  <ClickableFile key={index}>
                    <div>
                      {renderFileIcon(file)}
                      <span>{file.name}</span>
                    </div>
                    <StyledTrashBin>
                      <AiFillDelete onClick={() => handleDeleteFile(index)} />
                    </StyledTrashBin>
                  </ClickableFile>
                ))}
            </StyledFiles>
            <StyledDrop onDrop={onDrop} onDragOver={onDragOver}>
              <input
                type="file"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                }}
                onChange={handleFileInputChange}
                multiple
              />
              Drop files here or click to select
            </StyledDrop>
          </Materials>
          <Footer>
            <CiCalendarDate />
            <StyledDate>{format(new Date(), "MM/dd/yyyy")}</StyledDate>
          </Footer>
        </StyledMain>
      </StyledLesson>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={moveBack}>
          Cancel
        </Button>
        <Button> {isEditSession ? "Update lesson" : "Add lesson"}</Button>
      </FormRow>
    </Form>
  );
}

export default LessonCreate;
