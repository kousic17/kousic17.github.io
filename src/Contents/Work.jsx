import React, {Component} from 'react'
import { Fade } from "react-reveal";

class Work extends Component {
    render() {
        return(
            <div className="exp">
                <Fade bottom>
                <h1 className="title">Work</h1>
                <div className="org">Software Development Trainee</div>
                <p className="comp">
                    <a href="https://fusionpractices.com" target="_blank" rel="noopener noreferrer">Fusion Practices Technologies</a>
                    <span>•</span>
                    <em style={{fontStyle: "normal"}}>Sep 2018 - Apr 2019 </em>
                </p>
                <p className="role"><span>• Worked as a part of the brand team by developing of creative projects</span>
                    <span>• Partnered with front-end developers and created HTML and CSS-friendly designs.</span>
                    <span>• Knowledge in popular design platforms such as Photoshop and Marvel app, as well as proficiency in HTML and CSS.</span>
                    <span>• Developed storyboards and created concepts for initial stage of production.</span>
                    <span>• Assisted in the developement and execution of concepts and visual ideas.</span>
                    <span>• Developed fully functional responsive prototypes based on business requirements using HTML and CSS.</span>
                    <span>• Performed key role in the development process of UI portion.</span>
                    <span>• Created fully functional design using a popular design platform known as Marvel app.</span>
                    <span>• Worked effectively with design teams to ensure software solutions to improve client.</span></p>

                <div className="org1">Junior Game Tester</div>
                <p className="comp1">
                    <a href="https://www.ubisoft.com" target="_blank" rel="noopener noreferrer">Ubisoft India Studios</a>
                    <span>•</span>
                    <em style={{fontStyle: "normal"}}>Nov 2020 - Nov 2021 </em>
                </p>
                <p className="role1"><span>• One of the main objectives is to make sure that millions of end users will enjoy high quality and bug free products.</span>
                    <span>• Performed detective work for the development team by using keen eye for details and expressing creativity and intuition.</span>
                    <span>• Assuring the fact that the product I was Worked on is at the desired standards to the company, by checking that a sum of well defined criteria is fulfilled.</span>
                    <span>• Performed functional testing activities on company’s projects.</span>
                    <span>• Contributed to the test plan development and communicating with the several teams including functional and specialized QC, developers, project managers, etc.</span>
                    <span>• Proficiency in testing and quality control tools such as JIRA, Confluence, TestRail and Video Recording/Editing software’s like Freemake, AVC etc..</span>
                    <span>• Isolated bugs and found steps to reproduce for identified bugs.</span>
                    <span>• Other related routine product testing as assigned.</span></p>
                </Fade>
                <hr />  
            </div>
        )
    }
}

export default Work