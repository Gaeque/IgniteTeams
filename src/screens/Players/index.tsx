import { Header } from "../../components/Header";
import { Highlite } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { ButtonIcon  } from "../../components/ButtonIcon";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Filter } from "../../components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "../../components/PlayerCard/Index";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AppError } from "../../utils/AppError";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "../../storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "../../storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const newPlayerNameInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      newPlayerNameInputRef.current?.blur();
      fetchPlayersByTeam();
      setNewPlayerName("");

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar.");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    }
  }

  async function handlePlayerRemove(playerName: string) {
      try {
        await playerRemoveByGroup(playerName, group)
        fetchPlayersByTeam();
      } catch (error) {
        Alert.alert("Remover pessoa", "Não foi possível remover a pessoa selecionada.")
      }
  }

  async function groupRemove() {
     try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
         } catch (error) {
      Alert.alert("Remover grupo", "Não foi possível remover o grupo")
     }
  }

  async function handleGroupRemove() {
    Alert.alert(
      "Remover", 
      "Deseja remover a turma?",
      [
        {text: "Não", style: "cancel"},
        {text: "Sim", onPress: () => groupRemove()}
      ]
      )
  }


    useEffect(() => {
      fetchPlayersByTeam();
    },[team]);


  return (
    <Container>
      <Header showBackButton />
      <Highlite
        tittle={group}
        subtittle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          inputRef = { newPlayerNameInputRef }
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome do participante"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} icon="add" type="PRIMARY" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => handlePlayerRemove(item.name)} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button tittle="Remover turma" type="SECONDARY" onPress={handleGroupRemove} />
    </Container>
  );
}