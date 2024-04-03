import { useQuery } from "@tanstack/react-query";
import { getLessons } from "../../services/apiLessons";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useEffect } from "react";

export function useLessons() {
  const [searchParams] = useSearchParams();
  const subjectValue = searchParams.get("subject") || "0";
  const unitValue = searchParams.get("unit") || "0";
  const skillValue = searchParams.get("skill") || "0";
  const conceptValue = searchParams.get("concept") || "0";
  const { search } = useSearch();

  const {
    isLoading,
    data: lessons,
    error,
  } = useQuery({
    queryKey: [
      "lessons",
      subjectValue,
      unitValue,
      skillValue,
      conceptValue,
      search,
    ],
    queryFn: () =>
      getLessons({ subjectValue, unitValue, skillValue, conceptValue, search }),
  });

  return { isLoading, error, lessons };
}
