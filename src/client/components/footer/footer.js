import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import '../../styles/footer.scss';

const Footer = () => {
  return (
    <MDBFooter color="#d21134 red darken-4" className="page-footer font-small pt-4 mt-4">
   
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Droits d'auteur : <a href="https://www.IV3A.com"> IV3A.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;