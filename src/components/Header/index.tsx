import { Container, Logo, BackButton, Seta } from "./styles";
import LogoImg from '../../../assets/logo.png';
import SetaImg from "../../../assets/Seta.png"
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate("groups");
    }

    return(
        <Container>
            {
            showBackButton &&
            <BackButton onPress={handleGoBack}>
            <Seta source={SetaImg}/>
            </BackButton>
            }
            <Logo source={LogoImg}/>
        </Container>
    );
}