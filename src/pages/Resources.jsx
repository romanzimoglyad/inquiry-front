import Lessons from "../features/lessons/Lessons";
import LessonsHeader from "../features/lessons/LessonsHeader";
import Header from "../ui/Header";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Resources() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1"> All resources</Heading>
        <LessonsHeader />
      </Row>
      <Lessons />
    </>
  );
}

export default Resources;
