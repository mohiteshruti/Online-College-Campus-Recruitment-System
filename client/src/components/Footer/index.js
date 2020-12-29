import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer style={{ paddingTop: 75 }}>
      <Navbar
        className="shadow-sm justify-content-center"
        bg="light"
        variant="light"
        fixed="bottom"
      >
        <Navbar.Text>
          © 2020{' '}
          <a
            href="http://www.walchandsangli.ac.in/trainingandplacement/trainingandplacement.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walchand College Of Engineering, Sangli
          </a>
        </Navbar.Text>
      </Navbar>
    </footer>
  );
};

export default Footer;
