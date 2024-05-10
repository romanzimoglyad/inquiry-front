import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import useToken from "../../hooks/auth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (token) => {
      setToken(token);
      navigate("/introduction", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email is incorrect");
    },
  });
  return { login, isLoading };
}
