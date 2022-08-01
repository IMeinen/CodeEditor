import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: ${(props) => props.theme.colors.darkBlue};
  overflow-x: hidden;
`;

export default MainContainer;
