import {Wrapper} from "./styles";
import Separator from "../Separator";

function Container({children}) {
  return (
    <>
      <Separator y={20}/>
      <Wrapper>
        {children}
      </Wrapper>
      <Separator y={20}/>
    </>
  )
}

export default Container;
