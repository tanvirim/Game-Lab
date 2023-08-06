import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";


export interface Game {
  name: string;
  id: number;
  genres: Genres[],
  publishers: Publishers[]
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}
