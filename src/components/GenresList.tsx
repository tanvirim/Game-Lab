import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import  Genres  from "../entities/Genres";
import getCropedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";



const GenresList = () => {
  const { data, isError, isLoading } = useGenres();
  
   const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId)
   const setGenreId  = useGameQueryStore(s=>s.setGenreId)

  if (isLoading) {
    return <Spinner></Spinner>; 
  }

  if (isError) {
    return <div> {isError}</div>; 
  }

  return (
    <>
      <Heading fontSize="2xl" paddingLeft={7}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginBottom={2}>
              <Image
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
