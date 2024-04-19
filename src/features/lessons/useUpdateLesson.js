import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLesson as apiUpdateLesson } from "../../services/apiLessons";
import toast from "react-hot-toast";

export function useUpdateLesson() {
  const queryClient = useQueryClient();
  const { mutate: updateLesson, isUpdating } = useMutation({
    mutationFn: ({ newLessonData, id }) => apiUpdateLesson(newLessonData, id),
    onSuccess: () => {
      toast.success("lesson successfully edited");
      queryClient.invalidateQueries({ queryKey: "cabins" });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateLesson };
}
