import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import car from "../assets/img/car.png";
import job from "../assets/img/jobs.png";
import social from "../assets/img/socials.png";
import DA from "../assets/img/DA.png";
import treadmill from "../assets/img/market_research.png"

import chatbot from "../assets/img/Chat_bot_amico.png"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [


    
    {
      title: "Sentiment Analysis Chatbot",
      description: "Sentiment Analyzer Chatbot Made Using DistilBert",
      imgUrl: chatbot,
      url:"https://github.com/ZehraArshad/Sentecare"
    },

    {
      title: "Car Price Prediction",
      description: "Regressor For Price Prediction",
      imgUrl: car,
      url:"https://github.com/ZehraArshad/Exploratory-Data-Analysis/tree/main/car_pred"
    },


    {
      title: "AeroFit's Treadmill Analysis",
      description: "Exploratory Data Analysis, Market Research",
      imgUrl: treadmill,
      url:"https://github.com/ZehraArshad/Exploratory-Data-Analysis/tree/main/Aerofit_Treadmill_Data"
    },



    {
      title: "Car Data Analysis",
      description: "Excel Advanced Formulas",
      imgUrl: car,
      url:"https://github.com/ZehraArshad/Excel_Github/tree/main/Car_Data"
    },

    // i will what were the projects about and what actually were the insights
    {
      title: "Job Analysis Using SQL",
      description: "SQL Joins and CTE",
      imgUrl: job,
      url:"https://github.com/ZehraArshad/sql/blob/main/README.md",
  
    },
    {
      title: "Social Media Campaign Analysis",
      description: "Data Cleaning and Visualization in Excel",
      imgUrl: social,
      url:"https://github.com/ZehraArshad/Excel_Github/tree/main/Social%20Media%20Campaign%20Data",
    },
    {
      title: "Excel Portfolio Project",
      description: "Using Vlookups, Index Matching and Filter Functions",
      imgUrl: DA,
      url:"https://github.com/ZehraArshad/Excel_Github/tree/main/Excel%20Portfolio",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      {/* <Nav.Link eventKey="first">Tab 1</Nav.Link> */}
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
