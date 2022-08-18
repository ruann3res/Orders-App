import styled from "styled-components";

export const Image = styled.img`
  margin-top: 40px;
`;
export const sa = styled.li`
  border: 1px solid white;
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  width: 342px;
  height: 121px;
  button {
    margin-right: 30px;
    cursor: pointer;
    background: none;
    border: none;
  }
`;
export const Order = styled.li`
  border: 1px solid white;
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  width: 342px;
  height: 101px;
  button {
    margin-right: 30px;
    cursor: pointer;
    background: none;
    border: none;
  }
`;

export const OrderPainel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
  margin: 0 0 20px 27px;
  p {
    font-weight: 900;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }
`;
