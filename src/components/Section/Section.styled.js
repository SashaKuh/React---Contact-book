import styled from 'styled-components';

export const SectionWrapper = styled.section`
max-width: 370px;
margin: 0 auto;
margin-top: 60px;
`;

export const SectionTitle = styled.h2`
font-size: 30px;
font-weight: 700;
`;

export const ButtonSubmit = styled.button`
  margin-top: 8px;
  padding: 4px;
  background-color: aliceblue;
  border-radius: 4px;
  border: 1px solid lightgray;
  cursor: pointer;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;