import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLessons } from "../../services/apiLessons";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../../utils/constants";

export function useLessons() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const subjectValue = searchParams.get("subject") || "0";
  const unitValue = searchParams.get("unit") || "0";
  const skillValue = searchParams.get("skill") || "0";
  const conceptValue = searchParams.get("concept") || "0";
  const gradeValue = searchParams.get("grade") || "0";
  const { search } = useSearch();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  console.log(gradeValue);
  const {
    isLoading,
    data: lessons = {},
    error,
  } = useQuery({
    queryKey: [
      "lessons",
      subjectValue,
      unitValue,
      skillValue,
      conceptValue,
      gradeValue,
      search,
      page,
    ],
    queryFn: () =>
      getLessons({
        subjectValue,
        unitValue,
        skillValue,
        conceptValue,
        gradeValue,
        search,
        page,
      }),
  });

  const count = lessons.count;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: [
        "lessons",
        subjectValue,
        unitValue,
        skillValue,
        conceptValue,
        search,
        page + 1,
      ],
      queryFn: () =>
        getLessons({
          subjectValue,
          unitValue,
          skillValue,
          conceptValue,
          search,
          page: page + 1,
        }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: [
        "lessons",
        subjectValue,
        unitValue,
        skillValue,
        conceptValue,
        search,
        page - 1,
      ],
      queryFn: () =>
        getLessons({
          subjectValue,
          unitValue,
          skillValue,
          conceptValue,
          search,
          page: page - 1,
        }),
    });

  return { isLoading, error, lessons, count };
}
