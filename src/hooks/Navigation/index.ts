import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();

  return (name: string) => {
    const page = name.toLowerCase().replace(/\s+/g, "");
    if (page === "signup") {
      navigate(`/`);
    } else {
      navigate(`/${page}`);
    }
  };
}
