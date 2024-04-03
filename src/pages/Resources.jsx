import { useNavigate } from "react-router-dom";
import Lessons from "../features/lessons/Lessons";
import LessonsHeader from "../features/lessons/LessonsHeader";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { FaPlus } from "react-icons/fa";

function Resources() {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Row type="horizontal">
          <Heading as="h1"> All resources</Heading>
          <div>
            <Button
              onClick={() => {
                navigate(`/lessons/create`);
              }}
            >
              <FaPlus /> Add new
            </Button>
          </div>
        </Row>

        <LessonsHeader />
      </Row>
      <Lessons />
    </>
  );
}

export default Resources;
