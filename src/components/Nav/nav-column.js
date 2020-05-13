import styled from 'styled-components';

export const NavColumn = styled.div `
// FIXME nav columns don't display on Edge
height: calc(100vh - 2.2rem);
// max-width: 2.2em;
width: 3.5em;
border: 1px solid black;
writing-mode: vertical-rl;
text-align: center;
text-orientation: upright;
overflow: hidden;
padding-right: 1em;
`;