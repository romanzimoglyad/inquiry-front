import { useQuery } from "@tanstack/react-query";
import { getLessons } from "../services/apiLessons";

export function useLessons() {
  const {
    isLoading,
    data: lessons,
    error,
  } = useQuery({
    queryKey: ["lessons"],
    queryFn: getLessons,
  });

  return { isLoading, error, lessons };
}
