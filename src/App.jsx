import './App.css'
import styled , {ThemeProvider} from "styled-components"
import {darkTheme} from "./utils/Themes"
import Navbar from "./Components/Navbar/Index"
import Skills from "./Components/Skills/Index"
import Hero from "./Components/HeroSection/Index"
import Expriences from "./Components/Expriences/Index"
import { BrowserRouter as Router } from 'react-router-dom';
import Project from "./Components/Project/Index"
import { useState } from 'react'
import Education from './Components/Education'
import Contact from "./Components/Contact/Index"
import Footer from "./Components/Footer/Index"                                                                                          

const Body = styled.div`
background-color : ${({theme}) => theme.bg};
width:100% ;
height:100%;
overflow-x: hidden
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
//Add Project Details


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModel , setOpenModel] = useState({State:false , Project:null});
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
          <Expriences/>
        </Wrapper>
        <Project openModel={openModel} setOpenModel = {setOpenModel}/>
        <Wrapper>
          <Education/>
          <Contact/>
        </Wrapper>
        <Footer/>
        
      </Body>
      </Router>
      
    </ThemeProvider>
  )
}

export default App
