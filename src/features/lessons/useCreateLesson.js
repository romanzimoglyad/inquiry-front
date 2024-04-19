import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLesson as apiCreateLesson } from "../../services/apiLessons";
import toast from "react-hot-toast";

export function useCreateLesson() {
  const queryClient = useQueryClient();
  const { mutate: createLesson, isCreating } = useMutation({
    mutationFn: apiCreateLesson,
    onSuccess: () => {
      toast.success("New lesson successfully created");
      queryClient.invalidateQueries({ queryKey: "lessons" });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createLesson };
}
