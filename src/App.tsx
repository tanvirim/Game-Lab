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





function App() {
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
        <NavBar />
      </GridItem>

      <Show above="lg">
       
        <GridItem area="aside" bg="" paddingX="5px">
          <GenresList />
        </GridItem>
      </Show>

      {/* Main section */}
      <GridItem area="main" bg="">
        <Box paddingLeft={2}>

          <GameHeading  />

          
          <HStack spacing={5} marginBottom={5}>

            <PlatformSelector/>

            <SortSelector/>
          </HStack>
        </Box>


        <GameGrid  />
      </GridItem>

      <GridItem area="footer">
        <Footer githubUrl={githubUrl} />
      </GridItem>
    </Grid>
  );
}

export default App;
