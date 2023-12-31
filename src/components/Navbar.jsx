import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdf from "../Assets/../Assets/Shubham_Kamble_Resume.pdf";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";





function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/1WJkyFuotWegmodwgNGxIcNKH_eJIH2QZ/view?usp=sharingg"
    );
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwW5gck3XZ-ZplvVfsBty3qGTKDA-t-jRSQ&usqp=CAU" style={{borderRadius:"20px"}} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                 Home
              </Nav.Link>

              
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"

                onClick={() => updateExpanded(false)}
              >
                {" "}
                Projects
              </Nav.Link>
            </Nav.Item>

           


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                {" "}
                Skills
              </Nav.Link>
            </Nav.Item>
             
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                {" "}
                Contacts
              </Nav.Link>
            </Nav.Item>

           <div style={{marginTop:"5px",marginLeft:"15px"}}>
            
            <Button
                      className="resbut"
                      variant="primary"
                     
                      style={{ maxWidth: "100px" }}
                    >
                      <a
            style={{textDecoration:"none"}}
            href={pdf}
            download={true}
            target={"_blank"}
            rel="noreferrer"
            onClick={downloadResume} 
          >
            Resume 
          </a>
                    </Button>
            
           </div>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
