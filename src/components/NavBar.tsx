import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";



const NavBar = () => {
  return (
    <HStack padding="10px"> 
      <a  href=" https://game-lab-one.vercel.app/" > 
        <Image src={Logo} boxSize="60px" />
      </a>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
