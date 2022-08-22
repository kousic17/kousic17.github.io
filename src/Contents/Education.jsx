import React, {Component} from 'react'
import { Fade } from "react-reveal";

class Education extends Component {
    render() {
        return (
            <div className="edu">
                <Fade bottom>
                <h1 className="title1">Education</h1>
                <div className="head">B.Tech Information Technology</div>
                <p className="univ">
                    <a href="https://www.sastra.edu" target="_blank" rel="noopener noreferrer">Sastra University, Thirumalaisamudram</a>
                    <span>•</span>
                    <em style={{fontStyle: "normal"}}>2014 - 2018</em>
                </p>
                <p className="course">Completed B.Tech in Information Technology from SASTRA University ranked by global ranking agencies such as Times Higher
                                    Education and QS. Shown keen interest in several major courses like C, C++, Computer Networks, Cryptography & Network Security, 
                                    Web Services etc,. I completed project in <i>"An Improved Overlapping K-Mean Clustering Method For Medical Applications"</i> during final year. 
                                    Also participated in college culturals held in the year 2015.</p>
                
                <div className="head1">Diploma in Computer Technology</div>
                <p className="dip">
                    <a href="http://sptc.sastra.edu" target="_blank" rel="noopener noreferrer">Shanmuga Polytechnic College, Thirumalaisamudram</a>
                    <span>•</span>
                    <em style={{fontStyle: "normal"}}>2010 - 2013</em>
                </p>
                <p className="course">Successfully completed Diploma in Computer Engineering as a vocational course. I have pre-gained some knowledge about C, Data structures,
                                      Java programming, Web designing, Database Management Systems, Computer Graphics and Multimedia courses from the diploma itself.</p>
                </Fade>
                <hr />  
            </div>
        )
    }
}

export default Education