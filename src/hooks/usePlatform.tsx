import { useQuery } from "@tanstack/react-query";
import platforms from "../constants/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getData,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours 
    initialData: platforms,
  });

export default usePlatform;
