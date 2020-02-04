import React from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'


import {
  Nav,
  SocialMediaUL,
  LinkTo,
 } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SocialMediaUL>
              <li>
                <LinkTo to="//github.com/Davi-Silva" target="_blank">
                  <FaGithub />
                </LinkTo>
              </li>
              <li>
                <LinkTo to="//www.linkedin.com/in/davicsilva/" target="_blank">
                  <FaLinkedin />
                </LinkTo>
              </li>
            </SocialMediaUL>
          </div>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar;