import { Header } from "../../components/Header";
import { Highlite } from "../../components/Highlight";
import { Container, Content, ImgPessoas } from "./styles";
import Img from "../../../assets/PessoasV.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe um nome da turma.");
      } else {
        await groupCreate(group);
        navigation.navigate("players", { group });
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <ImgPessoas source={Img} />

        <Highlite
          tittle="Nova Turma"
          subtittle="Crie uma turma e adicione pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button tittle="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
