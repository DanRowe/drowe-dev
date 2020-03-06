import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid black;
  height: 2.2rem;
  width: 100%;
  bottom: 0;
  position: absolute;
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;