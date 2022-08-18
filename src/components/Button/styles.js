import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 60px;
  background: ${(props) =>
    props.isBack ? "rgba(255, 255, 255, 0.14)" : "#D93856"};
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 2px;
  margin-top: 30px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
