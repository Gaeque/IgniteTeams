import { ButtonTypeStyleProps, Container, Tittle } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    tittle: string;
    type?: ButtonTypeStyleProps;
};

export function Button({ tittle, type = "PRIMARY", ...rest}: Props) {
   return (
    <Container 
        type={type}
        {...rest}
    >
       <Tittle>
        {tittle}
        </Tittle> 
    </Container>
   ); 
}

