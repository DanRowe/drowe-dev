import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons";
import styled from 'styled-components'

export const Wrapper = styled.div`
  border-top: 1px solid  !important;
  height: 2.2rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 1;
`;

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0px`}}>
        <a style={{ textDecoration: `none`}} href={props.href}>{props.children}</a>
    </li>
)


export default () => (
    <Wrapper className="bg-primary">
        {/* TODO top padding for icons  */}
        <ul style={{ textAlign: `center`, paddingTop: `.1em`, paddingBottom: `0`, marginBottom: `0`}}>
            <IconContext.Provider value={{color: "white", size: "1.4em"}}>
                <ListLink href="mailto:daniel@drowe.dev">
                    <FaEnvelope/>
                </ListLink>
                <ListLink href="https://linkedin.com/in/danielrowe2">
                    <FaLinkedinIn/>
                </ListLink>
                <ListLink href="https://github.com/DanRowe1/">
                    <FaGithub/>
                </ListLink>
            </IconContext.Provider>
        </ul>
    </Wrapper>
)