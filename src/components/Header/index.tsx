import { Container, Logo, BackButton, Seta } from "./styles";
import LogoImg from '../../../assets/logo.png';
import SetaImg from "../../../assets/Seta.png"

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return(
        <Container>
            {
            showBackButton &&
            <BackButton>
            <Seta source={SetaImg}/>
            </BackButton>
            }
            <Logo source={LogoImg}/>
        </Container>
    );
}