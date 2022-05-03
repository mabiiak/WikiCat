import styled from 'styled-components'

export const HeaderStyle = styled.header`
  align-items: center;
  background-color: #f1f9f3;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 15px;
  
  .title {
    color: black;
    font-size: 25px;
    margin-left:40px;
    text-decoration:none;
  }

  nav {
    display: flex;
    flex-direction: row;
    margin-right:40px;

    a, p {
      color: black;
      margin-bottom: 2px;
      margin-left: 40px;
      text-decoration:none;
    };

    text-align: right;
  }
`
