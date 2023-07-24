const Footer = () => {
  const githubUrl = "https://github.com/tanvirim";

  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
    fontFamily: "'Pacifico', cursive", // Fancy font
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const linkHoverStyle = {
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
