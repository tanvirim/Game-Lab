import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCropedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/game/${game.slug}`}>
<Card borderRadius="10px">
      <Image src={getCropedImageUrl(game.background_image)} />

        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList game={game} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>{" "}
        </CardBody>
    </Card>
    </Link>
  );
};

export default GameCard;
