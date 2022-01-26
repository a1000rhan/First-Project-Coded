import React from "react"; //bb

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="social-media">
      <h5>follow us on</h5>
      <a
        href="https://www.facebook.com/campaign/landing.php"
        className="FaceBook"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a
        className="Twitter"
        href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        className="Instagram"
        href="https://www.instagram.com/accounts/emailsignup/?hl=en"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <p>Copy right © 2022 AjyalTech</p>
    </div>
  );
};

export default Footer;
