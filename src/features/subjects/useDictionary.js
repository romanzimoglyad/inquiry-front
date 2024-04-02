import { useQuery } from "@tanstack/react-query";
import { getLessons } from "../../services/apiLessons";
import { getSubjects } from "../../services/apiSubjects";
import { TYPE_SUBJECT } from "../../utils/constants";
import { TYPE_UNIT } from "../../utils/constants";
import { TYPE_SKILL } from "../../utils/constants";
import { TYPE_CONCEPT } from "../../utils/constants";

export function useSubjects() {
  const {
    isLoading,
    data: subjects,
    error,
  } = useQuery({
    queryKey: ["subject"],
    queryFn: () => getSubjects({ type: TYPE_SUBJECT }),
  });

  return { isLoading, error, subjects };
}

export function useUnits() {
  const {
    isLoading,
    data: units,
    error,
  } = useQuery({
    queryKey: ["unit"],
    queryFn: () => getSubjects({ type: TYPE_UNIT }),
  });

  return { isLoading, error, units };
}

export function useSkills() {
  const {
    isLoading,
    data: skills,
    error,
  } = useQuery({
    queryKey: ["skill"],
    queryFn: () => getSubjects({ type: TYPE_SKILL }),
  });

  return { isLoading, error, skills };
}

export function useConcepts() {
  const {
    isLoading,
    data: concepts,
    error,
  } = useQuery({
    queryKey: ["concept"],
    queryFn: () => getSubjects({ type: TYPE_CONCEPT }),
  });

  return { isLoading, error, concepts };
}
