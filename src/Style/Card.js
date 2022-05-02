import styled from 'styled-components'

export const Card = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 3px;
  text-align: center;
  width: 350px;

  div {
    align-items: center;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 5px;
    padding: 3px;
  }

  p {
    margin-bottom: 15px;
  }
`;
