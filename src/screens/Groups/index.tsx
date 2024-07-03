import { Container } from './styles';
import { Highlite } from "../../components/Highlight";
import { Header } from "../../components/Header";
import { GroupCard } from '../../components/GroupCard';


export function Groups() {
  return (
    <Container>
      <Header />
      
      <Highlite 
      tittle='Turmas'
      subtittle='Jogue com sua turma'
     />

    <GroupCard 
    tittle="Oi" />

    </Container>
  );
}
