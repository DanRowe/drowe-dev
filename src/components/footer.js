import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a style={{ textDecoration: `none`, color: `inherit`}} href={props.href}>{props.children}</a>
  </li>
)

TestIcon.size = [30, 10]

export default () => (
    <div style={{border: `1px solid black`, height: `2.2rem`}}>
        <ul style={{ textAlign: `center`, paddingTop: `.1em` }}>
            <ListLink href="mailto:daniel@drowe.dev">
                <FaEnvelope size="1.7em"/>
            </ListLink>
            <ListLink href="https://linkedin/in/danielrowe2">
                <FaLinkedinIn size="1.7em"/>
            </ListLink>
            <ListLink href="https://github.com/DanRowe1/">
                <FaGithub size="1.9em"/>
            </ListLink>
        </ul>
    </div>
)