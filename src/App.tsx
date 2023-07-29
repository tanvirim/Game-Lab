import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/FooterBar";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";


export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  
}

function App() {
  // State to manage the game query
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const githubUrl = "https://github.com/tanvirim";
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      
      <GridItem area="nav" bg="">
        <NavBar
 
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
       
        <GridItem area="aside" bg="" paddingX="5px">
          <GenresList
      
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          />
        </GridItem>
      </Show>

      {/* Main section */}
      <GridItem area="main" bg="">
        <Box paddingLeft={2}>

          <GameHeading gameQuery={gameQuery} />

          
          <HStack spacing={5} marginBottom={5}>

            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId:platform.id })
              }
            />

            <SortSelector
              selectedSort={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>


        <GameGrid gameQuery={gameQuery} />
      </GridItem>

      <GridItem area="footer">
        <Footer githubUrl={githubUrl} />
      </GridItem>
    </Grid>
  );
}

export default App;
