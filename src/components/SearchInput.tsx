import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react"; // Import useState
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../index.css";
import useGameQueryStore from "../store";


const SearchInput = () => {
 const setSearchText = useGameQueryStore(s=> s.setSearchText)
  const ref = useRef<HTMLInputElement> (null)
 const navigate = useNavigate()
  return (
    <form onSubmit={(e)=>
    {
      e.preventDefault()
      if(ref.current) setSearchText(ref.current.value)
      navigate("/")

    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
        <Button marginLeft={2} type="submit" borderRadius={15}>
          Search
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
