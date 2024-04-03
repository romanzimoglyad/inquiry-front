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
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileInput from "../../ui/FileInput";

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

const StyledFiles = styled.div``;
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
    // Read the file and generate a data URL or blob URL
    const reader = new FileReader();
    reader.onload = function (event) {
      const url = event.target.result;
      setImageUrl(url);
    };
    reader.readAsDataURL(file);
  };
  const [files, setFiles] = useState([]);

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

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { createLesson, isCreating } = useCreateLesson();

  if (subjectsLoading || unitsLoading || skillsLoading || conceptsLoading)
    return <Spinner />;
  function onSubmit(data) {
    createLesson(
      { ...data, files },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
    navigate("/resources");
  }
  function onError(errors) {
    //console.log(errors);
  }

  const handleDeleteFile = (index) => {
    event.stopPropagation();
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const renderFileIcon = (file) => {
    if (!file) return null;
    console.log(file);
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
              onChange={handleFileChange}
              accept="image/*"
              {...register("image", {
                // required: "This field is required",
              })}
            />
            {selectedFile && (
              <div>
                <p>Selected file: {selectedFile.name}</p>
                {imageUrl && (
                  <img
                    src={imageUrl}
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

            <Line tX="-5"></Line>
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
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button> Add lesson</Button>
      </FormRow>
    </Form>
  );
}

export default LessonCreate;
