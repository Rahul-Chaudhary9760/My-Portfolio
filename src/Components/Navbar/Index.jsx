import React from "react"
import { Link  } from 'react-router-dom';
import { Nav, StyledNavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink} from "./NavStyledComponent"
import { DiCssdeck } from 'react-icons/di';
import { Bio } from "../../Data/Constants";
import { FaBars } from 'react-icons/fa';
import { useTheme } from "styled-components"


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
        <Link  to='/' style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </Link>
        </NavLogo>
        <MobileIcon>
        <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          
          <StyledNavLink href="#about">About</StyledNavLink>
          <StyledNavLink href="#skills">Skills</StyledNavLink>
          <StyledNavLink href='#experience'>Experience</StyledNavLink>
          <StyledNavLink href='#projects'>Projects</StyledNavLink>
          <StyledNavLink href='#education'>Education</StyledNavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton to={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        { 
          isOpen && 
          <MobileMenu  isOpen={isOpen} >
            <MobileLink  href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',
              background: `${theme.primary}`,
              color: 'white',width: 'max-content'}} 
              to={Bio.github} target="_blank">
              Github Profile
            </GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar