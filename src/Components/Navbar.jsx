import React, {Component} from 'react'
import {Link} from 'react-scroll'
import { Fade } from "react-reveal";
import profilepic  from '../Img/Kousic.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../Components/Social'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            'navBackground': "transparent"
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundColor = window.scrollY > 350 ? "rgb(51, 51, 51)" : "transparent";
            this.setState({navBackground: backgroundColor});
        })
    }

    render() {    
        return (
            <header className="main">
                <Fade top>
                <nav className="nav-wrap">
                    <ul className="nav" style={{backgroundColor: `${this.state.navBackground}`}}>
                        <Link activeClass="active" to="main" spy={true} smooth={true} duration={1000}>
                            Home
                        </Link>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                            About
                        </Link>
                        <Link activeClass="active" to="role1" spy={true} smooth={true} duration={1000}>
                            Education
                        </Link>
                        <Link activeClass="active" to="course" spy={true} smooth={true} duration={1000}>
                            Skills
                        </Link>
                        <Link activeClass="active" to="para" spy={true} smooth={true} duration={1000}>
                            Contact
                        </Link>
                    </ul>
                </nav>
                <div className="condiv pic"> 
                    <img src={profilepic} className="profilepic" alt="Profilepic"></img>
                    <ReactTypingEffect className="typingeffect" text={['Kousic Srinivasan', 'UI/UX designer']} speed={100} eraseDelay={700}/>
                    <Social />
                </div>
                </Fade>
            </header>
        )
    }
}

export default Navbar