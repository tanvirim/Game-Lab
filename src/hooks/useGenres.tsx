import {useQuery} from "@tanstack/react-query"

import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genres {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: ()=>
  apiClient.get<FetchResponse<Genres>>('/genres')
  .then(res=> res.data)
})

export default useGenres;
