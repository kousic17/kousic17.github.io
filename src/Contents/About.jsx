import React, {Component} from 'react'
import { Fade } from "react-reveal";

class About extends Component {
    render() {
        return (
            <div className="about">
                <Fade bottom>
                <h1 className="subtopic">About Me</h1>
                     <p>Having good working experience on products as a Software Development Trainee while also having experience on Quality Control throughout my career. 
                        What's crucial for me when starting one is to get very clear on the goals right at the start and then create a plan with milestones. 
                        So, in case there are any significant issues during production, I'll still have a better amount of time to complete before the deadline. 
                        I always typically break down larger tasks into smaller chunks, which will be easier for me to know where to start. 
                        I also played some important roles in the aspect of software development.
                        <br/>
                        <br/>
                        <span>•</span>UX design depends on understanding customer needs, goals, motivations, and behaviors. So, I communicate with the users, technical 
                        teams to collect the user requirements, describe software product features and designs.
                        <br/>
                        <span>•</span>Employed the design practice of Information Architecture by structuring, labelling, wireframing to create an illustration that showcases
                        how the final product (website or app) will look like.
                        <br/>
                        <span>•</span>Sharing the product with other team members, including management to check the product's usability and functionality thoroughly.
                        <br/>
                        <span>•</span>Continuously tested to see that it meets customer satisfaction. A common measurement is how likely a customer is to recommend the product to others </p>
                </Fade>
                    <hr />
            </div>
        )
    }
}

export default About