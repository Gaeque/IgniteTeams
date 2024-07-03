import { Container } from './styles';
import { Highlite } from "../../components/Highlight";
import { Header } from "../../components/Header";
import { GroupCard } from '../../components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '../../components/ListEmpty'; 
import { Button } from '../../components/Button';

export function Groups() {
  const [groups, setGroups] = useState([]);


  return (
    <Container>
      <Header />
      
      <Highlite 
      tittle='Turmas'
      subtittle='Jogue com sua turma'
     />

     <FlatList 
     data={groups}
     keyExtractor={item => item}
     renderItem={({item}) => (
      <GroupCard 
        tittle={item}
     />
     )}
     contentContainerStyle={groups.length === 0 && { flex: 1}}
     ListEmptyComponent={ ()=> (
      <ListEmpty  
        message='Cadastre a primeira turma'  
       />
     )}
     />
    
    <Button 
      tittle='Criar nova turma'
    />



    </Container>
  );
}
