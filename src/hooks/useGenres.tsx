import { useQuery } from "@tanstack/react-query";

import genres from "../constants/genres";

import ms from "ms";
import Genres from "../entities/Genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],

    queryFn: apiClient.getData,

    staleTime: ms("24h"), //24 hours

    initialData: genres,
  });

export default useGenres;
