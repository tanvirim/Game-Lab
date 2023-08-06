import { useState } from "react";
import { Text, Button } from "@chakra-ui/react";
interface Props {
  text: string;
  maxLength: number;
}
const ExpandableText = ({ text, maxLength }: Props) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  if (!text) return null;

  return (
    <Text>
      {showFullText ? `${text}  ` : `${text.slice(0, maxLength)}...  `}
      {text.length > maxLength && (
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={toggleText}
        >
          {showFullText ? "Show Less" : "Read More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
