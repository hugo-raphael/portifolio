import { Container } from "@/styles/Global"
import { AboutMeSection } from "./style"
import { Text } from "@/styles/Text";

export const AboutMe = () => {

    return (
        <AboutMeSection id="sobre-mim">
            <Container>
                <Text as="h6" type="heading3" color="grey5">
                    <Text as="span" type="heading3" color="brand1">
                    {" "}  Hello, {" "}
                    </Text>
                    my name is 
                    <Text as="span" type="heading3" color="brand1">
                    {" "}  Hugo Raphael  {" "}
                    </Text>
                    and I am 19 years old. Currently,
                    I study
                    <Text as="span" type="heading3" color="brand1">
                    {" "}  programming {" "}
                    </Text>
                    at
                    <Text as="span" type="heading3" color="brand1">
                    {" "}  Kenzie Academy Brazil {" "}
                    </Text>
                    and I'm dedicated to 
                    learning everything I can about web development. My trajectory so far 
                    has It was a lot of dedication and commitment to learn and develop as a professional 
                    in the area of technology. My experience with technology mainly involves
                    <Text as="span" type="heading3" color="brand1">
                        {" "} front-end {" "}
                    </Text> 
                    front-end projects with pure 
                    <Text as="span" type="heading3" color="brand1">
                        {" "}  Javascript
                    </Text>
                    , 
                    <Text as="span" type="heading3" color="brand1">
                        {" "}  React {" "}
                    </Text>
                    and 
                    <Text as="span" type="heading3" color="brand1">
                        {" "}  Typescript
                    </Text>, 
                    as well as
                    <Text as="span" type="heading3" color="brand1">
                        {" "}  back-end {" "}
                    </Text> 
                    projects with APIs using 
                    <Text as="span" type="heading3" color="brand1">
                        {" "}  Node.js
                    </Text>
                    . I have sought to deepen 
                    my knowledge in these technologies and also in other programming languages, 
                    such as
                    <Text as="span" type="heading3" color="brand1">
                        {" "}  Python {" "}
                    </Text>
                     and 
                     <Text as="span" type="heading3" color="brand1">
                        {" "}  Java
                    </Text>.
                </Text>
            </Container>
        </AboutMeSection>
    )

}