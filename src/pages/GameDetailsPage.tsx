import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
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
      <Heading> {game.name}</Heading>
      <ExpandableText text={game.description_raw} maxLength={300} />
      <GameAttributes game={game}/>
      <GameTrailer gameId={game.id}/>
      <GameScreenshots gameId={game.id}/>

    </>
  );
};

export default GameDetailsPage;
