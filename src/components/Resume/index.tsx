import React, { useEffect, useState } from 'react'
import { Image, Paragraph, Title, Wrapper, Content, ArrowIcon, ArrowButton, Circle, InfoContent, DownloadButton, ExperienceEducation, TimeInterval, ExpEduInfo, ExpEduInfoTitle, LanguageSkillsContent, ContentParagraph, Container, CodingSkillsContent, KnowledgesContent, KnowledgeCheckIcon, KnowledgeText, StyledAnimeIcon, InterestContent, StyledProgrammingIcon, StyledGamingIcon } from './styles'
import { GlitchyTitle } from '../Home/style'
import { animated, useSpring } from 'react-spring'
import resume from '../../assets/documents/RodrigoKenjiIde_Resume.pdf';
import InfoTextComponent from './components/InfoText';
import LanguageSkill from './components/LanguageSkill';
import CodingSkill from './components/CodingSkill';
import Interest from './components/Interest';

export default function Resume() {
    const [showArrow, setShowArrow] = useState(true)

    const props = useSpring({
        from: { 
            opacity: 0,
            pointerEvents: 'none' as 'none' 
        },
        to: { 
            opacity: 1,
            pointerEvents: 'auto' as 'auto'
        },
        reset: true,
        reverse: !showArrow,
        delay: 250
    })

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY !== 0 ? setShowArrow(false) : setShowArrow(true)
        })
        
        return () => window.removeEventListener('scroll', () => {
            window.scrollY !== 0 ? setShowArrow(false) : setShowArrow(true)
        })
    }, [])
    
    function handleClick(id: string) {
        window.scrollTo(0, document.getElementById(id)!.offsetTop-85)
    }

    return (
        <>
            <Wrapper>
                <GlitchyTitle $customText="Resume">Resume</GlitchyTitle>
                <ArrowButton as={animated.button} style={props} onClick={() => handleClick("aboutMe")}>
                    <ArrowIcon />
                </ArrowButton>
            </Wrapper>
            <Container id="aboutMe" $position='top'>
                <Title $textWidth='6.625rem'>About me</Title>
                <Content>
                    <Circle>
                        <Image />
                    </Circle>
                    <ContentParagraph>
                        Greetings! I'm Rodrigo Kenji Ide, a Front-End developer. My primary expertise lies in ReactJS, 
                        although I've also delved into connecting with GraphQL APIs, particularly while working on platforms like VTEX IO 
                        for e-commerce. Initially, grappling with these technologies posed challenges, but with perseverance, 
                        I found myself increasingly adept, driven by an insatiable curiosity to learn more. 
                        However, my interests extend beyond Front-End development. I've actively sought out courses to broaden my skill set, 
                        exploring languages such as PHP, Java, and MySQL to expand my programming repertoire.  
                    </ContentParagraph>
                    <InfoContent>
                        <InfoTextComponent desc='Age:' info='21' />
                        <InfoTextComponent desc='Residence:' info='Brazil' />
                        <InfoTextComponent desc='Freelance:' info='Available' />
                        <InfoTextComponent desc='Address:' info='São Paulo, Brazil' />
                        <InfoTextComponent desc='Phone:' info='+55 14 93618-0681' />
                        <InfoTextComponent desc='E-mail:' info='rodriigo.ide@gmail.com' />
                    </InfoContent>
                    <DownloadButton href={resume} download="Rodrigo Kenji Ide Resume" target='__blank' rel='noreferrer'>
                        Download CV
                    </DownloadButton>
                </Content>
            </Container>
            <ExperienceEducation>
                <div>
                    <Title $textWidth='7.625rem'>Experience</Title>
                    <TimeInterval>2022 - Present</TimeInterval>
                    <ExpEduInfo>
                        <ExpEduInfoTitle>Front-End Developer - Auaha</ExpEduInfoTitle>
                        <Paragraph>
                            Developed many websites for ecommerce, working with platforms like Tray and VTEX CMS and IO, 
                            got experience working with Html, CSS, stylus and react, also learned how to get and manipulate data through GraphQL.
                        </Paragraph>
                    </ExpEduInfo>
                </div>
                <div>
                    <Title $textWidth='6.875rem'>Education</Title>
                    <TimeInterval $linePosition='bottom'>2021 - Present</TimeInterval>
                    <ExpEduInfo $borderLeft>
                        <ExpEduInfoTitle>Computer Science University - São Paulo</ExpEduInfoTitle>
                        <Paragraph>
                            Currently studying to get a Bachelor's Degree of Computer Science in Centro Universitário Eurípedes de Marília (UNIVEM),
                            Marília, São Paulo.
                        </Paragraph>
                    </ExpEduInfo>
                    <TimeInterval $linePosition='top'>2018 - 2020</TimeInterval>
                    <ExpEduInfo>
                        <ExpEduInfoTitle>High School Integrated Programming - São Paulo</ExpEduInfoTitle>
                        <Paragraph>
                            Got the basics in logic programming, Html, CSS and PHP. Had a teaching method focused in the job market.
                        </Paragraph>
                    </ExpEduInfo>
                </div>
            </ExperienceEducation>
            <Container>
                <Title $textWidth='10.875rem'>Language Skills</Title>
                <LanguageSkillsContent>
                    <LanguageSkill lang="Portuguese" proficiency={10} />
                    <LanguageSkill lang="English" proficiency={9} />
                    <LanguageSkill lang="Japanese" proficiency={4} />
                </LanguageSkillsContent>
            </Container>
            <Container>
                <Title $textWidth='8.875rem'>Coding Skills</Title>
                <CodingSkillsContent>
                    <CodingSkill name='ReactJs / JavaScript' percentage={95} />
                    <CodingSkill name='HTML / CSS' percentage={90} />
                    <CodingSkill name='PHP / MySQL' percentage={40} />
                    <CodingSkill name='GraphQL' percentage={80} />
                    <CodingSkill name='Java' percentage={45} />
                </CodingSkillsContent>
            </Container>
            <Container>
                <Title $textWidth='7.75rem'>Knowledge</Title>
                <KnowledgesContent>
                    <KnowledgeText><KnowledgeCheckIcon /> Website development</KnowledgeText>
                    <KnowledgeText><KnowledgeCheckIcon /> Responsive Layout</KnowledgeText>
                    <KnowledgeText><KnowledgeCheckIcon /> SQL and NoSQL Databases</KnowledgeText>
                    <KnowledgeText><KnowledgeCheckIcon /> Logic programming</KnowledgeText>
                </KnowledgesContent>
            </Container>
            <Container $position='bottom'>
                <Title $textWidth='6.25rem'>Interests</Title>
                <InterestContent>
                    <Interest 
                        icon={<StyledAnimeIcon />} 
                        interest='Anime / Manga' 
                        desc="I'm an avid fan of anime and manga, with a particular passion for One Piece.
                              I eagerly anticipate each new episode of the anime series, faithfully following its weekly releases." 
                    />
                    <Interest 
                        icon={<StyledProgrammingIcon />} 
                        interest='Programming' 
                        desc="As a programming enthusiast, I enjoy studying languages to create practical solutions for daily life.
                              It's a fulfilling journey of learning and innovation." 
                    />
                    <Interest 
                        icon={<StyledGamingIcon />} 
                        interest='Gaming' 
                        desc="I'm an avid gamer who thrives on hack'n slash and story-rich experiences.
                              From the intricate depths of Hollow Knight to the tranquil charm of Stardew Valley and the emotional journey of Omori, 
                              gaming is my ultimate escape and joy." 
                    />
                </InterestContent>
            </Container>
        </>
    )
}