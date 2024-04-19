import { useQuery } from "@tanstack/react-query";
import { getLesson, getLessons } from "../../services/apiLessons";
import { useParams, useSearchParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useEffect } from "react";

export function useLesson() {
  const { lessonId } = useParams();

  const {
    isLoading,
    data: lesson,
    error,
  } = useQuery({
    queryKey: ["lesson", lessonId],
    queryFn: () => getLesson(lessonId),
    retry: false,
  });

  return { isLoading, error, lesson };
}
