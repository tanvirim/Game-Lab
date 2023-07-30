import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';

import { Platform } from './usePlatforms';
import ms from 'ms';
import useGameQueryStore from '../store';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () =>
{
  const gameQuery = useGameQueryStore(s=>s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game> ,Error>({
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
      staleTime: ms('24h'),
  })

}
export default useGames;
