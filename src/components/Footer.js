import React from "react";

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
    </div>
  );
};

// import { Row } from "react-bootstrap";

// <Row>
//   <Heading>Social Media</Heading>
//   <FooterLink href="#">
//     <i className="facebook">
//       <span style={{ marginRight: "10px" }}>Facebook</span>
//     </i>
//   </FooterLink>
//   <FooterLink href="#">
//     <i className="instagram">
//       <span style={{ marginRight: "10px" }}>Instagram</span>
//     </i>
//   </FooterLink>
//   <FooterLink href="#">
//     <i className="twitter">
//       <span style={{ marginRight: "10px" }}>Twitter</span>
//     </i>
//   </FooterLink>
// </Row>;

// import React from "react";
// import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

// const SocialButtonsPage = () => {
//   return (
//     <MDBContainer>
//       <MDBBtn social="fb">
//         <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
//       </MDBBtn>
//     </MDBContainer>
//   );
// };
export default Footer;
