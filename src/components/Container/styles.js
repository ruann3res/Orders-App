import styled from "styled-components";

import Background from "../../Assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: ${(props) => (props.isHome ? "130vh" : "210vh")};
`;
