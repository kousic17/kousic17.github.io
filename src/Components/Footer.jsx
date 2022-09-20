import React, {Component} from "react";
import { Fade } from "react-reveal";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Footer extends Component {
  render() {
    const style = {
      width: "500px",
      height: "350px",
    };
    return (
      <Fade bottom>
        <div className="footer">
          <h1 className="fhead">GET IN TOUCH</h1>
          <div className="map">
            <Map
              google={this.props.google}
              zoom={10}
              initialCenter={{
                lat: 10.7661821,
                lng: 79.1319186
              }}
              style={style}
            >
              <Marker />
            </Map>
          </div>
          <p className="fcontent">
            Let's work together and build something
            <br /> awesome. Let's turn your idea into even
            <br /> greater product.
          </p>
          <div className="email">
            <a
              className="btn btn-primary h-full-width"
              href="mailto:kousic.it@gmail.com"
            >
              Let's Connect
            </a>
          </div>
          <div className="social">
            <a
              href="https://stackoverflow.com/users/9793772/Kousic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol id="stackoverflow" viewBox="0 0 120 120">
                  <path
                    fill="var(--color-1)"
                    d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"
                  />
                  <path
                    fill="var(--color-2)"
                    d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"
                  />
                </symbol>
              </svg>
              <svg className="icon" style={{ color: "#FFF" }}>
                <use xlinkHref="#stackoverflow" />
              </svg>
            </a>
            <a
              href="https://github.com/Kousic17"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kousic-srinivas-b6876477"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/kousic.srinivas/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/uchiha17kousik"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <p className="copy">
            Copyright &copy; 2020 | by{" "}
            <a href="https://kousic17.github.io">Kousic</a>
          </p>
        </div>
      </Fade>
    );
  }
}

export default GoogleApiWrapper({
    version: "3"
})(Footer);
