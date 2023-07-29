import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';
import UseData from './useData';
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

  useQuery<FetchResponse<Game> ,Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getData({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
