import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteLesson as apiDeleteLesson,
  getLesson,
  getLessons,
} from "../../services/apiLessons";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function useDeleteLesson() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isDeleting, mutate: deleteLesson } = useMutation({
    mutationFn: apiDeleteLesson,
    onSuccess: () => {
      toast.success("Lesson successfully deleted!");
      queryClient.invalidateQueries({ queryKey: "lessons" });
      navigate("/resources", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
      navigate("/resources");
    },
  });

  return { isDeleting, deleteLesson };
}
