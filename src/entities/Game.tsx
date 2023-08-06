import { Platform } from "./Platform";


export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}
