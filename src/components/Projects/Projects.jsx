import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import modesens from "../../Assets/Projects/modesens.png";
import jcrew from "../../Assets/Projects/jcrew.png";
import bonsai from "../../Assets/Projects/bonsai.png";
import nyresa from "../../Assets/Projects/nyresa.png"
import snp from "../../Assets/Projects/snp.png"
import sresume from "../../Assets/Projects/sresume.png"
import chtamate from "../../Assets/Projects/chtamate.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sresume}
              
              title="My Portfolio"
              description="A website that display your skills and your education. Technology used in this project is React Js, HTML, CSS."

              stacks="HTML | CSS | REACTJS"
              ghLink="https://github.com/shubhamkamble20/shubham-kamble-portfolio"
              demoLink="https://shubhamkamble20.github.io/shubham-kamble-portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snp}
              
              title="Secure Password Generator"
              description="A website helps you to generate secure passwords.Technology used in this project is React Js, HTML, CSS.
              "
              stacks="HTML | CSS | REACTJS"
              ghLink="https://github.com/shubhamkamble20/secure-password-generator"
              demoLink="https://shubhamkamble20.github.io/secure-password-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chtamate}
              
              title="Chatmate"
              description="A website helps you to chat with your friends. Tech: HTML,CSS,React.
              "
              stacks="HTML | CSS | REACTJS"
              ghLink="https://github.com/shubhamkamble20/chatmate"
              demoLink="https://shubhamkamble20.github.io/chatmate/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonsai}
              
              title="Bonsai.com (Clone)"
              description="A website that is dedicated to helping companies
              and independent talent work better together.
              "
              stacks="REACT JS | CHAKRA UI"
              ghLink="https://github.com/surya382/subdued-neck-2197"
              demoLink="https://heartfelt-boba-41e001.netlify.app/"              
            />
          </Col> */}
          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyresa}
              
              title="Mytheresa.com (Clone)"
              description="It is an e-commerce website where users can buy products such as clothings,
               apparels etc. It is a collaborative project. 
              "
              stacks="REACT JS | CHAKRA UI | REDUX"
              ghLink="https://github.com/himanshudestiny/numerous-governor-3295"
              demoLink="https://numerous-governor-3295.netlify.app/"              
            />
          </Col> */}
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
