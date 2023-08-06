import { GridItem, Heading, SimpleGrid, Spinner, Text ,Box} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";

import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) {
    console.error("Error fetching game game:", error);
    return <Text>Error fetching game game.</Text>;
  }

  if (!game) {
    return <Text>No game available for the provided slug.</Text>;
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading> {game.name}</Heading>
          <ExpandableText text={game.description_raw} maxLength={300} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <Box marginBottom={3}> <GameTrailer gameId={game.id} /> </Box>
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
