import React, {Component} from 'react'

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://stackoverflow.com/users/9793772/Kousic" target="_blank" rel="noreferrer noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                        <symbol id="stackoverflow" viewBox="0 0 120 120">
                            <path fill="var(--color-1)" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/>
                            <path fill="var(--color-2)" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/>
                        </symbol>
                    </svg>
                    <svg className="icon" style={{color: "#FFF"}}>
                        <use xlinkHref="#stackoverflow"/>
                    </svg>
                </a>
                <a href="https://github.com/Kousic17" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/kousic-srinivas-b6876477" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/kousic.srinivas/" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/uchiha17kousik" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
}

export default Social