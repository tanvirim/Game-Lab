import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface FooterProps {
  githubUrl: string;
}

const Footer: React.FC<FooterProps> = ({ githubUrl }) => {
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
    fontFamily: "'Pacifico', cursive", // Fancy font
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const linkHoverStyle: React.CSSProperties = {
    color: "blue",
  };

  return (
    <Box>
      <footer style={footerStyle}>
        <Text>
          {" "}
          All rights reserved by Tanvir Mitul &copy; {new Date().getFullYear()}
        </Text>
        <p>
          Created by{" "}
          <a
            href={githubUrl}
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanvir Mitul
          </a>
        </p>
      </footer>
    </Box>
  );
};

export default Footer;
