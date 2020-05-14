import styled from 'styled-components';

export const NavColumn = styled.div `
// FIXME nav columns don't display on Edge
height: calc(100vh - 2.2rem);
width: 3em;
border: 1px solid gray;
border-width: 1px !important;
border-radius: 8px;
writing-mode: vertical-rl;
text-align: center;
text-orientation: upright;
overflow: hidden;
padding-right: .65em;
`;