

import { HeroContainer, HeroBg, HeroLeftContainer,HeroRightContainer, Img, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from "./HeroStyle"
import Typewriter from 'typewriter-effect';
import {Bio} from "../../Data/Constants";
import HeroBgAnimation from "../../HeroBgAnimation/Index";
import IMG_1080 from "../../Images/IMG_1080.PNG"
function Hero() {
  return (
    <div id = "about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi , I am <br/> {Bio.name}</Title>
            <TextLoop>
              I am a 
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle> {Bio.description}</SubTitle>
            <ResumeButton  href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={IMG_1080} alt="hero-image"/> 
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero