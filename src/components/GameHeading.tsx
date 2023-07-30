import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const Gquery =useGameQueryStore(s=> s.gameQuery)
  
  const platform = usePlatform(Gquery.platformId);
  const genre = useGenre(Gquery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
