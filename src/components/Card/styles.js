import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
  background: ${({img}) => `url(${img})`} no-repeat;
  background-size: cover;
  width: 216px;
  height: 324px;
  margin: 10px 0;
`

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
`
