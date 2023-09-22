import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import IItem from "../../types/Item";
import apiClient from "../../services/apiClient";

const fetchAllItems = async () =>
  (await apiClient.get<IItem[]>("/api/items")).data;

const useFetchAllItems = () =>
  useQuery<IItem[], AxiosError>(["items"], fetchAllItems);

export default useFetchAllItems;
