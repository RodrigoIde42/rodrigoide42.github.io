import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ArrowButton, ArrowIcon, Container, Paragraph, Title, Wrapper } from '../Resume/styles'
import { GlitchyTitle } from '../Home/style'
import { animated, useSpring } from 'react-spring'
import { ContactAddressIcon, ContactChatIcon, ContactGmailIcon, ContactInfo, ContactInfoContainer, ContactLink, ContactName, HireMeButton, HireMeForm, HireMeInput, HireMeTextArea, Spinner } from './styles'
import axios from 'axios'
import { Toaster, toast } from 'sonner'

interface email {
    subject: string,
    name: string,
    email: string,
    message: string,
    honey: string
}

export default function Contact() {
    const [showArrow, setShowArrow] = useState(true);
    const [email, setEmail] = useState<email | {}>({});
    const [loading, setLoading] = useState(false);

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
    });

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

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let propertyName = e.target.name;

        if (propertyName === "name") {
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
    
            let currentDate = `${year}-${month<10?`0${month}`:`${month}`}-${date}`
    
            setEmail({...email, name: e.target.value, subject: e.target.value + " - Job Proposal - " + currentDate});
        } else {
            setEmail({...email, email: e.target.value})
        }
    }

    function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setEmail({...email, message: e.target.value})
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        if (Object.keys(email).length > 0) {
            let data = email as email;

            setLoading(true);
            axios.post('https://formsubmit.co/ajax/rodriigo.ide@gmail.com', {
                _subject: data.subject,
                name: data.name,
                email: data.email,
                message: data.message,
                _honey: data.honey,
                _template: 'table',
            })
            .then(_ => {
                toast.success("Message sent successfully");
                setLoading(false)
            })
            .catch(error => toast.error("Something went wrong\n", error.message));
        }
    }
    
    return (
        <>
            <Toaster richColors />
            <Wrapper>
                <GlitchyTitle $customText="Contact">Contact</GlitchyTitle>
                <ArrowButton as={animated.button} style={props} onClick={() => handleClick('contactInfo')}>
                    <ArrowIcon />
                </ArrowButton>
            </Wrapper>
            <Container id='contactInfo'>
                <Title $textWidth='9.25rem'>Contacts Info</Title>
                <ContactInfoContainer>
                    <ContactInfo>
                        <ContactName><ContactChatIcon /> Phone</ContactName>
                        <Paragraph>+55 (14) 93618-0681</Paragraph>
                    </ContactInfo>
                    <ContactInfo>
                        <ContactName><ContactGmailIcon /> Email</ContactName>
                        <ContactLink href="mailto:rodriigo.ide@gmail.com">rodriigo.ide@gmail.com</ContactLink>
                    </ContactInfo>
                    <ContactInfo>
                        <ContactName><ContactAddressIcon /> Address</ContactName>
                        <Paragraph>Av. Brasil, 404 - Centro(Lácio) - Brazil</Paragraph>
                    </ContactInfo>
                </ContactInfoContainer>
            </Container>
            <Container $position='bottom'>
                <Title $textWidth='5.25rem'>Hire me</Title>
                <HireMeForm id='hireMe' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="honey" 
                        onChange={handleChange}
                        style={{'display' : 'none'}} 
                    />
                    <HireMeInput
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        required
                    />
                    <HireMeInput
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        required
                    />
                    <HireMeTextArea
                        name='message'
                        placeholder='Message'
                        onChange={handleTextAreaChange}
                        rows={6}
                        required
                    />
                    <HireMeButton
                        $loading={loading}
                        type='submit'
                    >
                        {loading ?
                            <Spinner />
                        :
                            "Send message"
                        }
                    </HireMeButton>
                </HireMeForm>
            </Container>
        </>
    )
}