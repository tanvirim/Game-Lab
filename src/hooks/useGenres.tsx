import {useQuery} from "@tanstack/react-query"


import apiClient, { FetchResponse } from "../services/api-client";

import genres from "../constants/genres";

export interface Genres {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],

  queryFn: ()=>
  apiClient.get<FetchResponse<Genres>>('/genres')
  .then(res=> res.data) ,

  staleTime: 24*60*60*1000 ,//24 hours

  initialData: genres,
})

export default useGenres;
