
import { Container,  Title, Desc, ToggleButtonGroup, ToggleButton, Divider, CardContainer} from "./ProjectStyleComponent"

import {projects} from "../../Data/Constants"
import { useState } from "react"
import ProjectCard from "../Cards/ProjectCard"

function Index({openModal , setOpenModal}) {
  const [toggle , setToggle] = useState("all")
  return (
    <Container id="projects">
        <Title>Projects</Title>
        <Desc>
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
        {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
        ))}
        </CardContainer>
    </Container>
  )
}

export default Index