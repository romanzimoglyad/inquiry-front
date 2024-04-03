import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const navigate = useNavigate();

  return () => {
    navigate(-1);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
}
