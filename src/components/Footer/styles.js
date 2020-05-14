import styled from 'styled-components'

export const Wrapper = styled.div`
  border-top: 1px solid  !important;
  height: 2.2rem;
  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 1;
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