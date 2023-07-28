import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

import apiClient, { FetchResponse } from "../services/api-client";

import { Platform } from "./usePlatform";
 
export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>

 useQuery <FetchResponse<Game> , Error >({ 
  queryKey: [ 'games', gameQuery] ,

  queryFn: ()=>
      apiClient<FetchResponse<Game>>('/games',{ params: {
       genres: gameQuery.genre?.id,
         parent_platforms: gameQuery.platform?.id,
       ordering: gameQuery.sortOrder,
       search: gameQuery.searchText,
        }})
        .then(res => res.data),
  


 })

export default useGames;
