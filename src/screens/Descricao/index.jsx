import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../Models/planet/PlanetRepository";

export default function Descricao({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("CriarPlanetas", { planet: data, edit: true });
  };

  const deletePlanet = () => {
    planetsRepository.remove(data.id);
    navigation.navigate("Planetas");
  };

  return (
    <View style={styles.container}>
      <Title title="Descrição  do Planeta" />

      {data ? (
        <Text>Detalhes do Planeta</Text>
      ) : (
        <Text>Selecione um Planeta para exibir seus detalhes</Text>
      )}

      <View >
        <View >
          <Text >{data.nome}</Text>

        </View>

        <View>
          <TouchableOpacity onPress={editPlanet}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deletePlanet}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}