import { useQuery } from "@tanstack/react-query";
import { getLessons } from "../../services/apiLessons";
import { getDictionary } from "../../services/apiDictionary";
import { TYPE_SUBJECT } from "../../utils/constants";
import { TYPE_UNIT } from "../../utils/constants";
import { TYPE_SKILL } from "../../utils/constants";
import { TYPE_CONCEPT } from "../../utils/constants";
import { TYPE_ALL } from "../../utils/constants";

export function useAll() {
  const {
    isLoading,
    data: dictionaries,
    error,
  } = useQuery({
    queryKey: ["subject"],
    queryFn: () => getDictionary({ type: TYPE_ALL }),
    cacheTime: 60000,
  });

  return { isLoading, error, dictionaries };
}

export function useSubjects() {
  const {
    isLoading,
    data: subjects,
    error,
  } = useQuery({
    queryKey: ["subject"],
    queryFn: () => getDictionary({ type: TYPE_SUBJECT }),
    cacheTime: 60000,
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
    queryFn: () => getDictionary({ type: TYPE_UNIT }),
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
    queryFn: () => getDictionary({ type: TYPE_SKILL }),
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
    queryFn: () => getDictionary({ type: TYPE_CONCEPT }),
  });

  return { isLoading, error, concepts };
}
