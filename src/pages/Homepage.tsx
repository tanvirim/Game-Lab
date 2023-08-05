import { Grid, Show, GridItem, HStack,Box } from "@chakra-ui/react"

import Footer from "../components/FooterBar"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenresList from "../components/GenresList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"


const Homepage = () => {
    const githubUrl = "https://github.com/tanvirim";
  return (
    <Grid
    templateAreas={{
      base: `"main" "footer"`,
      lg: `"aside main" "footer footer"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
  >
    
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
  )
}

export default Homepage
