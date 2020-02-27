import React from 'react'
import Octicon, {MarkGithub, Mail} from '@primer/octicons-react'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a style={{ textDecoration: `none`, color: `inherit`}} href={props.href}>{props.children}</a>
  </li>
)

// function TestIcon() {
//     return (
//     <React.Fragment>
//       <circle r={5} cx={5} cy={5}/>
//       <circle r={5} cx={15} cy={5}/>
//       <circle r={5} cx={25} cy={5}/>
//     </React.Fragment>
//     )
// }

// TestIcon.size = [30, 10]

export default () => (
    <div style={{border: `1px solid black`, height: `2rem`}}>
        <ul style={{ textAlign: `center` }}>
            <ListLink href="mailto:daniel@drowe.dev">
                <Octicon icon={Mail} size='medium' ariaLabel='GitHub'/>
            </ListLink>
            <ListLink href="https://linkedin/in/danielrowe2">Linkedin Icon</ListLink>
            {/* <ListLink><Octicon icon={TestIcon} /></ListLink> */}
            <ListLink href="https://github.com/DanRowe1/">
                <Octicon icon={MarkGithub} size='medium' ariaLabel='GitHub'/>
            </ListLink>
        </ul>
    </div>
)