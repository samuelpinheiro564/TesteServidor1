import styles from "./styles";
import Title from "../../components/Title";
import planetsRepository from "../../Models/planet/PlanetRepository";
import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";


export default function Planetas() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [todosUsuarios, setTodosUsuarios] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetsRepository.getAll();
      setTodosUsuarios(planets);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="Planetas"/>
      <Text>Tela de listagem de todos os Planetas</Text>

      {todosUsuarios.length > 0 ? (
        <View >
          {todosUsuarios.map((planet) => (
            <View key={planet.id} >
              <View>
                <Text>{planet.nome}</Text>
                <Text >{planet.populacao}</Text>
                <Text >{planet.loc}</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Descricao", { data: planet })}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há usuários cadastrados</Text>
      )}
    </View>
  );
}