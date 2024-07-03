import { Container, Tittle, Icon } from "./styles";
import IconPessoas from "../../../assets/Pessoas.png";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    tittle: string;
}

export function GroupCard( {tittle, ...rest} : Props) {
    return(
        <Container {...rest}>
        <Icon source={ IconPessoas } />
        <Tittle>{tittle}</Tittle>
        </Container>
     );
}