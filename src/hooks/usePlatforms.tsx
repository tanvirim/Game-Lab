import { useQuery } from "@tanstack/react-query";
import platforms from "../constants/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getData,
    staleTime: ms('24h'), // 24 hours 
    initialData: platforms,
  });

export default usePlatforms;
