import { Header } from "../../components/Header";
import { Highlite } from "../../components/Highlight";
import { Container, Content, ImgPessoas } from "./styles";
import  Img  from "../../../assets/PessoasV.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function NewGroup() {
    return ( 
        <Container>
            <Header showBackButton/>
        <Content> 
            <ImgPessoas source= { Img } />

            <Highlite 
                tittle="Nova Turma"
                subtittle="Crie uma turma e adicione pessoas"
            />
            <Input 
            placeholder="Nome da turma"
        
            />
            <Button  tittle="Criar"/>
        </Content>

        </Container>
    );
}