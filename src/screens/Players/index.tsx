import { Header } from "../../components/Header";
import { Highlite } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { ButtonIcon  } from "../../components/ButtonIcon";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Filter } from "../../components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard/Index";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";


export function Players() {

  const [team, setTeam] = useState ("Time A");
  const [players, setPlayers] = useState(["Gaeq"])


    return(
      <Container>
        <Header showBackButton />
        <Highlite 
          tittle="Nome da turma"
          subtittle="Adicione a galera e separe os times"
        />

      <Form>
        <Input 
          placeholder="Nome do participante"
          autoCorrect={false}
          />
        <ButtonIcon icon="add" type="PRIMARY" />
      </Form>

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button 
        tittle="Remover turma"
        type="SECONDARY"
      />

      </Container>  
    );
}