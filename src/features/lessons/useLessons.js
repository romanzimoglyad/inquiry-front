import { useQuery } from "@tanstack/react-query";
import { getLessons } from "../../services/apiLessons";
import { useSearchParams } from "react-router-dom";

export function useLessons() {
  const [searchParams] = useSearchParams();
  const subjectValue = searchParams.get("subject") || "0";
  const unitValue = searchParams.get("unit") || "0";
  const skillValue = searchParams.get("skill") || "0";
  const conceptValue = searchParams.get("concept") || "0";
  const {
    isLoading,
    data: lessons,
    error,
  } = useQuery({
    queryKey: ["lessons", subjectValue, unitValue, skillValue, conceptValue],
    queryFn: () =>
      getLessons({ subjectValue, unitValue, skillValue, conceptValue }),
  });

  return { isLoading, error, lessons };
}
