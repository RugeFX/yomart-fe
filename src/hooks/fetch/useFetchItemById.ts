import { AxiosError } from "axios";
import IItem from "../../types/Item";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";

const fetchItemById = async (id: number) =>
  (await apiClient.get<IItem>(`/api/items/${id}`)).data;

const useFetchItemById = (id: number) =>
  useQuery<IItem, AxiosError>(["items", { id }], () => fetchItemById(id), {
    enabled: !!id,
  });

export default useFetchItemById;
