import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useLessons } from "./useLessons";
import LessonsGrid from "./LessonsGrid";

function Lessons() {
  const { lessons, isLoading } = useLessons();

  if (isLoading) return <Spinner />;

  if (!lessons.lessons.length) return <Empty resource="lessons" />;

  return <LessonsGrid lessons={lessons.lessons} />;
}

export default Lessons;
