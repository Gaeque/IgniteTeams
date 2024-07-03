import { IconPessoas } from "../../../assets/Pessoas.png";
import { Container, Tittle, Icon } from "./styles";

type Props = {
    tittle: string;
}

export function GroupCard( {tittle} : Props) {
    return(
        <Container>
        <Icon>{IconPessoas}</Icon>
        <Tittle>{tittle}</Tittle>
        </Container>
     );
}