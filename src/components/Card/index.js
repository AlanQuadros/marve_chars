import {CardContainer, Name} from "./styles";
import {parseImage} from "../../utils";

function Card({character}) {
  return (
    <CardContainer img={parseImage(character.thumbnail)}>
      <Name>{character.name}</Name>
    </CardContainer>
  )
}

export default Card;
