import styled from 'styled-components'

export const HeaderStyle = styled.header`
  align-items: center;
  background-color: #f1f9f3;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 15px;
  
  h2 {
    margin-left:25px;
  }

  nav {
    display: flex;
    flex-direction: row;
    margin-right:25px;

    a, p {
      color: black;
      margin-bottom: 2px;
      margin-left: 40px;
      text-decoration:none;
    };

    text-align: right;
  }
`
