import { useQuery } from "@tanstack/react-query";


import genres from "../constants/genres";

import APIClient from "../services/api-client";

const apiClient = new APIClient<Genres>('/genres')

export interface Genres {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],

    queryFn: () => apiClient.getData ,


    staleTime: 24 * 60 * 60 * 1000, //24 hours

    initialData: genres,
  });

export default useGenres;
