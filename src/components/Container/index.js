import React from "react";

import { Container as GeneralContainer } from "./styles";
function Container({ children, ...rest }) {
  return <GeneralContainer {...rest}>{children}</GeneralContainer>;
}
export default Container;
