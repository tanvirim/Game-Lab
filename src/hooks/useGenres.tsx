import { useQuery } from "@tanstack/react-query";


import genres from "../constants/genres";

//npm i -D @types/ms for ts support
import ms from 'ms'
import APIClient from "../services/api-client";
import { Genres } from "../entities/Genres";

const apiClient = new APIClient<Genres>('/genres')


const useGenres = () =>
  useQuery({
    queryKey: ["genres"],

    queryFn: apiClient.getData ,


    staleTime: ms('24h'), //24 hours

    initialData: genres,
  });

export default useGenres;
