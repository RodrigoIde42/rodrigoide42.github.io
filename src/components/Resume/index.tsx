import React from 'react'
import { Image, Paragraph, Title, Wrapper } from './styles'

export default function Resume() {
    return (
        <div>
            <Title>Who am I?</Title>
            <Wrapper>
                <Image />
                <Paragraph>
                    Greetings! I'm Rodrigo Kenji Ide, a Front-End developer, i have been working with reactJS and sometimes i needed to
                    connect with GraphQL API's, as i needed to program in a platform for ecommerces - VTEX IO - and it was not easy in the beginning,
                    but as i continued to work, it became easier and the curiosity to learn more consumed me, although I'm not just stuck with
                    Front-End, as I searched some courses to learn other languages, as PHP, Java and MySQL.  
                </Paragraph>
            </Wrapper>
        </div>
    )
}