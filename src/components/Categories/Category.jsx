import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const categories = async () => {
  const response = await axios.get("http://localhost:3001/categories/1");
  return response.data;
};

export default function Category() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: categories,
  });
  return <div></div>;
}
