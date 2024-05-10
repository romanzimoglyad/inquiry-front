import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLesson as apiCreateLesson } from "../../services/apiLessons";
import toast from "react-hot-toast";
import useToken from "../../hooks/auth";

export function useCreateLesson() {
  const queryClient = useQueryClient();
  const { token } = useToken();
  const { mutate: createLesson, isCreating } = useMutation({
    mutationFn: (request) => apiCreateLesson({ request, token }),
    onSuccess: () => {
      toast.success("New lesson successfully created!");
      queryClient.invalidateQueries({ queryKey: "lessons" });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createLesson };
}
