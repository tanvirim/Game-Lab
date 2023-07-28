import {useQuery} from "@tanstack/react-query"

import apiClient, { FetchResponse } from "../services/api-client";

import platforms from "../constants/platforms";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useQuery({
  queryKey: ['platforms'],

  queryFn: ()=> 
    apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents" )
    .then(res=> res.data),
  staleTime: 24*60*60*1000 ,//24 hours 
  initialData: platforms,
  
})

export default usePlatform;
