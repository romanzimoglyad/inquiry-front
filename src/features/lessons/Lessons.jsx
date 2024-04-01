import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useLessons } from "../useLessons";
import LessonsTable from "./LessonsTable";

function Lessons() {
  const { lessons, isLoading } = useLessons();
  if (isLoading) return <Spinner />;
  console.log(lessons);
  if (!lessons.lessons.length) return <Empty resource="lessons" />;

  return <LessonsTable lessons={lessons.lessons} />;
}

export default Lessons;
