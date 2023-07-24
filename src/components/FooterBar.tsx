import React from "react";

interface FooterProps {
  githubUrl: string;
}

const Footer: React.FC<FooterProps> = ({ githubUrl }) => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
    fontFamily: "'Pacifico', cursive", // Fancy font
  };

  const linkStyle: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const linkHoverStyle: React.CSSProperties = {
    color: "blue",
  };

  return (
    <footer style={footerStyle}>
      <p>
        All rights reserved by Tanvir Mitul &copy; {new Date().getFullYear()}
      </p>
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
  );
};

export default Footer;
