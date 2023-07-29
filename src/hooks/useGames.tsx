import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';

import { Platform } from './usePlatform';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>

  useInfiniteQuery<FetchResponse<Game> ,Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) =>
      apiClient.getData({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam ,
        },
      }),
      keepPreviousData: true ,
      
      getNextPageParam: (lastPage, allpages) => {
        return lastPage.next? allpages.length + 1 : undefined;
      },
      staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
